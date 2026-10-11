import { useState, type FormEvent, type ReactNode } from 'react'
import type { SideChatState } from '../../shared/contracts.js'
import type { SideChatActionResult } from '../contracts.js'
import { SIDE_CHAT_MESSAGES } from './messages.js'
import { SelectionQuote } from './SelectionQuote.js'
import { SendIcon } from './SendIcon.js'
import { SideChatBody } from './SideChatBody.js'
import { SideChatErrorState } from './SideChatErrorState.js'
import { IconNewChatOutlineRegular } from '@deepseek-ai/dsh-client-ui-primitives'
import { useAutoGrowingTextarea } from './use-auto-growing-textarea.js'

export interface SideChatPanelProps {
  readonly state: SideChatState
  readonly locale?: 'en' | 'zh-CN'
  readonly embeddedConversation?: ReactNode
  readonly modelControl?: ReactNode
  readonly onDraftChange: (draft: string) => void
  readonly onFirstSend: (question: string) => Promise<SideChatActionResult<void>>
  readonly onClose: () => Promise<SideChatActionResult<void>>
  readonly onRetry: () => Promise<SideChatActionResult<unknown>>
  readonly onAddToConversation?: () => void
  readonly addToConversationDisabled?: boolean
  readonly onRemoveSelection?: () => void
}

export function SideChatPanel({
  state,
  locale = 'en',
  embeddedConversation,
  modelControl,
  onDraftChange,
  onFirstSend,
  onClose,
  onRetry,
  onAddToConversation,
  addToConversationDisabled,
  onRemoveSelection,
}: SideChatPanelProps) {
  const messages = SIDE_CHAT_MESSAGES[locale]
  const [submitting, setSubmitting] = useState(false)
  const draftRef = useAutoGrowingTextarea(state.draft)
  const submit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (submitting || ['creating', 'running', 'closing'].includes(state.phase)) return
    setSubmitting(true)
    try {
      await onFirstSend(state.draft)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <aside
      className="dsh-side-chat-panel"
      data-side-chat-panel=""
      aria-label={messages.title}
      aria-busy={['creating', 'closing'].includes(state.phase) || undefined}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && !event.defaultPrevented && !event.nativeEvent.isComposing) {
          event.preventDefault()
          event.stopPropagation()
          void onClose()
        }
      }}
    >
      {state.messages.length > 0 && onAddToConversation && (
        <div className="dsh-side-chat-toolbar">
          <button type="button" disabled={addToConversationDisabled} onClick={onAddToConversation}>
            {messages.addToConversation}
          </button>
        </div>
      )}
      {state.messages.length === 0 && (
        <div className="dsh-side-chat-empty">
          <IconNewChatOutlineRegular size={32} />
          <strong>{messages.title}</strong>
          <span>{locale === 'zh-CN' ? '侧边聊天是临时聊天，关闭或刷新后会消失。' : 'Side chats are temporary and disappear when closed or reloaded.'}</span>
        </div>
      )}

      {state.error !== undefined && (
        <SideChatErrorState error={state.error} messages={messages} onRetry={() => { void onRetry() }} />
      )}

      {state.messages.length > 0 && embeddedConversation !== undefined
        ? <SideChatBody>{embeddedConversation}</SideChatBody>
        : (
          <form
          className="dsh-side-chat-draft"
          data-composer-card=""
          onSubmit={(event) => { void submit(event) }}
        >
            {state.selection !== undefined && (
              <SelectionQuote
                selections={[state.selection]}
                messages={messages}
                {...onRemoveSelection === undefined ? {} : { onRemove: onRemoveSelection }}
              />
            )}
            <label htmlFor="dsh-side-chat-draft-input">{messages.placeholder}</label>
            <textarea
              id="dsh-side-chat-draft-input"
              ref={draftRef}
              autoFocus
              rows={1}
              value={state.draft}
              disabled={['creating', 'running', 'closing'].includes(state.phase)}
              placeholder={messages.placeholder}
              onChange={(event) => { onDraftChange(event.target.value) }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing
                  && event.keyCode !== 229) {
                  event.preventDefault()
                  event.currentTarget.form?.requestSubmit()
                }
              }}
            />
            <div className="dsh-side-chat-draft-actions">
              {modelControl}
              <button
                type="submit"
                className="dsh-side-chat-send-button"
                aria-label={messages.send}
                disabled={submitting || ['creating', 'running', 'closing'].includes(state.phase) || state.draft.trim().length === 0}
              >
                <SendIcon />
              </button>
            </div>
          </form>
        )}

      <div className="dsh-side-chat-announcer" aria-live="polite">
        {state.phase === 'running' ? 'Side Chat running' : `Side Chat ${state.phase}`}
      </div>
    </aside>
  )
}
