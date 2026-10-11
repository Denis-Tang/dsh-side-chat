import type { SideChatController } from '../side-chat-controller.js';
import { DshSideChatSessions } from './sessions-adapter.js';
/** Selection toolbar and plugin-owned read-only discussion panel. */
export declare function SideChatOverlay({ controller, sessions, }: {
    readonly controller: SideChatController;
    readonly sessions: DshSideChatSessions;
}): import("react/jsx-runtime").JSX.Element;
/** Chat content rendered by the native sidebar tab. */
export declare function SideChatContent({ controller, sessions, onClose }: {
    controller: SideChatController;
    sessions: DshSideChatSessions;
    onClose?: () => void;
}): import("react/jsx-runtime").JSX.Element;
