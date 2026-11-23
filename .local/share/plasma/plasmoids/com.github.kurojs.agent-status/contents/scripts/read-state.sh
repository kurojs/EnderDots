#!/bin/sh
# Prints one line per existing state file: "<agent> <mtime_seconds> <json on one line>"
for spec in "opencode:$HOME/.config/opencode/opencode_state.json" "pi:$HOME/.config/pi/pi_state.json"; do
  a=${spec%%:*}
  f=${spec#*:}
  [ -f "$f" ] || continue
  printf '%s %s ' "$a" "$(stat -c %.3Y "$f")"
  tr -d '\n' < "$f"
  echo
done
