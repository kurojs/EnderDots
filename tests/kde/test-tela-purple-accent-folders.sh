#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
SCRIPT="${ACCENT_HELPER:-$ROOT/.local/bin/kde-tela-purple-accent-folders.sh}"
TMP="$(mktemp -d "${TMPDIR:-/tmp}/tela-accent-folders.XXXXXX")"
trap 'rm -rf "$TMP"' EXIT

THEME="$TMP/icons/Tela-purple-Tahoe-apps"
PLACES="$THEME/scalable/places"
mkdir -p "$PLACES" "$TMP/bin"
cat > "$TMP/kdeglobals" <<'EOF'
[Icons]
AccentColor=11,7,3
EOF
printf '%s\n' '#7167e4' > "$THEME/.accent-color"
printf '%s\n' '<svg fill="#5a6885"/>' > "$PLACES/default-folder.svg"
printf '%s\n' '<svg style="color:#363636"/>' > "$PLACES/default-folder-open.svg"
printf '%s\n' '<svg fill="#da4453"/>' > "$PLACES/folder-red.svg"
printf '%s\n' '<svg fill="#27d83d"/>' > "$PLACES/folder_color_green.svg"
printf '%s\n' '<svg fill="#888"/>' > "$PLACES/folder-decrypted.svg"
printf '%s\n' '<svg fill="#000000"/>' > "$PLACES/folder-black.svg"
ln -s default-folder.svg "$PLACES/folder.svg"
ln -s default-folder-open.svg "$PLACES/folder-open.svg"

for command in gtk-update-icon-cache kbuildsycoca6 systemctl; do
  cat > "$TMP/bin/$command" <<'STUB'
#!/usr/bin/env bash
printf '%s %s\n' "$(basename "$0")" "$*" >> "$CALL_LOG"
STUB
  chmod +x "$TMP/bin/$command"
done

run_helper() {
  CALL_LOG="$TMP/calls.log" \
    PATH="$TMP/bin:$PATH" \
    ICON_THEME_DIR="$THEME" \
    KDEGLOBALS_FILE="$TMP/kdeglobals" \
    "$SCRIPT"
}

run_helper
for icon in default-folder.svg default-folder-open.svg folder-red.svg folder_color_green.svg folder-decrypted.svg folder-black.svg; do
  grep -q '#0b0703' "$PLACES/$icon"
done
[[ "$(cat "$THEME/.accent-color")" == '#0b0703' ]]
[[ -L "$PLACES/folder.svg" && -L "$PLACES/folder-open.svg" ]]

printf '%s\n' '[Icons]' 'AccentColor=32,64,96' > "$TMP/kdeglobals"
run_helper
for icon in default-folder.svg default-folder-open.svg folder-red.svg folder_color_green.svg folder-decrypted.svg folder-black.svg; do
  grep -q '#204060' "$PLACES/$icon"
done
[[ "$(cat "$THEME/.accent-color")" == '#204060' ]]
grep -q 'gtk-update-icon-cache' "$TMP/calls.log"
grep -q 'kbuildsycoca6' "$TMP/calls.log"
grep -q 'systemctl --user restart plasma-plasmashell' "$TMP/calls.log"

before="$(find -L "$THEME" -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum)"
printf '%s\n' '[Icons]' 'AccentColor=256,0,0' > "$TMP/kdeglobals"
set +e
output="$(run_helper 2>&1)"
status=$?
set -e
after="$(find -L "$THEME" -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum)"
[[ "$status" -eq 1 ]]
[[ "$output" == 'AccentColor channel out of range' ]]
[[ "$before" == "$after" ]]

echo 'PASS: all folder color variants follow accent, repeated changes work, and invalid input preserves assets'
