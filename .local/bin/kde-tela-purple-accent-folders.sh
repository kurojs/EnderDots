#!/usr/bin/env bash
# Recolor the Tahoe folder overlay with KDE's current AccentColor.
set -euo pipefail

ICON_THEME_DIR="${ICON_THEME_DIR:-$HOME/.local/share/icons/Tela-purple-Tahoe-apps}"
KDEGLOBALS_FILE="${KDEGLOBALS_FILE:-$HOME/.config/kdeglobals}"

[[ -d "$ICON_THEME_DIR" ]] || { echo "Icon theme not found: $ICON_THEME_DIR" >&2; exit 1; }
[[ -f "$KDEGLOBALS_FILE" ]] || { echo "KDE config not found: $KDEGLOBALS_FILE" >&2; exit 1; }

ACCENT="$(awk -F= '/^AccentColor=/ {gsub(/[[:space:]]/, "", $2); print $2; exit}' "$KDEGLOBALS_FILE")"
[[ "$ACCENT" =~ ^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$ ]] || {
  echo "Invalid or missing AccentColor in $KDEGLOBALS_FILE" >&2
  exit 1
}
IFS=',' read -r R G B <<< "$ACCENT"
for channel in "$R" "$G" "$B"; do
  (( 10#$channel <= 255 )) || { echo "AccentColor channel out of range" >&2; exit 1; }
done
HEX="$(printf '#%02x%02x%02x' "$((10#$R))" "$((10#$G))" "$((10#$B))")"
ACCENT_STATE="$ICON_THEME_DIR/.accent-color"
PREVIOUS_HEX=""
if [[ -f "$ACCENT_STATE" ]]; then
  read -r PREVIOUS_HEX < "$ACCENT_STATE"
fi

mapfile -d '' -t ICON_FILES < <(
  find -L "$ICON_THEME_DIR" -type f \
    \( -name 'folder*.svg' -o -name 'default-folder*.svg' \) -print0 |
    xargs -0 -r realpath -e -z |
    sort -zu
)
python3 - "$HEX" "$PREVIOUS_HEX" "${ICON_FILES[@]}" <<'PY'
import pathlib
import re
import sys

accent, previous = sys.argv[1:3]
previous = previous.lstrip("#").lower()
hex_color = re.compile(r"#([0-9a-f]{6})(?![0-9a-f])", re.IGNORECASE)
short_hex_color = re.compile(r"#([0-9a-f]{3})(?![0-9a-f])", re.IGNORECASE)
for name in sys.argv[3:]:
    path = pathlib.Path(name)
    text = path.read_text(encoding="utf-8")
    original = text
    has_saved_accent = accent.lower() in original.lower() or (
        re.fullmatch(r"[0-9a-f]{6}", previous) and f"#{previous}" in original.lower()
    )

    def recolor_color(match):
        value = match.group(1).lower()
        return match.group(0) if value in {"000000", "ffffff"} else accent

    def recolor_short_color(match):
        value = match.group(1).lower()
        return match.group(0) if value in {"000", "fff"} else accent

    if not has_saved_accent:
        # Folder color variants use preset fills; map chromatic fills and shorthand grays to KDE's accent.
        text = hex_color.sub(recolor_color, text)
        text = short_hex_color.sub(recolor_short_color, text)
        text = re.sub(r"\bcurrentColor\b", accent, text, flags=re.IGNORECASE)
    elif re.fullmatch(r"[0-9a-f]{6}", previous):
        text = re.sub(r"#" + previous + r"(?![0-9a-f])", accent, text, flags=re.IGNORECASE)

    if path.stem.lower() == "folder-black":
        text = re.sub(r"#000000(?![0-9a-f])|#000(?![0-9a-f])", accent, text, flags=re.IGNORECASE)

    # Keep compatibility with the original Tahoe folder palette and stylesheet variants.
    for color in ("5a6885", "60c0f0", "56a1d3", "7cc1ea", "363636"):
        text = re.sub(r"#" + color + r"(?![0-9a-f])", accent, text, flags=re.IGNORECASE)
    text = re.sub(r"color:\s*#363636", f"color:{accent}", text, flags=re.IGNORECASE)
    path.write_text(text, encoding="utf-8")
PY

printf '%s\n' "$HEX" > "$ACCENT_STATE.tmp"
mv "$ACCENT_STATE.tmp" "$ACCENT_STATE"
gtk-update-icon-cache -f "$ICON_THEME_DIR" >/dev/null 2>&1 || true
kbuildsycoca6 --noincremental >/dev/null 2>&1 || true
systemctl --user restart plasma-plasmashell || true
echo "Folder icons recolored with $HEX"
