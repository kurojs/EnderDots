---
name: elevenlabs-tts
description: >
  Announce task conclusions and finalizations with short ElevenLabs TTS
  spoken messages. Trigger: when reaching a conclusion, finishing a task,
  or completing a meaningful step, speak a brief confirmation through the
  elevenlabs-tts MCP server (voice h3KZVBOooxHZiKRxnsdE).
license: MIT
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

Use this skill when:
- You reach a conclusion on a topic or decision
- You finish a task or a unit of work
- You complete a meaningful step and want to notify the user
- You want a short spoken confirmation instead of a long message

Do not use it for every message — only short paragraphs or texts that mark a conclusion or finalization.

## How It Works

The ElevenLabs MCP TTS server is installed locally at:

```
node /home/kuro/Documents/elevenlabs-mcp-tts/src/server.js
```

It is registered as MCP `elevenlabs-tts` in both OpenCode and PI SHELL, with:
- API key embedded as fallback in `src/server.js`
- Default voice: `h3KZVBOooxHZiKRxnsdE`
- `ELEVENLABS_API_KEY` and `ELEVENLABS_VOICE_ID` exported in `~/.bashrc`

## Usage

Speak a short conclusion through the MCP tool:

```
use text_to_speech to say "Task finished: <short conclusion>"
```

Keep messages brief — one sentence or a short paragraph. Examples:

- "Task finished: ElevenLabs TTS MCP installed and verified."
- "Conclusion: the server is working on both PI SHELL and OpenCode."
- "Done: configuration committed to EnderDots."

## Configuration Files

- MCP server source: `/home/kuro/Documents/elevenlabs-mcp-tts/src/server.js`
- OpenCode MCP config: `~/.config/opencode/opencode.json`
- PI SHELL MCP config: `~/.pi/agent/mcp.json`
- Environment: `~/.bashrc` (ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID)

## Verification

Test the MCP server manually:

```bash
printf '%s\n' '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"text_to_speech","arguments":{"text":"TTS skill ready","voice_id":"h3KZVBOooxHZiKRxnsdE"}}}' | node /home/kuro/Documents/elevenlabs-mcp-tts/src/server.js
```

Expected result: audio plays and returns a confirmation text.
