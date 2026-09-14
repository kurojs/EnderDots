// yasb-status
// Mirrors opencode tool activity into a state file that the YASB bar reads.
// Emits rich-text frames (Qt-safe HTML): emoji + tool name + a purple sweep
// of blocks with a decaying trail (fade toward the left) + trailing dots.
const STATE = "C:/Users/kuuro/.config/yasb/opencode_state.txt"

const TOOLS = {
  read: ["🍫", "read_text_file"],
  write: ["🐙", "write_text_file"],
  edit: ["🐙", "write_text_file"],
  bash: ["🟢", "run_command"],
  task: ["🤖", "task"],
  list: ["👾", "list_directory"],
  glob: ["👾", "search"],
  grep: ["👾", "search"],
  webfetch: ["🌐", "web"],
  websearch: ["🌐", "web"],
}

const BARS = 14
const FADE = 1.8 // trail decay: columns behind the wavefront fade this fast
const TICK = 120 // ms per animation frame

export const YasbStatus = async () => {
  let timer = null
  let active = null // [emoji, label]
  let phase = 0
  let queue = Promise.resolve() // serializes writes so the last frame requested wins

  const write = (text) => {
    queue = queue.then(() => Bun.write(STATE, text)).catch((err) => {
      console.error("[yasb-status] write failed:", err)
    })
    return queue
  }

  // Lit columns run 0..phase; intensity decays toward the left (behind the edge).
  const sweep = () => {
    let out = ""
    for (let i = 0; i <= phase; i++) {
      const alpha = Math.exp(-(phase - i) / FADE)
      out += `<span style="color: rgba(157, 92, 255, ${alpha.toFixed(2)})">█</span>`
    }
    return out
  }

  const frame = () => {
    const [emoji, label] = active
    return (
      `${emoji} <span style="color: #c99bff">${label}</span>` +
      ` <span style="font-size: 9px">${sweep()}</span>` +
      ` <span style="color: #55556a">...</span>`
    )
  }

  const stopAnim = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const setActive = (tool) => {
    active = TOOLS[tool] || ["⚙️", tool]
    if (!timer) {
      phase = 0
      timer = setInterval(async () => {
        await write(frame())
        phase = (phase + 1) % BARS
      }, TICK)
    }
    write(frame())
  }

  const setIdle = async () => {
    stopAnim()
    active = null
    await write("⚪ idle")
  }

  await write("⚪ idle")

  return {
    "tool.execute.before": async (input) => {
      if (input && input.tool) setActive(input.tool)
    },
    event: async ({ event }) => {
      if (event && event.type === "session.idle") await setIdle()
    },
  }
}