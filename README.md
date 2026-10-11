# DSH Side Chat

An enhanced version of [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat) 1.0.2, preserving upstream Git history and the MIT license. Targets DeepSeek Harness `0.2.0-rc.2` with a Codex-style native right-sidebar chat.

[简体中文](README.zh-CN.md)

## Features

- Open the right sidebar and choose **New side chat**, alongside Terminal and Browser, with DSH's native outlined chat-plus icon.
- Chat renders inside a native sidebar tab, with a centered empty state and a composer at the bottom that adapts to sidebar width.
- Start without selecting text. The main conversation must have a completed turn; context freezes at its latest completed turn when the chat opens.
- Selected-text questions, detailed explanations, annotations, and adding the discussion to the main conversation remain available.
- Independent model and reasoning-effort selection, streaming replies, Stop, and native Markdown rendering.

## Install this version

This enhanced version has not been published to npm. The npm package `@ahggg/dsh-side-chat@1.0.2` is the upstream version and does not include these changes. The package name is retained to update existing installations.

Use Node.js 22.19+ or 24+ and pnpm 11.7.0:

```sh
git clone https://github.com/Denis-Tang/dsh-side-chat.git
cd dsh-side-chat
pnpm install --frozen-lockfile
pnpm build
npm pack --ignore-scripts
```

In the Desktop plugin installation dialog, enter the full local path to `ahggg-dsh-side-chat-1.0.2.tgz`, then fully quit and restart DSH. The plugin manager can also install this repository's Git URL; built `lib/` files are committed.

For the Web profile, use a matching DSH CLI:

```sh
dsh plugin --profile web add ./ahggg-dsh-side-chat-1.0.2.tgz
dsh web
```

Restart the corresponding client after updates. Desktop and Web installations are separate; retain DSH's version compatibility checks.

## Usage and limits

Press Enter to send, Shift+Enter for a newline. Close the native tab or press Esc inside the chat composer to end the discussion. After a reply settles, **Add to conversation** attaches the discussion to the main draft; send that draft to persist it in the main history.

Side Chat uses read-only text context, creates no DSH Session, runs no tools, and edits no files. Parent reasoning and attachment bytes are omitted. Closing, reloading, disconnecting, or unloading discards the temporary discussion; references already added to the main conversation are retained separately. Idle records expire after 30 minutes. Only one Side Chat can be open per client. Normal model token usage applies.

## Development and validation

```sh
pnpm check
pnpm clean-profile:verify
```

`pnpm check` verifies dependencies, types, lint, tests, and packaging. Rebuild after changing `src/` and commit the updated `lib/`; DSH loads these artifacts.

Local validation: 136 tests pass, along with type checks, lint, and packaging. The actual chat component has no horizontal overflow at widths of 360, 500, and 700 pixels. The Windows Desktop plugin is installed; live Desktop loading still requires a restart to verify.

## License and attribution

[MIT](LICENSE). Original plugin: [AHGGG/dsh-side-chat](https://github.com/AHGGG/dsh-side-chat). This repository maintains the native sidebar layout, direct-create entry, and related improvements. This is a third-party plugin.
