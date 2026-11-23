# Hyprland — Install

This is an overlay branch: it holds only Hyprland-specific files. Apply `main` first.

```bash
git clone -b main https://github.com/kurojs/EnderDots.git && cd EnderDots
git fetch origin hypr && git checkout origin/hypr -- .
cp -r .config/* ~/.config/
cp -r .local/bin/* ~/.local/bin/
~/.local/bin/caelestia-overlay-sync
```

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
