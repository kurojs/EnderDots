// yasb-status
// Mirrors opencode activity into a state file the YASB bar reads.
// A fixed-size bubble bounces right-to-left; its glow (trail) peaks at the
// center of the bar and shrinks toward the edges, like the CAVA widget.
// Each message state (thinking / tool / error / asking / idle) has its own color.
const STATE = "C:/Users/kuuro/.config/yasb/opencode_state.txt"

const RGB = {
  "#9d5cff": [157, 92, 255], // thinking purple
  "#ff9e64": [255, 158, 100], // read orange
  "#ffb86b": [255, 184, 107], // search amber-orange
  "#7cffba": [124, 255, 186], // write/bash green
  "#7cc4ff": [124, 196, 255], // task blue
  "#f472b6": [244, 114, 182], // writing pink
  "#5eead4": [94, 234, 212], // web teal
  "#f7768e": [247, 118, 142], // error red
  "#ffd75f": [255, 215, 95], // asking yellow
  "#c99bff": [201, 155, 255], // compacting lilac
}

const TOOLS = {
  read: ["🍫", "read_text_file", "#ff9e64"],
  write: ["🐙", "write_text_file", "#7cffba"],
  edit: ["🐙", "write_text_file", "#7cffba"],
  bash: ["🟢", "run_command", "#7cffba"],
  task: ["🤖", "task", "#7cc4ff"],
  list: ["👾", "list_directory", "#ffb86b"],
  glob: ["👾", "search", "#ffb86b"],
  grep: ["👾", "search", "#ffb86b"],
  webfetch: ["🌐", "web", "#5eead4"],
  websearch: ["🌐", "web", "#5eead4"],
}

const N = 16 // columns
const SIGMA = 1.5 // bubble head radius
const TRAIL = 2.0 // trail decay factor behind the head
const ENV = 6.5 // width of the position envelope (center glow)
const TICK = 45 // ms per animation frame
const STEP = 0.55 // columns per animation frame (smooth, continuous)

export const YasbStatus = async () => {
  let timer = null
  let active = null // { emoji, label, color }
  let p = N - 1
  let dir = -1 // moving right -> left first
  let queue = Promise.resolve()

  const write = (text) => {
    queue = queue.then(() => Bun.write(STATE, text)).catch((err) => {
      console.error("[yasb-status] write failed:", err)
    })
    return queue
  }

  const cx = (N - 1) / 2
  const env = (pos) => Math.exp(-Math.pow((pos - cx) / ENV, 2))

  const blockFor = (i, color) => {
    const d = i - p
    const behind = dir === -1 ? i > p : i < p
    const s = behind ? SIGMA * TRAIL : SIGMA
    let a = env(p) * Math.exp(-(d * d) / (2 * s * s))
    a = Math.max(a, 0.15) // faint track, like cava min height
    a = Math.min(a, 1)
    return `<span style="color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${a.toFixed(2)})">█</span>`
  }

  const sweep = (color) => {
    let out = ""
    for (let i = 0; i < N; i++) out += blockFor(i, color)
    return out
  }

  const frame = () => {
    const color = RGB[active.color] || RGB["#c99bff"]
    return (
      `${active.emoji} <span style="color: ${active.color}">${active.label}</span>` +
      ` <span style="font-size: 9px">${sweep(color)}</span>`
    )
  }

  const stopAnim = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const startAnim = (msg) => {
    active = msg
    if (!timer) {
      timer = setInterval(() => {
        p += dir * STEP
        if (p <= 0) {
          p = 0
          dir = 1
        } else if (p >= N - 1) {
          p = N - 1
          dir = -1
        }
        write(frame())
      }, TICK)
    }
    write(frame())
  }

  const setState = (msg) => {
    if (!timer) {
      p = N - 1
      dir = -1
    }
    startAnim(msg)
  }

  const setThinking = () => setState({ emoji: "💭", label: "thinking", color: "#9d5cff" })

  const setWriting = (label = "writing") => setState({ emoji: "✍️", label, color: "#f472b6" })

  const setError = (label = "error") => setState({ emoji: "❌", label, color: "#f7768e" })

  const setAsking = () => setState({ emoji: "🔐", label: "asking", color: "#ffd75f" })

  const setCompacting = () => setState({ emoji: "🧹", label: "compacting", color: "#c99bff" })

  const setTool = (tool) => {
    const [emoji, label, color] = TOOLS[tool] || ["⚙️", tool, "#c99bff"]
    setState({ emoji, label, color })
  }

  const setIdle = async () => {
    stopAnim()
    active = null
    await write("🟣 York")
  }

  await write("🟣 York")

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
  }
}