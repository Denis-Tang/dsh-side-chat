import { createElement, useSyncExternalStore } from 'react';
import { IconNewChatOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives';
import sideChatCss from './panel/side-chat.css';
import { selectionReferenceSource } from './parent-composer/add-to-conversation.js';
import { mountParentConversationAnnotations } from './parent-composer/ParentConversationAnnotations.js';
import { sideChatConversationReferenceSource } from './parent-composer/referenced-conversation.js';
import { SideChatController } from './side-chat-controller.js';
import { mountSideChatRemote } from './dsh/remote-adapter.js';
import { SideChatOverlay, SideChatContent } from './dsh/SideChatOverlay.js';
import { DshSideChatSessions } from './dsh/sessions-adapter.js';
import { SessionId } from '../shared/contracts.js';
export function NewSideChatAction({ controller, sessions, parentSessionId, title }) {
    const state = useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
    return createElement('button', {
        type: 'button', className: 'dsh-side-chat-new',
        disabled: state.phase !== 'closed',
        onClick: () => {
            const result = controller.openDraft({ parentSessionId });
            if (!result.ok)
                sessions.notify({ kind: 'warning', text: result.error.message });
        },
    }, createElement(IconNewChatOutlineRegular, { size: 20 }), title);
}
export const name = 'side-chat-client';
export const inject = ['conversation', 'inputTriggers', 'modelDirectories', 'remote', 'sessions', 'slots', 'uiConversation', 'uiWorkspace', 'sidebarRightTabs', 'sidebarRight'];
export async function apply(ctx) {
    const cleanups = [];
    let disposed = false;
    let cleanupOperation;
    const cleanup = () => {
        disposed = true;
        cleanupOperation ??= (async () => {
            for (const dispose of cleanups.splice(0).reverse()) {
                try {
                    await dispose();
                }
                catch (error) {
                    console.warn('[dsh-side-chat] Cleanup failed', error);
                }
            }
        })();
        return cleanupOperation;
    };
    ctx.effect(() => cleanup, 'dsh-side-chat.clientLifecycle');
    try {
        const stylesheet = document.createElement('style');
        stylesheet.textContent = sideChatCss;
        stylesheet.dataset.plugin = 'dsh-side-chat';
        stylesheet.dataset['dshSideChat'] = 'styles';
        document.head.append(stylesheet);
        cleanups.push(() => { stylesheet.remove(); });
        const clientCtx = ctx;
        const mounted = await mountSideChatRemote(clientCtx);
        if (disposed) {
            await mounted.dispose();
            return;
        }
        cleanups.push(mounted.dispose);
        cleanups.push(clientCtx.inputTriggers.registerSource(selectionReferenceSource));
        cleanups.push(clientCtx.inputTriggers.registerSource(sideChatConversationReferenceSource));
        const sessions = new DshSideChatSessions(clientCtx);
        cleanups.push(mountParentConversationAnnotations(clientCtx, sessionId => { sessions.removeConversationAnnotations(sessionId); }));
        const controller = new SideChatController(mounted.remote, sessions);
        cleanups.push(() => controller.dispose());
        const sideChatTitle = () => navigator.language.toLowerCase().startsWith('zh') ? '新建侧边聊天' : 'New side chat';
        cleanups.push(ctx.sidebarRightTabs.register({
            id: '@ahggg/dsh-side-chat', kind: 'sidechat', keepMounted: true, title: () => navigator.language.toLowerCase().startsWith('zh') ? '侧边聊天' : 'Side chat',
            guide: [{ id: 'new', order: 350, title: sideChatTitle, icon: IconNewChatOutlineRegular }],
        }));
        cleanups.push(clientCtx.slots.inject('sidebar.right.tab.guide.entry', () => clientCtx.slots.register({
            name: 'sidebar.right.tab.guide.entry', key: '@ahggg/dsh-side-chat',
        }, ({ sessionId, title }) => createElement(NewSideChatAction, {
            controller, sessions, parentSessionId: SessionId(sessionId), title,
        }))));
        cleanups.push(ctx.sidebarRight.registerCloseHandler('sidechat', (sessionId) => {
            if (controller.getSnapshot().parentSessionId === SessionId(sessionId))
                void controller.close();
        }));
        let wasClosed = true;
        cleanups.push(controller.subscribe(() => {
            const closed = controller.getSnapshot().phase === 'closed';
            const opening = wasClosed && !closed;
            wasClosed = closed;
            if (opening)
                ctx.sidebarRight.openTab('sidechat');
        }));
        cleanups.push(ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
            name: 'sidebar.right.pane.tab', key: '@ahggg/dsh-side-chat',
        }, ({ sessionId, useTabInfo }) => {
            const tab = useTabInfo();
            const state = useSyncExternalStore(controller.subscribe, controller.getSnapshot, controller.getSnapshot);
            return state.parentSessionId === SessionId(sessionId)
                ? createElement(SideChatContent, { controller, sessions, onClose: () => tab.tab.actions.close() })
                : null;
        })));
        cleanups.push(clientCtx.slots.inject('shell.overlay', () => clientCtx.slots.register({
            name: 'shell.overlay', id: 'dsh-side-chat', order: 90,
        }, () => createElement(SideChatOverlay, { controller, sessions }))));
    }
    catch (error) {
        await cleanup();
        throw error;
    }
}
