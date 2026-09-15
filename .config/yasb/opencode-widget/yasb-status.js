// yasb-status
// Mirrors opencode activity into a state file the YASB bar widget reads.
// This plugin writes ONLY the state (mode, emoji, label, color) and only when
// it CHANGES. The YASB widget (src/core/widgets/yasb/opencode.py) owns the
// animation and redraws it with QPainter, so no HTML frames leave this process.
// Each message state (thinking / tool / error / asking / idle) has its own color.
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

import { writeFile, rename } from "fs/promises"

export const YasbStatus = async () => {
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

  return {
    "tool.execute.before": async (input) => {
      if (input && input.tool) setTool(input.tool)
    },
    "tool.execute.after": async (input, output, error) => {
      if (error) setError()
      else setThinking()
    },
    event: async ({ event }) => {
      if (!event) return
      const type = event.type
      if (type === "session.idle") {
        await setIdle()
        return
      }
      if (type === "session.error") {
        setError()
        return
      }
      if (type === "session.compacted") {
        setThinking()
        return
      }
      if (type === "message.part.updated") {
        if (event.data && event.data.part && event.data.part.type === "compaction") setCompacting()
        return
      }
      if (type === "session.status") {
        const s = event.data && event.data.status
        const st = typeof s === "string" ? s : s && s.type
        if (st === "idle") await setIdle()
        else if (st === "busy") setThinking()
        return
      }
      if (type === "session.next.reasoning.started") setThinking()
      if (type === "session.next.text.started" || type === "session.next.text.delta") setWriting()
      if (type === "session.next.text.ended") setThinking()
      if (type === "session.next.tool.input.started" || type === "session.next.tool.input.delta") {
        const name = event.data && event.data.name
        setWriting(name ? `writing ${name}` : "writing")
      }
      if (type === "session.next.tool.input.ended") setWriting()
      if (type === "session.next.tool.failed" || type === "session.next.step.failed") setError()
      if (type === "permission.asked" || type === "permission.v2.asked") setAsking()
      if (type === "permission.replied" || type === "permission.v2.replied") setThinking()
    },
    "experimental.session.compacting": async () => {
      setCompacting()
    },
  }
}