import type { Context } from '@deepseek-ai/cordis';
import { SideChatController } from './side-chat-controller.js';
import type { SideChatClientSessions } from './contracts.js';
import { SessionId } from '../shared/contracts.js';
export declare function NewSideChatAction({ controller, sessions, parentSessionId, title }: {
    controller: SideChatController;
    sessions: SideChatClientSessions;
    parentSessionId: SessionId;
    title: string;
}): import("react").DetailedReactHTMLElement<{
    type: string;
    className: string;
    disabled: boolean;
    onClick: () => void;
}, HTMLElement>;
export declare const name = "side-chat-client";
export declare const inject: string[];
export declare function apply(ctx: Context): Promise<void>;
