# ender4-dots — Windows

Personal Windows dotfiles. This branch contains configuration for the Windows desktop environment only.

## Showcase

![Desktop overview](https://i.imgur.com/KAikG2F.png)
![YASB bar](https://i.imgur.com/UpSq95u.png)
![Neovim](https://i.imgur.com/APgbrPl.png)
![Windows Terminal](https://i.imgur.com/gR7DBLp.png)

<sub>AI Chat panel — work in progress</sub>

![AI Chat panel](https://i.imgur.com/VAHQQAz.png)

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

Status bar configuration for [YASB](https://github.com/amnweb/yasb) — custom "Kuro glass" theme: translucent glassy pills, per-widget accent colors, `なぎの` typography.

**Requires the `なぎの` font.**

**Install location:** `%USERPROFILE%\.config\yasb\`

```powershell
# 1. Install YASB
winget install --scope machine AmN.yasb

# 2. Copy the config (icons included)
Copy-Item .config\yasb\* "$env:USERPROFILE\.config\yasb\" -Recurse

# 3. Reload the running bar (or start YASB)
& "$env:ProgramFiles\YASB\yasbc.exe" reload
```

> **Note:** image paths inside `config.yaml` are absolute (`C:/Users/kuuro/.config/yasb/icons/`) — adjust them if your username differs.

Bar layout:

| Left | Center | Right |
|------|--------|-------|
| OpenCode activity | Virtual desktops, Audio group (Cava + media) | Volume, CPU, GPU, Memory, Power |

Widgets:

- `opencode_status` — live OpenCode tool activity: a fixed-size bubble bounces right to left, its glow peaking at the bar's center and shrinking toward the edges (like cava). `💭 thinking` (purple), each tool runs with its own color (read=amber, write=green, bash=green, task=blue, search=lilac, web=teal); idle shows `🟣 York`. Feeds off `opencode_state.txt`, written by the OpenCode plugin at `.config/opencode/plugins/yasb-status.js` (`tool.execute.before` / `session.status` / `session.idle` hooks, Bun runtime; restart OpenCode to load it)
- `windows_workspaces` — borderless glass circles showing each desktop's name (right-click → **Rename** to set kanji such as 一, 二, 三); the active one glows with a green gradient
- `audio_group` — single purple pill wrapping Cava + Media
- `cava` — mirrored audio visualizer, purple gradient
- `media` — invisible in the bar; the click zone that opens the media popup
- `volume` — native system volume widget: scroll up/down, left click = mixer popup (per-app sliders), right click = mute; green pill with Spotify icon + `%`
- `cpu` / `gpu` / `memory` — pink perf widgets with icons, alternate histograms and thresholds
- `copilot` — power icon; opens the GitHub Copilot usage popup

Icons: `icons/spotify.svg` (vector, crisp at any size) and `icons/power.png`. Everything else is handled by YASB itself — no helper scripts required.

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
      yasb-status.js     OpenCode plugin → feeds YASB opencode_status widget
  routine-notify/        RoutineNotify schedule backup (PLAN 2026)
  starship/
    starship.toml        Starship prompt config
  tacky-borders/
    config.yaml          Tacky Borders window border config
  yasb/
    config.yaml          YASB bar config (Kuro glass theme)
    styles.css           YASB stylesheet
    icons/
      power.png          Power button (opens Copilot usage popup)
      spotify.svg        Volume icon (system volume widget, vector)
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
