import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { SIDE_CHAT_MESSAGES } from './messages.js';
import { SelectionQuote } from './SelectionQuote.js';
import { SendIcon } from './SendIcon.js';
import { SideChatBody } from './SideChatBody.js';
import { SideChatErrorState } from './SideChatErrorState.js';
import { IconNewChatOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives';
import { useAutoGrowingTextarea } from './use-auto-growing-textarea.js';
export function SideChatPanel({ state, locale = 'en', embeddedConversation, modelControl, onDraftChange, onFirstSend, onClose, onRetry, onAddToConversation, addToConversationDisabled, onRemoveSelection, }) {
    const messages = SIDE_CHAT_MESSAGES[locale];
    const [submitting, setSubmitting] = useState(false);
    const draftRef = useAutoGrowingTextarea(state.draft);
    const submit = async (event) => {
        event.preventDefault();
        if (submitting || ['creating', 'running', 'closing'].includes(state.phase))
            return;
        setSubmitting(true);
        try {
            await onFirstSend(state.draft);
        }
        finally {
            setSubmitting(false);
        }
    };
    return (_jsxs("aside", { className: "dsh-side-chat-panel", "data-side-chat-panel": "", "aria-label": messages.title, "aria-busy": ['creating', 'closing'].includes(state.phase) || undefined, onKeyDown: (event) => {
            if (event.key === 'Escape' && !event.defaultPrevented && !event.nativeEvent.isComposing) {
                event.preventDefault();
                event.stopPropagation();
                void onClose();
            }
        }, children: [state.messages.length > 0 && onAddToConversation && (_jsx("div", { className: "dsh-side-chat-toolbar", children: _jsx("button", { type: "button", disabled: addToConversationDisabled, onClick: onAddToConversation, children: messages.addToConversation }) })), state.messages.length === 0 && (_jsxs("div", { className: "dsh-side-chat-empty", children: [_jsx(IconNewChatOutlineRegular, { size: 32 }), _jsx("strong", { children: messages.title }), _jsx("span", { children: locale === 'zh-CN' ? '侧边聊天是临时聊天，关闭或刷新后会消失。' : 'Side chats are temporary and disappear when closed or reloaded.' })] })), state.error !== undefined && (_jsx(SideChatErrorState, { error: state.error, messages: messages, onRetry: () => { void onRetry(); } })), state.messages.length > 0 && embeddedConversation !== undefined
                ? _jsx(SideChatBody, { children: embeddedConversation })
                : (_jsxs("form", { className: "dsh-side-chat-draft", "data-composer-card": "", onSubmit: (event) => { void submit(event); }, children: [state.selection !== undefined && (_jsx(SelectionQuote, { selections: [state.selection], messages: messages, ...onRemoveSelection === undefined ? {} : { onRemove: onRemoveSelection } })), _jsx("label", { htmlFor: "dsh-side-chat-draft-input", children: messages.placeholder }), _jsx("textarea", { id: "dsh-side-chat-draft-input", ref: draftRef, autoFocus: true, rows: 1, value: state.draft, disabled: ['creating', 'running', 'closing'].includes(state.phase), placeholder: messages.placeholder, onChange: (event) => { onDraftChange(event.target.value); }, onKeyDown: (event) => {
                                if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing
                                    && event.keyCode !== 229) {
                                    event.preventDefault();
                                    event.currentTarget.form?.requestSubmit();
                                }
                            } }), _jsxs("div", { className: "dsh-side-chat-draft-actions", children: [modelControl, _jsx("button", { type: "submit", className: "dsh-side-chat-send-button", "aria-label": messages.send, disabled: submitting || ['creating', 'running', 'closing'].includes(state.phase) || state.draft.trim().length === 0, children: _jsx(SendIcon, {}) })] })] })), _jsx("div", { className: "dsh-side-chat-announcer", "aria-live": "polite", children: state.phase === 'running' ? 'Side Chat running' : `Side Chat ${state.phase}` })] }));
}
