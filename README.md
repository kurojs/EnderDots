# EnderDots

[![Arch Linux](https://img.shields.io/badge/Arch_Linux-22c55e?logo=arch-linux&logoColor=white&labelColor=a855f7)](https://archlinux.org/)
[![KDE](https://img.shields.io/badge/KDE-22c55e?logo=kde&logoColor=white&labelColor=a855f7)](https://kde.org/)
[![Neovim](https://img.shields.io/badge/Neovim-a855f7?logo=neovim&logoColor=white&labelColor=22c55e)](https://neovim.io/)
[![OpenCode](https://img.shields.io/badge/OpenCode-22c55e?logo=visualstudiocode&logoColor=white&labelColor=a855f7)](https://github.com/opencode)
[![Warp](https://img.shields.io/badge/Warp-a855f7?logo=warp&logoColor=white&labelColor=22c55e)](https://www.warp.dev/)
[![Fish](https://img.shields.io/badge/Fish-22c55e?logo=fish&logoColor=white&labelColor=a855f7)](https://fishshell.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-a855f7?labelColor=22c55e)](https://opensource.org/licenses/MIT)

> EnderDots – Complete AI-Enhanced Desktop Environment for Arch Linux

EnderDots is a comprehensive collection of dotfiles featuring a modern desktop environment with integrated AI capabilities. Built for advanced users who demand productivity, customization, and cutting-edge technology in their daily workflow. From intelligent code editing to seamless application launching, this configuration brings together automation, modern terminal experiences, and smart scripting in a unified, highly optimized environment.

---

## Showcase

<table>
  <tr>
    <td><img src="https://i.imgur.com/qDmIpgK.png" alt="EnderDots showcase" /></td>
    <td><img src="https://i.imgur.com/WA6sIgQ.png" alt="EnderDots showcase" /></td>
  </tr>
</table>

---

## Table of Contents

1. [Features](#-features)
2. [Structure](#-structure)
3. [Dependencies](#-dependencies)
4. [Installation](#-installation)
5. [Usage](#-usage)

---

## Features

### Desktop Environment & Window Management
- **KDE Integration**: Comprehensive window rules and tiling scripts for enhanced productivity.
- **Dynamic Theming**: Custom green and purple aesthetics applied system-wide.

### AI-Powered Workflow
- **OpenCode & Neovim**: Deep AI integrations across both primary editors.
- **Smart Launching**: Vicinae integration for quick, Raycast-style command execution.
- **Language Study**: Optimized Japanese reading and translation setup.

### Development Environment
- **Neovim Configuration**: Keyboard-driven setup with AI plugins.
- **Modern Terminals**: Configurations for both Warp and Ghostty, featuring Fish shell and Starship prompt.
- **Alternative Editors**: Includes optimized setups for OpenCode and Zed.

---

## Structure

```plaintext
EnderDots/
├── .config/
│   ├── fish/                   # Fish shell aliases and functions
│   ├── ghostty/                # Ghostty terminal configuration
│   ├── nvim/                   # Complete Neovim setup
│   ├── opencode/               # AI-first IDE configuration
│   ├── quickshell/             # Custom desktop interface
│   ├── tilda/                  # Drop-down terminal settings
│   ├── zed/                    # Zed editor configuration
│   ├── starship.toml           # Universal shell prompt
│   ├── kwinrc & kwinrulesrc    # KDE Window management rules
│   └── kuromy.kksrc            # KDE shortcut configuration
├── .local/bin/                 # Custom user scripts and executables
├── Docs/                       # Additional documentation
├── home/ & usr/                # System-level file overlays
```

---

## Dependencies

- **Core Desktop**: `kwin`
- **Terminals & Shells**: `warp-terminal`, `ghostty`, `fish`, `starship`
- **Editors**: `neovim`, `opencode` (or VSCode-based editor), `zed`
- **Productivity Tools**: `vicinae`
- **Utilities**: `git`, `curl`, `jq`, `zoxide`, `atuin`, `bat`

---

## Installation

### Arch Linux (AUR) — Recommended

```bash
yay -S ender-dots
ender-dots
```

The AUR package installs all config files under `/usr/share/ender-dots/` and provides the `ender-dots` command — an interactive TUI installer built with Go and Bubbletea that guides you through applying configurations.

### Manual (from source)

1. Clone the repository:
   ```bash
   git clone https://github.com/kurojs/EnderDots.git
   cd EnderDots
   ```

2. Copy the configuration files manually to your home directory:
   ```bash
   cp -r .config/* ~/.config/
   cp -r .local/bin/* ~/.local/bin/
   ```

3. Ensure your scripts are executable:
   ```bash
   chmod +x ~/.local/bin/*
   ```

---

## Usage

- **Application Launcher**: Use Vicinae for quick access to apps and scripts.
- **Development**: Launch `nvim`, `opencode`, or `zed` for pre-configured development environments.
- **Terminal**: Use Warp or Ghostty with Fish shell for an optimized CLI experience.
- **Window Management**: Leverage KDE tiling shortcuts (e.g., Super + hjkl) to navigate and organize your workspace efficiently.

---

<footer>
<sub>Crafted with Determination by Kuro • Powered by Arch Linux • Enhanced with AI</sub>
</footer>
