/**
 * pi-status — Pi extension for the yasb opencode-status widget.
 *
 * Mirrors agent lifecycle events to a JSON state file consumed by
 * OpenCodeWidget (config key `pi_state_file`). The payload uses the same
 * vocabulary as the opencode status file:
 *
 *   { "mode": string, "emoji": string, "label": string, "color": string }
 *
 * The file is written atomically (temp file + rename) so the 250 ms yasb
 * poll never observes a half-written state.
 */
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { rename, writeFile } from "node:fs/promises";

const STATE_PATH = "C:\\Users\\kuuro\\.config\\yasb\\pi_state.json";

const COLORS = {
  write: "#7cffba",
  read: "#ff9e64",
  task: "#7cc4ff",
  thinking: "#9d5cff",
  writing: "#f472b6",
  asking: "#ffd75f",
  error: "#f7768e",
  compacting: "#c99bff",
  idle: "#9CC8C8",
} as const;

interface AgentState {
  mode: string;
  emoji: string;
  label: string;
  color: string;
}

const IDLE: AgentState = { mode: "idle", emoji: "🟣", label: "York", color: COLORS.idle };
const WRITING: AgentState = { mode: "writing", emoji: "✍️", label: "Writing", color: COLORS.writing };
const THINKING: AgentState = { mode: "thinking", emoji: "💭", label: "Thinking", color: COLORS.thinking };
const ASKING: AgentState = { mode: "asking", emoji: "🤔", label: "Asking", color: COLORS.asking };
const ERROR_STATE: AgentState = { mode: "error", emoji: "⚠️", label: "Error", color: COLORS.error };
const COMPACTING: AgentState = { mode: "compacting", emoji: "🧹", label: "Compacting", color: COLORS.compacting };
const READ_STATE: AgentState = { mode: "read", emoji: "📖", label: "Reading", color: COLORS.read };
const WRITE_STATE: AgentState = { mode: "write", emoji: "✏️", label: "Writing", color: COLORS.write };
const TASK_STATE: AgentState = { mode: "task", emoji: "🔧", label: "Working", color: COLORS.task };

function toolState(toolName: string): AgentState {
  if (toolName === "read" || toolName === "grep" || toolName === "find" || toolName === "ls") {
    return READ_STATE;
  }
  if (toolName === "write" || toolName === "edit") {
    return WRITE_STATE;
  }
  return TASK_STATE;
}

let lastWritten = "";
let pendingTimer: ReturnType<typeof setTimeout> | null = null;

async function writeAtomic(state: AgentState, data: string): Promise<void> {
  const tmp = `${STATE_PATH}.${process.pid}.tmp`;
  try {
    await writeFile(tmp, data, "utf8");
    await rename(tmp, STATE_PATH);
  } catch {
    // Fallback when the destination is temporarily locked (e.g. yasb reading it).
    try {
      await writeFile(STATE_PATH, data, "utf8");
    } catch {
      // Best-effort status file; never crash the agent over it.
    }
  }
  lastWritten = data;
}

/**
 * Persist a state. High-frequency events (message_update) are debounced so
 * token-by-token updates coalesce into one write; the last emission wins.
 */
function emit(state: AgentState, debounceMs = 0): void {
  const data = `${JSON.stringify(state, null, 2)}\n`;
  if (data === lastWritten) return;
  if (pendingTimer !== null) {
    clearTimeout(pendingTimer);
    pendingTimer = null;
  }
  if (debounceMs > 0) {
    pendingTimer = setTimeout(() => {
      pendingTimer = null;
      void writeAtomic(state, data);
    }, debounceMs);
  } else {
    void writeAtomic(state, data);
  }
}

export default function (pi: ExtensionAPI) {
  // Idle at session boundaries.
  pi.on("session_start", () => emit(IDLE));
  pi.on("session_shutdown", () => emit(IDLE));

  // Agent run lifecycle.
  pi.on("agent_start", () => emit(WRITING));
  pi.on("agent_end", () => emit(IDLE));
  pi.on("agent_settled", () => emit(IDLE));

  // Blocking user-facing prompts (questionnaires, selects, editors).
  pi.on("ui_prompt_start", () => emit(ASKING));
  pi.on("ui_prompt_end", () => emit(WRITING));

  // Context compaction.
  pi.on("session_compact", () => emit(COMPACTING));
  pi.on("session_compact_failed", () => emit(ERROR_STATE));

  // Streaming assistant output: coalesced, latest wins.
  pi.on("message_update", () => emit(THINKING, 200));

  // Tool execution.
  pi.on("tool_call", (event: any) => emit(toolState(String(event?.toolName ?? ""))));
  pi.on("tool_result", (event: any) => {
    if (event?.isError) emit(ERROR_STATE);
  });

  // New user input resumes the run.
  pi.on("input", () => emit(WRITING));
}