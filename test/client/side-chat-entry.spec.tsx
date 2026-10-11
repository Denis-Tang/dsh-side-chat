// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { NewSideChatAction } from '../../src/client/apply.js'
import { SideChatController } from '../../src/client/side-chat-controller.js'
import { SessionId } from '../../src/shared/contracts.js'
import { FakeClientSessions, FakeRemote } from '../fixtures/client-runtime.js'

afterEach(cleanup)

it('opens the sidebar entry context without a selection or model request', async () => {
  const sessions = new FakeClientSessions()
  const remote = new FakeRemote()
  const controller = new SideChatController(remote, sessions)
  render(<NewSideChatAction controller={controller} sessions={sessions} parentSessionId={SessionId('sidebar-parent')} title="新建侧边聊天" />)
  const entry = screen.getByRole('button', { name: '新建侧边聊天' })
  expect(entry.querySelector('svg')).not.toBeNull()
  fireEvent.click(entry)
  expect(controller.getSnapshot()).toMatchObject({ phase: 'draft', parentSessionId: 'sidebar-parent', boundarySeq: 7 })
  expect(remote.createCalls).toHaveLength(0)
  expect(entry).toBeDisabled()
  await act(async () => { await controller.close() })
  expect(entry).toBeEnabled()
  sessions.lastSeq = 19
  fireEvent.click(entry)
  expect(controller.getSnapshot()).toMatchObject({ parentSessionId: 'sidebar-parent', boundarySeq: 19 })
  cleanup()
  await controller.dispose()
})
