#!/bin/sh
# XDG autostart bridge for the Hyprland/Caelestia session.
#
# Hyprland does not process XDG autostart files, so entries enabled in KDE
# System Settings (which write to ~/.config/autostart/*.desktop) were silently
# ignored when starting the Caelestia session. This script applies the same
# fields the desktop entry spec defines and runs once when Hyprland starts.
#
# Only ~/.config/autostart is read, never /etc/xdg/autostart, so system-wide
# Plasma components (plasmashell, KDE Connect, ...) are not started here.
#
# Usage: autostart.sh [--dry-run]

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

DESKTOP_LIST="${XDG_CURRENT_DESKTOP:-Hyprland}"
AUTOSTART_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/autostart"

# Last value of a key inside the [Desktop Entry] group. Localised keys such as
# Name[es] never match, because the key must start at column 1 followed by '='.
read_entry() {
    awk -v want="$2" '
        /^\[/ { in_group = ($0 == "[Desktop Entry]"); next }
        in_group && index($0, want "=") == 1 {
            sub(/^[^=]*=/, "")
            value = $0
        }
        END { if (value != "") print value }
    ' "$1"
}

# 0 when the current desktop is inside a colon separated list
listed_in() {
    [ -z "$1" ] && return 1
    saved_ifs=$IFS
    IFS=':'
    for entry in $1; do
        IFS=$saved_ifs
        case ":$DESKTOP_LIST:" in
            *":$entry:"*) return 0 ;;
        esac
    done
    IFS=$saved_ifs
    return 1
}

for file in "$AUTOSTART_DIR"/*.desktop; do
    [ -f "$file" ] || continue

    [ "$(read_entry "$file" Hidden)" = "true" ] && continue
    [ "$(read_entry "$file" X-GNOME-Autostart-enabled)" = "false" ] && continue

    entry_type=$(read_entry "$file" Type)
    [ -n "$entry_type" ] && [ "$entry_type" != "Application" ] && continue

    listed_in "$(read_entry "$file" NotShowIn)" && continue
    only_in=$(read_entry "$file" OnlyShowIn)
    if [ -n "$only_in" ] && ! listed_in "$only_in"; then
        continue
    fi

    try_exec=$(read_entry "$file" TryExec)
    if [ -n "$try_exec" ] && ! command -v "$try_exec" >/dev/null 2>&1; then
        continue
    fi

    exec_line=$(read_entry "$file" Exec)
    [ -z "$exec_line" ] && continue

    # Drop XDG field codes (%f, %U, ...); they only mean something to a real
    # desktop launcher.
    exec_line=$(printf '%s' "$exec_line" | sed 's/ *%[a-zA-Z]//g')

    if [ "$DRY_RUN" = 1 ]; then
        printf 'autostart: %s -> %s\n' "$(basename "$file")" "$exec_line"
        continue
    fi

    printf 'autostart: launching %s\n' "$exec_line"
    setsid -f sh -c "$exec_line" >/dev/null 2>&1
done
