# Hyprland — Install

Restore: copy `.config/hypr`, `.config/caelestia`, `.config/quickshell` → `~/.config/`, and `.local/bin/caelestia-*` → `~/.local/bin/`. Then run `caelestia-overlay-sync`.

## Packages

```bash
yay -S hyprland quickshell-git caelestia-shell caelestia-cli caelestia-firefox-theme \
  hyprcursor hyprpicker cliphist wl-clipboard trash-cli gnome-keyring polkit-gnome \
  xdg-desktop-portal-hyprland
```

## Optional (referenced by config)

```bash
yay -S gammastep geoclue playerctl
```

## Caelestia

- https://github.com/caelestia-dots/shell
