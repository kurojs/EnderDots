# KDE — Install

This is an overlay branch: it holds only KDE-specific files. Apply `main` first.

```bash
git clone -b main https://github.com/kurojs/EnderDots.git && cd EnderDots
git fetch origin kde && git checkout origin/kde -- .
cp -r .config/* ~/.config/
cp -r .local/share/* ~/.local/share/
```

Then log out and back in.

## Packages (AUR)

```bash
yay -S kwin-effects-glass-git qt6-m3shapes-git plasma6-applets-appgrid ttf-iosevkaterm-nerd tela-icon-theme-purple sweet-cursors
```

## Manual

- Glass Qt6 widget style `glass6.so` → `/usr/lib/qt6/plugins/styles/`
- Rounded corners `kwin4_effect_shapecorners` → https://github.com/matinlotfali/KDE-Rounded-Corners
- Nagino font → `/usr/local/share/fonts/n/nagino.otf`

## Active theme

- Widget style: Glass · Icons: Tela-purple · Cursor: Sweet-cursors · Decoration: Breeze
- Color scheme: Alpha50Transparent · Look-and-feel: KDE-Story-Blue-Dark-Global-6 · Plasma theme: sumac-night-molten-glass-plasma
- KWin effects: glass, rounded corners (shapecorners)
- Tiling: krohnkite · OSD: osd-desk-snake

## Notes

- `Gemini-Kchat` plasmoid API keys are redacted — re-enter them in the widget settings.
- Active plasmoids included (11). Grid launcher = `plasma6-applets-appgrid`.
- Wallpapers live in `~/Pictures` + Steam Workshop (not included).
