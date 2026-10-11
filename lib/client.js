window.__ModuleLoader__.load({id:`@ahggg/dsh-side-chat`,factory:e=>{var t={exports:{}},n=t.exports;Object.defineProperty(n,Symbol.toStringTag,{value:`Module`});let r=e("react"),i=e("@deepseek-ai/dsh-client-ui-primitives"),a=e("react/jsx-runtime");var o=`.dsh-side-chat-docked,
.dsh-side-chat-overlay,
.dsh-side-chat-parent-annotation-dock,
.dsh-side-chat-parent-user-message {
  /* Use DSH's semantic theme aliases in both light and dark mode. */
  --side-chat-border: var(--dsw-alias-border-l2, var(--dsw-border, #d8d8de));
  --side-chat-bg: var(--dsw-alias-bg-layer-2, var(--dsw-surface, #ffffff));
  --side-chat-muted: var(--dsw-alias-label-tertiary, var(--dsw-text-muted, #62636a));
  --side-chat-text: var(--dsw-alias-label-primary, var(--dsw-text, #19191d));
  --side-chat-accent: var(--dsw-alias-state-business-primary, #1473e6);
  --side-chat-accent-fill: var(--dsw-alias-button-info-fill, #4176e6);
  --side-chat-accent-hover: var(--dsw-alias-button-info-hover, #3467d6);
  --side-chat-accent-text: var(--dsw-alias-label-primary-foreground, #ffffff);
  color: var(--side-chat-text);
}

.dsh-side-chat-new {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  padding: 14px 20px;
  border: 0.5px solid var(--dsw-alias-border-l3);
  border-radius: var(--dsl-guide-entry-radius, 12px);
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}

.dsh-side-chat-new:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.dsh-side-chat-new:disabled {
  opacity: 0.5;
  cursor: default;
}

.dsh-side-chat-overlay {
  pointer-events: none;
}

.dsh-side-chat-overlay > * {
  pointer-events: auto;
}

.dsh-side-chat-docked, .dsh-side-chat-panel {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  color: var(--side-chat-text);
}
.dsh-side-chat-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  text-align: center;
  color: var(--side-chat-muted);
}
.dsh-side-chat-empty strong { font-size: 20px; color: var(--side-chat-text); }
.dsh-side-chat-empty span { font-size: 14px; line-height: 1.6; }
.dsh-side-chat-toolbar { display: flex; justify-content: flex-end; padding: 8px 12px; }
.dsh-side-chat-toolbar button { color: inherit; background: transparent; border: 0; cursor: pointer; }
.dsh-side-chat-toolbar button:disabled { opacity: .4; cursor: default; }

.dsh-side-chat-controls {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.dsh-side-chat-conversation {
  display: flex;
  height: 100%;
  min-height: 0;
  flex-direction: column;
  overflow: hidden;
}

.dsh-side-chat-transcript {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 18px 20px 24px;
  scrollbar-color: color-mix(in srgb, var(--side-chat-muted) 34%, transparent) transparent;
  scrollbar-width: thin;
}

.dsh-side-chat-message {
  max-width: 92%;
  padding: 10px 12px;
  border: 1px solid var(--side-chat-border);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-3, var(--dsw-surface-subtle, #f7f7f9));
}

.dsh-side-chat-message[data-role="user"] {
  align-self: end;
  background: var(--dsw-specific-bubble, var(--dsw-accent-soft, #eef4ff));
}

.dsh-side-chat-message[data-role="assistant"] {
  align-self: start;
  min-width: 0;
  max-width: 100%;
  border-color: transparent;
  background: transparent;
  overflow-wrap: anywhere;
}
.dsh-side-chat-message-role,
.dsh-side-chat-message-note { display: block; margin-bottom: 5px; color: var(--side-chat-muted); font-size: 12px; }
.dsh-side-chat-message-text { white-space: pre-wrap; overflow-wrap: anywhere; }
.dsh-side-chat-message pre,
.dsh-side-chat-turn-notice pre { overflow: auto; white-space: pre-wrap; overflow-wrap: anywhere; }
.dsh-side-chat-message[data-role="assistant"] :where(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
}
.dsh-side-chat-reasoning {
  display: flex;
  flex-direction: column;
}
.dsh-side-chat-reasoning-row {
  position: relative;
  overflow: hidden;
}
.dsh-side-chat-reasoning[data-state="running"] .dsh-side-chat-reasoning-row::after {
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 300px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    color-mix(in srgb, var(--dsw-alias-bg-base, #fff) 60%, transparent) 55%,
    transparent 100%
  );
  content: '';
  pointer-events: none;
  animation: dsh-side-chat-reasoning-sweep 2.6s ease-out infinite;
}
@keyframes dsh-side-chat-reasoning-sweep {
  0% { left: -300px; }
  90%, 100% { left: 100%; }
}
.dsh-side-chat-reasoning-leading { flex-shrink: 0; }
.dsh-side-chat-reasoning-chevron { color: var(--dsw-alias-label-secondary, var(--side-chat-muted)); }
.dsh-side-chat-reasoning-title { font-weight: 400; }
.dsh-side-chat-reasoning-separator {
  width: 2px;
  height: 2px;
  flex: none;
  margin: 0 8px;
  border-radius: 1px;
  background: var(--dsw-alias-label-caption, #a1a1aa);
}
.dsh-side-chat-reasoning-summary {
  min-width: 0;
  flex: auto;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 14px;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-reasoning-summary[data-follow-end] { text-overflow: clip; }
.dsh-side-chat-reasoning-body {
  padding: 4px 0 4px 22px;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 14px;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
}
.dsh-side-chat-reasoning-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.dsh-side-chat-tool-branch {
  min-width: 0;
  max-width: 100%;
  flex: 0 0 auto;
}
.dsh-side-chat-tool {
  display: flex;
  min-width: 0;
  max-width: 100%;
  flex: 0 0 auto;
  flex-direction: column;
  border-radius: 6px;
}
.dsh-side-chat-tool-row {
  position: relative;
  overflow: hidden;
}
.dsh-side-chat-tool[data-state="running"] .dsh-side-chat-tool-row::after,
.dsh-side-chat-tool[data-state="pending"] .dsh-side-chat-tool-row::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    color-mix(in srgb, var(--dsw-alias-bg-base, #fff) 60%, transparent) 55%,
    transparent 100%
  );
  content: '';
  pointer-events: none;
  animation: dsh-side-chat-tool-sweep 2.6s ease-out infinite;
}
@keyframes dsh-side-chat-tool-sweep {
  0% { left: -300px; }
  90%, 100% { left: 100%; }
}
.dsh-side-chat-tool-row:focus-visible {
  border-radius: 4px;
  outline: 2px solid color-mix(in srgb, var(--side-chat-accent) 42%, transparent);
  outline-offset: 1px;
}
.dsh-side-chat-tool-leading { flex-shrink: 0; }
.dsh-side-chat-tool-chevron { color: var(--dsw-alias-label-secondary, var(--side-chat-muted)); }
.dsh-side-chat-tool-title { font-weight: 400; }
.dsh-side-chat-tool-separator {
  width: 2px;
  height: 2px;
  flex: none;
  margin: 0 8px;
  border-radius: 1px;
  background: var(--dsw-alias-label-caption, #a1a1aa);
}
.dsh-side-chat-tool-summary {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 14px;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-tool-error-summary { color: var(--dsw-alias-state-error-primary, var(--dsw-danger, #b42318)); }
.dsh-side-chat-tool-body-wrap {
  display: flex;
  min-width: 0;
  flex-direction: column;
}
.dsh-side-chat-tool-code,
.dsh-side-chat-tool-diff,
.dsh-side-chat-tool-read,
.dsh-side-chat-tool-search,
.dsh-side-chat-tool-terminal,
.dsh-side-chat-tool-web {
  margin: 4px 0 4px 4px;
}
.dsh-side-chat-tool-code { --dsl-code-block-content-font: var(--dsw-font-markdown-code-block-small); }
.dsh-side-chat-tool-terminal {
  --dsl-terminal-font: var(--dsw-font-markdown-code-block-small);
  --dsl-terminal-line-height: 18px;
  --dsl-terminal-output-max-height: 224px;
  border: 1px solid var(--dsw-alias-border-l1, var(--side-chat-border));
}
.dsh-side-chat-tool-io-card {
  display: flex;
  flex-direction: column;
  margin: 4px 0 4px 4px;
  border: 1px solid var(--dsw-alias-border-l1, var(--side-chat-border));
  border-radius: 12px;
  background: var(--dsw-alias-markdown-code-block, #f6f6f7);
  font: var(--dsw-font-markdown-code-block-small, 12px/18px ui-monospace, SFMono-Regular, Consolas, monospace);
}
.dsh-side-chat-tool-io-section {
  display: grid;
  max-height: 150px;
  grid-template-columns: max-content minmax(0, 1fr);
  column-gap: 14px;
  align-items: baseline;
  overflow-y: auto;
  padding: 12px 16px;
}
.dsh-side-chat-tool-io-divider {
  height: 1px;
  flex: none;
  background: var(--dsw-alias-border-l2, var(--side-chat-border));
}
.dsh-side-chat-tool-io-label {
  position: sticky;
  top: 0;
  align-self: start;
  color: var(--dsw-alias-label-caption, #8d8d95);
}
.dsh-side-chat-tool-io-text {
  min-width: 0;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--dsw-alias-label-secondary, #4b4b52);
}
.dsh-side-chat-tool-io-text[data-error] { color: var(--dsw-alias-state-error-primary, var(--dsw-danger, #b42318)); }
.dsh-side-chat-tool-subcalls {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 4px 0 2px 22px;
  padding-left: 8px;
  border-left: 1px solid var(--dsw-alias-border-l2, var(--side-chat-border));
}
.dsh-side-chat-tool-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.dsh-side-chat-turn-notice,
.dsh-side-chat-interaction,
.dsh-side-chat-queue { padding: 10px; border: 1px solid var(--side-chat-border); border-radius: 10px; }
.dsh-side-chat-interaction fieldset { margin: 8px 0; border: 1px solid var(--side-chat-border); border-radius: 8px; }
.dsh-side-chat-question-option { display: flex; gap: 8px; margin: 8px 0; }
.dsh-side-chat-interaction textarea { width: 100%; box-sizing: border-box; resize: vertical; }
.dsh-side-chat-interaction-actions,
.dsh-side-chat-queue > div { display: flex; justify-content: end; gap: 8px; }
.dsh-side-chat-interaction button,
.dsh-side-chat-queue button { min-height: 32px; border: 1px solid var(--side-chat-border); border-radius: 7px; background: var(--dsw-alias-interactive-bg-hover-solid, var(--dsw-control, #f7f7f9)); color: inherit; cursor: pointer; }
.dsh-side-chat-composer {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 6px;
  align-items: end;
  margin: 0 12px 12px;
  padding: 8px 8px 8px 12px;
  border: 1px solid var(--side-chat-border);
  border-radius: 24px;
  background: var(--side-chat-bg);
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
}
.dsh-side-chat-composer textarea {
  grid-column: 1 / -1;
  width: 100%;
  height: auto;
  min-height: 24px;
  max-height: 160px;
  box-sizing: border-box;
  resize: none;
  overflow-y: hidden;
  padding: 6px;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1.5;
}
.dsh-side-chat-composer-actions,
.dsh-side-chat-draft-actions {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
}
.dsh-side-chat-model-root {
  position: relative;
  min-width: 0;
}
.dsh-side-chat-model-trigger {
  display: flex;
  width: auto;
  height: 28px;
  min-height: 28px;
  max-width: 220px;
  align-items: center;
  gap: 4px;
  padding: 0 4px 0 8px;
  border: 0;
  border-radius: 24px;
  outline: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary, var(--side-chat-muted));
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
}
.dsh-side-chat-model-trigger:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5));
}
.dsh-side-chat-model-trigger:focus-visible {
  box-shadow: 0 0 0 2px var(--dsw-alias-border-l3, var(--side-chat-border));
}
.dsh-side-chat-model-trigger:disabled {
  color: var(--dsw-alias-label-dimmed, #a1a1aa);
  cursor: default;
}
.dsh-side-chat-model-trigger-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-model-trigger-effort {
  flex: none;
  color: var(--dsw-alias-label-caption, #8d8d95);
}
.dsh-side-chat-model-chevron {
  flex: none;
  color: var(--dsw-alias-label-caption, #8d8d95);
  transition: transform 120ms ease;
}
.dsh-side-chat-model-chevron-open { transform: rotate(180deg); }
.dsh-side-chat-model-menu {
  position: absolute;
  z-index: 20;
  right: 0;
  bottom: calc(100% + 8px);
  display: flex;
  width: min(240px, calc(100vw - 32px));
  max-height: min(360px, calc(100dvh - 96px));
  flex-direction: column;
  overflow: hidden;
  padding: 4px;
  border: 1px solid var(--dsw-alias-border-inverted, var(--side-chat-border));
  border-radius: 12px;
  /* DSH's menu tint is translucent; keep transcript text out of this surface. */
  background: var(--side-chat-bg);
  box-shadow: var(--dsw-shadow-lv3, 0 8px 24px rgb(0 0 0 / 16%));
  color: var(--dsw-alias-label-primary, inherit);
  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2, #a1a1aa);
  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2, #71717a);
}
.dsh-side-chat-model-status,
.dsh-side-chat-model-empty {
  padding: 10px;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 13px;
  line-height: 20px;
}
.dsh-side-chat-model-error,
.dsh-side-chat-model-warning {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
  padding: 7px 8px;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover-danger, #fff1f0);
  color: var(--dsw-alias-state-error-primary, var(--dsw-danger, #b42318));
  font-size: 12px;
  line-height: 18px;
}
.dsh-side-chat-model-warning {
  background: var(--dsw-alias-bg-module-platform, #fff8e6);
  color: var(--dsw-alias-state-warn-label, #8a5a00);
}
.dsh-side-chat-model-retry {
  min-height: 0;
  flex: none;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}
.dsh-side-chat-model-groups {
  min-height: 0;
  overflow-y: auto;
}
.dsh-side-chat-model-group + .dsh-side-chat-model-group { margin-top: 4px; }
.dsh-side-chat-model-group-title {
  position: sticky;
  z-index: 1;
  top: 0;
  padding: 5px 8px 3px;
  background: var(--side-chat-bg);
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}
.dsh-side-chat-model-option {
  display: flex;
  width: 100%;
  min-height: 38px;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 0;
  border-radius: 10px;
  outline: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  text-align: left;
}
.dsh-side-chat-model-option:hover:not(:disabled),
.dsh-side-chat-model-option:focus-visible {
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5));
}
.dsh-side-chat-model-selected { background: transparent; }
.dsh-side-chat-model-option:disabled {
  color: var(--dsw-alias-label-dimmed, #a1a1aa);
  cursor: default;
}
.dsh-side-chat-model-option-copy {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
}
.dsh-side-chat-model-name {
  overflow: hidden;
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-model-description {
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-model-check {
  display: grid;
  flex: 0 0 18px;
  place-items: center;
  color: var(--dsw-alias-label-primary, inherit);
}
.dsh-side-chat-model-cell {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
}
.dsh-side-chat-model-cell:hover {
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5));
}
.dsh-side-chat-model-cell-label {
  min-width: 0;
  flex: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-model-cell-value {
  min-width: 0;
  flex: 0 auto;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-side-chat-model-cell-chevron {
  flex: none;
  color: var(--dsw-alias-label-tertiary, var(--side-chat-muted));
}
.dsh-side-chat-loading { display: grid; height: 100%; place-items: center; color: var(--side-chat-muted); }

.dsh-side-chat-inline-actions button,
.dsh-side-chat-error button,
.dsh-side-chat-selection-actions button {
  min-height: 32px;
  border: 1px solid var(--side-chat-border);
  border-radius: 7px;
  background: var(--dsw-alias-interactive-bg-hover-solid, var(--dsw-control, #f7f7f9));
  color: inherit;
  cursor: pointer;
}

.dsh-side-chat-quote { position: relative; max-width: 100%; align-self: flex-start; }
.dsh-side-chat-quote-chip {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--side-chat-border);
  border-radius: 999px;
  background: var(--side-chat-bg);
  transition: background-color 120ms ease;
}
.dsh-side-chat-quote:hover .dsh-side-chat-quote-chip,
.dsh-side-chat-quote:focus-within .dsh-side-chat-quote-chip,
.dsh-side-chat-quote[data-expanded] .dsh-side-chat-quote-chip { background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5)); }
.dsh-side-chat-quote-chip .dsh-side-chat-quote-trigger {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
}
.dsh-side-chat-quote-trigger strong { font-size: 13px; font-weight: 500; line-height: 1; }
.dsh-side-chat-quote-icon {
  width: 16px;
  height: 16px;
  flex: 0 0 auto;
  color: var(--side-chat-muted);
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}
.dsh-side-chat-quote-chip .dsh-side-chat-quote-remove {
  display: grid;
  width: 30px;
  height: 34px;
  min-height: 34px;
  box-sizing: border-box;
  flex: 0 0 auto;
  place-items: center;
  overflow: hidden;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--side-chat-muted);
  cursor: pointer;
  font: inherit;
  font-size: 18px;
  line-height: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 100ms ease, background-color 100ms ease;
}
.dsh-side-chat-quote:hover .dsh-side-chat-quote-remove,
.dsh-side-chat-quote:focus-within .dsh-side-chat-quote-remove {
  opacity: 1;
  pointer-events: auto;
}
.dsh-side-chat-quote-remove:hover { background: var(--dsw-alias-interactive-bg-hover, rgb(0 0 0 / 6%)); color: inherit; }
.dsh-side-chat-quote-details {
  position: absolute;
  z-index: 10;
  bottom: calc(100% + 8px);
  left: 0;
  width: min(520px, calc(100vw - 64px));
  max-width: calc(100vw - 48px);
  box-sizing: border-box;
  padding: 14px 16px;
  border: 1px solid var(--side-chat-border);
  border-radius: 16px;
  background: var(--side-chat-bg);
  box-shadow: 0 4px 14px rgb(0 0 0 / 8%);
  font-size: 14px;
  line-height: 1.45;
  opacity: 0;
  pointer-events: none;
  transform: translate(var(--dsh-side-chat-quote-offset-x, 0px), 4px);
  visibility: hidden;
  transition: opacity 100ms ease, transform 120ms ease, visibility 100ms ease;
}
.dsh-side-chat-quote-details::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: -8px;
  left: 0;
  height: 8px;
}
.dsh-side-chat-quote[data-hovered] .dsh-side-chat-quote-details,
.dsh-side-chat-quote[data-expanded] .dsh-side-chat-quote-details {
  opacity: 1;
  pointer-events: auto;
  transform: translate(var(--dsh-side-chat-quote-offset-x, 0px), 0);
  visibility: visible;
}
.dsh-side-chat-annotated-user-message .dsh-side-chat-quote-details {
  top: calc(100% + 8px);
  right: 0;
  bottom: auto;
  left: auto;
}
.dsh-side-chat-annotated-user-message .dsh-side-chat-quote-details::before {
  top: -8px;
  bottom: auto;
}
.dsh-side-chat-quote-details-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.dsh-side-chat-quote-details-header strong { color: var(--side-chat-muted); font-size: 13px; font-weight: 500; }
.dsh-side-chat-quote-detail + .dsh-side-chat-quote-detail {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--side-chat-border);
}
.dsh-side-chat-quote pre {
  max-height: 180px;
  margin: 4px 0 0;
  overflow: auto;
  white-space: pre-wrap;
  font: inherit;
}
.dsh-side-chat-quote-comment {
  margin-top: 9px;
}
.dsh-side-chat-quote-comment > strong { color: var(--side-chat-muted); font-size: 13px; font-weight: 500; }
.dsh-side-chat-quote-comment > pre { margin-top: 4px; }
.dsh-side-chat-error { margin: 10px 16px 0; padding: 10px 12px; border: 1px solid var(--side-chat-border); border-radius: 14px; background: var(--dsw-alias-interactive-bg-hover-danger, var(--dsw-surface-subtle, #f7f7f9)); }
.dsh-side-chat-error { border-color: var(--dsw-alias-state-error-primary, var(--dsw-danger, #b42318)); }
.dsh-side-chat-body { min-height: 0; flex: 1; overflow: hidden; }
.dsh-side-chat-annotated-user-message {
  display: flex;
  max-width: 92%;
  align-self: end;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
}
.dsh-side-chat-annotated-user-message .dsh-side-chat-message { max-width: 100%; align-self: stretch; }

/* The DSH occurrence remains the durable serialization carrier, while this
   plugin-owned capsule supplies the visible and interactive projection. */
[data-composer-seat] [data-composer-chip="dsh-side-chat-selection"] {
  display: inline-block;
  width: var(--dsh-side-chat-parent-annotation-width, auto);
  box-sizing: border-box;
  visibility: hidden;
}
.dsh-side-chat-parent-annotation-dock {
  position: relative;
  z-index: 20;
  width: calc(100% - 32px);
  max-width: var(--dsh-composer-card-max-width, 780px);
  height: 0;
  /* The terminal zero-height dock would otherwise add a second gap between
     Todo/Goal/Queue and the input card. Its child still lands 10px inside the
     following card: -gap + top:16px against the card's own 6px gap. */
  margin: calc(0px - var(--dsh-composer-stack-gap, 6px)) auto 0;
  pointer-events: none;
}
.dsh-side-chat-parent-annotation-dock > .dsh-side-chat-quote {
  position: absolute;
  top: var(--annotation-top, 16px);
  left: var(--annotation-left, 16px);
  pointer-events: auto;
}
.dsh-side-chat-parent-user-message {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
}
.dsh-side-chat-parent-user-message > .dsh-side-chat-quote { align-self: flex-end; }
/* DSH caps its inner user stack at 82%; give that percentage the full chat
   column as its containing width instead of the annotation chip's shrink width. */
.dsh-side-chat-parent-user-message-body { width: 100%; min-width: 0; }
.dsh-side-chat-parent-user-message > .dsh-side-chat-quote .dsh-side-chat-quote-details {
  right: 0;
  left: auto;
}
.dsh-side-chat-draft {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  min-height: 0;
  flex: 0 0 auto;
  gap: 6px;
  align-items: end;
  margin: auto 12px 12px;
  padding: 12px;
  border: 1px solid var(--side-chat-border);
  border-radius: 24px;
  background: var(--side-chat-bg);
  box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
}
.dsh-side-chat-draft > .dsh-side-chat-quote { grid-column: 1 / -1; }
.dsh-side-chat-draft label {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
.dsh-side-chat-draft textarea {
  grid-column: 1 / -1;
  width: 100%;
  height: auto;
  min-height: 24px;
  max-height: 160px;
  box-sizing: border-box;
  resize: none;
  overflow-y: hidden;
  padding: 6px 2px;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1.5;
}
.dsh-side-chat-panel .dsh-side-chat-send-button,
.dsh-side-chat-panel .dsh-side-chat-stop-button {
  display: grid;
  width: 34px;
  height: 34px;
  min-height: 34px;
  flex: none;
  place-items: center;
  padding: 1px 6px;
  border: 0;
  border-radius: 999px;
  background: var(--side-chat-accent-fill);
  color: var(--side-chat-accent-text);
  cursor: pointer;
  line-height: 1;
  transform: translateY(-2px);
  transition: background-color 100ms ease;
}
.dsh-side-chat-panel .dsh-side-chat-send-button:hover:not(:disabled),
.dsh-side-chat-panel .dsh-side-chat-stop-button:hover:not(:disabled) {
  background: var(--side-chat-accent-hover);
}
.dsh-side-chat-panel .dsh-side-chat-send-button:disabled,
.dsh-side-chat-panel .dsh-side-chat-stop-button:disabled { cursor: default; opacity: .4; }

.dsh-side-chat-announcer { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }

.dsh-side-chat-selection-actions {
  position: fixed;
  z-index: 90;
  display: flex;
  width: max-content;
  max-width: calc(100vw - 16px);
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 0;
  padding: 0;
  border: 1px solid var(--side-chat-border);
  border-radius: 999px;
  background: var(--dsw-alias-button-floating-fill, var(--side-chat-bg));
  box-shadow: 0 4px 14px rgb(0 0 0 / 12%);
  color: var(--side-chat-text);
  overflow: hidden;
}
.dsh-side-chat-selection-actions button {
  min-height: 36px;
  padding: 0 14px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: inherit;
  transition: background-color 120ms ease;
}
.dsh-side-chat-selection-actions button:hover:not(:disabled),
.dsh-side-chat-selection-actions button:focus-visible {
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5));
}
.dsh-side-chat-selection-actions button + button {
  border-left: 1px solid var(--side-chat-border);
  border-radius: 0;
}
.dsh-side-chat-selection-actions[data-touch] button {
  min-height: 42px;
  padding-inline: 14px;
  touch-action: manipulation;
  white-space: nowrap;
}

::highlight(dsh-side-chat-annotations) {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #1473e6) 18%, transparent);
}
::highlight(dsh-side-chat-active-annotation) {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #1473e6) 32%, transparent);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--dsw-alias-state-business-primary, #1473e6) 70%, transparent);
  text-decoration-thickness: 1px;
}

.dsh-side-chat-annotation-marker,
.dsh-side-chat-selection-marker {
  position: fixed;
  z-index: 91;
  display: grid;
  width: 22px;
  height: 22px;
  min-height: 22px;
  box-sizing: border-box;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--side-chat-accent-fill);
  box-shadow: 0 2px 6px rgb(0 0 0 / 14%);
  color: var(--side-chat-accent-text);
  font: inherit;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
}
.dsh-side-chat-annotation-marker { cursor: pointer; }
.dsh-side-chat-selection-marker { pointer-events: none; }
.dsh-side-chat-annotation-marker[data-large],
.dsh-side-chat-selection-marker[data-large] { font-size: 9px; }
.dsh-side-chat-annotation-marker[data-active] {
  background: var(--side-chat-accent-hover);
}
.dsh-side-chat-annotation-marker:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--side-chat-accent) 32%, transparent);
  outline-offset: 1px;
}

.dsh-side-chat-selection-comment {
  position: fixed;
  z-index: 92;
  display: grid;
  max-width: calc(100vw - 16px);
  box-sizing: border-box;
  gap: 10px;
  padding: 12px;
  border: 1px solid var(--side-chat-border);
  border-radius: 20px;
  background: var(--side-chat-bg);
  box-shadow: 0 5px 18px rgb(0 0 0 / 9%);
  color: var(--side-chat-text);
}
.dsh-side-chat-selection-comment textarea {
  width: 100%;
  min-height: 48px;
  max-height: 128px;
  box-sizing: border-box;
  resize: none;
  padding: 6px 8px;
  overflow-y: auto;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1.45;
}
.dsh-side-chat-selection-comment-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.dsh-side-chat-selection-comment-actions button {
  min-height: 32px;
  padding: 0 14px;
  border: 1px solid var(--side-chat-border);
  border-radius: 999px;
  background: var(--side-chat-bg);
  color: inherit;
  cursor: pointer;
  font: inherit;
}
.dsh-side-chat-selection-comment-actions button:hover { background: var(--dsw-alias-interactive-bg-hover, var(--dsw-surface-subtle, #f3f3f5)); }
.dsh-side-chat-selection-comment-actions .dsh-side-chat-selection-comment-save {
  border-color: transparent;
  background: var(--side-chat-accent-fill);
  color: var(--side-chat-accent-text);
}
.dsh-side-chat-selection-comment-actions .dsh-side-chat-selection-comment-save:hover {
  background: var(--side-chat-accent-hover);
}

@media (prefers-reduced-motion: reduce) {
  .dsh-side-chat-reasoning[data-state="running"] .dsh-side-chat-reasoning-row::after { animation: none; }
}

@media (forced-colors: active) {
.dsh-side-chat-panel,
.dsh-side-chat-selection-actions,
.dsh-side-chat-selection-comment,
.dsh-side-chat-annotation-marker { border: 1px solid CanvasText; }
}
`;function s(e,t,n){let{offset:r,length:i}=t;if(!(!Number.isSafeInteger(r)||!Number.isSafeInteger(i)||r<0||i<0||r+i>e.draft.length||t.label!==n||e.draft.slice(r,r+i)!==t.clipboardText))return{start:r,end:r+i}}function c(e,t,n){return s(e,t,n)!==void 0}function l(e,t,n,r={}){let i=s(t,n,n.label);if(i===void 0)return;let a=i.start;for(let e of t.occurrences)if(!(e.offset>=n.offset)){if(s(t,e,e.label)===void 0||e.offset+e.length>n.offset)return;a-=e.length-1}let o=a+1;return r.consumeFollowingSeparator&&t.draft[i.end]===` `&&(o+=1),{start:a,end:o,draftRev:t.draftRev}}function u(e,t,n,r){let i=new Set(e.occurrences.map(e=>e.occurrenceId)),a=t.occurrences.filter(e=>!i.has(e.occurrenceId)&&e.source===n&&e.ref===r);return a.length===1?a[0]:void 0}let d=`dsh-side-chat-selection`;function f(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function p(e){return e.replaceAll(`&lt;`,`<`).replaceAll(`&gt;`,`>`).replaceAll(`&amp;`,`&`)}function m(e){if(typeof e!=`object`||!e)return!1;let t=e;if(typeof t.parentSessionId!=`string`||typeof t.text!=`string`||!Number.isSafeInteger(t.atSeq)||!Array.isArray(t.fragments)||typeof t.rect!=`object`||t.rect===null)return!1;let n=t.rect;return[n.x,n.y,n.width,n.height,n.viewportWidth,n.viewportHeight].every(e=>typeof e==`number`&&Number.isFinite(e))?t.fragments.every(e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.nodeKey==`string`&&typeof t.nodeKind==`string`&&typeof t.turnKey==`string`&&Number.isSafeInteger(t.seq)&&Number.isSafeInteger(t.startOffset)&&Number.isSafeInteger(t.endOffset)&&typeof t.text==`string`&&[`user`,`assistant`,`context`,`code`].includes(t.source??``)&&typeof t.modelVisible==`boolean`&&typeof t.settled==`boolean`}):!1}function h(e){let t=JSON.parse(e);if(t===null||t.version!==2||!Array.isArray(t.annotations)||t.annotations.length===0||!t.annotations.every(e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.text==`string`&&m(t.selection)&&(t.comment===void 0||typeof t.comment==`string`)}))throw Error(`The selected conversation annotation is no longer valid.`);return t.annotations}function g(e){return{text:e.text,...e.comment===void 0?{}:{comment:e.comment}}}function _(e){return h(e).map(g)}function v(e){return e.occurrences.filter(e=>e.source===d)}function y(e){return v(e).flatMap(e=>{try{return[...h(e.ref)]}catch{return[]}})}function b(e){return y(e).map(g)}function x(e){return y(e).map((e,t)=>({...e,annotationIndex:t}))}function S(e,t,n){let r=v(t);if(r.length>1)return!1;let i=r[0],a=i===void 0?{start:0,end:0,draftRev:t.draftRev}:l(e,t,i);if(a===void 0)return!1;let o=JSON.stringify({version:2,annotations:n});if(!e.insertReference({source:`dsh-side-chat-selection`,ref:o,label:`__dsh_side_chat_annotations__`,clipboardText:n.map(e=>e.text).join(`

`)},a))return!1;let s=e.state.getSnapshot(),f=u(t,s,d,o);return f!==void 0&&v(s).length===1&&c(s,f,`__dsh_side_chat_annotations__`)}function C(e,t,n){let r=e.state.getSnapshot(),i=n?.trim();return S(e,r,[...y(r),{text:t.text,selection:t,...i?{comment:i}:{}}])}function w(e){let t=v(e.state.getSnapshot());if(t.length===0)return!1;for(let n of t.map(e=>e.occurrenceId).reverse()){let t=e.state.getSnapshot(),r=t.occurrences.find(e=>e.occurrenceId===n);if(r===void 0)continue;let i=l(e,t,r);if(i===void 0||!e.replaceText(``,i))return!1}return v(e.state.getSnapshot()).length===0}function ee(e,t){let n=e.state.getSnapshot(),r=[...y(n)];return!Number.isSafeInteger(t)||r[t]===void 0?!1:(r.splice(t,1),r.length===0?w(e):S(e,n,r))}function te(e,t,n){let r=e.state.getSnapshot(),i=[...y(r)],a=i[t];if(!Number.isSafeInteger(t)||a===void 0)return!1;let o=n?.trim();return i[t]={text:a.text,selection:a.selection,...o?{comment:o}:{}},S(e,r,i)}function T(e){return[`<selected_context>`,...e.flatMap((e,t)=>[`<annotation index="${String(t+1)}">`,`<selected_text>`,f(e.text),`</selected_text>`,...e.comment===void 0?[]:[`<user_comment>`,f(e.comment),`</user_comment>`],`</annotation>`]),`</selected_context>`].join(`
`)}let ne={trigger:`@`,name:d,order:1e3,candidates:async()=>[],onPick:()=>void 0,codec:{clipboardText:e=>_(e).map(e=>e.text).join(`

`),serialize:async(e,t)=>{if(t.aborted)throw t.reason;return T(_(e))}}};function re(e){let t=/^\s*<selected_context(?: source="current-conversation" event-seq="\d+")?>\r?\n([\s\S]*?)\r?\n<\/selected_context>\s*/u.exec(e);if(t===null)return;let n=[];if(t[0].trimStart().startsWith(`<selected_context source=`))n.push({text:p(t[1]??``)});else for(let e of t[1]?.matchAll(/<annotation(?: index="\d+")?>\r?\n([\s\S]*?)\r?\n<\/annotation>/gu)??[]){let t=e[1]??``,r=/^<selected_text>\r?\n([\s\S]*?)\r?\n<\/selected_text>(?:\r?\n<user_comment>\r?\n([\s\S]*?)\r?\n<\/user_comment>)?$/u.exec(t);n.push({text:p(r?.[1]??t),...r?.[2]===void 0?{}:{comment:p(r[2])}})}return n.length===0?void 0:{annotations:n,message:e.slice(t[0].length).trim()}}function E(e,t){let n=t.trim();return[{type:`text`,text:e===void 0?n:[T([{text:e.text}]),``,`<user_question>`,f(n),`</user_question>`].join(`
`)}]}function ie(e){let t=/^<user_question>(?:\r?\n)?([\s\S]*?)(?:\r?\n)?<\/user_question>(?=$|\s)/u.exec(e);return t===null?e:[p((t[1]??``).trim()),e.slice(t[0].length).trim()].filter(e=>e.length>0).join(`
`)}function D(e){return e}let O=Object.freeze({en:Object.freeze({title:`Side Chat`,addToConversation:`Add to conversation`,placeholder:`Ask about the main conversation`,send:`Send`,selectedPassage:`Selected passage`,selectionAttachments:e=>`${String(e)} ${e===1?`annotation`:`annotations`}`,selectionPreviewLabel:`Selected text`,selectionCommentLabel:`User comment`,removeSelection:`Remove annotation`,expand:`Expand`,collapse:`Collapse`,retry:`Retry`,genericError:`Side Chat error`,closeError:`Could not close the Side Chat`}),"zh-CN":Object.freeze({title:`侧边聊天`,addToConversation:`添加到主对话`,placeholder:`围绕主聊天提问或讨论`,send:`发送`,selectedPassage:`所选段落`,selectionAttachments:e=>`${String(e)} 条引用`,selectionPreviewLabel:`所选文本`,selectionCommentLabel:`用户批注`,removeSelection:`移除引用`,expand:`展开`,collapse:`收起`,retry:`重试`,genericError:`侧边聊天错误`,closeError:`无法关闭侧边聊天`})});function k({selections:e,messages:t,onRemove:n}){let[i,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),l=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(),f=()=>{d.current!==void 0&&window.clearTimeout(d.current),d.current=void 0,c(!0)},p=()=>{d.current!==void 0&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{d.current=void 0,c(!1)},220)};(0,r.useEffect)(()=>()=>{d.current!==void 0&&window.clearTimeout(d.current)},[]),(0,r.useEffect)(()=>{if(!i)return;let e=e=>{let t=l.current,n=e.target;t!==null&&n instanceof Node&&t.contains(n)||(d.current!==void 0&&window.clearTimeout(d.current),d.current=void 0,c(!1),o(!1))};return document.addEventListener(`mousedown`,e,!0),()=>{document.removeEventListener(`mousedown`,e,!0)}},[i]);let m=()=>{let e=u.current,t=l.current?.closest(`.dsh-side-chat-panel, [data-composer-seat], [data-chat-flow-kind]`);if(e===null)return;e.style.setProperty(`--dsh-side-chat-quote-offset-x`,`0px`);let n=e.getBoundingClientRect(),r=t?.getBoundingClientRect(),i=(r?.left??0)+16,a=(r?.right??window.innerWidth)-16,o=n.left<i?i-n.left:n.right>a?a-n.right:0;e.style.setProperty(`--dsh-side-chat-quote-offset-x`,`${String(o)}px`)};return/* @__PURE__ */ (0,a.jsxs)(`section`,{ref:l,className:`dsh-side-chat-quote`,"aria-label":t.selectedPassage,"data-expanded":i||void 0,"data-hovered":s||void 0,onMouseEnter:()=>{f(),m()},onMouseLeave:p,onFocusCapture:m,onKeyDown:e=>{e.key===`Escape`&&(i||s)&&(e.preventDefault(),e.stopPropagation(),o(!1),c(!1))},children:[/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-quote-chip`,children:[/* @__PURE__ */ (0,a.jsxs)(`button`,{type:`button`,className:`dsh-side-chat-quote-trigger`,"aria-expanded":i,"aria-label":`${i?t.collapse:t.expand}: ${t.selectedPassage}`,onClick:()=>{i&&(d.current!==void 0&&window.clearTimeout(d.current),d.current=void 0,c(!1)),o(e=>!e)},children:[/* @__PURE__ */ (0,a.jsxs)(`svg`,{className:`dsh-side-chat-quote-icon`,viewBox:`0 0 24 24`,"aria-hidden":`true`,children:[/* @__PURE__ */ (0,a.jsx)(`path`,{d:`M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z`}),/* @__PURE__ */ (0,a.jsx)(`path`,{d:`M8 8h8M8 12h5`})]}),/* @__PURE__ */ (0,a.jsx)(`strong`,{children:t.selectionAttachments(e.length)})]}),n!==void 0&&/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:`dsh-side-chat-quote-remove`,"aria-label":t.removeSelection,onClick:n,children:`×`})]}),/* @__PURE__ */ (0,a.jsx)(`div`,{ref:u,className:`dsh-side-chat-quote-details`,role:`tooltip`,children:e.map((e,n)=>/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-quote-detail`,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-quote-details-header`,children:/* @__PURE__ */ (0,a.jsxs)(`strong`,{children:[String(n+1),`. `,t.selectionPreviewLabel,`:`]})}),/* @__PURE__ */ (0,a.jsx)(`pre`,{children:e.text}),e.comment!==void 0&&/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-quote-comment`,children:[/* @__PURE__ */ (0,a.jsxs)(`strong`,{children:[t.selectionCommentLabel,`:`]}),/* @__PURE__ */ (0,a.jsx)(`pre`,{children:e.comment})]})]},`${String(n)}-${e.text}`))})]})}let ae=`<referenced_conversation>`,A=`</referenced_conversation>`;function oe(e){let t=e.trim().replace(/\s+/gu,` `);return t.length===0?`Side Chat`:t}function se(e){let t=e.messages.flatMap(e=>{if(e.status===`streaming`||e.text.trim().length===0)return[];let t=e.selectedText===void 0?e.text:`Selected passage:\n${e.selectedText}\n\nQuestion:\n${e.text}`;return[{role:e.role,content:t}]});return{version:1,conversationId:e.conversationId,title:oe(e.title),conversation:t}}function ce(e){if(typeof e!=`object`||!e)return!1;let t=e;return(t.role===`user`||t.role===`assistant`)&&typeof t.content==`string`&&t.content.length>0}function j(e){let t=JSON.parse(e);if(typeof t!=`object`||!t)throw Error(`The referenced Side Chat conversation is no longer valid.`);let n=t;if(n.version!==1||typeof n.conversationId!=`string`||n.conversationId.length===0||typeof n.title!=`string`||n.title.length===0||!Array.isArray(n.conversation)||n.conversation.length===0||!n.conversation.every(ce))throw Error(`The referenced Side Chat conversation is no longer valid.`);return{version:1,conversationId:n.conversationId,title:n.title,conversation:n.conversation}}function le(e){return JSON.stringify(e)}function ue(e){return JSON.stringify(e).replaceAll(`<`,`\\u003c`)}function de(e){return[ae,ue({conversationId:e.conversationId,title:e.title,conversation:e.conversation}),A].join(`
`)}function fe(e){let t=`${ae}\n`;if(!e.startsWith(t))return;let n=`\n${A}`,r=e.indexOf(n,t.length);if(r<0)return;let i=e.slice(t.length,r);if(i.length!==0)try{let t=JSON.parse(i);return{reference:j(JSON.stringify({version:1,conversationId:t.conversationId,title:t.title,conversation:t.conversation})),message:e.slice(r+n.length).trim()}}catch{return}}function pe(e,t){return e.occurrences.filter(e=>{if(e.source!==`dsh-side-chat-conversation`)return!1;try{return j(e.ref).conversationId===t.conversationId}catch{return!1}})}function me(e,t){let n=e.state.getSnapshot(),r=n.occurrences.find(e=>e.occurrenceId===t);if(r===void 0)return;let i=l(e,n,r);i!==void 0&&e.replaceText(``,i)}function he(e,t){if(t.conversation.length===0)return!1;let n=e.state.getSnapshot(),r=pe(n,t),i=le(t);if(r.some(e=>e.ref===i))return!0;let a=r[0],o=a===void 0?{start:0,end:0,draftRev:n.draftRev}:l(e,n,a);if(o===void 0||!e.insertReference({source:`dsh-side-chat-conversation`,ref:i,label:t.title,appearance:`session`,clipboardText:`@${t.title}`},o)||u(n,e.state.getSnapshot(),`dsh-side-chat-conversation`,i)===void 0)return!1;for(let t of r.slice(1))me(e,t.occurrenceId);return pe(e.state.getSnapshot(),t).length===1}let ge={trigger:`@`,name:`dsh-side-chat-conversation`,order:1001,candidates:async()=>[],onPick:()=>void 0,codec:{clipboardText:e=>`@${j(e).title}`,serialize:async(e,t)=>{if(t.aborted)throw t.reason;return de(j(e))}}};function _e(){return navigator.language.toLowerCase().startsWith(`zh`)?`zh-CN`:`en`}let ve=`--dsh-side-chat-parent-annotation-width`;function ye({input:e,onRemove:t,locale:n=_e()}){let i=b(e),o=(0,r.useRef)(null);return(0,r.useLayoutEffect)(()=>{let e=o.current,t=e?.closest(`[data-composer-seat]`),n=e?.querySelector(`.dsh-side-chat-quote-chip`);if(e===null||t===void 0||n===void 0||t===null||n===null)return;let r=()=>{let r=n.getBoundingClientRect().width;r>0&&t.style.setProperty(ve,`${String(r)}px`);let i=t.querySelector(`[data-composer-chip="dsh-side-chat-selection"]`);if(i===null)return;let a=i.getBoundingClientRect(),o=e.getBoundingClientRect();Number.isFinite(a.left)&&Number.isFinite(o.left)&&(e.style.setProperty(`--annotation-left`,`${a.left-o.left}px`),e.style.setProperty(`--annotation-top`,`${a.top-o.top}px`))},i,a=()=>{i===void 0&&(i=window.requestAnimationFrame(()=>{i=void 0,r()}))};r();let s=typeof ResizeObserver>`u`?void 0:new ResizeObserver(a);s?.observe(n),s?.observe(t);let c=new MutationObserver(a);return c.observe(t,{childList:!0,characterData:!0,subtree:!0}),t.addEventListener(`scroll`,a,!0),window.addEventListener(`resize`,a),()=>{i!==void 0&&window.cancelAnimationFrame(i),s?.disconnect(),c.disconnect(),t.removeEventListener(`scroll`,a,!0),window.removeEventListener(`resize`,a),t.style.removeProperty(ve)}},[e,n]),i.length===0?null:/* @__PURE__ */ (0,a.jsx)(`div`,{ref:o,className:`dsh-side-chat-parent-annotation-dock`,children:/* @__PURE__ */ (0,a.jsx)(k,{selections:i,messages:O[n],onRemove:t})})}function be(e){return e.map(e=>{if(typeof e!=`object`||!e)return``;let t=e;return t.type===`text`&&typeof t.text==`string`?t.text:``}).join(``)}function xe(e,t){let n=!1,r=e.flatMap(e=>{if(typeof e!=`object`||!e)return[e];let r=e;return r.type!==`text`||typeof r.text!=`string`?[e]:n?[]:(n=!0,[{...r,text:t}])});return n?r:[{type:`text`,text:t},...r]}function Se(e){let t=e,n,r=[];for(;t.length>0;){let e=n===void 0?re(t):void 0;if(e!==void 0){n=e.annotations,t=e.message;continue}let i=fe(t);if(i!==void 0){r.push(i.reference),t=i.message;continue}break}if(n!==void 0||r.length!==0)return{...n===void 0?{}:{annotations:n},references:r,message:t}}function Ce(e){return function(t){let n=Se(be(t.node.data.content));if(n===void 0)return(0,r.createElement)(e,t);let i=n.annotations===void 0?n.message:ie(n.message),o=[...n.references.map(e=>`@${e.title}`),i].filter(e=>e.length>0).join(`

`),s=t.node.data.referenceLabels??[],c={...t.node,data:{...t.node.data,content:xe(t.node.data.content,o),referenceLabels:[.../* @__PURE__ */ new Set([...n.references.map(e=>e.title),...s])]}},l=(0,r.createElement)(e,{...t,node:c});return n.annotations===void 0?l:/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-parent-user-message`,children:[/* @__PURE__ */ (0,a.jsx)(k,{selections:n.annotations,messages:O[_e()]}),/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-parent-user-message-body`,children:l})]})}}function we(e,t){let n=e.slots,i=n.inject(`conversation.input.dock`,()=>n.register({name:`conversation.input.dock`,id:`dsh-side-chat-annotations`,order:30},({input:e,session:n})=>/* @__PURE__ */ (0,a.jsx)(ye,{input:e,onRemove:()=>t(D(n.sessionId))}))),o=e=>n.inject(`conversation.chat.node`,()=>{let t,i,a=o=>{let s=n.entries(`conversation.chat.node`).find(t=>t.options.key===e&&t.component!==a&&(t.options.priority??0)>=0)?.component;return s===void 0?null:((s!==t||i===void 0)&&(t=s,i=Ce(t)),(0,r.createElement)(i,o))};return n.register({name:`conversation.chat.node`,key:e,priority:-100,locale:`conversation`},a)}),s=o(`user`),c=o(`steering`);return()=>{c(),s(),i()}}var Te=class{value;label;listeners=/* @__PURE__ */ new Set;disposed=!1;constructor(e,t){this.value=e,this.label=t}getSnapshot=()=>this.value;subscribe=e=>this.disposed?()=>{}:(this.listeners.add(e),()=>{this.listeners.delete(e)});publish(e){if(!this.disposed){this.value=e;for(let e of this.listeners)try{e()}catch(e){console.error(`[${this.label}] subscriber threw`,e)}}}dispose(){this.disposed=!0,this.listeners.clear()}};function Ee(e){return new TextEncoder().encode(e).byteLength}function De(e){return Ee(e)<=16384}function Oe(e,t=240){let n=[...e];if(n.length<=t)return e;let r=Math.ceil(t*.65),i=t-r;return`${n.slice(0,r).join(``)}…${n.slice(-i).join(``)}`}var M=class extends Error{code;constructor(e,t){super(t),this.code=e,this.name=`SelectionValidationError`}};function ke(e){return e.replace(/\r\n?/gu,`
`).replace(/\n(?:[\t ]*\n){3,}/gu,`


`).trim()}function Ae(e){let t=e.fragments[0];if(t===void 0)throw new M(`selection_empty`,`Select some conversation text first.`);if(e.fragments.length!==1)throw new M(`selection_crosses_unsupported_nodes`,`Select text inside one completed message.`);let n=ke(e.rawText);if(n.length===0)throw new M(`selection_empty`,`The selection contains only whitespace.`);if(Ee(n)>16384)throw new M(`selection_too_large`,`The selected text is too large.`);if(!t.modelVisible||!t.settled)throw new M(`context_unavailable`,`Wait for this message to finish before opening Side Chat.`);if(!Number.isSafeInteger(t.seq)||t.seq<0)throw new M(`selection_stale`,`The selected message is no longer available.`);return Object.freeze({parentSessionId:e.parentSessionId,fragments:Object.freeze([{...t}]),text:n,atSeq:t.seq,rect:Object.freeze({...e.rect})})}function je(e,t){if(t!==e.parentSessionId)throw new M(`selection_stale`,`The parent conversation changed after selection.`)}let Me=Object.freeze({phase:`closed`,draft:``,messages:[]}),N=e=>({ok:!0,value:e}),P=e=>({ok:!1,error:e});function F(e,t=`invalid_request`,n=!1){return{code:t,message:e,recoverable:n}}var Ne=class{remote;sessions;observable=new Te(Me,`dsh-side-chat`);generation=0;modelGeneration=0;requestSequence=0;disposed=!1;releaseParent;creating;closing;running;cancelling=!1;pendingRequest;constructor(e,t){this.remote=e,this.sessions=t}getSnapshot=()=>this.observable.getSnapshot();subscribe=e=>this.observable.subscribe(e);openDraft(e={}){if(this.disposed)return P(F(`Side Chat has been disposed.`));if(this.getSnapshot().phase!==`closed`)return P(F(`Close the current Side Chat first.`,`side_chat_already_open`));let t=e.parentSessionId??this.sessions.currentSessionId();if(t===void 0)return P(F(`Start the main conversation first.`,`parent_session_missing`));let n=e.selection?.atSeq??this.sessions.lastCompletedSeq(t);if(n===void 0)return P(F(`Wait for a completed parent turn.`,`parent_session_not_ready`,!0));try{e.selection!==void 0&&je(e.selection,t),this.releaseParent=this.sessions.retainParent(t)}catch(e){return P(F(e instanceof Error?e.message:`The parent conversation is unavailable.`,`selection_stale`))}return++this.generation,this.observable.publish({phase:`draft`,parentSessionId:t,boundarySeq:n,selection:e.selection,modelSelection:this.sessions.sideChatModelPreference(),draft:e.draft??``,messages:[]}),N(void 0)}setDraft(e){let t=this.getSnapshot();return![`draft`,`error`,`ready`].includes(t.phase)||t.messages.length>0||t.error?.operation===`close`?P(F(`The draft is not editable right now.`)):(this.observable.publish({...t,draft:e}),N(void 0))}clearSelection(){let e=this.getSnapshot();return e.chatId!==void 0||![`draft`,`error`].includes(e.phase)?P(F(`The selected context is already captured.`)):(this.observable.publish({...e,selection:void 0}),N(void 0))}initializeModel(e){let t=this.getSnapshot();return t.chatId!==void 0||![`draft`,`error`].includes(t.phase)?P(F(`The model cannot be initialized now.`)):(this.observable.publish({...t,modelSelection:{...e}}),N({...e}))}async selectModel(e){let t=this.getSnapshot();if(this.cancelling||![`draft`,`error`,`ready`,`running`].includes(t.phase)||t.error?.operation===`close`)return P(F(`The model cannot be changed while Side Chat is opening, stopping, or closing.`));if(t.chatId===void 0){let t=this.initializeModel(e);return t.ok&&this.sessions.rememberSideChatModelPreference(t.value),t}let n=this.generation,r=++this.modelGeneration,i=await this.invoke(()=>this.remote.selectModel({chatId:t.chatId,...e}));return i.ok?(n===this.generation&&r===this.modelGeneration&&(this.observable.publish({...this.getSnapshot(),modelSelection:i.value.selected}),this.sessions.rememberSideChatModelPreference(i.value.selected)),N(i.value.selected)):i}async sendFirst(e){let t=this.getSnapshot(),n=e.trim();if(n.length===0||t.parentSessionId===void 0||t.messages.length>0||![`draft`,`error`,`ready`].includes(t.phase)||t.error?.operation===`close`)return P(F(`Enter a question in an open Side Chat draft.`));if(t.chatId===void 0){if(t.selection!==void 0&&!this.sessions.selectionIsCurrent(t.selection))return this.fail(F(`Select the passage again before sending.`,`selection_stale`),`create`);let e=this.generation;this.observable.publish({...t,phase:`creating`,draft:n,error:void 0});let r=this.invoke(()=>this.remote.create({parentSessionId:t.parentSessionId,atSeq:t.boundarySeq,selectedText:t.selection?.text,modelSelection:t.modelSelection}));this.creating=r;let i=await r;if(this.creating===r&&(this.creating=void 0),e!==this.generation)return P(F(`The Side Chat was closed.`));if(!i.ok)return this.fail(i.error,`create`);this.observable.publish({...this.getSnapshot(),phase:`ready`,chatId:i.value.chatId,boundarySeq:i.value.boundarySeq,modelSelection:i.value.modelSelection,error:void 0}),this.sessions.rememberSideChatModelPreference(i.value.modelSelection)}return await this.send(n)}async send(e){let t=this.getSnapshot(),n=e.trim();if(n.length===0||t.chatId===void 0||this.running!==void 0||this.cancelling||![`ready`,`error`].includes(t.phase)||t.error?.operation===`close`)return P(F(`Wait for the current reply or stop it before sending.`));let r=this.pendingRequest?.chatId===t.chatId&&this.pendingRequest.text===n?this.pendingRequest:{chatId:t.chatId,requestId:`${t.chatId}:${++this.requestSequence}`,text:n};this.pendingRequest=r;let i;try{i=this.remote.stream(r)}catch(e){return this.fail(F(String(e),`transport_error`,!0),`prompt`)}let a={stream:i,generation:this.generation,request:r,cancelled:!1};return this.running=a,this.observable.publish({...t,phase:t.messages.length===0?`creating`:`running`,error:void 0}),await new Promise(e=>{a.done=this.consume(a,e)})}async cancel(){let e=this.getSnapshot().chatId;if(e===void 0||this.running===void 0)return N(void 0);this.cancelling=!0;let t=this.running;t.cancelled=!0,this.disposeStream(t.stream);try{let n=await this.invoke(()=>this.remote.cancel({chatId:e}));return await t.done,n.ok?N(void 0):n}finally{this.cancelling=!1}}async retry(){let e=this.getSnapshot();return e.error?.operation===`close`?await this.close():e.messages.length===0?await this.sendFirst(e.draft):this.pendingRequest===void 0?P(F(`An admitted question is never replayed automatically. Send a follow-up to continue.`)):await this.send(this.pendingRequest.text)}async close(){if(this.closing!==void 0)return await this.closing;if(this.getSnapshot().phase===`closed`)return N(void 0);let e=this.closeCurrent();this.closing=e;try{return await e}finally{this.closing===e&&(this.closing=void 0)}}async dispose(){if(!this.disposed){this.disposed=!0;try{let e=await this.close();e.ok||this.sessions.notify({kind:`warning`,text:e.error.message})}finally{this.running!==void 0&&this.disposeStream(this.running.stream),this.releaseParent?.(),this.releaseParent=void 0,this.observable.dispose()}}}async consume(e,t){let n=!1,r=!1,i=()=>e.generation===this.generation&&this.running===e,a=`${e.request.requestId}:assistant`;try{for await(let o of e.stream){if(!i())break;let s=this.getSnapshot();if(o.type===`started`){if(n||o.requestId!==e.request.requestId)throw Error(`Invalid Side Chat admission response.`);n=!0,this.pendingRequest=void 0,this.observable.publish({...s,phase:`running`,draft:``,messages:[...s.messages,{id:`${e.request.requestId}:user`,role:`user`,text:e.request.text,status:`complete`,selectedText:s.messages.length===0?s.selection?.text:void 0},{id:a,role:`assistant`,text:``,reasoning:``,status:`streaming`}],error:void 0}),t(N(void 0))}else if(o.type===`content`){if(!n)throw Error(`Side Chat content arrived before admission.`);this.observable.publish({...s,messages:s.messages.map(e=>e.id===a?{...e,text:o.text,reasoning:o.reasoning}:e)})}else if(o.type===`finished`){if(!n)throw Error(`Side Chat ended before admission.`);r=!0,this.observable.publish({...s,phase:`ready`,messages:s.messages.map(e=>e.id===a?{...e,status:o.status}:e)});break}else{r=!0;let e={...o.error,recoverable:!n&&o.error.recoverable};this.streamFailure(e,a),t(P(e));break}}if(i()&&!r&&!e.cancelled)throw Error(`The Side Chat connection ended before the reply completed.`)}catch(r){if(i()&&!e.cancelled){let e=F(r instanceof Error?r.message:String(r),`transport_error`,!n);this.streamFailure(e,a),t(P(e))}}finally{if(i()&&e.cancelled){this.pendingRequest=void 0;let e=this.getSnapshot();this.observable.publish({...e,phase:`ready`,error:void 0,messages:e.messages.map(e=>e.id===a?{...e,status:`stopped`}:e)})}this.disposeStream(e.stream),this.running===e&&(this.running=void 0),t(P(F(`The Side Chat was closed.`)))}}streamFailure(e,t){let n=this.getSnapshot();this.observable.publish({...n,phase:n.messages.length===0?`error`:`ready`,messages:n.messages.map(e=>e.id===t?{...e,status:`error`}:e),error:{...e,operation:`prompt`}})}async closeCurrent(){let e=this.getSnapshot(),t=this.creating;++this.generation,this.running!==void 0&&this.disposeStream(this.running.stream),this.running=void 0,this.observable.publish({...e,phase:`closing`,error:void 0});let n=e.chatId;if(t!==void 0){let e=await t;e.ok&&(n=e.value.chatId)}if(n!==void 0){let e=await this.invoke(()=>this.remote.close({chatId:n}));if(!e.ok&&e.error.code!==`side_chat_not_found`)return this.observable.publish({...this.getSnapshot(),phase:`error`,chatId:n,error:{...e.error,operation:`close`}}),e}return this.pendingRequest=void 0,this.releaseParent?.(),this.releaseParent=void 0,this.observable.publish(Me),N(void 0)}fail(e,t){return this.observable.publish({...this.getSnapshot(),phase:`error`,error:{...e,operation:t}}),P(e)}disposeStream(e){try{e.dispose()}catch{}}async invoke(e){try{return await e()}catch(e){return P(F(e instanceof Error?e.message:String(e),`transport_error`,!0))}}},Pe;function I(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:/* @__PURE__ */ new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var Fe=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Ie=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name=`ZodEncodeError`}};(Pe=globalThis).__zod_globalConfig??(Pe.__zod_globalConfig={});let Le=globalThis.__zod_globalConfig;function L(e){return e&&Object.assign(Le,e),Le}function Re(e){let t=Object.values(e).filter(e=>typeof e==`number`);return Object.entries(e).filter(([e,n])=>t.indexOf(+e)===-1).map(([e,t])=>t)}function ze(e,t){return typeof t==`bigint`?t.toString():t}function Be(e){return{get value(){{let t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function Ve(e){return e==null}function He(e){let t=+!!e.startsWith(`^`),n=e.endsWith(`$`)?e.length-1:e.length;return e.slice(t,n)}function Ue(e,t){let n=e/t,r=Math.round(n),i=2**-52*Math.max(Math.abs(n),1);return Math.abs(n-r)<i?0:n-r}let We=/* @__PURE__*/ Symbol(`evaluating`);function R(e,t,n){let r;Object.defineProperty(e,t,{get(){if(r!==We)return r===void 0&&(r=We,r=n()),r},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function Ge(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function z(...e){let t={};for(let n of e){let e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Ke(e){return JSON.stringify(e)}function qe(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/[\s_-]+/g,`-`).replace(/^-+|-+$/g,``)}let Je=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};function Ye(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}let Xe=/* @__PURE__*/ Be(()=>{if(Le.jitless||typeof navigator<`u`&&navigator?.userAgent?.includes(`Cloudflare`))return!1;try{return Function(``),!0}catch{return!1}});function Ze(e){if(Ye(e)===!1)return!1;let t=e.constructor;if(t===void 0||typeof t!=`function`)return!0;let n=t.prototype;return Ye(n)!==!1&&Object.prototype.hasOwnProperty.call(n,`isPrototypeOf`)!==!1}function Qe(e){return Ze(e)?{...e}:Array.isArray(e)?[...e]:e instanceof Map?new Map(e):e instanceof Set?new Set(e):e}let $e=/* @__PURE__*/ new Set([`string`,`number`,`symbol`]);function et(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function B(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function V(e){let t=e;if(!t)return{};if(typeof t==`string`)return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error==`string`?{...t,error:()=>t.error}:t}function tt(e){return Object.keys(e).filter(t=>e[t]._zod.optin===`optional`&&e[t]._zod.optout===`optional`)}let nt={safeint:[-(2**53-1),2**53-1],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]};function rt(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.pick() cannot be used on object schemas containing refinements`);return B(e,z(e._zod.def,{get shape(){let e={};for(let r in t){if(!(r in n.shape))throw Error(`Unrecognized key: "${r}"`);t[r]&&(e[r]=n.shape[r])}return Ge(this,`shape`,e),e},checks:[]}))}function it(e,t){let n=e._zod.def,r=n.checks;if(r&&r.length>0)throw Error(`.omit() cannot be used on object schemas containing refinements`);return B(e,z(e._zod.def,{get shape(){let r={...e._zod.def.shape};for(let e in t){if(!(e in n.shape))throw Error(`Unrecognized key: "${e}"`);t[e]&&delete r[e]}return Ge(this,`shape`,r),r},checks:[]}))}function at(e,t){if(!Ze(t))throw Error(`Invalid input to extend: expected a plain object`);let n=e._zod.def.checks;if(n&&n.length>0){let n=e._zod.def.shape;for(let e in t)if(Object.getOwnPropertyDescriptor(n,e)!==void 0)throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return B(e,z(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return Ge(this,`shape`,n),n}}))}function ot(e,t){if(!Ze(t))throw Error(`Invalid input to safeExtend: expected a plain object`);return B(e,z(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t};return Ge(this,`shape`,n),n}}))}function st(e,t){if(e._zod.def.checks?.length)throw Error(`.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`);return B(e,z(e._zod.def,{get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return Ge(this,`shape`,n),n},get catchall(){return t._zod.def.catchall},checks:t._zod.def.checks??[]}))}function ct(e,t,n){let r=t._zod.def.checks;if(r&&r.length>0)throw Error(`.partial() cannot be used on object schemas containing refinements`);return B(t,z(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in r))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t])}else for(let t in r)i[t]=e?new e({type:`optional`,innerType:r[t]}):r[t];return Ge(this,`shape`,i),i},checks:[]}))}function lt(e,t,n){return B(t,z(t._zod.def,{get shape(){let r=t._zod.def.shape,i={...r};if(n)for(let t in n){if(!(t in i))throw Error(`Unrecognized key: "${t}"`);n[t]&&(i[t]=new e({type:`nonoptional`,innerType:r[t]}))}else for(let t in r)i[t]=new e({type:`nonoptional`,innerType:r[t]});return Ge(this,`shape`,i),i}}))}function ut(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function dt(e,t=0){if(e.aborted===!0)return!0;for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue===!1)return!0;return!1}function ft(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function pt(e){return typeof e==`string`?e:e?.message}function mt(e,t,n){let r=e.message?e.message:pt(e.inst?._zod.def?.error?.(e))??pt(t?.error?.(e))??pt(n.customError?.(e))??pt(n.localeError?.(e))??`Invalid input`,{inst:i,continue:a,input:o,...s}=e;return s.path??=[],s.message=r,t?.reportInput&&(s.input=o),s}function ht(e){return Array.isArray(e)?`array`:typeof e==`string`?`string`:`unknown`}function gt(...e){let[t,n,r]=e;return typeof t==`string`?{message:t,code:`custom`,input:n,inst:r}:{...t}}let _t=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,ze,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},vt=I(`$ZodError`,_t),yt=I(`$ZodError`,_t,{Parent:Error});function bt(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function xt(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}let St=e=>(t,n,r,i)=>{let a=r?{...r,async:!1}:{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new Fe;if(o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>mt(e,a,L())));throw Je(t,i?.callee),t}return o.value},Ct=e=>async(t,n,r,i)=>{let a=r?{...r,async:!0}:{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new((i?.Err)??e)(o.issues.map(e=>mt(e,a,L())));throw Je(t,i?.callee),t}return o.value},wt=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Fe;return a.issues.length?{success:!1,error:new(e??vt)(a.issues.map(e=>mt(e,i,L())))}:{success:!0,data:a.value}},Tt=/* @__PURE__*/ wt(yt),Et=e=>async(t,n,r)=>{let i=r?{...r,async:!0}:{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>mt(e,i,L())))}:{success:!0,data:a.value}},Dt=/* @__PURE__*/ Et(yt),Ot=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return St(e)(t,n,i)},kt=e=>(t,n,r)=>St(e)(t,n,r),At=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Ct(e)(t,n,i)},jt=e=>async(t,n,r)=>Ct(e)(t,n,r),Mt=e=>(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return wt(e)(t,n,i)},Nt=e=>(t,n,r)=>wt(e)(t,n,r),Pt=e=>async(t,n,r)=>{let i=r?{...r,direction:`backward`}:{direction:`backward`};return Et(e)(t,n,i)},Ft=e=>async(t,n,r)=>Et(e)(t,n,r),It=/^[cC][0-9a-z]{6,}$/,Lt=/^[0-9a-z]+$/,Rt=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,zt=/^[0-9a-vA-V]{20}$/,Bt=/^[A-Za-z0-9]{27}$/,Vt=/^[a-zA-Z0-9_-]{21}$/,Ht=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Ut=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Wt=e=>e?RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Gt=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;function Kt(){return/* @__PURE__ */ RegExp(`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,`u`)}let qt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Jt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Yt=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Xt=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Zt=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Qt=/^[A-Za-z0-9_-]*$/,$t=/^https?$/,en=/^\+[1-9]\d{6,14}$/,tn=`(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`,nn=/*@__PURE__*/ RegExp(`^${tn}$`);function rn(e){let t=`(?:[01]\\d|2[0-3]):[0-5]\\d`;return typeof e.precision==`number`?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function an(e){return RegExp(`^${rn(e)}$`)}function on(e){let t=rn({precision:e.precision}),n=[`Z`];e.local&&n.push(``),e.offset&&n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);let r=`${t}(?:${n.join(`|`)})`;return RegExp(`^${tn}T(?:${r})$`)}let sn=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??``}}`:`[\\s\\S]*`;return RegExp(`^${t}$`)},cn=/^-?\d+$/,ln=/^-?\d+(?:\.\d+)?$/,un=/^(?:true|false)$/i,dn=/^[^A-Z]*$/,fn=/^[^a-z]*$/,H=/*@__PURE__*/ I(`$ZodCheck`,(e,t)=>{var n;e._zod??={},e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),pn={number:`number`,bigint:`bigint`,object:`date`},mn=/*@__PURE__*/ I(`$ZodCheckLessThan`,(e,t)=>{H.init(e,t);let n=pn[typeof t.value];e._zod.onattach.push(e=>{let n=e._zod.bag,r=(t.inclusive?n.maximum:n.exclusiveMaximum)??1/0;t.value<r&&(t.inclusive?n.maximum=t.value:n.exclusiveMaximum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:n,code:`too_big`,maximum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),hn=/*@__PURE__*/ I(`$ZodCheckGreaterThan`,(e,t)=>{H.init(e,t);let n=pn[typeof t.value];e._zod.onattach.push(e=>{let n=e._zod.bag,r=(t.inclusive?n.minimum:n.exclusiveMinimum)??-1/0;t.value>r&&(t.inclusive?n.minimum=t.value:n.exclusiveMinimum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:n,code:`too_small`,minimum:typeof t.value==`object`?t.value.getTime():t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),gn=/*@__PURE__*/ I(`$ZodCheckMultipleOf`,(e,t)=>{H.init(e,t),e._zod.onattach.push(e=>{var n;(n=e._zod.bag).multipleOf??(n.multipleOf=t.value)}),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw Error(`Cannot mix number and bigint in multiple_of check.`);(typeof n.value==`bigint`?n.value%t.value===BigInt(0):Ue(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:`not_multiple_of`,divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),_n=/*@__PURE__*/ I(`$ZodCheckNumberFormat`,(e,t)=>{H.init(e,t),t.format=t.format||`float64`;let n=t.format?.includes(`int`),r=n?`int`:`number`,[i,a]=nt[t.format];e._zod.onattach.push(e=>{let r=e._zod.bag;r.format=t.format,r.minimum=i,r.maximum=a,n&&(r.pattern=cn)}),e._zod.check=o=>{let s=o.value;if(n){if(!Number.isInteger(s)){o.issues.push({expected:r,format:t.format,code:`invalid_type`,continue:!1,input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?o.issues.push({input:s,code:`too_big`,maximum:2**53-1,note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort}):o.issues.push({input:s,code:`too_small`,minimum:-(2**53-1),note:`Integers must be within the safe integer range.`,inst:e,origin:r,inclusive:!0,continue:!t.abort});return}}s<i&&o.issues.push({origin:`number`,input:s,code:`too_small`,minimum:i,inclusive:!0,inst:e,continue:!t.abort}),s>a&&o.issues.push({origin:`number`,input:s,code:`too_big`,maximum:a,inclusive:!0,inst:e,continue:!t.abort})}}),vn=/*@__PURE__*/ I(`$ZodCheckMaxLength`,(e,t)=>{var n;H.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.maximum??1/0;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{let r=n.value;if(r.length<=t.maximum)return;let i=ht(r);n.issues.push({origin:i,code:`too_big`,maximum:t.maximum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),yn=/*@__PURE__*/ I(`$ZodCheckMinLength`,(e,t)=>{var n;H.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag.minimum??-1/0;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{let r=n.value;if(r.length>=t.minimum)return;let i=ht(r);n.issues.push({origin:i,code:`too_small`,minimum:t.minimum,inclusive:!0,input:r,inst:e,continue:!t.abort})}}),bn=/*@__PURE__*/ I(`$ZodCheckLengthEquals`,(e,t)=>{var n;H.init(e,t),(n=e._zod.def).when??(n.when=e=>{let t=e.value;return!Ve(t)&&t.length!==void 0}),e._zod.onattach.push(e=>{let n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{let r=n.value,i=r.length;if(i===t.length)return;let a=ht(r),o=i>t.length;n.issues.push({origin:a,...o?{code:`too_big`,maximum:t.length}:{code:`too_small`,minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),xn=/*@__PURE__*/ I(`$ZodCheckStringFormat`,(e,t)=>{var n,r;H.init(e,t),e._zod.onattach.push(e=>{let n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??=/* @__PURE__ */ new Set,n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),Sn=/*@__PURE__*/ I(`$ZodCheckRegex`,(e,t)=>{xn.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:`string`,code:`invalid_format`,format:`regex`,input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Cn=/*@__PURE__*/ I(`$ZodCheckLowerCase`,(e,t)=>{t.pattern??=dn,xn.init(e,t)}),wn=/*@__PURE__*/ I(`$ZodCheckUpperCase`,(e,t)=>{t.pattern??=fn,xn.init(e,t)}),Tn=/*@__PURE__*/ I(`$ZodCheckIncludes`,(e,t)=>{H.init(e,t);let n=et(t.includes),r=new RegExp(typeof t.position==`number`?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=/* @__PURE__ */ new Set,t.patterns.add(r)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:`string`,code:`invalid_format`,format:`includes`,includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),En=/*@__PURE__*/ I(`$ZodCheckStartsWith`,(e,t)=>{H.init(e,t);let n=RegExp(`^${et(t.prefix)}.*`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=/* @__PURE__ */ new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`starts_with`,prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Dn=/*@__PURE__*/ I(`$ZodCheckEndsWith`,(e,t)=>{H.init(e,t);let n=RegExp(`.*${et(t.suffix)}$`);t.pattern??=n,e._zod.onattach.push(e=>{let t=e._zod.bag;t.patterns??=/* @__PURE__ */ new Set,t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:`string`,code:`invalid_format`,format:`ends_with`,suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),On=/*@__PURE__*/ I(`$ZodCheckOverwrite`,(e,t)=>{H.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}});var kn=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),--this.indent}write(e){if(typeof e==`function`){e(this,{execution:`sync`}),e(this,{execution:`async`});return}let t=e.split(`
`).filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),r=t.map(e=>e.slice(n)).map(e=>` `.repeat(this.indent*2)+e);for(let e of r)this.content.push(e)}compile(){let e=Function,t=this?.args,n=[...(this?.content??[``]).map(e=>`  ${e}`)];return new e(...t,n.join(`
`))}};let An={major:4,minor:4,patch:3},U=/*@__PURE__*/ I(`$ZodType`,(e,t)=>{var n;e??={},e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=An;let r=[...e._zod.def.checks??[]];e._zod.traits.has(`$ZodCheck`)&&r.unshift(e);for(let t of r)for(let n of t._zod.onattach)n(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let t=(e,t,n)=>{let r=ut(e),i;for(let a of t){if(a._zod.def.when){if(dt(e)||!a._zod.def.when(e))continue}else if(r)continue;let t=e.issues.length,o=a._zod.check(e);if(o instanceof Promise&&n?.async===!1)throw new Fe;if(i||o instanceof Promise)i=(i??Promise.resolve()).then(async()=>{await o,e.issues.length!==t&&(r||=ut(e,t))});else{if(e.issues.length===t)continue;r||=ut(e,t)}}return i?i.then(()=>e):e},n=(n,i,a)=>{if(ut(n))return n.aborted=!0,n;let o=t(i,r,a);if(o instanceof Promise){if(a.async===!1)throw new Fe;return o.then(t=>e._zod.parse(t,a))}return e._zod.parse(o,a)};e._zod.run=(i,a)=>{if(a.skipChecks)return e._zod.parse(i,a);if(a.direction===`backward`){let t=e._zod.parse({value:i.value,issues:[]},{...a,skipChecks:!0});return t instanceof Promise?t.then(e=>n(e,i,a)):n(t,i,a)}let o=e._zod.parse(i,a);if(o instanceof Promise){if(a.async===!1)throw new Fe;return o.then(e=>t(e,r,a))}return t(o,r,a)}}R(e,`~standard`,()=>({validate:t=>{try{let n=Tt(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch{return Dt(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:`zod`,version:1}))}),jn=/*@__PURE__*/ I(`$ZodString`,(e,t)=>{U.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??sn(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value==`string`||n.issues.push({expected:`string`,code:`invalid_type`,input:n.value,inst:e}),n}}),W=/*@__PURE__*/ I(`$ZodStringFormat`,(e,t)=>{xn.init(e,t),jn.init(e,t)}),Mn=/*@__PURE__*/ I(`$ZodGUID`,(e,t)=>{t.pattern??=Ut,W.init(e,t)}),Nn=/*@__PURE__*/ I(`$ZodUUID`,(e,t)=>{if(t.version){let e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(e===void 0)throw Error(`Invalid UUID version: "${t.version}"`);t.pattern??=Wt(e)}else t.pattern??=Wt();W.init(e,t)}),Pn=/*@__PURE__*/ I(`$ZodEmail`,(e,t)=>{t.pattern??=Gt,W.init(e,t)}),Fn=/*@__PURE__*/ I(`$ZodURL`,(e,t)=>{W.init(e,t),e._zod.check=n=>{try{let r=n.value.trim();if(!t.normalize&&t.protocol?.source===$t.source&&!/^https?:\/\//i.test(r)){n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid URL format`,input:n.value,inst:e,continue:!t.abort});return}let i=new URL(r);t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(i.hostname)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid hostname`,pattern:t.hostname.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(i.protocol.endsWith(`:`)?i.protocol.slice(0,-1):i.protocol)||n.issues.push({code:`invalid_format`,format:`url`,note:`Invalid protocol`,pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),n.value=t.normalize?i.href:r;return}catch{n.issues.push({code:`invalid_format`,format:`url`,input:n.value,inst:e,continue:!t.abort})}}}),In=/*@__PURE__*/ I(`$ZodEmoji`,(e,t)=>{t.pattern??=Kt(),W.init(e,t)}),Ln=/*@__PURE__*/ I(`$ZodNanoID`,(e,t)=>{t.pattern??=Vt,W.init(e,t)}),Rn=/*@__PURE__*/ I(`$ZodCUID`,(e,t)=>{t.pattern??=It,W.init(e,t)}),zn=/*@__PURE__*/ I(`$ZodCUID2`,(e,t)=>{t.pattern??=Lt,W.init(e,t)}),Bn=/*@__PURE__*/ I(`$ZodULID`,(e,t)=>{t.pattern??=Rt,W.init(e,t)}),Vn=/*@__PURE__*/ I(`$ZodXID`,(e,t)=>{t.pattern??=zt,W.init(e,t)}),Hn=/*@__PURE__*/ I(`$ZodKSUID`,(e,t)=>{t.pattern??=Bt,W.init(e,t)}),Un=/*@__PURE__*/ I(`$ZodISODateTime`,(e,t)=>{t.pattern??=on(t),W.init(e,t)}),Wn=/*@__PURE__*/ I(`$ZodISODate`,(e,t)=>{t.pattern??=nn,W.init(e,t)}),Gn=/*@__PURE__*/ I(`$ZodISOTime`,(e,t)=>{t.pattern??=an(t),W.init(e,t)}),Kn=/*@__PURE__*/ I(`$ZodISODuration`,(e,t)=>{t.pattern??=Ht,W.init(e,t)}),qn=/*@__PURE__*/ I(`$ZodIPv4`,(e,t)=>{t.pattern??=qt,W.init(e,t),e._zod.bag.format=`ipv4`}),Jn=/*@__PURE__*/ I(`$ZodIPv6`,(e,t)=>{t.pattern??=Jt,W.init(e,t),e._zod.bag.format=`ipv6`,e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:`invalid_format`,format:`ipv6`,input:n.value,inst:e,continue:!t.abort})}}}),Yn=/*@__PURE__*/ I(`$ZodCIDRv4`,(e,t)=>{t.pattern??=Yt,W.init(e,t)}),Xn=/*@__PURE__*/ I(`$ZodCIDRv6`,(e,t)=>{t.pattern??=Xt,W.init(e,t),e._zod.check=n=>{let r=n.value.split(`/`);try{if(r.length!==2)throw Error();let[e,t]=r;if(!t)throw Error();let n=Number(t);if(`${n}`!==t||n<0||n>128)throw Error();new URL(`http://[${e}]`)}catch{n.issues.push({code:`invalid_format`,format:`cidrv6`,input:n.value,inst:e,continue:!t.abort})}}});function Zn(e){if(e===``)return!0;if(/\s/.test(e)||e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}let Qn=/*@__PURE__*/ I(`$ZodBase64`,(e,t)=>{t.pattern??=Zt,W.init(e,t),e._zod.bag.contentEncoding=`base64`,e._zod.check=n=>{Zn(n.value)||n.issues.push({code:`invalid_format`,format:`base64`,input:n.value,inst:e,continue:!t.abort})}});function $n(e){if(!Qt.test(e))return!1;let t=e.replace(/[-_]/g,e=>e===`-`?`+`:`/`);return Zn(t.padEnd(Math.ceil(t.length/4)*4,`=`))}let er=/*@__PURE__*/ I(`$ZodBase64URL`,(e,t)=>{t.pattern??=Qt,W.init(e,t),e._zod.bag.contentEncoding=`base64url`,e._zod.check=n=>{$n(n.value)||n.issues.push({code:`invalid_format`,format:`base64url`,input:n.value,inst:e,continue:!t.abort})}}),tr=/*@__PURE__*/ I(`$ZodE164`,(e,t)=>{t.pattern??=en,W.init(e,t)});function nr(e,t=null){try{let n=e.split(`.`);if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let i=JSON.parse(atob(r));return!(`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&(!(`alg`in i)||i.alg!==t))}catch{return!1}}let rr=/*@__PURE__*/ I(`$ZodJWT`,(e,t)=>{W.init(e,t),e._zod.check=n=>{nr(n.value,t.alg)||n.issues.push({code:`invalid_format`,format:`jwt`,input:n.value,inst:e,continue:!t.abort})}}),ir=/*@__PURE__*/ I(`$ZodNumber`,(e,t)=>{U.init(e,t),e._zod.pattern=e._zod.bag.pattern??ln,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let i=n.value;if(typeof i==`number`&&!Number.isNaN(i)&&Number.isFinite(i))return n;let a=typeof i==`number`?Number.isNaN(i)?`NaN`:Number.isFinite(i)?void 0:`Infinity`:void 0;return n.issues.push({expected:`number`,code:`invalid_type`,input:i,inst:e,...a?{received:a}:{}}),n}}),ar=/*@__PURE__*/ I(`$ZodNumberFormat`,(e,t)=>{_n.init(e,t),ir.init(e,t)}),or=/*@__PURE__*/ I(`$ZodBoolean`,(e,t)=>{U.init(e,t),e._zod.pattern=un,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let i=n.value;return typeof i==`boolean`||n.issues.push({expected:`boolean`,code:`invalid_type`,input:i,inst:e}),n}}),sr=/*@__PURE__*/ I(`$ZodUnknown`,(e,t)=>{U.init(e,t),e._zod.parse=e=>e}),cr=/*@__PURE__*/ I(`$ZodNever`,(e,t)=>{U.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:`never`,code:`invalid_type`,input:t.value,inst:e}),t)});function lr(e,t,n){e.issues.length&&t.issues.push(...ft(n,e.issues)),t.value[n]=e.value}let ur=/*@__PURE__*/ I(`$ZodArray`,(e,t)=>{U.init(e,t),e._zod.parse=(n,r)=>{let i=n.value;if(!Array.isArray(i))return n.issues.push({expected:`array`,code:`invalid_type`,input:i,inst:e}),n;n.value=Array(i.length);let a=[];for(let e=0;e<i.length;e++){let o=i[e],s=t.element._zod.run({value:o,issues:[]},r);s instanceof Promise?a.push(s.then(t=>lr(t,n,e))):lr(s,n,e)}return a.length?Promise.all(a).then(()=>n):n}});function dr(e,t,n,r,i,a){let o=n in r;if(e.issues.length){if(i&&a&&!o)return;t.issues.push(...ft(n,e.issues))}if(!o&&!i){e.issues.length||t.issues.push({code:`invalid_type`,expected:`nonoptional`,input:void 0,path:[n]});return}e.value===void 0?o&&(t.value[n]=void 0):t.value[n]=e.value}function fr(e){let t=Object.keys(e.shape);for(let n of t)if(!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))throw Error(`Invalid element at key "${n}": expected a Zod schema`);let n=tt(e.shape);return{...e,keys:t,keySet:new Set(t),numKeys:t.length,optionalKeys:new Set(n)}}function pr(e,t,n,r,i,a){let o=[],s=i.keySet,c=i.catchall._zod,l=c.def.type,u=c.optin===`optional`,d=c.optout===`optional`;for(let i in t){if(i===`__proto__`||s.has(i))continue;if(l===`never`){o.push(i);continue}let a=c.run({value:t[i],issues:[]},r);a instanceof Promise?e.push(a.then(e=>dr(e,n,i,t,u,d))):dr(a,n,i,t,u,d)}return o.length&&n.issues.push({code:`unrecognized_keys`,keys:o,input:t,inst:a}),e.length?Promise.all(e).then(()=>n):n}let mr=/*@__PURE__*/ I(`$ZodObject`,(e,t)=>{if(U.init(e,t),!Object.getOwnPropertyDescriptor(t,`shape`)?.get){let e=t.shape;Object.defineProperty(t,"shape",{get:()=>{let n={...e};return Object.defineProperty(t,"shape",{value:n}),n}})}let n=Be(()=>fr(t));R(e._zod,`propValues`,()=>{let e=t.shape,n={};for(let t in e){let r=e[t]._zod;if(r.values){n[t]??(n[t]=/* @__PURE__ */ new Set);for(let e of r.values)n[t].add(e)}}return n});let r=Ye,i=t.catchall,a;e._zod.parse=(t,o)=>{a??=n.value;let s=t.value;if(!r(s))return t.issues.push({expected:`object`,code:`invalid_type`,input:s,inst:e}),t;t.value={};let c=[],l=a.shape;for(let e of a.keys){let n=l[e],r=n._zod.optin===`optional`,i=n._zod.optout===`optional`,a=n._zod.run({value:s[e],issues:[]},o);a instanceof Promise?c.push(a.then(n=>dr(n,t,e,s,r,i))):dr(a,t,e,s,r,i)}return i?pr(c,s,t,o,n.value,e):c.length?Promise.all(c).then(()=>t):t}}),hr=/*@__PURE__*/ I(`$ZodObjectJIT`,(e,t)=>{mr.init(e,t);let n=e._zod.parse,r=Be(()=>fr(t)),i=e=>{let t=new kn([`shape`,`payload`,`ctx`]),n=r.value,i=e=>{let t=Ke(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write(`const input = payload.value;`);let a=Object.create(null),o=0;for(let e of n.keys)a[e]=`key_${o++}`;t.write(`const newResult = {};`);for(let r of n.keys){let n=a[r],o=Ke(r),s=e[r],c=s?._zod?.optin===`optional`,l=s?._zod?.optout===`optional`;t.write(`const ${n} = ${i(r)};`),c&&l?t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):c?t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `):t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `)}t.write(`payload.value = newResult;`),t.write(`return payload;`);let s=t.compile();return(t,n)=>s(e,t,n)},a,o=Ye,s=!Le.jitless,c=s&&Xe.value,l=t.catchall,u;e._zod.parse=(d,f)=>{u??=r.value;let p=d.value;return o(p)?s&&c&&f?.async===!1&&f.jitless!==!0?(a||=i(t.shape),d=a(d,f),l?pr([],p,d,f,u,e):d):n(d,f):(d.issues.push({expected:`object`,code:`invalid_type`,input:p,inst:e}),d)}});function gr(e,t,n,r){for(let n of e)if(n.issues.length===0)return t.value=n.value,t;let i=e.filter(e=>!ut(e));return i.length===1?(t.value=i[0].value,i[0]):(t.issues.push({code:`invalid_union`,input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>mt(e,r,L())))}),t)}let _r=/*@__PURE__*/ I(`$ZodUnion`,(e,t)=>{U.init(e,t),R(e._zod,`optin`,()=>t.options.some(e=>e._zod.optin===`optional`)?`optional`:void 0),R(e._zod,`optout`,()=>t.options.some(e=>e._zod.optout===`optional`)?`optional`:void 0),R(e._zod,`values`,()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),R(e._zod,`pattern`,()=>{if(t.options.every(e=>e._zod.pattern)){let e=t.options.map(e=>e._zod.pattern);return RegExp(`^(${e.map(e=>He(e.source)).join(`|`)})$`)}});let n=t.options.length===1?t.options[0]._zod.run:null;e._zod.parse=(r,i)=>{if(n)return n(r,i);let a=!1,o=[];for(let e of t.options){let t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)o.push(t),a=!0;else{if(t.issues.length===0)return t;o.push(t)}}return a?Promise.all(o).then(t=>gr(t,r,e,i)):gr(o,r,e,i)}}),vr=/*@__PURE__*/ I(`$ZodDiscriminatedUnion`,(e,t)=>{t.inclusive=!1,_r.init(e,t);let n=e._zod.parse;R(e._zod,`propValues`,()=>{let e={};for(let n of t.options){let r=n._zod.propValues;if(!r||Object.keys(r).length===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);for(let[t,n]of Object.entries(r)){e[t]||(e[t]=/* @__PURE__ */ new Set);for(let r of n)e[t].add(r)}}return e});let r=Be(()=>{let e=t.options,n=/* @__PURE__ */ new Map;for(let r of e){let e=r._zod.propValues?.[t.discriminator];if(!e||e.size===0)throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);for(let t of e){if(n.has(t))throw Error(`Duplicate discriminator value "${String(t)}"`);n.set(t,r)}}return n});e._zod.parse=(i,a)=>{let o=i.value;if(!Ye(o))return i.issues.push({code:`invalid_type`,expected:`object`,input:o,inst:e}),i;let s=r.value.get(o?.[t.discriminator]);return s?s._zod.run(i,a):t.unionFallback||a.direction===`backward`?n(i,a):(i.issues.push({code:`invalid_union`,errors:[],note:`No matching discriminator`,discriminator:t.discriminator,options:Array.from(r.value.keys()),input:o,path:[t.discriminator],inst:e}),i)}}),yr=/*@__PURE__*/ I(`$ZodIntersection`,(e,t)=>{U.init(e,t),e._zod.parse=(e,n)=>{let r=e.value,i=t.left._zod.run({value:r,issues:[]},n),a=t.right._zod.run({value:r,issues:[]},n);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([t,n])=>xr(e,t,n)):xr(e,i,a)}});function br(e,t){if(e===t||e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(Ze(e)&&Ze(t)){let n=Object.keys(t),r=Object.keys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=br(e[n],t[n]);if(!r.valid)return{valid:!1,mergeErrorPath:[n,...r.mergeErrorPath]};i[n]=r.data}return{valid:!0,data:i}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=br(i,a);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function xr(e,t,n){let r=/* @__PURE__ */ new Map,i;for(let n of t.issues)if(n.code===`unrecognized_keys`){i??=n;for(let e of n.keys)r.has(e)||r.set(e,{}),r.get(e).l=!0}else e.issues.push(n);for(let t of n.issues)if(t.code===`unrecognized_keys`)for(let e of t.keys)r.has(e)||r.set(e,{}),r.get(e).r=!0;else e.issues.push(t);let a=[...r].filter(([,e])=>e.l&&e.r).map(([e])=>e);if(a.length&&i&&e.issues.push({...i,keys:a}),ut(e))return e;let o=br(t.value,n.value);if(!o.valid)throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}let Sr=/*@__PURE__*/ I(`$ZodEnum`,(e,t)=>{U.init(e,t);let n=Re(t.entries),r=new Set(n);e._zod.values=r,e._zod.pattern=RegExp(`^(${n.filter(e=>$e.has(typeof e)).map(e=>typeof e==`string`?et(e):e.toString()).join(`|`)})$`),e._zod.parse=(t,i)=>{let a=t.value;return r.has(a)||t.issues.push({code:`invalid_value`,values:n,input:a,inst:e}),t}}),Cr=/*@__PURE__*/ I(`$ZodLiteral`,(e,t)=>{if(U.init(e,t),t.values.length===0)throw Error(`Cannot create literal schema with no valid values`);let n=new Set(t.values);e._zod.values=n,e._zod.pattern=RegExp(`^(${t.values.map(e=>typeof e==`string`?et(e):e?et(e.toString()):String(e)).join(`|`)})$`),e._zod.parse=(r,i)=>{let a=r.value;return n.has(a)||r.issues.push({code:`invalid_value`,values:t.values,input:a,inst:e}),r}}),wr=/*@__PURE__*/ I(`$ZodTransform`,(e,t)=>{U.init(e,t),e._zod.optin=`optional`,e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Ie(e.constructor.name);let i=t.transform(n.value,n);if(r.async)return(i instanceof Promise?i:Promise.resolve(i)).then(e=>(n.value=e,n.fallback=!0,n));if(i instanceof Promise)throw new Fe;return n.value=i,n.fallback=!0,n}});function Tr(e,t){return t===void 0&&(e.issues.length||e.fallback)?{issues:[],value:void 0}:e}let Er=/*@__PURE__*/ I(`$ZodOptional`,(e,t)=>{U.init(e,t),e._zod.optin=`optional`,e._zod.optout=`optional`,R(e._zod,`values`,()=>t.innerType._zod.values?/* @__PURE__ */ new Set([...t.innerType._zod.values,void 0]):void 0),R(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${He(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if(t.innerType._zod.optin===`optional`){let r=e.value,i=t.innerType._zod.run(e,n);return i instanceof Promise?i.then(e=>Tr(e,r)):Tr(i,r)}return e.value===void 0?e:t.innerType._zod.run(e,n)}}),Dr=/*@__PURE__*/ I(`$ZodExactOptional`,(e,t)=>{Er.init(e,t),R(e._zod,`values`,()=>t.innerType._zod.values),R(e._zod,`pattern`,()=>t.innerType._zod.pattern),e._zod.parse=(e,n)=>t.innerType._zod.run(e,n)}),Or=/*@__PURE__*/ I(`$ZodNullable`,(e,t)=>{U.init(e,t),R(e._zod,`optin`,()=>t.innerType._zod.optin),R(e._zod,`optout`,()=>t.innerType._zod.optout),R(e._zod,`pattern`,()=>{let e=t.innerType._zod.pattern;return e?RegExp(`^(${He(e.source)}|null)$`):void 0}),R(e._zod,`values`,()=>t.innerType._zod.values?/* @__PURE__ */ new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>e.value===null?e:t.innerType._zod.run(e,n)}),kr=/*@__PURE__*/ I(`$ZodDefault`,(e,t)=>{U.init(e,t),e._zod.optin=`optional`,R(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);if(e.value===void 0)return e.value=t.defaultValue,e;let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(e=>Ar(e,t)):Ar(r,t)}});function Ar(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}let jr=/*@__PURE__*/ I(`$ZodPrefault`,(e,t)=>{U.init(e,t),e._zod.optin=`optional`,R(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(n.direction===`backward`||e.value===void 0&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),Mr=/*@__PURE__*/ I(`$ZodNonOptional`,(e,t)=>{U.init(e,t),R(e._zod,`values`,()=>{let e=t.innerType._zod.values;return e?new Set([...e].filter(e=>e!==void 0)):void 0}),e._zod.parse=(n,r)=>{let i=t.innerType._zod.run(n,r);return i instanceof Promise?i.then(t=>Nr(t,e)):Nr(i,e)}});function Nr(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:`invalid_type`,expected:`nonoptional`,input:e.value,inst:t}),e}let Pr=/*@__PURE__*/ I(`$ZodCatch`,(e,t)=>{U.init(e,t),e._zod.optin=`optional`,R(e._zod,`optout`,()=>t.innerType._zod.optout),R(e._zod,`values`,()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(r=>(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>mt(e,n,L()))},input:e.value}),e.issues=[],e.fallback=!0),e)):(e.value=r.value,r.issues.length&&(e.value=t.catchValue({...e,error:{issues:r.issues.map(e=>mt(e,n,L()))},input:e.value}),e.issues=[],e.fallback=!0),e)}}),Fr=/*@__PURE__*/ I(`$ZodPipe`,(e,t)=>{U.init(e,t),R(e._zod,`values`,()=>t.in._zod.values),R(e._zod,`optin`,()=>t.in._zod.optin),R(e._zod,`optout`,()=>t.out._zod.optout),R(e._zod,`propValues`,()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{if(n.direction===`backward`){let r=t.out._zod.run(e,n);return r instanceof Promise?r.then(e=>Ir(e,t.in,n)):Ir(r,t.in,n)}let r=t.in._zod.run(e,n);return r instanceof Promise?r.then(e=>Ir(e,t.out,n)):Ir(r,t.out,n)}});function Ir(e,t,n){return e.issues.length?(e.aborted=!0,e):t._zod.run({value:e.value,issues:e.issues,fallback:e.fallback},n)}let Lr=/*@__PURE__*/ I(`$ZodReadonly`,(e,t)=>{U.init(e,t),R(e._zod,`propValues`,()=>t.innerType._zod.propValues),R(e._zod,`values`,()=>t.innerType._zod.values),R(e._zod,`optin`,()=>t.innerType?._zod?.optin),R(e._zod,`optout`,()=>t.innerType?._zod?.optout),e._zod.parse=(e,n)=>{if(n.direction===`backward`)return t.innerType._zod.run(e,n);let r=t.innerType._zod.run(e,n);return r instanceof Promise?r.then(Rr):Rr(r)}});function Rr(e){return e.value=Object.freeze(e.value),e}let zr=/*@__PURE__*/ I(`$ZodCustom`,(e,t)=>{H.init(e,t),U.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{let r=n.value,i=t.fn(r);if(i instanceof Promise)return i.then(t=>Br(t,n,r,e));Br(i,n,r,e)}});function Br(e,t,n,r){if(!e){let e={code:`custom`,input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(e.params=r._zod.def.params),t.issues.push(gt(e))}}var Vr,Hr=class{constructor(){this._map=/* @__PURE__ */ new WeakMap,this._idmap=/* @__PURE__ */ new Map}add(e,...t){let n=t[0];return this._map.set(e,n),n&&typeof n==`object`&&`id`in n&&this._idmap.set(n.id,e),this}clear(){return this._map=/* @__PURE__ */ new WeakMap,this._idmap=/* @__PURE__ */ new Map,this}remove(e){let t=this._map.get(e);return t&&typeof t==`object`&&`id`in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){let t=e._zod.parent;if(t){let n={...this.get(t)??{}};delete n.id;let r={...n,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}};function Ur(){return new Hr}(Vr=globalThis).__zod_globalRegistry??(Vr.__zod_globalRegistry=Ur());let Wr=globalThis.__zod_globalRegistry;// @__NO_SIDE_EFFECTS__
function Gr(e,t){return new e({type:`string`,...V(t)})}// @__NO_SIDE_EFFECTS__
function Kr(e,t){return new e({type:`string`,format:`email`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function qr(e,t){return new e({type:`string`,format:`guid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function Jr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function Yr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v4`,...V(t)})}// @__NO_SIDE_EFFECTS__
function Xr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v6`,...V(t)})}// @__NO_SIDE_EFFECTS__
function Zr(e,t){return new e({type:`string`,format:`uuid`,check:`string_format`,abort:!1,version:`v7`,...V(t)})}// @__NO_SIDE_EFFECTS__
function Qr(e,t){return new e({type:`string`,format:`url`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function $r(e,t){return new e({type:`string`,format:`emoji`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ei(e,t){return new e({type:`string`,format:`nanoid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ti(e,t){return new e({type:`string`,format:`cuid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ni(e,t){return new e({type:`string`,format:`cuid2`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ri(e,t){return new e({type:`string`,format:`ulid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ii(e,t){return new e({type:`string`,format:`xid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ai(e,t){return new e({type:`string`,format:`ksuid`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function oi(e,t){return new e({type:`string`,format:`ipv4`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function si(e,t){return new e({type:`string`,format:`ipv6`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ci(e,t){return new e({type:`string`,format:`cidrv4`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function li(e,t){return new e({type:`string`,format:`cidrv6`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function ui(e,t){return new e({type:`string`,format:`base64`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function di(e,t){return new e({type:`string`,format:`base64url`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function fi(e,t){return new e({type:`string`,format:`e164`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function pi(e,t){return new e({type:`string`,format:`jwt`,check:`string_format`,abort:!1,...V(t)})}// @__NO_SIDE_EFFECTS__
function mi(e,t){return new e({type:`string`,format:`datetime`,check:`string_format`,offset:!1,local:!1,precision:null,...V(t)})}// @__NO_SIDE_EFFECTS__
function hi(e,t){return new e({type:`string`,format:`date`,check:`string_format`,...V(t)})}// @__NO_SIDE_EFFECTS__
function gi(e,t){return new e({type:`string`,format:`time`,check:`string_format`,precision:null,...V(t)})}// @__NO_SIDE_EFFECTS__
function _i(e,t){return new e({type:`string`,format:`duration`,check:`string_format`,...V(t)})}// @__NO_SIDE_EFFECTS__
function vi(e,t){return new e({type:`number`,checks:[],...V(t)})}// @__NO_SIDE_EFFECTS__
function yi(e,t){return new e({type:`number`,check:`number_format`,abort:!1,format:`safeint`,...V(t)})}// @__NO_SIDE_EFFECTS__
function bi(e,t){return new e({type:`boolean`,...V(t)})}// @__NO_SIDE_EFFECTS__
function xi(e){return new e({type:`unknown`})}// @__NO_SIDE_EFFECTS__
function Si(e,t){return new e({type:`never`,...V(t)})}// @__NO_SIDE_EFFECTS__
function Ci(e,t){return new mn({check:`less_than`,...V(t),value:e,inclusive:!1})}// @__NO_SIDE_EFFECTS__
function wi(e,t){return new mn({check:`less_than`,...V(t),value:e,inclusive:!0})}// @__NO_SIDE_EFFECTS__
function Ti(e,t){return new hn({check:`greater_than`,...V(t),value:e,inclusive:!1})}// @__NO_SIDE_EFFECTS__
function Ei(e,t){return new hn({check:`greater_than`,...V(t),value:e,inclusive:!0})}// @__NO_SIDE_EFFECTS__
function Di(e,t){return new gn({check:`multiple_of`,...V(t),value:e})}// @__NO_SIDE_EFFECTS__
function Oi(e,t){return new vn({check:`max_length`,...V(t),maximum:e})}// @__NO_SIDE_EFFECTS__
function ki(e,t){return new yn({check:`min_length`,...V(t),minimum:e})}// @__NO_SIDE_EFFECTS__
function Ai(e,t){return new bn({check:`length_equals`,...V(t),length:e})}// @__NO_SIDE_EFFECTS__
function ji(e,t){return new Sn({check:`string_format`,format:`regex`,...V(t),pattern:e})}// @__NO_SIDE_EFFECTS__
function Mi(e){return new Cn({check:`string_format`,format:`lowercase`,...V(e)})}// @__NO_SIDE_EFFECTS__
function Ni(e){return new wn({check:`string_format`,format:`uppercase`,...V(e)})}// @__NO_SIDE_EFFECTS__
function Pi(e,t){return new Tn({check:`string_format`,format:`includes`,...V(t),includes:e})}// @__NO_SIDE_EFFECTS__
function Fi(e,t){return new En({check:`string_format`,format:`starts_with`,...V(t),prefix:e})}// @__NO_SIDE_EFFECTS__
function Ii(e,t){return new Dn({check:`string_format`,format:`ends_with`,...V(t),suffix:e})}// @__NO_SIDE_EFFECTS__
function Li(e){return new On({check:`overwrite`,tx:e})}// @__NO_SIDE_EFFECTS__
function Ri(e){return/* @__PURE__ */ Li(t=>t.normalize(e))}// @__NO_SIDE_EFFECTS__
function zi(){return/* @__PURE__ */ Li(e=>e.trim())}// @__NO_SIDE_EFFECTS__
function Bi(){return/* @__PURE__ */ Li(e=>e.toLowerCase())}// @__NO_SIDE_EFFECTS__
function Vi(){return/* @__PURE__ */ Li(e=>e.toUpperCase())}// @__NO_SIDE_EFFECTS__
function Hi(){return/* @__PURE__ */ Li(e=>qe(e))}// @__NO_SIDE_EFFECTS__
function Ui(e,t,n){return new e({type:`array`,element:t,...V(n)})}// @__NO_SIDE_EFFECTS__
function Wi(e,t,n){return new e({type:`custom`,check:`custom`,fn:t,...V(n)})}// @__NO_SIDE_EFFECTS__
function Gi(e,t){let n=/* @__PURE__ */ Ki(t=>(t.addIssue=e=>{if(typeof e==`string`)t.issues.push(gt(e,t.value,n._zod.def));else{let r=e;r.fatal&&(r.continue=!1),r.code??=`custom`,r.input??=t.value,r.inst??=n,r.continue??=!n._zod.def.abort,t.issues.push(gt(r))}},e(t.value,t)),t);return n}// @__NO_SIDE_EFFECTS__
function Ki(e,t){let n=new H({check:`custom`,...V(t)});return n._zod.check=e,n}function qi(e){let t=e?.target??`draft-2020-12`;return t===`draft-4`&&(t=`draft-04`),t===`draft-7`&&(t=`draft-07`),{processors:e.processors??{},metadataRegistry:e?.metadata??Wr,target:t,unrepresentable:e?.unrepresentable??`throw`,override:e?.override??(()=>{}),io:e?.io??`output`,counter:0,seen:/* @__PURE__ */ new Map,cycles:e?.cycles??`ref`,reused:e?.reused??`inline`,external:e?.external??void 0}}function G(e,t,n={path:[],schemaPath:[]}){var r;let i=e._zod.def,a=t.seen.get(e);if(a)return a.count++,n.schemaPath.includes(e)&&(a.cycle=n.path),a.schema;let o={schema:{},count:1,cycle:void 0,path:n.path};t.seen.set(e,o);let s=e._zod.toJSONSchema?.();if(s)o.schema=s;else{let r={...n,schemaPath:[...n.schemaPath,e],path:n.path};if(e._zod.processJSONSchema)e._zod.processJSONSchema(t,o.schema,r);else{let n=o.schema,a=t.processors[i.type];if(!a)throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);a(e,t,n,r)}let a=e._zod.parent;a&&(o.ref||=a,G(a,t,r),t.seen.get(a).isParent=!0)}let c=t.metadataRegistry.get(e);return c&&Object.assign(o.schema,c),t.io===`input`&&K(e)&&(delete o.schema.examples,delete o.schema.default),t.io===`input`&&`_prefault`in o.schema&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,t.seen.get(e).schema}function Ji(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=/* @__PURE__ */ new Map;for(let t of e.seen.entries()){let n=e.metadataRegistry.get(t[0])?.id;if(n){let e=r.get(n);if(e&&e!==t[0])throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(n,t[0])}}let i=t=>{let r=e.target===`draft-2020-12`?`$defs`:`definitions`;if(e.external){let n=e.external.registry.get(t[0])?.id,i=e.external.uri??(e=>e);if(n)return{ref:i(n)};let a=t[1].defId??t[1].schema.id??`schema${e.counter++}`;return t[1].defId=a,{defId:a,ref:`${i(`__shared`)}#/${r}/${a}`}}if(t[1]===n)return{ref:`#`};let i=`#/${r}/`,a=t[1].schema.id??`__schema${e.counter++}`;return{defId:a,ref:i+a}},a=e=>{if(e[1].schema.$ref)return;let t=e[1],{ref:n,defId:r}=i(e);t.def={...t.schema},r&&(t.defId=r);let a=t.schema;for(let e in a)delete a[e];a.$ref=n};if(e.cycles===`throw`)for(let t of e.seen.entries()){let e=t[1];if(e.cycle)throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(let n of e.seen.entries()){let r=n[1];if(t===n[0]){a(n);continue}if(e.external){let r=e.external.registry.get(n[0])?.id;if(t!==n[0]&&r){a(n);continue}}if(e.metadataRegistry.get(n[0])?.id){a(n);continue}if(r.cycle){a(n);continue}if(r.count>1&&e.reused===`ref`){a(n);continue}}}function Yi(e,t){let n=e.seen.get(t);if(!n)throw Error(`Unprocessed schema. This is a bug in Zod.`);let r=t=>{let n=e.seen.get(t);if(n.ref===null)return;let i=n.def??n.schema,a={...i},o=n.ref;if(n.ref=null,o){r(o);let n=e.seen.get(o),s=n.schema;if(s.$ref&&(e.target===`draft-07`||e.target===`draft-04`||e.target===`openapi-3.0`)?(i.allOf=i.allOf??[],i.allOf.push(s)):Object.assign(i,s),Object.assign(i,a),t._zod.parent===o)for(let e in i)e!==`$ref`&&e!==`allOf`&&(e in a||delete i[e]);if(s.$ref&&n.def)for(let e in i)e!==`$ref`&&e!==`allOf`&&e in n.def&&JSON.stringify(i[e])===JSON.stringify(n.def[e])&&delete i[e]}let s=t._zod.parent;if(s&&s!==o){r(s);let t=e.seen.get(s);if(t?.schema.$ref&&(i.$ref=t.schema.$ref,t.def))for(let e in i)e!==`$ref`&&e!==`allOf`&&e in t.def&&JSON.stringify(i[e])===JSON.stringify(t.def[e])&&delete i[e]}e.override({zodSchema:t,jsonSchema:i,path:n.path??[]})};for(let t of[...e.seen.entries()].reverse())r(t[0]);let i={};if(e.target===`draft-2020-12`?i.$schema=`https://json-schema.org/draft/2020-12/schema`:e.target===`draft-07`?i.$schema=`http://json-schema.org/draft-07/schema#`:e.target===`draft-04`?i.$schema=`http://json-schema.org/draft-04/schema#`:e.target,e.external?.uri){let n=e.external.registry.get(t)?.id;if(!n)throw Error("Schema is missing an `id` property");i.$id=e.external.uri(n)}Object.assign(i,n.def??n.schema);let a=e.metadataRegistry.get(t)?.id;a!==void 0&&i.id===a&&delete i.id;let o=e.external?.defs??{};for(let t of e.seen.entries()){let e=t[1];e.def&&e.defId&&(e.def.id===e.defId&&delete e.def.id,o[e.defId]=e.def)}e.external||Object.keys(o).length>0&&(e.target===`draft-2020-12`?i.$defs=o:i.definitions=o);try{let n=JSON.parse(JSON.stringify(i));return Object.defineProperty(n,"~standard",{value:{...t[`~standard`],jsonSchema:{input:Zi(t,`input`,e.processors),output:Zi(t,`output`,e.processors)}},enumerable:!1,writable:!1}),n}catch{throw Error(`Error converting schema to JSON.`)}}function K(e,t){let n=t??{seen:/* @__PURE__ */ new Set};if(n.seen.has(e))return!1;n.seen.add(e);let r=e._zod.def;if(r.type===`transform`)return!0;if(r.type===`array`)return K(r.element,n);if(r.type===`set`)return K(r.valueType,n);if(r.type===`lazy`)return K(r.getter(),n);if(r.type===`promise`||r.type===`optional`||r.type===`nonoptional`||r.type===`nullable`||r.type===`readonly`||r.type==="default"||r.type===`prefault`)return K(r.innerType,n);if(r.type===`intersection`)return K(r.left,n)||K(r.right,n);if(r.type===`record`||r.type===`map`)return K(r.keyType,n)||K(r.valueType,n);if(r.type===`pipe`)return e._zod.traits.has(`$ZodCodec`)?!0:K(r.in,n)||K(r.out,n);if(r.type===`object`){for(let e in r.shape)if(K(r.shape[e],n))return!0;return!1}if(r.type===`union`){for(let e of r.options)if(K(e,n))return!0;return!1}if(r.type===`tuple`){for(let e of r.items)if(K(e,n))return!0;return!!(r.rest&&K(r.rest,n))}return!1}let Xi=(e,t={})=>n=>{let r=qi({...n,processors:t});return G(e,r),Ji(r,e),Yi(r,e)},Zi=(e,t,n={})=>r=>{let{libraryOptions:i,target:a}=r??{},o=qi({...i??{},target:a,io:t,processors:n});return G(e,o),Ji(o,e),Yi(o,e)},Qi={guid:`uuid`,url:`uri`,datetime:`date-time`,json_string:`json-string`,regex:``},$i=(e,t,n,r)=>{let i=n;i.type=`string`;let{minimum:a,maximum:o,format:s,patterns:c,contentEncoding:l}=e._zod.bag;if(typeof a==`number`&&(i.minLength=a),typeof o==`number`&&(i.maxLength=o),s&&(i.format=Qi[s]??s,i.format===``&&delete i.format,s===`time`&&delete i.format),l&&(i.contentEncoding=l),c&&c.size>0){let e=[...c];e.length===1?i.pattern=e[0].source:e.length>1&&(i.allOf=[...e.map(e=>({...t.target===`draft-07`||t.target===`draft-04`||t.target===`openapi-3.0`?{type:`string`}:{},pattern:e.source}))])}},ea=(e,t,n,r)=>{let i=n,{minimum:a,maximum:o,format:s,multipleOf:c,exclusiveMaximum:l,exclusiveMinimum:u}=e._zod.bag;i.type=typeof s==`string`&&s.includes(`int`)?`integer`:`number`;let d=typeof u==`number`&&u>=(a??-1/0),f=typeof l==`number`&&l<=(o??1/0),p=t.target===`draft-04`||t.target===`openapi-3.0`;d?p?(i.minimum=u,i.exclusiveMinimum=!0):i.exclusiveMinimum=u:typeof a==`number`&&(i.minimum=a),f?p?(i.maximum=l,i.exclusiveMaximum=!0):i.exclusiveMaximum=l:typeof o==`number`&&(i.maximum=o),typeof c==`number`&&(i.multipleOf=c)},ta=(e,t,n,r)=>{n.type=`boolean`},na=(e,t,n,r)=>{n.not={}},ra=(e,t,n,r)=>{let i=e._zod.def,a=Re(i.entries);a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),n.enum=a},ia=(e,t,n,r)=>{let i=e._zod.def,a=[];for(let e of i.values)if(e===void 0){if(t.unrepresentable===`throw`)throw Error("Literal `undefined` cannot be represented in JSON Schema")}else if(typeof e==`bigint`){if(t.unrepresentable===`throw`)throw Error(`BigInt literals cannot be represented in JSON Schema`);a.push(Number(e))}else a.push(e);if(a.length!==0){if(a.length===1){let e=a[0];n.type=e===null?`null`:typeof e,t.target===`draft-04`||t.target===`openapi-3.0`?n.enum=[e]:n.const=e}else a.every(e=>typeof e==`number`)&&(n.type=`number`),a.every(e=>typeof e==`string`)&&(n.type=`string`),a.every(e=>typeof e==`boolean`)&&(n.type=`boolean`),a.every(e=>e===null)&&(n.type=`null`),n.enum=a}},aa=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Custom types cannot be represented in JSON Schema`)},oa=(e,t,n,r)=>{if(t.unrepresentable===`throw`)throw Error(`Transforms cannot be represented in JSON Schema`)},sa=(e,t,n,r)=>{let i=n,a=e._zod.def,{minimum:o,maximum:s}=e._zod.bag;typeof o==`number`&&(i.minItems=o),typeof s==`number`&&(i.maxItems=s),i.type=`array`,i.items=G(a.element,t,{...r,path:[...r.path,`items`]})},ca=(e,t,n,r)=>{let i=n,a=e._zod.def;i.type=`object`,i.properties={};let o=a.shape;for(let e in o)i.properties[e]=G(o[e],t,{...r,path:[...r.path,`properties`,e]});let s=new Set(Object.keys(o)),c=new Set([...s].filter(e=>{let n=a.shape[e]._zod;return t.io===`input`?n.optin===void 0:n.optout===void 0}));c.size>0&&(i.required=Array.from(c)),a.catchall?._zod.def.type===`never`?i.additionalProperties=!1:a.catchall?a.catchall&&(i.additionalProperties=G(a.catchall,t,{...r,path:[...r.path,`additionalProperties`]})):t.io===`output`&&(i.additionalProperties=!1)},la=(e,t,n,r)=>{let i=e._zod.def,a=i.inclusive===!1,o=i.options.map((e,n)=>G(e,t,{...r,path:[...r.path,a?`oneOf`:`anyOf`,n]}));a?n.oneOf=o:n.anyOf=o},ua=(e,t,n,r)=>{let i=e._zod.def,a=G(i.left,t,{...r,path:[...r.path,`allOf`,0]}),o=G(i.right,t,{...r,path:[...r.path,`allOf`,1]}),s=e=>`allOf`in e&&Object.keys(e).length===1;n.allOf=[...s(a)?a.allOf:[a],...s(o)?o.allOf:[o]]},da=(e,t,n,r)=>{let i=e._zod.def,a=G(i.innerType,t,r),o=t.seen.get(e);t.target===`openapi-3.0`?(o.ref=i.innerType,n.nullable=!0):n.anyOf=[a,{type:`null`}]},fa=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},pa=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.default=JSON.parse(JSON.stringify(i.defaultValue))},ma=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,t.io===`input`&&(n._prefault=JSON.parse(JSON.stringify(i.defaultValue)))},ha=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType;let o;try{o=i.catchValue(void 0)}catch{throw Error(`Dynamic catch values are not supported in JSON Schema`)}n.default=o},ga=(e,t,n,r)=>{let i=e._zod.def,a=i.in._zod.traits.has(`$ZodTransform`),o=t.io===`input`?a?i.out:i.in:i.out;G(o,t,r);let s=t.seen.get(e);s.ref=o},_a=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType,n.readOnly=!0},va=(e,t,n,r)=>{let i=e._zod.def;G(i.innerType,t,r);let a=t.seen.get(e);a.ref=i.innerType},ya=/*@__PURE__*/ I(`ZodISODateTime`,(e,t)=>{Un.init(e,t),Y.init(e,t)});function ba(e){return/* @__PURE__ */ mi(ya,e)}let xa=/*@__PURE__*/ I(`ZodISODate`,(e,t)=>{Wn.init(e,t),Y.init(e,t)});function Sa(e){return/* @__PURE__ */ hi(xa,e)}let Ca=/*@__PURE__*/ I(`ZodISOTime`,(e,t)=>{Gn.init(e,t),Y.init(e,t)});function wa(e){return/* @__PURE__ */ gi(Ca,e)}let Ta=/*@__PURE__*/ I(`ZodISODuration`,(e,t)=>{Kn.init(e,t),Y.init(e,t)});function Ea(e){return/* @__PURE__ */ _i(Ta,e)}let q=/*@__PURE__*/ I(`ZodError`,(e,t)=>{vt.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>xt(e,t)},flatten:{value:t=>bt(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,ze,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,ze,2)}},isEmpty:{get(){return e.issues.length===0}}})},{Parent:Error}),Da=/* @__PURE__ */ St(q),Oa=/* @__PURE__ */ Ct(q),ka=/* @__PURE__ */ wt(q),Aa=/* @__PURE__ */ Et(q),ja=/* @__PURE__ */ Ot(q),Ma=/* @__PURE__ */ kt(q),Na=/* @__PURE__ */ At(q),Pa=/* @__PURE__ */ jt(q),Fa=/* @__PURE__ */ Mt(q),Ia=/* @__PURE__ */ Nt(q),La=/* @__PURE__ */ Pt(q),Ra=/* @__PURE__ */ Ft(q),za=/* @__PURE__ */ new WeakMap;function Ba(e,t,n){let r=Object.getPrototypeOf(e),i=za.get(r);if(i||(i=/* @__PURE__ */ new Set,za.set(r,i)),!i.has(t)){i.add(t);for(let e in n){let t=n[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,get(){let n=t.bind(this);return Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:n}),n},set(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:!0,value:t})}})}}}let J=/*@__PURE__*/ I(`ZodType`,(e,t)=>(U.init(e,t),Object.assign(e[`~standard`],{jsonSchema:{input:Zi(e,`input`),output:Zi(e,`output`)}}),e.toJSONSchema=Xi(e,{}),e.def=t,e.type=t.type,Object.defineProperty(e,"_def",{value:t}),e.parse=(t,n)=>Da(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>ka(e,t,n),e.parseAsync=async(t,n)=>Oa(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>Aa(e,t,n),e.spa=e.safeParseAsync,e.encode=(t,n)=>ja(e,t,n),e.decode=(t,n)=>Ma(e,t,n),e.encodeAsync=async(t,n)=>Na(e,t,n),e.decodeAsync=async(t,n)=>Pa(e,t,n),e.safeEncode=(t,n)=>Fa(e,t,n),e.safeDecode=(t,n)=>Ia(e,t,n),e.safeEncodeAsync=async(t,n)=>La(e,t,n),e.safeDecodeAsync=async(t,n)=>Ra(e,t,n),Ba(e,`ZodType`,{check(...e){let t=this.def;return this.clone(z(t,{checks:[...t.checks??[],...e.map(e=>typeof e==`function`?{_zod:{check:e,def:{check:`custom`},onattach:[]}}:e)]}),{parent:!0})},with(...e){return this.check(...e)},clone(e,t){return B(this,e,t)},brand(){return this},register(e,t){return e.add(this,t),this},refine(e,t){return this.check($o(e,t))},superRefine(e,t){return this.check(es(e,t))},overwrite(e){return this.check(/* @__PURE__ */ Li(e))},optional(){return Fo(this)},exactOptional(){return Lo(this)},nullable(){return zo(this)},nullish(){return Fo(zo(this))},nonoptional(e){return Go(this,e)},array(){return xo(this)},or(e){return wo([this,e])},and(e){return Oo(this,e)},transform(e){return Yo(this,No(e))},default(e){return Vo(this,e)},prefault(e){return Uo(this,e)},catch(e){return qo(this,e)},pipe(e){return Yo(this,e)},readonly(){return Zo(this)},describe(e){let t=this.clone();return Wr.add(t,{description:e}),t},meta(...e){if(e.length===0)return Wr.get(this);let t=this.clone();return Wr.add(t,e[0]),t},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(e){return e(this)}}),Object.defineProperty(e,"description",{get(){return Wr.get(e)?.description},configurable:!0}),e)),Va=/*@__PURE__*/ I(`_ZodString`,(e,t)=>{jn.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>$i(e,t,n,r);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,Ba(e,`_ZodString`,{regex(...e){return this.check(/* @__PURE__ */ ji(...e))},includes(...e){return this.check(/* @__PURE__ */ Pi(...e))},startsWith(...e){return this.check(/* @__PURE__ */ Fi(...e))},endsWith(...e){return this.check(/* @__PURE__ */ Ii(...e))},min(...e){return this.check(/* @__PURE__ */ ki(...e))},max(...e){return this.check(/* @__PURE__ */ Oi(...e))},length(...e){return this.check(/* @__PURE__ */ Ai(...e))},nonempty(...e){return this.check(/* @__PURE__ */ ki(1,...e))},lowercase(e){return this.check(/* @__PURE__ */ Mi(e))},uppercase(e){return this.check(/* @__PURE__ */ Ni(e))},trim(){return this.check(/* @__PURE__ */ zi())},normalize(...e){return this.check(/* @__PURE__ */ Ri(...e))},toLowerCase(){return this.check(/* @__PURE__ */ Bi())},toUpperCase(){return this.check(/* @__PURE__ */ Vi())},slugify(){return this.check(/* @__PURE__ */ Hi())}})}),Ha=/*@__PURE__*/ I(`ZodString`,(e,t)=>{jn.init(e,t),Va.init(e,t),e.email=t=>e.check(/* @__PURE__ */ Kr(Wa,t)),e.url=t=>e.check(/* @__PURE__ */ Qr(qa,t)),e.jwt=t=>e.check(/* @__PURE__ */ pi(co,t)),e.emoji=t=>e.check(/* @__PURE__ */ $r(Ja,t)),e.guid=t=>e.check(/* @__PURE__ */ qr(Ga,t)),e.uuid=t=>e.check(/* @__PURE__ */ Jr(Ka,t)),e.uuidv4=t=>e.check(/* @__PURE__ */ Yr(Ka,t)),e.uuidv6=t=>e.check(/* @__PURE__ */ Xr(Ka,t)),e.uuidv7=t=>e.check(/* @__PURE__ */ Zr(Ka,t)),e.nanoid=t=>e.check(/* @__PURE__ */ ei(Ya,t)),e.guid=t=>e.check(/* @__PURE__ */ qr(Ga,t)),e.cuid=t=>e.check(/* @__PURE__ */ ti(Xa,t)),e.cuid2=t=>e.check(/* @__PURE__ */ ni(Za,t)),e.ulid=t=>e.check(/* @__PURE__ */ ri(Qa,t)),e.base64=t=>e.check(/* @__PURE__ */ ui(ao,t)),e.base64url=t=>e.check(/* @__PURE__ */ di(oo,t)),e.xid=t=>e.check(/* @__PURE__ */ ii($a,t)),e.ksuid=t=>e.check(/* @__PURE__ */ ai(eo,t)),e.ipv4=t=>e.check(/* @__PURE__ */ oi(to,t)),e.ipv6=t=>e.check(/* @__PURE__ */ si(no,t)),e.cidrv4=t=>e.check(/* @__PURE__ */ ci(ro,t)),e.cidrv6=t=>e.check(/* @__PURE__ */ li(io,t)),e.e164=t=>e.check(/* @__PURE__ */ fi(so,t)),e.datetime=t=>e.check(ba(t)),e.date=t=>e.check(Sa(t)),e.time=t=>e.check(wa(t)),e.duration=t=>e.check(Ea(t))});function Ua(e){return/* @__PURE__ */ Gr(Ha,e)}let Y=/*@__PURE__*/ I(`ZodStringFormat`,(e,t)=>{W.init(e,t),Va.init(e,t)}),Wa=/*@__PURE__*/ I(`ZodEmail`,(e,t)=>{Pn.init(e,t),Y.init(e,t)}),Ga=/*@__PURE__*/ I(`ZodGUID`,(e,t)=>{Mn.init(e,t),Y.init(e,t)}),Ka=/*@__PURE__*/ I(`ZodUUID`,(e,t)=>{Nn.init(e,t),Y.init(e,t)}),qa=/*@__PURE__*/ I(`ZodURL`,(e,t)=>{Fn.init(e,t),Y.init(e,t)}),Ja=/*@__PURE__*/ I(`ZodEmoji`,(e,t)=>{In.init(e,t),Y.init(e,t)}),Ya=/*@__PURE__*/ I(`ZodNanoID`,(e,t)=>{Ln.init(e,t),Y.init(e,t)}),Xa=/*@__PURE__*/ I(`ZodCUID`,(e,t)=>{Rn.init(e,t),Y.init(e,t)}),Za=/*@__PURE__*/ I(`ZodCUID2`,(e,t)=>{zn.init(e,t),Y.init(e,t)}),Qa=/*@__PURE__*/ I(`ZodULID`,(e,t)=>{Bn.init(e,t),Y.init(e,t)}),$a=/*@__PURE__*/ I(`ZodXID`,(e,t)=>{Vn.init(e,t),Y.init(e,t)}),eo=/*@__PURE__*/ I(`ZodKSUID`,(e,t)=>{Hn.init(e,t),Y.init(e,t)}),to=/*@__PURE__*/ I(`ZodIPv4`,(e,t)=>{qn.init(e,t),Y.init(e,t)}),no=/*@__PURE__*/ I(`ZodIPv6`,(e,t)=>{Jn.init(e,t),Y.init(e,t)}),ro=/*@__PURE__*/ I(`ZodCIDRv4`,(e,t)=>{Yn.init(e,t),Y.init(e,t)}),io=/*@__PURE__*/ I(`ZodCIDRv6`,(e,t)=>{Xn.init(e,t),Y.init(e,t)}),ao=/*@__PURE__*/ I(`ZodBase64`,(e,t)=>{Qn.init(e,t),Y.init(e,t)}),oo=/*@__PURE__*/ I(`ZodBase64URL`,(e,t)=>{er.init(e,t),Y.init(e,t)}),so=/*@__PURE__*/ I(`ZodE164`,(e,t)=>{tr.init(e,t),Y.init(e,t)}),co=/*@__PURE__*/ I(`ZodJWT`,(e,t)=>{rr.init(e,t),Y.init(e,t)}),lo=/*@__PURE__*/ I(`ZodNumber`,(e,t)=>{ir.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ea(e,t,n,r),Ba(e,`ZodNumber`,{gt(e,t){return this.check(/* @__PURE__ */ Ti(e,t))},gte(e,t){return this.check(/* @__PURE__ */ Ei(e,t))},min(e,t){return this.check(/* @__PURE__ */ Ei(e,t))},lt(e,t){return this.check(/* @__PURE__ */ Ci(e,t))},lte(e,t){return this.check(/* @__PURE__ */ wi(e,t))},max(e,t){return this.check(/* @__PURE__ */ wi(e,t))},int(e){return this.check(po(e))},safe(e){return this.check(po(e))},positive(e){return this.check(/* @__PURE__ */ Ti(0,e))},nonnegative(e){return this.check(/* @__PURE__ */ Ei(0,e))},negative(e){return this.check(/* @__PURE__ */ Ci(0,e))},nonpositive(e){return this.check(/* @__PURE__ */ wi(0,e))},multipleOf(e,t){return this.check(/* @__PURE__ */ Di(e,t))},step(e,t){return this.check(/* @__PURE__ */ Di(e,t))},finite(){return this}});let n=e._zod.bag;e.minValue=Math.max(n.minimum??-1/0,n.exclusiveMinimum??-1/0)??null,e.maxValue=Math.min(n.maximum??1/0,n.exclusiveMaximum??1/0)??null,e.isInt=(n.format??``).includes(`int`)||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});function uo(e){return/* @__PURE__ */ vi(lo,e)}let fo=/*@__PURE__*/ I(`ZodNumberFormat`,(e,t)=>{ar.init(e,t),lo.init(e,t)});function po(e){return/* @__PURE__ */ yi(fo,e)}let mo=/*@__PURE__*/ I(`ZodBoolean`,(e,t)=>{or.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ta(e,t,n,r)});function ho(e){return/* @__PURE__ */ bi(mo,e)}let go=/*@__PURE__*/ I(`ZodUnknown`,(e,t)=>{sr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(e,t,n)=>void 0});function _o(){return/* @__PURE__ */ xi(go)}let vo=/*@__PURE__*/ I(`ZodNever`,(e,t)=>{cr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>na(e,t,n,r)});function yo(e){return/* @__PURE__ */ Si(vo,e)}let bo=/*@__PURE__*/ I(`ZodArray`,(e,t)=>{ur.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>sa(e,t,n,r),e.element=t.element,Ba(e,`ZodArray`,{min(e,t){return this.check(/* @__PURE__ */ ki(e,t))},nonempty(e){return this.check(/* @__PURE__ */ ki(1,e))},max(e,t){return this.check(/* @__PURE__ */ Oi(e,t))},length(e,t){return this.check(/* @__PURE__ */ Ai(e,t))},unwrap(){return this.element}})});function xo(e,t){return/* @__PURE__ */ Ui(bo,e,t)}let So=/*@__PURE__*/ I(`ZodObject`,(e,t)=>{hr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ca(e,t,n,r),R(e,`shape`,()=>t.shape),Ba(e,`ZodObject`,{keyof(){return Ao(Object.keys(this._zod.def.shape))},catchall(e){return this.clone({...this._zod.def,catchall:e})},passthrough(){return this.clone({...this._zod.def,catchall:_o()})},loose(){return this.clone({...this._zod.def,catchall:_o()})},strict(){return this.clone({...this._zod.def,catchall:yo()})},strip(){return this.clone({...this._zod.def,catchall:void 0})},extend(e){return at(this,e)},safeExtend(e){return ot(this,e)},merge(e){return st(this,e)},pick(e){return rt(this,e)},omit(e){return it(this,e)},partial(...e){return ct(Po,this,e[0])},required(...e){return lt(Wo,this,e[0])}})});function X(e,t){let n={type:`object`,shape:e??{},...V(t)};return new So(n)}let Co=/*@__PURE__*/ I(`ZodUnion`,(e,t)=>{_r.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>la(e,t,n,r),e.options=t.options});function wo(e,t){return new Co({type:`union`,options:e,...V(t)})}let To=/*@__PURE__*/ I(`ZodDiscriminatedUnion`,(e,t)=>{Co.init(e,t),vr.init(e,t)});function Eo(e,t,n){return new To({type:`union`,options:t,discriminator:e,...V(n)})}let Do=/*@__PURE__*/ I(`ZodIntersection`,(e,t)=>{yr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ua(e,t,n,r)});function Oo(e,t){return new Do({type:`intersection`,left:e,right:t})}let ko=/*@__PURE__*/ I(`ZodEnum`,(e,t)=>{Sr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ra(e,t,n,r),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(e,r)=>{let i={};for(let r of e)if(n.has(r))i[r]=t.entries[r];else throw Error(`Key ${r} not found in enum`);return new ko({...t,checks:[],...V(r),entries:i})},e.exclude=(e,r)=>{let i={...t.entries};for(let t of e)if(n.has(t))delete i[t];else throw Error(`Key ${t} not found in enum`);return new ko({...t,checks:[],...V(r),entries:i})}});function Ao(e,t){let n=Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e;return new ko({type:`enum`,entries:n,...V(t)})}let jo=/*@__PURE__*/ I(`ZodLiteral`,(e,t)=>{Cr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ia(e,t,n,r),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});function Z(e,t){return new jo({type:`literal`,values:Array.isArray(e)?e:[e],...V(t)})}let Mo=/*@__PURE__*/ I(`ZodTransform`,(e,t)=>{wr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>oa(e,t,n,r),e._zod.parse=(n,r)=>{if(r.direction===`backward`)throw new Ie(e.constructor.name);n.addIssue=r=>{if(typeof r==`string`)n.issues.push(gt(r,n.value,t));else{let t=r;t.fatal&&(t.continue=!1),t.code??=`custom`,t.input??=n.value,t.inst??=e,n.issues.push(gt(t))}};let i=t.transform(n.value,n);return i instanceof Promise?i.then(e=>(n.value=e,n.fallback=!0,n)):(n.value=i,n.fallback=!0,n)}});function No(e){return new Mo({type:`transform`,transform:e})}let Po=/*@__PURE__*/ I(`ZodOptional`,(e,t)=>{Er.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>va(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Fo(e){return new Po({type:`optional`,innerType:e})}let Io=/*@__PURE__*/ I(`ZodExactOptional`,(e,t)=>{Dr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>va(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Lo(e){return new Io({type:`optional`,innerType:e})}let Ro=/*@__PURE__*/ I(`ZodNullable`,(e,t)=>{Or.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>da(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function zo(e){return new Ro({type:`nullable`,innerType:e})}let Bo=/*@__PURE__*/ I(`ZodDefault`,(e,t)=>{kr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>pa(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function Vo(e,t){return new Bo({type:`default`,innerType:e,get defaultValue(){return typeof t==`function`?t():Qe(t)}})}let Ho=/*@__PURE__*/ I(`ZodPrefault`,(e,t)=>{jr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ma(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Uo(e,t){return new Ho({type:`prefault`,innerType:e,get defaultValue(){return typeof t==`function`?t():Qe(t)}})}let Wo=/*@__PURE__*/ I(`ZodNonOptional`,(e,t)=>{Mr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>fa(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Go(e,t){return new Wo({type:`nonoptional`,innerType:e,...V(t)})}let Ko=/*@__PURE__*/ I(`ZodCatch`,(e,t)=>{Pr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ha(e,t,n,r),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function qo(e,t){return new Ko({type:`catch`,innerType:e,catchValue:typeof t==`function`?t:()=>t})}let Jo=/*@__PURE__*/ I(`ZodPipe`,(e,t)=>{Fr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>ga(e,t,n,r),e.in=t.in,e.out=t.out});function Yo(e,t){return new Jo({type:`pipe`,in:e,out:t})}let Xo=/*@__PURE__*/ I(`ZodReadonly`,(e,t)=>{Lr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>_a(e,t,n,r),e.unwrap=()=>e._zod.def.innerType});function Zo(e){return new Xo({type:`readonly`,innerType:e})}let Qo=/*@__PURE__*/ I(`ZodCustom`,(e,t)=>{zr.init(e,t),J.init(e,t),e._zod.processJSONSchema=(t,n,r)=>aa(e,t,n,r)});function $o(e,t={}){return/* @__PURE__ */ Wi(Qo,e,t)}function es(e,t){return/* @__PURE__ */ Gi(e,t)}let ts=[`selection_empty`,`selection_outside_conversation`,`selection_not_model_visible`,`selection_too_large`,`selection_stale`,`selection_crosses_unsupported_nodes`,`parent_session_missing`,`parent_session_not_ready`,`context_unavailable`,`context_too_large`,`side_chat_already_open`,`side_chat_not_found`,`side_chat_prompt_failed`,`side_chat_model_failed`,`side_chat_interrupt_failed`,`side_chat_destroy_failed`,`transport_error`,`invalid_request`,`internal_error`],Q=Ua().min(1).max(512),ns=X({provider:Q,model:Q,reasoningEffort:Q.optional()}).strict(),rs=X({code:Ao(ts),message:Ua(),recoverable:ho()}).strict(),is=X({parentSessionId:Q,atSeq:uo().int().nonnegative(),selectedText:Ua().max(16384).optional(),modelSelection:ns.optional()}).strict(),as=X({chatId:Q}).strict(),os=X({chatId:Q,provider:Q,model:Q,reasoningEffort:Q.optional()}).strict(),ss=X({chatId:Q,requestId:Q,text:Ua().min(1).max(65536)}).strict();function cs(e){return Eo(`ok`,[X({ok:Z(!0),value:e}).strict(),X({ok:Z(!1),error:rs}).strict()])}let ls=cs(X({parentSessionId:Q,chatId:Q,boundarySeq:uo().int().nonnegative(),modelSelection:ns}).strict()),us=cs(X({selected:ns}).strict()),ds=cs(X({closed:Z(!0)}).strict()),fs=cs(X({cancelled:Z(!0)}).strict()),ps=Eo(`type`,[X({type:Z(`started`),requestId:Q,modelSelection:ns}).strict(),X({type:Z(`content`),text:Ua(),reasoning:Ua()}).strict(),X({type:Z(`finished`),status:Ao([`complete`,`stopped`])}).strict(),X({type:Z(`error`),error:rs}).strict()]);function ms(e,t,n,r,i,a={}){return{id:`@ahggg/dsh-side-chat#sideChat/${e}`,service:`sideChat`,namespace:`sideChat`,method:e,implementation:e,invocation:{kind:`direct`},...a.stream?{mode:`stream`}:{},...a.cancellation?{cancellation:{parameter:`signal`}}:{},parameters:[{name:`request`,wire:`request`,source:`json`,codec:{mode:`strict`,typeSymbol:`@ahggg/dsh-side-chat/remote#${t}`,create:()=>r}}],result:{mode:`strict`,typeSymbol:`@ahggg/dsh-side-chat/remote#${n}`,create:()=>i},sourceLocation:{file:`src/index.ts`,line:1,column:1}}}let hs={package:`@ahggg/dsh-side-chat`,descriptors:[ms(`create`,`CreateSideChatRequest`,`CreateResult`,is,ls,{cancellation:!0}),ms(`selectModel`,`SelectSideChatModelRequest`,`SelectModelResult`,os,us,{cancellation:!0}),ms(`stream`,`SendSideChatRequest`,`SideChatStreamEvent`,ss,ps,{stream:!0,cancellation:!0}),ms(`cancel`,`ChatRequest`,`CancelResult`,as,fs),ms(`close`,`ChatRequest`,`CloseResult`,as,ds)]};function gs(e){let t=e.code,n=t===`bad-request`||t===`gateway/bad-request`;return{code:n?`invalid_request`:`transport_error`,message:e.message||`The Side Chat RPC failed.`,recoverable:!n}}async function _s(e){let t=await e;return t.ok?t.value:{ok:!1,error:gs(t.error)}}async function vs(e){let t=await e.remote.$mount(hs),n=e.get(`remote.sideChat`);return{remote:{create:e=>_s(n.create(e)),selectModel:e=>_s(n.selectModel(e)),stream:e=>n.stream(e),cancel:e=>_s(n.cancel(e)),close:e=>_s(n.close(e))},dispose:t}}let ys={en:{selectModel:`Select model`,menu:`Model and reasoning effort`,model:`Model`,effort:`Effort`,providerDefault:`Default`,loading:`Refreshing model list…`,reload:`Reload`,emptyModels:`No models available.`,emptyEfforts:`This model provides no reasoning effort levels.`,nextReply:`Changes apply to the next reply and future Side Chats.`,aria:(e,t)=>t===void 0?`Select model, current ${e}`:`Select model, current ${e}, reasoning effort ${t}`,operationFailed:e=>`Model operation failed: ${e}`,groupFailed:(e,t)=>`${e} failed to load: ${t}`},"zh-CN":{selectModel:`选择模型`,menu:`模型与推理等级`,model:`模型`,effort:`推理等级`,providerDefault:`Default`,loading:`正在刷新模型列表…`,reload:`重新加载`,emptyModels:`没有可用的模型。`,emptyEfforts:`当前模型未提供推理等级。`,nextReply:`修改将用于下一次回复及之后新开的侧边对话。`,aria:(e,t)=>t===void 0?`选择模型，当前 ${e}`:`选择模型，当前 ${e}，推理等级 ${t}`,operationFailed:e=>`模型操作失败：${e}`,groupFailed:(e,t)=>`${e} 加载失败：${t}`}};function bs(e,t,n){return e?.provider===t&&e.model===n}function xs(e,t){return e.provider===t.provider&&e.model===t.model&&e.reasoningEffort===t.reasoningEffort}function Ss(e,t,n){let r=t.find(t=>bs(e,t.group.id,t.model.id));if(r===void 0)return n;let i=r.model.reasoning;return i===void 0?{provider:e.provider,model:e.model}:e.reasoningEffort===void 0||i.efforts.some(t=>t.id===e.reasoningEffort)?e:{provider:e.provider,model:e.model,...i.defaultEffort===void 0?{}:{reasoningEffort:i.defaultEffort}}}function Cs({directory:e,selection:t,locked:n,running:o=!1,validateInitialSelection:s=!0,locale:c=`en`,onInitialize:l,onSelect:u}){let d=ys[c],f=(0,r.useSyncExternalStore)(t=>e.store.subscribe(t),()=>e.store.getSnapshot(),()=>e.store.getSnapshot()),[p,m]=(0,r.useState)(!1),[h,g]=(0,r.useState)(`root`),[_,v]=(0,r.useState)(!1),[y,b]=(0,r.useState)(null),x=(0,r.useRef)(null),S=(0,r.useRef)(null),C=(0,r.useRef)([]),w=(0,r.useRef)(!1),ee=(0,r.useRef)(0),te=(0,r.useRef)(0),T=(0,r.useRef)(!1),ne=(0,r.useId)(),re=(0,r.useMemo)(()=>f.groups.flatMap(e=>e.models.map(t=>({group:e,model:t}))),[f.groups]),E=t??f.current??void 0,ie=re.find(e=>bs(E,e.group.id,e.model.id)),D=ie?.model.reasoning,O=E?.reasoningEffort??D?.defaultEffort,k=D===void 0?void 0:O===void 0?d.providerDefault:D.efforts.find(e=>e.id===O)?.name??O,ae=(0,r.useMemo)(()=>D===void 0?[]:[...D.defaultEffort===void 0?[{key:`provider-default`,effort:void 0,label:d.providerDefault}]:[],...D.efforts.map(e=>({key:`effort:${e.id}`,effort:e.id,label:e.name,...e.description===void 0?{}:{description:e.description}}))],[d.providerDefault,D]),A=ie?.model.name??E?.model??d.selectModel,oe=k===void 0?A:`${A} · ${k}`,se=()=>{e.load().catch(()=>void 0)};(0,r.useEffect)(()=>(w.current=!1,se(),()=>{++ee.current}),[e]),(0,r.useEffect)(()=>{n&&m(!1)},[n]),(0,r.useEffect)(()=>{if(w.current||n)return;if(t!==void 0&&!s){w.current=!0;return}if(f.current===null)return;let e={provider:f.current.provider,model:f.current.model,...f.current.reasoningEffort===void 0?{}:{reasoningEffort:f.current.reasoningEffort}};if(t===void 0){w.current=!0,l(e,{remember:!1});return}if(f.status!==`ready`||f.error!==null||f.failures.length>0)return;w.current=!0;let r=Ss(t,re,e);xs(t,r)||l(r,{remember:!0})},[re,n,l,t,f.current,f.status,f.error,f.failures,s]),(0,r.useEffect)(()=>{if(!p)return;let e=e=>{x.current?.contains(e.target)||m(!1)};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[p]);let ce=()=>{g(`root`),m(!0),se()},j=(e=!1)=>{m(!1),g(`root`),e&&queueMicrotask(()=>{S.current?.focus()})},le=e=>{let t=C.current.filter(e=>e!==null);if(t.length===0)return;let n=t.findIndex(e=>e===document.activeElement);t[(Math.max(n,0)+e+t.length)%t.length]?.focus()},ue=e=>{if(e.key===`Escape`&&p){e.preventDefault(),e.stopPropagation(),h===`root`?j(!0):g(`root`);return}!p||e.key!==`ArrowDown`&&e.key!==`ArrowUp`||(e.preventDefault(),le(e.key===`ArrowDown`?1:-1))},de=e=>{e.relatedTarget instanceof Node&&x.current?.contains(e.relatedTarget)||j()},fe=async e=>{if(n||T.current)return;let t=++ee.current;T.current=!0,v(!0);try{let n=await u(e);if(t!==ee.current)return;if(!n.ok)throw Error(n.error.message);j(!0)}catch(e){if(t!==ee.current)return;b({seq:++te.current,text:d.operationFailed(e instanceof Error?e.message:`Could not select the model.`)})}finally{T.current=!1,t===ee.current&&v(!1)}},pe=(e,t)=>{if(bs(E,e.id,t.id)){j(!0);return}fe({provider:e.id,model:t.id,...t.reasoning?.defaultEffort===void 0?{}:{reasoningEffort:t.reasoning.defaultEffort}})},me=e=>{E!==void 0&&fe({provider:E.provider,model:E.model,...e===void 0?{}:{reasoningEffort:e}})};C.current=[];let he=0,ge=()=>{let e=he++;return t=>{C.current[e]=t}};return/* @__PURE__ */ (0,a.jsxs)(`div`,{ref:x,className:`dsh-side-chat-model-root`,"data-side-chat-model-select":``,onKeyDown:ue,onBlur:de,children:[/* @__PURE__ */ (0,a.jsxs)(`button`,{ref:S,type:`button`,className:`dsh-side-chat-model-trigger`,"aria-label":d.aria(A,k),"aria-haspopup":`menu`,"aria-expanded":p,"aria-controls":p?`${ne}-menu`:void 0,title:oe,disabled:n,onClick:()=>{p?j():ce()},children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-trigger-label`,children:A}),k!==void 0&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-trigger-effort`,children:k}),/* @__PURE__ */ (0,a.jsx)(i.IconChevronDownOutlineRegular,{className:`dsh-side-chat-model-chevron${p?` dsh-side-chat-model-chevron-open`:``}`})]}),p&&/* @__PURE__ */ (0,a.jsxs)(`div`,{id:`${ne}-menu`,className:`dsh-side-chat-model-menu`,role:`menu`,"aria-label":d.menu,"aria-busy":f.status===`loading`||_,children:[o&&/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-model-status`,children:d.nextReply}),h===`root`&&/* @__PURE__ */ (0,a.jsxs)(a.Fragment,{children:[/* @__PURE__ */ (0,a.jsxs)(`button`,{ref:ge(),type:`button`,role:`menuitem`,className:`dsh-side-chat-model-cell`,onClick:()=>{g(`model`)},children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-cell-label`,children:d.model}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-cell-value`,children:A}),/* @__PURE__ */ (0,a.jsx)(i.IconChevronRightOutlineRegular,{className:`dsh-side-chat-model-cell-chevron`})]}),D!==void 0&&/* @__PURE__ */ (0,a.jsxs)(`button`,{ref:ge(),type:`button`,role:`menuitem`,className:`dsh-side-chat-model-cell`,onClick:()=>{g(`effort`)},children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-cell-label`,children:d.effort}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-cell-value`,children:k}),/* @__PURE__ */ (0,a.jsx)(i.IconChevronRightOutlineRegular,{className:`dsh-side-chat-model-cell-chevron`})]})]}),h===`model`&&/* @__PURE__ */ (0,a.jsxs)(a.Fragment,{children:[f.status===`loading`&&/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-model-status`,children:d.loading}),f.error!==null&&/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-model-error`,role:`alert`,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{children:d.operationFailed(f.error)}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:`dsh-side-chat-model-retry`,onClick:se,children:d.reload})]}),f.failures.map(e=>/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-model-warning`,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{children:d.groupFailed(e.name,e.message)}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:`dsh-side-chat-model-retry`,onClick:se,children:d.reload})]},e.id)),/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-model-groups scrollable`,children:f.groups.map(e=>{let t=`${ne}-${e.id}`;return/* @__PURE__ */ (0,a.jsxs)(`section`,{role:`group`,"aria-labelledby":t,className:`dsh-side-chat-model-group`,children:[/* @__PURE__ */ (0,a.jsx)(`div`,{id:t,className:`dsh-side-chat-model-group-title`,children:e.name}),e.models.map(t=>{let r=bs(E,e.id,t.id);return/* @__PURE__ */ (0,a.jsxs)(`button`,{ref:ge(),type:`button`,role:`menuitemradio`,"aria-checked":r,className:`dsh-side-chat-model-option${r?` dsh-side-chat-model-selected`:``}`,title:t.name,disabled:n||_,onClick:()=>{pe(e,t)},children:[/* @__PURE__ */ (0,a.jsxs)(`span`,{className:`dsh-side-chat-model-option-copy`,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-name`,children:t.name}),t.description!==void 0&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-description`,children:t.description})]}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-check`,children:r?/* @__PURE__ */ (0,a.jsx)(i.IconCheckOutlineRegular,{}):null})]},t.id)})]},e.id)})}),f.status===`ready`&&re.length===0&&/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-model-empty`,children:d.emptyModels})]}),h===`effort`&&(ae.length===0?/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-model-empty`,children:d.emptyEfforts}):ae.map(e=>{let t=O===e.effort;return/* @__PURE__ */ (0,a.jsxs)(`button`,{ref:ge(),type:`button`,role:`menuitemradio`,"aria-checked":t,className:`dsh-side-chat-model-option${t?` dsh-side-chat-model-selected`:``}`,disabled:n||_,onClick:()=>{me(e.effort)},children:[/* @__PURE__ */ (0,a.jsxs)(`span`,{className:`dsh-side-chat-model-option-copy`,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-name`,children:e.label}),e.description!==void 0&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-description`,children:e.description})]}),/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-model-check`,children:t?/* @__PURE__ */ (0,a.jsx)(i.IconCheckOutlineRegular,{}):null})]},e.key)}))]}),y!==null&&/* @__PURE__ */ (0,a.jsx)(i.Toast,{text:y.text,icon:/* @__PURE__ */ (0,a.jsx)(i.IconWarningOutlineRegular,{}),anchor:x.current?.closest(`[data-composer-card]`)??null,onDone:()=>{b(null)}},y.seq)]})}function ws(){return/* @__PURE__ */ (0,a.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`16`,height:`16`,"aria-hidden":`true`,children:/* @__PURE__ */ (0,a.jsx)(`path`,{d:`M8.3125 0.980183C8.66767 1.0531 8.97902 1.20418 9.2627 1.43233C9.48724 1.61297 9.73029 1.85793 9.97949 2.10714L14.707 6.83468L13.293 8.24874L9 3.95577V15.0417H7V3.95577L2.70703 8.24874L1.29297 6.83468L6.02051 2.10714C6.26971 1.85793 6.51277 1.61297 6.7373 1.43233C6.97662 1.23986 7.28445 1.04402 7.6875 0.980183C7.8973 0.947006 8.1031 0.95516 8.3125 0.980183Z`,fill:`currentColor`})})}function Ts({children:e}){return/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-body`,children:e})}function Es({error:e,messages:t,onRetry:n}){return/* @__PURE__ */ (0,a.jsxs)(`section`,{className:`dsh-side-chat-error`,role:`alert`,children:[/* @__PURE__ */ (0,a.jsx)(`strong`,{children:e.operation===`close`?t.closeError:t.genericError}),/* @__PURE__ */ (0,a.jsx)(`p`,{children:e.message}),e.recoverable&&/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,onClick:n,children:t.retry})]})}function Ds(e){let t=(0,r.useRef)(null);return(0,r.useLayoutEffect)(()=>{let e=t.current;if(e===null)return;e.style.height=`auto`;let n=Number.parseFloat(getComputedStyle(e).maxHeight),r=Number.isFinite(n)?Math.min(e.scrollHeight,n):e.scrollHeight;e.style.height=`${String(r)}px`,e.style.overflowY=Number.isFinite(n)&&e.scrollHeight>n?`auto`:`hidden`},[e]),t}function Os({state:e,locale:t=`en`,embeddedConversation:n,modelControl:o,onDraftChange:s,onFirstSend:c,onClose:l,onRetry:u,onAddToConversation:d,addToConversationDisabled:f,onRemoveSelection:p}){let m=O[t],[h,g]=(0,r.useState)(!1),_=Ds(e.draft),v=async t=>{if(t.preventDefault(),!(h||[`creating`,`running`,`closing`].includes(e.phase))){g(!0);try{await c(e.draft)}finally{g(!1)}}};return/* @__PURE__ */ (0,a.jsxs)(`aside`,{className:`dsh-side-chat-panel`,"data-side-chat-panel":``,"aria-label":m.title,"aria-busy":[`creating`,`closing`].includes(e.phase)||void 0,onKeyDown:e=>{e.key===`Escape`&&!e.defaultPrevented&&!e.nativeEvent.isComposing&&(e.preventDefault(),e.stopPropagation(),l())},children:[e.messages.length>0&&d&&/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-toolbar`,children:/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,disabled:f,onClick:d,children:m.addToConversation})}),e.messages.length===0&&/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-empty`,children:[/* @__PURE__ */ (0,a.jsx)(i.IconNewChatOutlineRegular,{size:32}),/* @__PURE__ */ (0,a.jsx)(`strong`,{children:m.title}),/* @__PURE__ */ (0,a.jsx)(`span`,{children:t===`zh-CN`?`侧边聊天是临时聊天，关闭或刷新后会消失。`:`Side chats are temporary and disappear when closed or reloaded.`})]}),e.error!==void 0&&/* @__PURE__ */ (0,a.jsx)(Es,{error:e.error,messages:m,onRetry:()=>{u()}}),e.messages.length>0&&n!==void 0?/* @__PURE__ */ (0,a.jsx)(Ts,{children:n}):/* @__PURE__ */ (0,a.jsxs)(`form`,{className:`dsh-side-chat-draft`,"data-composer-card":``,onSubmit:e=>{v(e)},children:[e.selection!==void 0&&/* @__PURE__ */ (0,a.jsx)(k,{selections:[e.selection],messages:m,...p===void 0?{}:{onRemove:p}}),/* @__PURE__ */ (0,a.jsx)(`label`,{htmlFor:`dsh-side-chat-draft-input`,children:m.placeholder}),/* @__PURE__ */ (0,a.jsx)(`textarea`,{id:`dsh-side-chat-draft-input`,ref:_,autoFocus:!0,rows:1,value:e.draft,disabled:[`creating`,`running`,`closing`].includes(e.phase),placeholder:m.placeholder,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&e.keyCode!==229&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-draft-actions`,children:[o,/* @__PURE__ */ (0,a.jsx)(`button`,{type:`submit`,className:`dsh-side-chat-send-button`,"aria-label":m.send,disabled:h||[`creating`,`running`,`closing`].includes(e.phase)||e.draft.trim().length===0,children:/* @__PURE__ */ (0,a.jsx)(ws,{})})]})]}),/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-announcer`,"aria-live":`polite`,children:e.phase===`running`?`Side Chat running`:`Side Chat ${e.phase}`})]})}function ks(e){return(e.nodeType===Node.ELEMENT_NODE?e:e.parentElement)?.closest(`[data-chat-anchor-key]`)??null}function As(e,t){let n=e.parentElement;return n===null||!t.contains(n)||n.closest([`[data-selection-exclude]`,`[data-side-chat-panel]`,`[aria-hidden="true"]`,`[hidden]`,`[inert]`,`script`,`style`,`button`,`textarea`,`input`,`[role="button"]`].join(`,`))!==null}function js(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),i=r.nextNode();for(;i!==null;){let a=i;!As(a,t)&&ks(a)===e&&n.push(a),i=r.nextNode()}return n}function Ms(e,t){if(!e.intersectsNode(t))return;let n=e.startContainer===t?e.startOffset:0,r=e.endContainer===t?e.endOffset:t.data.length;if(n>0&&/[\uDC00-\uDFFF]/u.test(t.data[n]??``)&&/[\uD800-\uDBFF]/u.test(t.data[n-1]??``)&&--n,r>0&&r<t.data.length&&/[\uD800-\uDBFF]/u.test(t.data[r-1]??``)&&/[\uDC00-\uDFFF]/u.test(t.data[r]??``)&&(r+=1),!(r<=n))return{start:n,end:r,text:t.data.slice(n,r)}}async function Ns(e){let t=e.selection?.rangeCount===1?e.selection.getRangeAt(0):void 0;if(t===void 0||t.collapsed)throw new M(`selection_empty`,`Select some conversation text first.`);if(!e.conversationRoot.contains(t.startContainer)||!e.conversationRoot.contains(t.endContainer))throw new M(`selection_outside_conversation`,`The selection must stay inside the current conversation.`);let n=ks(t.startContainer),r=ks(t.endContainer);if(n===null||r===null||n!==r)throw new M(`selection_crosses_unsupported_nodes`,`Select a passage inside one message.`);let i=e.resolver.resolve(n);if(i===void 0)throw new M(`selection_stale`,`The selected message is no longer in the Session snapshot.`);let a=js(n,e.conversationRoot),o=[],s,c,l=0;for(let e of a){let n=Ms(t,e);n!==void 0&&(s??=l+n.start,c=l+n.end,o.push(n.text)),l+=e.data.length}if(s===void 0||c===void 0)throw new M(`selection_not_model_visible`,`The selection contains no supported visible text.`);let u=t.getBoundingClientRect();return await Ae({parentSessionId:e.parentSessionId,fragments:[{...i,startOffset:s,endOffset:c,text:o.join(``)}],rawText:o.join(``),rect:{x:u.x,y:u.y,width:u.width,height:u.height,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight}})}function Ps(e,t){return[...e.querySelectorAll(`[data-chat-anchor-key]`)].find(e=>e.dataset.chatAnchorKey===t)}function Fs(e,t){let n=Ps(e,t.nodeKey);if(n===void 0)return;let r=js(n,e),i=r.map(e=>e.data).join(``);if(!Number.isSafeInteger(t.startOffset)||!Number.isSafeInteger(t.endOffset)||t.startOffset<0||t.endOffset<=t.startOffset||t.endOffset>i.length||i.slice(t.startOffset,t.endOffset)!==t.text)return;let a=[],o=0;for(let e of r){let n=o+e.data.length,r=Math.max(t.startOffset,o)-o,i=Math.min(t.endOffset,n)-o;if(i>r){let t=document.createRange();t.setStart(e,r),t.setEnd(e,i),a.push(t)}if(o=n,o>=t.endOffset)break}return a.length===0?void 0:a}function Is(e){let t=[];for(let n of e.selection.fragments){let r=Fs(e.conversationRoot,n);if(r===void 0)return;t.push(...r)}let n=t[0],r=t.at(-1);if(n===void 0||r===void 0)return;let i=document.createRange();return i.setStart(n.startContainer,n.startOffset),i.setEnd(r.endContainer,r.endOffset),{ranges:t,browserRange:i}}function Ls(e){return[...document.querySelectorAll(`[data-conversation-session]`)].find(t=>t.dataset.conversationSession===e&&t.closest(`[data-side-chat-panel], [hidden], [aria-hidden="true"]`)===null)}function Rs(e){return Ls(e)?.querySelector(`[data-chat-flow]`)??void 0}function zs(e){window.requestAnimationFrame(()=>{let t=Ls(e)?.querySelector([`[data-composer-seat] textarea`,`[data-composer-seat] [role="textbox"]`,`[data-composer-seat] [contenteditable="true"]`].join(`, `));t!=null&&(t.focus(),t instanceof HTMLTextAreaElement&&t.setSelectionRange(t.value.length,t.value.length))})}let Bs=`dsh-side-chat-annotations`,Vs=`dsh-side-chat-active-annotation`;function Hs(e,t,n){return Math.min(Math.max(t,e),Math.max(t,n))}function Us(e){let t=Number.isFinite(e.left)?e.left:e.x,n=Number.isFinite(e.top)?e.top:e.y,r=Number.isFinite(e.right)?e.right:t+e.width,i=Number.isFinite(e.bottom)?e.bottom:n+e.height;return[t,n,r,i].every(Number.isFinite)?{left:t,top:n,right:r,bottom:i}:void 0}function Ws(e){let t=[];for(let n of e){let e=typeof n.getClientRects==`function`?[...n.getClientRects()]:[],r=e.length>0?e:typeof n.getBoundingClientRect==`function`?[n.getBoundingClientRect()]:[];for(let e of r){let n=Us(e);n!==void 0&&(n.right>n.left||n.bottom>n.top)&&t.push(n)}}if(t.length!==0)return{left:Math.min(...t.map(e=>e.left)),top:Math.min(...t.map(e=>e.top)),right:Math.max(...t.map(e=>e.right)),bottom:Math.max(...t.map(e=>e.bottom))}}function Gs(e){return{x:e.left,y:e.top,width:e.right-e.left,height:e.bottom-e.top,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight}}function Ks(e){let t={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},n=e.startContainer,r=(n.nodeType===Node.ELEMENT_NODE?n:n.parentElement)?.closest(`[data-conversation-scroll]`);if(r==null)return t;let i=Us(r.getBoundingClientRect());i!==void 0&&i.right>i.left&&i.bottom>i.top&&(t={left:Math.max(t.left,i.left),top:Math.max(t.top,i.top),right:Math.min(t.right,i.right),bottom:Math.min(t.bottom,i.bottom)});let a=r.querySelector(`[data-composer-seat]`),o=a===null?void 0:Us(a.getBoundingClientRect());return o!==void 0&&o.right>o.left&&o.bottom>o.top&&o.bottom>t.top&&o.top<t.bottom&&(t={...t,bottom:Math.min(t.bottom,o.top)}),t}function qs(e,t){return e.right>t.left&&e.bottom>t.top&&e.left<t.right&&e.top<t.bottom}function Js(e,t){return e.length===t.length&&e.every((e,n)=>{let r=t[n];return r!==void 0&&r.annotationIndex===e.annotationIndex&&r.left===e.left&&r.top===e.top})}function Ys(){typeof CSS<`u`&&CSS.highlights!==void 0&&(CSS.highlights.delete(Bs),CSS.highlights.delete(Vs))}function Xs(e,t){if(typeof CSS>`u`||CSS.highlights===void 0||typeof Highlight>`u`)return;if(CSS.highlights.set(Bs,new Highlight(...e)),t.length===0){CSS.highlights.delete(Vs);return}let n=new Highlight(...t);n.priority=1,CSS.highlights.set(Vs,n)}function Zs(e){let t=window.getSelection();t!==null&&(t.removeAllRanges(),t.addRange(e))}function Qs({annotations:e,activeAnnotationIndex:t,onEdit:n}){let i=(0,r.useRef)(/* @__PURE__ */ new Map),[o,s]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(e.length===0){i.current.clear(),s(e=>e.length===0?e:[]),Ys();return}let n,r=null,a,o=()=>{n=void 0;let o=e[0]?.selection.parentSessionId,c=o===void 0?null:Rs(o)??null;c!==r&&(a?.disconnect(),r=c,c!==null&&a?.observe(c));let l=/* @__PURE__ */ new Map,u=[],d=[],f=[];if(c!==null)for(let n of e){if(n.selection.parentSessionId!==o)continue;let e=Is({selection:n.selection,conversationRoot:c});if(e===void 0)continue;d.push(...e.ranges),n.annotationIndex===t&&f.push(...e.ranges);let r=Ws(e.ranges),i=Ks(e.browserRange);if(r===void 0||!qs(r,i))continue;let a=Gs(r);l.set(n.annotationIndex,{browserRange:e.browserRange,rect:a}),u.push({annotationIndex:n.annotationIndex,left:Hs(r.right+3,i.left+4,i.right-26),top:Hs(r.top-12,i.top+4,i.bottom-26)})}i.current=l,s(e=>Js(e,u)?e:u),Xs(d,f)},c=()=>{n===void 0&&(n=window.requestAnimationFrame(o))};a=typeof ResizeObserver>`u`?void 0:new ResizeObserver(c),o();let l=new MutationObserver(c);return l.observe(document.body,{childList:!0,characterData:!0,subtree:!0}),document.addEventListener(`scroll`,c,!0),window.addEventListener(`resize`,c),()=>{n!==void 0&&window.cancelAnimationFrame(n),l?.disconnect(),a?.disconnect(),document.removeEventListener(`scroll`,c,!0),window.removeEventListener(`resize`,c),Ys()}},[t,e]),o.map(r=>{let o=e.find(e=>e.annotationIndex===r.annotationIndex);if(o===void 0)return null;let s={left:r.left,top:r.top},c=o.annotationIndex+1,l=c>99?`99+`:String(c);return/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,className:`dsh-side-chat-annotation-marker`,style:s,"data-active":o.annotationIndex===t||void 0,"data-large":c>99||void 0,"aria-label":`Edit annotation ${String(c)}`,title:`Edit annotation ${String(c)}`,onMouseDown:e=>{e.preventDefault(),e.stopPropagation()},onClick:()=>{let e=i.current.get(o.annotationIndex);e!==void 0&&(Zs(e.browserRange),n(o,{...o.selection,rect:e.rect}),window.requestAnimationFrame(()=>{Zs(e.browserRange)}))},children:l},`${o.selection.parentSessionId}:${o.selection.fragments[0]?.nodeKey??``}:${String(o.annotationIndex)}`)})}function $s(e,t,n){return Math.min(Math.max(t,e),Math.max(t,n))}function ec(e,t,n,r={width:e.viewportWidth,height:e.viewportHeight}){let i=Math.max(0,t.width),a=Math.max(0,t.height),o=r.offsetLeft??0,s=r.offsetTop??0,c=o+r.width,l=s+r.height,u=$s(e.x+e.width/2-i/2,o+8,c-i-8),d=n?12:8,f=n?64:8,p=e.y+e.height+d,m=e.y-a-f,h=p+a<=l-8,g=m>=s+8,_;return _=h?p:g||e.y-f-s-8>=l-8-e.y-e.height-d?m:p,{left:u,top:$s(_,s+8,l-a-8)}}function tc({selection:e,touchInteraction:t=!1,askDisabledReason:n,annotationNumber:i=1,annotationEditor:o,onAddToChat:s,onMoreDetails:c,onAskInSideChat:l,onAnnotationEditorChange:u,onRemoveAnnotation:d,onDismiss:f}){let[p,m]=(0,r.useState)(o!==void 0),[h,g]=(0,r.useState)(o?.initialComment??``),[_,v]=(0,r.useState)(()=>({width:0,height:0})),[y,b]=(0,r.useState)(()=>({width:e.rect.viewportWidth,height:e.rect.viewportHeight,offsetLeft:0,offsetTop:0})),x=(0,r.useRef)(null),S=(0,r.useRef)(null),C=(0,r.useRef)(null),w=ec(e.rect,_,t,y),ee={left:w.left,top:w.top},te=y.offsetLeft,T=y.offsetTop,ne=te+y.width,re=T+y.height,E=Math.max(0,Math.min(420,y.width-16)),ie=e.rect.y-118,D=e.rect.y+e.rect.height+12,O={left:$s(e.rect.x+e.rect.width+28,te+8,ne-E-8),top:$s(ie>=T+8?ie:D,T+8,re-118-8),width:E},k={left:$s(e.rect.x+e.rect.width+3,te+4,ne-22-4),top:$s(e.rect.y-12,T+4,re-22-4)},ae=i>99?`99+`:String(i),A=e=>{e.preventDefault()};(0,r.useLayoutEffect)(()=>{let t=window.visualViewport,n=()=>{let n={width:t?.width??window.innerWidth??e.rect.viewportWidth,height:t?.height??window.innerHeight??e.rect.viewportHeight,offsetLeft:t?.offsetLeft??0,offsetTop:t?.offsetTop??0};b(e=>e.width===n.width&&e.height===n.height&&e.offsetLeft===n.offsetLeft&&e.offsetTop===n.offsetTop?e:n);let r=S.current;if(r===null)return;let i=r.getBoundingClientRect(),a={width:i.width,height:i.height};v(e=>e.width===a.width&&e.height===a.height?e:a)};n();let r=S.current,i=typeof ResizeObserver>`u`?void 0:new ResizeObserver(n);return r!==null&&i?.observe(r),window.addEventListener(`resize`,n),t?.addEventListener(`resize`,n),t?.addEventListener(`scroll`,n),()=>{i?.disconnect(),window.removeEventListener(`resize`,n),t?.removeEventListener(`resize`,n),t?.removeEventListener(`scroll`,n)}},[p,e,t]),(0,r.useEffect)(()=>{p&&x.current?.focus()},[p]);let oe=()=>{m(!1),g(``),u?.(!1),f()},se=()=>{let t=h.trim();s(e,t.length===0?void 0:t),u?.(!1),f()},ce=e=>{e.preventDefault(),se()},j=e=>{if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),oe();return}e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&e.keyCode!==229&&(e.preventDefault(),se())},le=()=>{m(!0),u?.(!0)},ue=()=>{c(e),f()},de=()=>{l(e),f()},fe=(e,n)=>{t&&e.pointerType===`touch`&&!e.currentTarget.disabled&&(e.preventDefault(),C.current={target:e.currentTarget,timeStamp:e.timeStamp},n())},pe=(e,t)=>{let n=C.current;C.current=null;let r=n===null?1/0:e.timeStamp-n.timeStamp;if(e.detail!==0&&n?.target===e.currentTarget&&r>=0&&r<1e3){e.preventDefault();return}t()};return p?/* @__PURE__ */ (0,a.jsxs)(a.Fragment,{children:[o===void 0&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-selection-marker`,"aria-hidden":`true`,"data-large":i>99||void 0,style:k,children:ae}),/* @__PURE__ */ (0,a.jsxs)(`form`,{className:`dsh-side-chat-selection-comment`,role:`dialog`,"aria-label":o?.dialogLabel??`Add annotation comment`,style:O,onSubmit:ce,onMouseDown:e=>{e.stopPropagation()},onKeyUp:e=>{e.stopPropagation()},children:[/* @__PURE__ */ (0,a.jsx)(`textarea`,{ref:x,value:h,rows:2,"aria-label":`Optional annotation comment`,placeholder:`Add an optional comment…`,onChange:e=>{g(e.currentTarget.value)},onKeyDown:j}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-selection-comment-actions`,children:[o!==void 0&&d!==void 0&&/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,onClick:d,children:`Remove`}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,onClick:oe,children:`Cancel`}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`submit`,className:`dsh-side-chat-selection-comment-save`,children:`Save`})]})]})]}):/* @__PURE__ */ (0,a.jsxs)(`div`,{ref:S,className:`dsh-side-chat-selection-actions`,role:`toolbar`,"aria-label":`Selected conversation text actions`,"data-touch":t||void 0,style:ee,onMouseDown:A,onPointerDown:e=>{t&&e.pointerType===`touch`&&e.preventDefault()},onKeyDown:e=>{e.key===`Escape`&&f()},children:[/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,onPointerDown:e=>{fe(e,le)},onClick:e=>{pe(e,le)},children:`Add to chat`}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,disabled:n!==void 0,title:n,onPointerDown:e=>{fe(e,ue)},onClick:e=>{pe(e,ue)},children:`More details`}),/* @__PURE__ */ (0,a.jsx)(`button`,{type:`button`,disabled:n!==void 0,title:n,onPointerDown:e=>{fe(e,de)},onClick:e=>{pe(e,de)},children:`Ask in side chat`})]})}function nc(){return/* @__PURE__ */ (0,a.jsx)(`svg`,{viewBox:`0 0 16 16`,width:`16`,height:`16`,"aria-hidden":`true`,children:/* @__PURE__ */ (0,a.jsx)(`rect`,{x:`3`,y:`3`,width:`10`,height:`10`,rx:`3`,fill:`currentColor`})})}let rc={code:{copyLabel:`Copy`,copiedLabel:`Copied`},footnotes:`Footnotes`};function ic({text:e,running:t}){let[n,o]=(0,r.useState)(!1),s=e.trimEnd().split(`
`);return/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-reasoning`,"data-variant":`think`,"data-state":t?`running`:`ok`,children:/* @__PURE__ */ (0,a.jsx)(i.DisclosureRow,{rowClassName:`dsh-side-chat-reasoning-row`,leadingClassName:`dsh-side-chat-reasoning-leading`,titleClassName:`dsh-side-chat-reasoning-title`,chevronClassName:`dsh-side-chat-reasoning-chevron`,icon:/* @__PURE__ */ (0,a.jsx)(i.IconThinkOutlineRegular,{size:14}),title:`Think`,open:n,expandable:!0,expandOnRowClick:!0,onToggle:()=>{o(e=>!e)},collapsedContent:/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-reasoning-summary`,children:t?s.at(-1):s[0]}),children:/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-reasoning-body`,children:e})})})}function ac({message:e,locale:t}){let n=/* @__PURE__ */ (0,a.jsxs)(`article`,{className:`dsh-side-chat-message`,"data-role":e.role,children:[/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-message-role`,children:e.role===`user`?`You`:`Assistant`}),e.role===`user`?/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-message-text`,children:e.text}):/* @__PURE__ */ (0,a.jsxs)(a.Fragment,{children:[e.reasoning&&/* @__PURE__ */ (0,a.jsx)(ic,{text:e.reasoning,running:e.status===`streaming`}),/* @__PURE__ */ (0,a.jsx)(i.MarkdownText,{text:e.text,streaming:e.status===`streaming`,labels:rc}),e.status===`streaming`&&e.text===``&&!e.reasoning&&/* @__PURE__ */ (0,a.jsx)(`span`,{children:`Thinking…`}),e.status===`stopped`&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-message-note`,children:`Stopped`}),e.status===`error`&&/* @__PURE__ */ (0,a.jsx)(`span`,{className:`dsh-side-chat-message-note`,children:`Reply failed`})]})]});return e.selectedText===void 0?n:/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-annotated-user-message`,children:[/* @__PURE__ */ (0,a.jsx)(k,{selections:[{text:e.selectedText}],messages:O[t]}),n]})}function oc({state:e,controller:t,modelControl:n,locale:i=`en`}){let[o,s]=(0,r.useState)(``),[c,l]=(0,r.useState)(!1),[u,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)(),m=(0,r.useRef)(!1),h=(0,r.useRef)(!1),g=(0,r.useRef)(0),_=(0,r.useRef)(!0),v=(0,r.useRef)(null),y=Ds(o),b=e.phase===`running`,x=b||u,S=[`ready`,`running`].includes(e.phase);(0,r.useEffect)(()=>{let e=v.current;e!==null&&_.current&&(e.scrollTop=e.scrollHeight)},[e.messages]);let C=async e=>{if(e.preventDefault(),o.trim().length===0||!S||b||m.current||h.current)return;let n=g.current;m.current=!0,l(!0),p(void 0);try{let e=await t.send(o);e.ok&&n===g.current?s(``):!e.ok&&t.getSnapshot().error?.message!==e.error.message&&p(e.error.message)}catch{p(`The message could not be sent. Your draft has been kept.`)}finally{m.current=!1,l(!1)}},w=async()=>{if(!h.current){h.current=!0,d(!0),p(void 0);try{let e=await t.cancel();e.ok||p(e.error.message)}catch{p(`The request could not be stopped. Try closing Side Chat.`)}finally{h.current=!1,d(!1)}}};return/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-conversation`,children:[/* @__PURE__ */ (0,a.jsxs)(`div`,{ref:v,className:`dsh-side-chat-transcript`,"aria-live":`polite`,onScroll:e=>{let t=e.currentTarget;_.current=t.scrollHeight-t.scrollTop-t.clientHeight<48},children:[e.messages.map(e=>/* @__PURE__ */ (0,a.jsx)(ac,{message:e,locale:i},e.id)),f!==void 0&&/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-turn-notice`,role:`alert`,children:f})]}),/* @__PURE__ */ (0,a.jsxs)(`form`,{className:`dsh-side-chat-composer`,"data-composer-card":``,onSubmit:e=>{C(e)},children:[/* @__PURE__ */ (0,a.jsx)(`textarea`,{ref:y,rows:1,value:o,disabled:!S,placeholder:i===`zh-CN`?`继续讨论`:`Reply in Side Chat`,onChange:e=>{++g.current,s(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.nativeEvent.isComposing&&e.keyCode!==229&&(e.preventDefault(),e.currentTarget.form?.requestSubmit())}}),/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-composer-actions`,children:[n,/* @__PURE__ */ (0,a.jsx)(`button`,{type:x?`button`:`submit`,className:x?`dsh-side-chat-stop-button`:`dsh-side-chat-send-button`,"aria-label":x?`Stop generating`:`Send`,"aria-busy":u||c||void 0,disabled:!S||(x?u:c||o.trim().length===0),onClick:e=>{x&&(e.preventDefault(),w())},children:x?/* @__PURE__ */ (0,a.jsx)(nc,{}):/* @__PURE__ */ (0,a.jsx)(ws,{})})]})]})]})}function sc(){try{return typeof window>`u`?void 0:window.sessionStorage}catch{return}}function cc(e){return e.occurrences.some(e=>e.source===`dsh-side-chat-selection`||e.source===`dsh-side-chat-conversation`)}function lc(e,t){if(!Array.isArray(t)||t.length===0)return!1;let n=0;return t.every(t=>{if(typeof t!=`object`||!t)return!1;let r=t;return!Number.isSafeInteger(r.offset)||!Number.isSafeInteger(r.length)||r.offset<n||r.length<0||r.offset+r.length>e.length||typeof r.source!=`string`||typeof r.ref!=`string`||typeof r.label!=`string`||typeof r.clipboardText!=`string`||e.slice(r.offset,r.offset+r.length)!==r.clipboardText||r.appearance!==void 0&&![`session`,`file`,`folder`].includes(r.appearance)?!1:(n=r.offset+r.length,!0)})}var uc=class{storage;observedInputs=/* @__PURE__ */ new WeakSet;reconciling=!1;constructor(e=sc()){this.storage=e}reconcile(e,t){if(this.reconciling||this.storage===void 0)return;this.reconciling=!0;let n=`dsh-side-chat:composer-references:`+encodeURIComponent(e);try{let e=t.state.getSnapshot();if(cc(e)){this.observedInputs.add(t),this.storage.setItem(n,JSON.stringify({version:1,draft:e.draft,occurrences:e.occurrences}));return}if(this.observedInputs.has(t)){this.storage.removeItem(n);return}let r=this.storage.getItem(n);if(r===null)return;let i=JSON.parse(r);if(i===null||i.version!==1||typeof i.draft!=`string`||!lc(i.draft,i.occurrences)){this.storage.removeItem(n);return}if(e.draft===``)return;if(e.draft!==i.draft||e.occurrences.length!==0){this.storage.removeItem(n);return}if(e.phase!==void 0&&e.phase!==`plain`)return;this.restore(t,i)&&this.observedInputs.add(t)}catch{}finally{this.reconciling=!1}}restore(e,t){let n,r=!1;try{for(let r of[...t.occurrences].reverse()){let i=e.state.getSnapshot();if(i.draft!==t.draft||!e.insertReference({source:r.source,ref:r.ref,label:r.label,clipboardText:r.clipboardText,...r.appearance===void 0?{}:{appearance:r.appearance}},{start:r.offset,end:r.offset+r.length,draftRev:i.draftRev}))return!1;let a=e.state.getSnapshot(),o=t.draft[r.offset+r.length]!==` `,s=o?t.draft.slice(0,r.offset+r.length)+` `+t.draft.slice(r.offset+r.length):t.draft;if(a.draft!==s)return!1;if(n=a,o){if(!e.replaceText(``,{start:r.offset+1,end:r.offset+2,draftRev:a.draftRev}))return!1;let i=e.state.getSnapshot();if(i.draft!==t.draft)return!1;n=i}}return r=!0,!0}finally{let i=e.state.getSnapshot();if(!r&&n===i){let n=i.draft.length-i.occurrences.reduce((e,t)=>e+t.length-1,0);e.replaceText(t.draft,{start:0,end:n,draftRev:i.draftRev})}}}};let dc=`dsh-side-chat:model-preference:v1`;function fc(){if(typeof window<`u`)try{return window.localStorage}catch{return}}function pc(e){if(typeof e!=`object`||!e)return;let t=e;if(typeof t.provider==`string`&&t.provider!==``&&typeof t.model==`string`&&t.model!==``&&(t.reasoningEffort===void 0||typeof t.reasoningEffort==`string`&&t.reasoningEffort!==``))return{provider:t.provider,model:t.model,...t.reasoningEffort===void 0?{}:{reasoningEffort:t.reasoningEffort}}}var mc=class{storage;constructor(e=fc()){this.storage=e}get(){if(this.storage!==void 0)try{let e=this.storage.getItem(dc);if(e===null)return;let t=JSON.parse(e);return t.version===1?pc(t.selection):void 0}catch{return}}set(e){if(this.storage===void 0)return;let t={version:1,selection:{...e}};try{this.storage.setItem(dc,JSON.stringify(t))}catch{}}};let hc={turnEnds:/* @__PURE__ */ new Map,chatNodes:{get:()=>void 0}};var gc=class{chat;source;snapshot=hc;constructor(e){this.chat=e}subscribe=e=>this.chat.subscribe(e);getSnapshot=()=>{let e=this.chat.getSnapshot();return e!==this.source&&(this.source=e,this.snapshot=e===void 0?hc:{turnEnds:e.legacy.turnEnds,chatNodes:e.nodes}),this.snapshot}};function $(e){return e}function _c(e){return e.kind===`turn`?e.turn.status===`closed`:e.kind===`step`&&e.turn.status===`closed`&&e.step.status===`closed`}var vc=class{ctx;faces=/* @__PURE__ */ new WeakMap;parentInputs=/* @__PURE__ */ new WeakMap;annotationPersistence=new uc;modelPreferences=new mc;constructor(e){this.ctx=e}subscribeList=e=>this.ctx.sessions.list.subscribe(e);subscribeConversationInput=e=>{let t,n=()=>{},r=()=>{let r=this.currentParentInput();r!==t&&(n(),t=r,n=t?.state.subscribe(e)??(()=>{}))};r();let i=this.ctx.sessions.list.subscribe(()=>{r(),e()});return()=>{i(),n()}};currentConversationInputSnapshot=()=>this.currentParentInput()?.state.getSnapshot();currentSessionId(){let e=Object.entries(this.ctx.sessions.list.getSnapshot().byId).find(([,e])=>(e.retainedBy.mainView??0)>0)?.[0];return e===void 0?void 0:D(e)}lastCompletedSeq(e){let t=this.face(e)?.getSnapshot(),n;for(let e of t?.turnEnds.values()??[])(n===void 0||e>n)&&(n=e);return n}selectionIsCurrent(e){let t=this.face(e.parentSessionId)?.getSnapshot();return t!==void 0&&e.fragments.every(e=>{let n=t.chatNodes.get(e.nodeKey);return n!==void 0&&n.visibility===`visible`&&n.kind===e.nodeKind&&n.anchorSeq===e.seq&&_c(n.location)})}addSelectionToConversation(e,t){if(this.currentSessionId()!==e.parentSessionId)return!1;let n=this.currentParentInput();return n===void 0||!C(n,e,t)?!1:(this.annotationPersistence.reconcile(e.parentSessionId,n),!0)}addSideChatToConversation(e,t){let n=this.ctx.sessions.scope($(e)),r=n===void 0?void 0:this.parentInput(n);return r===void 0||!he(r,t)?!1:(this.annotationPersistence.reconcile(e,r),!0)}removeConversationAnnotation(e){let t=this.currentSessionId(),n=this.currentParentInput();return t===void 0||n===void 0||!ee(n,e)?!1:(this.annotationPersistence.reconcile(t,n),!0)}updateConversationAnnotation(e,t){let n=this.currentSessionId(),r=this.currentParentInput();return n===void 0||r===void 0||!te(r,e,t)?!1:(this.annotationPersistence.reconcile(n,r),!0)}reconcileConversationAnnotationPersistence(){let e=this.currentSessionId(),t=this.currentParentInput();e!==void 0&&t!==void 0&&this.annotationPersistence.reconcile(e,t)}nextConversationAnnotationNumber(){let e=this.currentConversationInputSnapshot();return e===void 0?1:b(e).length+1}removeConversationAnnotations(e=this.currentSessionId()){let t=e===void 0?void 0:this.ctx.sessions.scope($(e)),n=t===void 0?void 0:this.parentInput(t);return e===void 0||n===void 0||!w(n)?!1:(this.annotationPersistence.reconcile(e,n),!0)}retainParent(e){let t=this.ctx.sessions.retain($(e),{source:`sideChat`}),n=!0;return t.ready.catch(()=>{n&&this.notify({kind:`warning`,text:`The parent conversation could not be loaded.`})}),()=>{n=!1,t.release()}}async openSession(e){this.ctx.uiWorkspace.openSession($(e))}notify(e){console[e.kind===`warning`?`warn`:`info`](`[dsh-side-chat] ${e.text}`),this.currentParentInput()?.notify?.(e.kind===`warning`?`error`:`info`,e.text)}face(e){let t=this.ctx.sessions.binding($(e))?.session;if(t===void 0)return;let n=this.faces.get(t);if(n!==void 0)return n;let r=this.ctx.uiConversation.binding(t.sessionId);r.activate(`chat`);let i=new gc(r.target(`chat`));return this.faces.set(t,i),i}title(e){return this.ctx.sessions.list.getSnapshot().byId[$(e)]?.displayTitle}modelDirectory(e){try{return this.ctx.modelDirectories.directoryFor($(e))}catch{return}}sideChatModelPreference(){return this.modelPreferences.get()}rememberSideChatModelPreference(e){this.modelPreferences.set(e)}currentParentInput(){let e=this.currentSessionId(),t=e===void 0?void 0:this.ctx.sessions.scope($(e));return t===void 0?void 0:this.parentInput(t)}parentInput(e){let t=this.ctx.conversation.input.for(e);if(t===void 0)return;let n=this.parentInputs.get(t);if(n!==void 0)return n;let r={state:t.state,setDraft:e=>{t.setDraft(e)},notify:(e,n)=>t.notify?.(e,n),insertReference:(e,n)=>t.insertReference(e,n),replaceText:(t,n)=>e.bail(e,`slash/input-insert-text`,{text:t,span:n})===!0};return this.parentInputs.set(t,r),r}};function yc(e,t){let n=e.chatNodes.get(t);if(n===void 0||n.visibility!==`visible`)return;let r=n.kind===`user`||n.kind===`steering`?`user`:n.kind===`assistant-step`?`assistant`:n.kind===`context`?`context`:void 0,i=n.location.kind===`turn`||n.location.kind===`step`?n.location.turn.turn:void 0;if(r!==void 0&&i!==void 0)return{nodeKey:n.key,nodeKind:n.kind,turnKey:`turn:${String(i)}`,seq:n.anchorSeq,source:r,modelVisible:!0,settled:_c(n.location)}}function bc(e){if(e instanceof KeyboardEvent&&e.key===`Escape`)return!1;let t=e.target;return!(t instanceof Element&&t.closest([`[data-side-chat-panel]`,`.dsh-side-chat-selection-actions`,`.dsh-side-chat-selection-comment`,`.dsh-side-chat-annotation-marker`].join(`, `))!==null)}function xc({controller:e,sessions:t}){let n=(0,r.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot),i=(0,r.useSyncExternalStore)(t.subscribeList,()=>t.currentSessionId(),()=>t.currentSessionId()),o=(0,r.useSyncExternalStore)(t.subscribeConversationInput,t.currentConversationInputSnapshot,t.currentConversationInputSnapshot),s=(0,r.useMemo)(()=>o===void 0?[]:x(o),[o]),[c,l]=(0,r.useState)(null),[u,d]=(0,r.useState)(null),f=(0,r.useRef)(0),p=(0,r.useRef)(void 0),m=(0,r.useRef)(null),h=(0,r.useRef)(!1),g=(0,r.useRef)(!1),_=(0,r.useRef)(0),v=(0,r.useCallback)(async e=>{let n=++f.current,r=t.currentSessionId(),i=r===void 0?void 0:t.face(r),a=r===void 0?void 0:Rs(r),o=window.getSelection();if(r===void 0||i===void 0||a===void 0||o===null||o.isCollapsed){n===f.current&&l(null);return}let s=i.getSnapshot();try{let i=await Ns({selection:o,conversationRoot:a,parentSessionId:r,resolver:{resolve(e){let t=e.dataset.chatAnchorKey;return t===void 0?void 0:yc(s,t)}}});n===f.current&&t.currentSessionId()===r&&l({value:i,touch:e})}catch{n===f.current&&l(null)}},[t]),y=(0,r.useCallback)(()=>{p.current!==void 0&&(window.clearTimeout(p.current),p.current=void 0)},[]),b=(0,r.useCallback)(()=>{y();let e=++f.current;p.current=window.setTimeout(()=>{p.current=void 0,!(e!==f.current||h.current)&&v(!0)},300)},[y,v]);(0,r.useEffect)(()=>{let e=()=>{y(),m.current=null,h.current=!1,++f.current,l(null),d(null)},t=()=>Date.now()<_.current,n=n=>{bc(n)&&(n.pointerType===`touch`&&t()||(n.pointerType!==`touch`&&(_.current=0),g.current=n.pointerType===`touch`,g.current&&e()))},r=n=>{bc(n)&&!t()&&(g.current=!0,e())},i=e=>{bc(e)&&!t()&&(g.current=!0,b())},a=e=>{if(g.current||t()){m.current=null;return}if(!bc(e)){m.current=null;return}y(),m.current={x:e.clientX,y:e.clientY},h.current=!1,++f.current,l(null),d(null)},o=e=>{let n=m.current;if(m.current=null,bc(e)&&!t()){if(g.current){b();return}(n===null||Math.abs(e.clientX-n.x)>2||Math.abs(e.clientY-n.y)>2||e.detail>1||e.shiftKey)&&v(!1)}},s=()=>{if(h.current)return;if(g.current){b();return}let e=window.getSelection();(e===null||e.isCollapsed)&&(y(),++f.current,l(null))},c=e=>{if(g.current=!1,y(),e.key===`Escape`){++f.current,h.current=!1,l(null),d(null);return}bc(e)&&v(!1)};return document.addEventListener(`pointerdown`,n),document.addEventListener(`touchstart`,r,{passive:!0}),document.addEventListener(`touchend`,i,{passive:!0}),document.addEventListener(`mousedown`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`selectionchange`,s),document.addEventListener(`keyup`,c),()=>{y(),document.removeEventListener(`pointerdown`,n),document.removeEventListener(`touchstart`,r),document.removeEventListener(`touchend`,i),document.removeEventListener(`mousedown`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`selectionchange`,s),document.removeEventListener(`keyup`,c)}},[y,v,e,b]),(0,r.useEffect)(()=>{y(),++f.current,h.current=!1,l(null),d(null)},[y,i]),(0,r.useEffect)(()=>{o!==void 0&&t.reconcileConversationAnnotationPersistence()},[o,t]),(0,r.useEffect)(()=>{u!==null&&(s.some(e=>e.annotationIndex===u.annotationIndex)||(h.current=!1,d(null)))},[s,u]);let S=(0,r.useCallback)(()=>{y(),g.current&&(_.current=Date.now()+750),g.current=!1,h.current=!1,++f.current,l(null)},[y]),C=n.phase===`closed`?void 0:`Close the current Side Chat before starting another one.`;return/* @__PURE__ */ (0,a.jsxs)(`div`,{className:`dsh-side-chat-overlay`,children:[/* @__PURE__ */ (0,a.jsx)(Qs,{annotations:s,...u===null?{}:{activeAnnotationIndex:u.annotationIndex},onEdit:(e,t)=>{h.current=!0,y(),++f.current,l(null),d({...e,selection:t})}}),c!==null&&/* @__PURE__ */ (0,a.jsx)(tc,{selection:c.value,touchInteraction:c.touch,annotationNumber:t.nextConversationAnnotationNumber(),...C===void 0?{}:{askDisabledReason:C},onAddToChat:(e,n)=>{try{t.addSelectionToConversation(e,n)?zs(e.parentSessionId):t.notify({kind:`warning`,text:`Could not add the selection to the current chat.`})}catch{t.notify({kind:`warning`,text:`Could not add the selection to the current chat.`})}S()},onAnnotationEditorChange:e=>{h.current=e,e&&g.current&&(_.current=Date.now()+750)},onMoreDetails:n=>{let r=e.openDraft({selection:n});r.ok?e.sendFirst(`Please explain the selected passage in more detail.`):t.notify({kind:`warning`,text:r.error.message}),S()},onAskInSideChat:n=>{let r=e.openDraft({selection:n});r.ok||t.notify({kind:`warning`,text:r.error.message}),S()},onDismiss:S}),u!==null&&/* @__PURE__ */ (0,a.jsx)(tc,{selection:u.selection,annotationNumber:u.annotationIndex+1,annotationEditor:{...u.comment===void 0?{}:{initialComment:u.comment},dialogLabel:`Edit annotation comment`},onAddToChat:(e,n)=>{try{t.updateConversationAnnotation(u.annotationIndex,n)||t.notify({kind:`warning`,text:`Could not update the annotation.`})}catch{t.notify({kind:`warning`,text:`Could not update the annotation.`})}h.current=!1,d(null)},onAnnotationEditorChange:e=>{h.current=e},onRemoveAnnotation:()=>{try{t.removeConversationAnnotation(u.annotationIndex)||t.notify({kind:`warning`,text:`Could not remove the annotation.`})}catch{t.notify({kind:`warning`,text:`Could not remove the annotation.`})}h.current=!1,d(null)},onMoreDetails:()=>{},onAskInSideChat:()=>{},onDismiss:()=>{h.current=!1,d(null)}},`annotation:${String(u.annotationIndex)}`)]})}function Sc({controller:e,sessions:t,onClose:n}){let i=(0,r.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot),o=navigator.language.toLowerCase().startsWith(`zh`)?`zh-CN`:`en`,s=i.parentSessionId===void 0?void 0:t.modelDirectory?.(i.parentSessionId),c=i.parentSessionId===void 0||i.chatId===void 0||i.phase!==`ready`||!i.messages.some(e=>e.role===`assistant`&&e.text.trim().length>0),l=()=>{let e=i.parentSessionId,n=i.chatId;if(e===void 0||n===void 0||i.phase!==`ready`){t.notify({kind:`warning`,text:`The Side Chat conversation is not ready to add yet.`});return}let r=t.title(e),a=se({conversationId:n,title:[o===`zh-CN`?`侧边对话`:`Side Chat`,r].filter(Boolean).join(` · `),messages:i.messages});if(a.conversation.length===0){t.notify({kind:`warning`,text:`The Side Chat does not have any conversation history to add yet.`});return}try{if(!t.addSideChatToConversation(e,a)){t.notify({kind:`warning`,text:`Could not add the Side Chat to the main conversation.`});return}t.openSession(e).then(()=>zs(e),()=>{t.notify({kind:`warning`,text:`The Side Chat was added, but its parent conversation could not be opened.`})})}catch{t.notify({kind:`warning`,text:`Could not add the Side Chat to the main conversation.`})}},u=s===void 0?void 0:/* @__PURE__ */ (0,a.jsx)(Cs,{directory:s,selection:i.modelSelection,locked:[`creating`,`closing`].includes(i.phase)||i.error?.operation===`close`,running:i.phase===`running`,validateInitialSelection:i.chatId===void 0,locale:o,onInitialize:(t,n)=>{n.remember?e.selectModel(t):e.initializeModel(t)},onSelect:t=>e.selectModel(t)},`${i.parentSessionId}:${i.chatId??`draft`}`);return/* @__PURE__ */ (0,a.jsx)(`div`,{className:`dsh-side-chat-docked`,children:i.phase!==`closed`&&/* @__PURE__ */ (0,a.jsx)(Os,{state:i,locale:o,embeddedConversation:/* @__PURE__ */ (0,a.jsx)(oc,{state:i,controller:e,locale:o,modelControl:u},i.chatId),modelControl:u,onDraftChange:t=>{e.setDraft(t)},onFirstSend:t=>e.sendFirst(t),onClose:async()=>n?(n(),{ok:!0,value:void 0}):e.close(),onRetry:()=>e.retry(),onAddToConversation:l,addToConversationDisabled:c,...i.chatId===void 0?{onRemoveSelection:()=>{e.clearSelection()}}:{}})})}function Cc({controller:e,sessions:t,parentSessionId:n,title:a}){let o=(0,r.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot);return(0,r.createElement)(`button`,{type:`button`,className:`dsh-side-chat-new`,disabled:o.phase!==`closed`,onClick:()=>{let r=e.openDraft({parentSessionId:n});r.ok||t.notify({kind:`warning`,text:r.error.message})}},(0,r.createElement)(i.IconNewChatOutlineRegular,{size:20}),a)}let wc=[`conversation`,`inputTriggers`,`modelDirectories`,`remote`,`sessions`,`slots`,`uiConversation`,`uiWorkspace`,`sidebarRightTabs`,`sidebarRight`];async function Tc(e){let t=[],n=!1,a,s=()=>(n=!0,a??=(async()=>{for(let e of t.splice(0).reverse())try{await e()}catch(e){console.warn(`[dsh-side-chat] Cleanup failed`,e)}})(),a);e.effect(()=>s,`dsh-side-chat.clientLifecycle`);try{let a=document.createElement(`style`);a.textContent=o,a.dataset.plugin=`dsh-side-chat`,a.dataset.dshSideChat=`styles`,document.head.append(a),t.push(()=>{a.remove()});let s=e,c=await vs(s);if(n){await c.dispose();return}t.push(c.dispose),t.push(s.inputTriggers.registerSource(ne)),t.push(s.inputTriggers.registerSource(ge));let l=new vc(s);t.push(we(s,e=>{l.removeConversationAnnotations(e)}));let u=new Ne(c.remote,l);t.push(()=>u.dispose()),t.push(e.sidebarRightTabs.register({id:`@ahggg/dsh-side-chat`,kind:`sidechat`,keepMounted:!0,title:()=>navigator.language.toLowerCase().startsWith(`zh`)?`侧边聊天`:`Side chat`,guide:[{id:`new`,order:350,title:()=>navigator.language.toLowerCase().startsWith(`zh`)?`新建侧边聊天`:`New side chat`,icon:i.IconNewChatOutlineRegular}]})),t.push(s.slots.inject(`sidebar.right.tab.guide.entry`,()=>s.slots.register({name:`sidebar.right.tab.guide.entry`,key:`@ahggg/dsh-side-chat`},({sessionId:e,title:t})=>(0,r.createElement)(Cc,{controller:u,sessions:l,parentSessionId:D(e),title:t})))),t.push(e.sidebarRight.registerCloseHandler(`sidechat`,e=>{u.getSnapshot().parentSessionId===D(e)&&u.close()}));let d=!0;t.push(u.subscribe(()=>{let t=u.getSnapshot().phase===`closed`,n=d&&!t;d=t,n&&e.sidebarRight.openTab(`sidechat`)})),t.push(e.slots.inject(`sidebar.right.pane.tab`,()=>e.slots.register({name:`sidebar.right.pane.tab`,key:`@ahggg/dsh-side-chat`},({sessionId:e,useTabInfo:t})=>{let n=t();return(0,r.useSyncExternalStore)(u.subscribe,u.getSnapshot,u.getSnapshot).parentSessionId===D(e)?(0,r.createElement)(Sc,{controller:u,sessions:l,onClose:()=>n.tab.actions.close()}):null}))),t.push(s.slots.inject(`shell.overlay`,()=>s.slots.register({name:`shell.overlay`,id:`dsh-side-chat`,order:90},()=>(0,r.createElement)(xc,{controller:u,sessions:l}))))}catch(e){throw await s(),e}}return n.SelectionActions=tc,n.SelectionValidationError=M,n.SideChatController=Ne,n.SideChatPanel=Os,n.apply=Tc,n.assertSelectionCurrent=je,n.buildSideChatPrompt=E,n.captureDomConversationSelection=Ns,n.finalizeConversationSelection=Ae,n.inject=wc,n.name=`side-chat-client`,n.normalizeSelectedText=ke,n.restoreDomConversationSelection=Is,n.selectionFitsLimit=De,n.summarizeSelection=Oe,n.utf8ByteLength=Ee,t.exports}});