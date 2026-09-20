Personal Windows dotfiles. This branch contains configuration for the Windows desktop environment only.

## Showcase

<img src="https://i.imgur.com/qDmIpgK.png" alt="EnderDots showcase" width="700" />

---

## Contents

### Neovim — `.config/nvim-windows/`

Windows-adapted Neovim configuration based on [LazyVim](https://lazyvim.org). Adapted from the Linux setup with the following changes:

- Node.js detection uses `PATH` lookup first, with fallback to common Windows install paths
- tmux navigation plugin disabled (no tmux on Windows)
- Obsidian plugin disabled (no vault configured on Windows)
- `opencode.nvim` set as the active AI plugin, using `opencode` from `PATH`
- Dashboard header uses the KURO ASCII art

**Install location:** `%LOCALAPPDATA%\nvim`

**Dependencies:** `nvim`, `ripgrep`, `fd`, `lazygit`, `make`, `node` (v18+), `tree-sitter-cli`

```
winget install Neovim.Neovim BurntSushi.ripgrep.MSVC sharkdp.fd JesseDuffield.lazygit GnuWin32.Make OpenJS.NodeJS
npm install -g tree-sitter-cli
```

---

### Windows Terminal Preview — `home/user/AppData/Local/Microsoft/Windows Terminal Preview/`

[Windows Terminal Preview](https://github.com/microsoft/terminal) by Microsoft. The Preview build receives features earlier than the stable release.

Terminal configuration with:

- Font: IosevkaTerm Nerd Font, size 16
- Theme: One Half Dark (custom dark variant with near-black background `#0A0B0D`)
- Acrylic background with 90% opacity
- Default profile: Windows PowerShell

**Quake mode:** Press `Win+`` to toggle a drop-down terminal that slides from the top of the screen. Mapped to `Alt+Z` via AutoHotkey (see below).

**Install location:** `%LOCALAPPDATA%\Packages\Microsoft.WindowsTerminalPreview_8wekyb3d8bbwe\LocalState\settings.json`

---

### WezTerm — `home/.wezterm.lua`

[WezTerm](https://wezfurlong.org/wezterm/) by wez. GPU-accelerated terminal emulator with Lua configuration. Used as the primary terminal on Windows.

- Font size: 18
- Background: Acrylic transparency (`win32_system_backdrop = "Acrylic"`, 80% opacity)
- Color palette: EnderDots/ghostty theme (purple/violet accents on near-black background)
- Default shell: Nushell (`nu`) — see the Nushell section below
- Keybindings ported from ghostty (splits, pane zoom, resize, clear screen)
- Max FPS: 240, Kitty graphics protocol enabled

**Install location:** `%USERPROFILE%\.wezterm.lua`

```powershell
winget install wez.wezterm
```

---

### Nushell — `home/AppData/Roaming/nushell/config.nu`

[Nushell](https://www.nushell.sh/) by the Nushell contributors. A modern shell that treats all data as structured — commands return tables, lists, and records instead of plain text. Pairs well with Starship for a fully customized shell experience on Windows. Default shell in WezTerm.

```powershell
winget install Nushell.Nushell
```

Configuration includes:

- Kurox color palette (ported from the Linux fish config, same as Starship)
- Git aliases: `gc`, `gca`, `gp`, `gpf`, `gl`, `gs`, `gd`, `ga`, `gco`, `gb`
- [Atuin](https://atuin.sh) history integration (hook + `Ctrl+R` / up-arrow search)
- [zoxide](https://github.com/ajeetdsouza/zoxide) smart directory jumping — `z` to jump, `zi` interactive search (PWD hook adds visited dirs)
- Starship prompt auto-loaded from `vendor/autoload/starship.nu`
- WezTerm fix: `osc133 = false` — WezTerm stable misinterprets OSC 133 semantic prompts on Windows, causing the prompt to jump while typing. See [wezterm/wezterm#2779](https://github.com/wezterm/wezterm/issues/2779). Fixed in WezTerm nightly 20260117+.

**Install location:** `%APPDATA%\nushell\config.nu`

**Dependencies:** `starship`, `atuin`, `zoxide`

```powershell
winget install Nushell.Nushell Starship.Starship Atuinsh.Atuin ajeetdsouza.zoxide
```

zoxide's Nushell integration goes in the same `vendor/autoload` folder (note: the shell name is `nushell`, not `nu` — same UTF-8 **without** BOM pattern as Starship):

```powershell
$content = zoxide init nushell | Out-String
[System.IO.File]::WriteAllText("$env:APPDATA\nushell\vendor\autoload\zoxide.nu", $content, (New-Object System.Text.UTF8Encoding($false)))
```

---

### Starship — `.config/starship/starship.toml`

[Starship](https://starship.rs/) by starship-rs contributors. Minimal, fast, cross-shell prompt written in Rust. Replicates the EnderDots Linux prompt (Kurox palette) on Windows.

- Directory: purple (`#8f86e8`)
- Git branch/status: green (`#86efac`), pink (`#e8a0bf`)
- Strings/paths: light purple (`#c4b5fd`), operators: amber (`#f6c177`)
- Errors/status: red (`#eb6f92`), hints: slate gray (`#5c6170`)

**Install:**

```powershell
winget install Starship.Starship
```

**Config location:** `%USERPROFILE%\.config\starship.toml`

For Nushell, generate the autoload file (UTF-8 **without** BOM — PowerShell 5.1 `Set-Content -Encoding UTF8` adds a BOM that breaks Nushell):

```powershell
$content = starship init nu | Out-String
[System.IO.File]::WriteAllText("$env:APPDATA\nushell\vendor\autoload\starship.nu", $content, (New-Object System.Text.UTF8Encoding($false)))
```

---

### Float Tools

Tools used as floating overlays or quick-access utilities on top of the desktop.

#### Windows Terminal Preview — Quake Mode

Windows Terminal Preview includes a built-in quake/drop-down mode. Press `Win+`` (or `Alt+Z` via AutoHotkey) to toggle a terminal that slides down from the top of the screen, stays on top of all windows, and hides when dismissed. No third-party software required.

#### WTQ — WezTerm Quake Mode

[WTQ](https://github.com/flyingpie/windows-terminal-quake) by flyingpie. Brings quake-style drop-down terminal support to any terminal emulator on Windows, including WezTerm. Attach it to an existing WezTerm window and toggle it with a global hotkey.

```powershell
winget install flyingpie.windows-terminal-quake
```

Configure in `wtq.json` to target WezTerm and bind your preferred toggle key.

#### Flow Launcher

[Flow Launcher](https://www.flowlauncher.com/) by jjw24 and contributors. Application launcher and search utility for Windows, similar to Raycast on macOS. Supports plugins, custom themes, and hotkey activation.

Extensions used:

| Plugin | Description | Source |
|--------|-------------|--------|
| Everything | Fast file search via Everything engine | [community plugins](https://github.com/Flow-Launcher/Flow.Launcher.Plugin.Everything) |
| TodoList | Quick task capture and management | [community plugins](https://github.com/Flow-Launcher/Flow.Launcher.Community.Plugin.TodoList) |
| Google Search | Open Google searches instantly | built-in |
| DeepL Translate | Translate selected text via DeepL API | [community plugins](https://github.com/nvs-abhilash/Flow.Launcher.Plugin.DeepLTranslate) |
| GIF Search | Search and copy GIFs via Tenor | [community plugins](https://github.com/riojano0/flowlauncher-gif-finder) |

#### Open-LLM-VTuber

[Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) by Open-LLM-VTuber contributors. Voice-interactive AI VTuber companion with a Live2D avatar that runs entirely locally. Supports all major LLMs, TTS, and ASR backends. Used here as York — an always-on AI companion that floats over the desktop with a Live2D avatar, responds to voice, and provides conversational AI assistance.

The Live2D model used for York is the [Deadbeat VTuber Model (Free)](https://jawlipops.gumroad.com/l/XBsYK) by [jawli](https://jawlipops.gumroad.com/), which gives York her expressiveness and personality.

#### Spicetify

[Spicetify](https://spicetify.app/) by spicetify. CLI tool to customize the Spotify desktop client — themes, extensions, and custom apps injected directly into the client.

```powershell
winget install Spicetify.Spicetify
```

After install, apply a theme and restart Spotify:

```powershell
spicetify config current_theme <theme-name>
spicetify apply
```

---

### Tacky Borders — `home/user/.config/tacky-borders/`

Window border highlighting via [tacky-borders](https://github.com/lukeyou05/tacky-borders).

- Active window: animated purple → violet → green gradient border (`ReverseSpiral` + `Fade`)
- Inactive windows: no border (transparent)
- Auto-reloads on config change (`watch_config_changes: true`)

**Install location:** `%USERPROFILE%\.config\tacky-borders\`

---

### YASB — `.config/yasb/`

Status bar configuration for [YASB](https://github.com/amnweb/yasb) — custom "Kurox Navy" theme: squared borderless glass pills that fill the full bar height, Kanagawa-adjacent periwinkle (`#8080C0`/`#9C9CD4`) + teal (`#408080`/`#9CC8C8`) accents, `なぎの` typography.

**Requires the `なぎの` font.**

**Requires two custom widgets that only exist in the source checkout — the winget/installed `YASB.exe` does NOT include them and will error with `unknown type "yasb.opencode.OpenCodeWidget"` / `unknown type "yasb.workspaces.WorkspacesWidget"`.**

**Install location:** `%USERPROFILE%\.config\yasb\`

```powershell
# 1. Copy the config (icons included)
Copy-Item .config\yasb\* "$env:USERPROFILE\.config\yasb\" -Recurse

# 2. Source checkout (the custom widgets live here, not in the installed app)
#    Clone amnweb/yasb, create a venv, then drop the patched widget + validation
#    files from .config/yasb/opencode-widget/src/ into the matching paths:
#      src/core/widgets/yasb/opencode.py
#      src/core/validation/widgets/yasb/opencode.py
#      src/core/widgets/yasb/workspaces.py
#      src/core/validation/widgets/yasb/workspaces.py
git clone https://github.com/amnweb/yasb C:\Users\kuuro\Documents\Work\yasb
cd C:\Users\kuuro\Documents\Work\yasb
py -3.14 -m venv .venv
.\.venv\Scripts\pip install -r requirements.txt

# 3. Start YASB from source, hidden (no console window)
wscript.exe .config\yasb\opencode-widget\yasb-launcher.vbs
```

> **Note:** image paths inside `config.yaml` are absolute (`C:/Users/kuuro/.config/yasb/icons/`) — adjust them if your username differs.
>
> The installed `YASB.lnk` in the Start Menu must be repointed at `wscript.exe ""...yasb-launcher.vbs""` (admin/UAC required to edit it in ProgramData). The `YASB.lnk` itself is NOT versioned — re-run this setup after a fresh Windows install.

**Autostart:** `...\Startup\YASB-hidden.vbs` runs `wscript yasb-launcher.vbs` — starts the source bar hidden at login with no console. `yasb-launcher.vbs` is a singleton guard: if a `pythonw.exe` already runs `src/main.py` it does nothing (no double bars).

Bar layout:

| Left | Center | Right |
|------|--------|-------|
| OpenCode activity, Cava | Workspaces (kanji) | Volume, CPU, GPU, Memory, Power |

Widgets:

- `opencode_status` — live OpenCode tool activity: a fixed-size bubble bounces right to left, its glow peaking at the bar's center and shrinking toward the edges (like cava). `💭 thinking` (`#9d5cff`), `🧹 compacting` (`#c99bff`), each tool runs with its own color (read=amber, write/bash=green, task=blue, search=amber, web=teal), idle (`🟣 York`) turns teal `#9CC8C8` and starts the bounce animation. The **widget** (`opencode-widget/`) draws its own QPainter animation — the plugin only writes state JSON. Feeds off `opencode_state.json`, written by the OpenCode v2 plugin at `.config/opencode/plugins/yasb-status.js` (`ctx.event.subscribe` + `ctx.tool.hook("execute.before"/"execute.after")`; restart OpenCode to load it). The plugin writes atomically (`tmp` + `rename`) so the bar never reads a half-written file, and holds each tool state on screen ~1.5s before sliding back to `thinking` so fast tools stay visible at 250ms polling
- `workspaces` — minimalist teal workspace switcher: one squared button per Windows virtual desktop showing the kanji numeral (一 二 三 …); the active one gets a green glass block. Left-click switches desktop, tooltip shows the desktop name
- `cava` — mirrored audio visualizer, periwinkle bars
- `volume` — Spotify volume control: scroll up/down adjusts Spotify.exe volume, left click = mute, right click = toggles label; teal pill showing static `Spotify` text (no icon, no level)
- `cpu` / `gpu` / `memory` — periwinkle perf widgets with icons, alternate histograms and thresholds
- `copilot` — power icon; opens the GitHub Copilot usage popup

Icons: `icons/power.png` (power button, opens the Copilot usage popup). `icons/spotify.svg` is legacy — the volume widget now renders the text label `Spotify` instead.

---

### AutoHotkey Scripts — `home/user/Documents/autohotkey-scripts/`

AutoHotkey v2 scripts for Windows keybindings.

**Requires:** [AutoHotkey v2](https://www.autohotkey.com/), [VD.ah2](https://github.com/FuPeiJiang/VD.ah2)

**`quake.ahk`**

| Shortcut | Action |
|----------|--------|
| `Alt+Z` | Toggle Windows Terminal quake mode (`Win+`\`) |
| `Alt+N` | Type `ñ` |
| `Ctrl+Shift+Win+Left` | Move active window to previous virtual desktop |
| `Ctrl+Shift+Win+Right` | Move active window to next virtual desktop |

---

### RoutineNotify — `.config/routine-notify/`

[RoutineNotify](https://github.com/kurojs/RoutineNotify) — PLAN 2026 daily schedule as importable app routines. AI voice notifications with a custom sound, one emoji per routine.

**Import:** Settings → Import backup → `routine-notify.json`

---

## Structure

```
.config/
  nvim-windows/          Neovim config (Windows)
  opencode/
    plugins/
      yasb-status.js     OpenCode v2 plugin → feeds YASB opencode_status widget
  routine-notify/        RoutineNotify schedule backup (PLAN 2026)
  starship/
    starship.toml        Starship prompt config
  tacky-borders/
    config.yaml          Tacky Borders window border config
  yasb/
    config.yaml          YASB bar config (Kurox Navy theme)
    styles.css           YASB stylesheet
    opencode-widget/     Custom widget source (patch files + launcher)
      yasb-launcher.vbs    Launches the source bar hidden (singleton guard)
      yasb-status.js       OpenCode v1 plugin (legacy, mirrors the state file)
      yasb-hidden.cmd      Legacy hidden start (see yasb-launcher.vbs)
      src/                 Patched widget + validation files → overlaid onto the source checkout
    icons/
      power.png          Power button (opens Copilot usage popup)
      spotify.svg        Legacy volume icon (unused — widget shows "Spotify" text)
home/
  .wezterm.lua           WezTerm terminal config (default shell: Nushell)
  AppData/
    Roaming/
      nushell/
        config.nu        Nushell config (Kurox colors, git aliases, Atuin)
  user/
    AppData/
      Local/
        Microsoft/
          Windows Terminal Preview/
            settings.json  Windows Terminal Preview config
    Documents/
      autohotkey-scripts/
        quake.ahk          AutoHotkey v2 keybindings
```

---

## Acknowledgments

- [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) - Voice-interactive AI VTuber companion with Live2D support (York's engine)
- [Deadbeat VTuber Model](https://jawlipops.gumroad.com/l/XBsYK) by jawli - Live2D model that gives York her expressiveness and personality
- [LazyVim](https://github.com/LazyVim/LazyVim) - Neovim configuration framework
- [YASB](https://github.com/amnweb/yasb) - Windows status bar
- [Flow Launcher](https://www.flowlauncher.com/) - Application launcher
- [Spicetify](https://spicetify.app/) - Spotify client customization
- [AutoHotkey](https://www.autohotkey.com/) - Windows automation scripting
- [WezTerm](https://wezfurlong.org/wezterm/) - GPU-accelerated terminal emulator
- [Nushell](https://www.nushell.sh/) - Modern structured data shell
- [Starship](https://starship.rs/) - Minimal cross-shell prompt
- [WTQ](https://github.com/flyingpie/windows-terminal-quake) - Quake-style drop-down mode for any terminal
- [Komorebi](https://github.com/LGUG2Z/komorebi) - Tiling window manager for Windows
- [Clawd on Desk](https://github.com/rullerzhou-afk/clawd-on-desk) - Desktop AI companion
- [Zifang](https://petdex.dev/pets/zifang) - Virtual pet
