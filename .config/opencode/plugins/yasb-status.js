// yasb-status
// Mirrors opencode activity into a state file the YASB bar widget reads.
// This plugin writes ONLY the state (mode, emoji, label, color) and only when
// it CHANGES. The YASB widget (src/core/widgets/yasb/opencode.py) owns the
// animation and redraws it with QPainter, so no HTML frames leave this process.
// Each message state (thinking / tool / error / asking / idle) has its own color.
//
// OpenCode V2 plugin API: V1 plugin factories (returning hooks) do not run
// under V2. This is the V2 shape: Plugin.define + setup(ctx), with
// ctx.event.subscribe for session events and ctx.tool.hook for tool calls.
import { Plugin } from "@opencode/plugin"
import { writeFile, rename } from "fs/promises"

const STATE = "C:/Users/kuuro/.config/yasb/opencode_state.json"

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

export default Plugin.define({
  id: "yasb-status",
  async setup(ctx) {
    let queue = Promise.resolve()
    let last = null

    const tmp = `${STATE}.tmp`

    const write = (state) => {
      const payload = JSON.stringify(state)
      if (payload === last) return
      last = payload
      queue = queue
        .then(async () => {
          await writeFile(tmp, payload, "utf-8")
          await rename(tmp, STATE)
        })
        .catch((err) => {
          console.error("[yasb-status] write failed:", err)
        })
      return queue
    }

    const state = (mode, emoji, label, color) => write({ mode, emoji, label, color })
    const setThinking = () => state("active", "💭", "thinking", "#9d5cff")
    const setWriting = (label = "writing") => state("active", "✍️", label, "#f472b6")
    const setError = (label = "error") => state("active", "❌", label, "#f7768e")
    const setAsking = () => state("active", "🔐", "asking", "#ffd75f")
    const setCompacting = () => state("active", "🧹", "compacting", "#c99bff")
    const setTool = (tool) => {
      const [emoji, label, color] = TOOLS[tool] || ["⚙️", tool, "#c99bff"]
      state("active", emoji, label, color)
    }
    const setIdle = () => write({ mode: "idle" })

    await setIdle()

    const abort = new AbortController()
    const dir = ctx.location?.directory
    const ws = ctx.location?.workspaceID ?? ""
    const events = ctx.event.subscribe({ signal: abort.signal })[Symbol.asyncIterator]()
    const next = () => events.next().then((v) => ({ v }), (e) => ({ e }))
    const running = (async () => {
      try {
        let pending = next()
        while (!abort.signal.aborted) {
          const r = await pending
          if ("e" in r || r.v.done) break
          const event = r.v.value
          pending = next()
          if (abort.signal.aborted) break
          // Scope to this server location (same pattern as other V2 plugins).
          if (event.location?.directory !== dir || (event.location?.workspaceID ?? "") !== ws) continue
          const type = event.type
          if (type === "session.step.started") setThinking()
          else if (type === "session.step.failed" || type === "session.error") setError()
          else if (type === "session.idle") setIdle()
          else if (type === "session.compacted") setCompacting()
          else if (type === "session.created") setIdle()
        }
      } catch {
        // Stream failure loses coverage; no retry loop.
      } finally {
        await events.return?.()
      }
    })()

    const disposers = []
    disposers.push(await ctx.tool.hook("execute.before", async (call) => {
      if (call && call.tool) setTool(call.tool)
    }))
    disposers.push(await ctx.tool.hook("execute.after", async (call) => {
      if (call && (call.status === "error" || call.error)) setError()
      else setThinking()
    }))

    return async () => {
      abort.abort()
      await running
      for (const dispose of disposers) await dispose?.()
    }
  },
})