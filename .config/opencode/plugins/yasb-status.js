// yasb-status — OpenCode v2 plugin
// Mirrors opencode activity into a state file the YASB bar widget reads.
//
// OpenCode v2 plugin API: export default { id, setup(ctx) }. V1 plugin
// factories (returning hooks) do not run under V2.
//
// This plugin writes ONLY the state (mode, emoji, label, color) and only when
// it CHANGES. The YASB widget (src/core/widgets/yasb/opencode.py) owns the
// animation and redraws it with QPainter, so no HTML frames leave this process.
//
// Tool state is held on screen for HOLD_MS before sliding back to thinking,
// because the YASB widget polls every 250ms and fast tools would otherwise be
// overwritten before the widget ever reads them.

const STATE = "C:/Users/kuuro/.config/yasb/opencode_state.json"

let queue = Promise.resolve()
let last = null

async function writeState(state) {
  const fs = await import("fs/promises")
  const payload = JSON.stringify(state)
  if (payload === last) return
  last = payload
  const tmp = `${STATE}.tmp`

  queue = queue
    .then(async () => {
      await fs.writeFile(tmp, payload, "utf-8")
      await fs.rename(tmp, STATE)
    })
    .catch((err) => {
      console.error("[yasb-status] write failed:", err)
    })
  return queue
}

const setThinking = () => writeState({ mode: "active", emoji: "💭", label: "thinking", color: "#9d5cff" })
const setError = () => writeState({ mode: "active", emoji: "❌", label: "error", color: "#f7768e" })
const setIdle = () => writeState({ mode: "idle" })
const setCompacting = () => writeState({ mode: "active", emoji: "🧹", label: "compacting", color: "#c99bff" })

const TOOLS = {
  read: ["🍫", "read", "#ff9e64"],
  write: ["🐙", "write", "#7cffba"],
  edit: ["🐙", "write", "#7cffba"],
  bash: ["🟢", "bash", "#7cffba"],
  task: ["🤖", "task", "#7cc4ff"],
  list: ["👾", "search", "#ffb86b"],
  glob: ["👾", "search", "#ffb86b"],
  grep: ["👾", "search", "#ffb86b"],
  webfetch: ["🌐", "web", "#5eead4"],
  websearch: ["🌐", "web", "#5eead4"],
}

const setTool = (toolName) => {
  const [emoji, label, color] = TOOLS[toolName] || ["🔧", toolName, "#c99bff"]
  writeState({ mode: "active", emoji, label, color })
}

// Keep tool states visible long enough for the YASB widget (250ms poll) to
// read them. Returning to "thinking" is deferred; a new tool cancels the timer.
let thinkTimer = null
const HOLD_MS = 1500
const scheduleThinking = () => {
  if (thinkTimer) return
  thinkTimer = setTimeout(() => {
    thinkTimer = null
    setThinking()
  }, HOLD_MS)
}
const cancelThinking = () => {
  if (thinkTimer) {
    clearTimeout(thinkTimer)
    thinkTimer = null
  }
}

// OpenCode v2 plugin definition
export default {
  id: "yasb-status",

  async setup(ctx) {
    // Initialize
    await setIdle()

    // Subscribe to events
    // Subscribe to events.
    // opencode v2.0.10 delivers events via ctx.event.subscribe as an
    // AsyncIterable (documented form: subscribe({ signal }): AsyncIterable<OpenCodeEvent>).
    // Consume it with for await and abort() the controller to stop on cleanup.
    const controller = new AbortController()
    const handleEvent = (event) => {
      if (event.type === "session.next.step.started") {
        cancelThinking()
        setThinking()
      } else if (event.type === "session.next.step.failed" || event.type === "session.error") {
        cancelThinking()
        setError()
      } else if (event.type === "session.idle") {
        cancelThinking()
        setIdle()
      } else if (event.type === "session.compacted") {
        cancelThinking()
        setCompacting()
      }
    }

    const candidate = ctx.event.subscribe({ signal: controller.signal })
    let unsubscribe = () => controller.abort()
    if (candidate && typeof candidate[Symbol.asyncIterator] === "function") {
      // Primary: async-iterable event stream (documented v2 API).
      void (async () => {
        try {
          for await (const event of candidate) handleEvent(event)
        } catch (err) {
          if (err?.name !== "AbortError") console.error("[yasb-status] event stream error:", err)
        }
      })()
    } else {
      // Fallback: runtimes that still deliver events through the callback form.
      try {
        const cbUnsub = ctx.event.subscribe((event) => handleEvent(event))
        if (typeof cbUnsub === "function") unsubscribe = cbUnsub
      } catch (_) {}
    }

    // Register tool hooks
    const disposeBefore = ctx.tool.hook("execute.before", (call) => {
      cancelThinking()
      if (call?.tool) setTool(call.tool)
    })

    const disposeAfter = ctx.tool.hook("execute.after", (call) => {
      if (call?.status === "error" || call?.error) {
        setError()
        scheduleThinking()
      } else {
        // Keep the tool state visible before sliding back to thinking.
        scheduleThinking()
      }
    })

    // Return cleanup function
    return () => {
      unsubscribe()
      disposeBefore()
      disposeAfter()
    }
  },
}