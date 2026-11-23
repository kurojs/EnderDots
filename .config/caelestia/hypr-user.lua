-- User config (loaded at the end of ~/.config/hypr/hyprland.lua)

-- Make ~/.local/bin visible to apps spawned through Hyprland/Caelestia,
-- so the user-local Ghostty nightly (with blur support) is used.
local home = os.getenv("HOME")
local path = os.getenv("PATH") or "/usr/local/bin:/usr/bin"
if not string.find(path, home .. "/.local/bin", 1, true) then
	hl.env("PATH", home .. "/.local/bin:" .. path)
end

-- Qt applications follow the KDE theme. plasma-integration reads
-- ~/.config/kdeglobals (colour scheme, widget style, icons, fonts) instead of
-- the qtengine platform theme, which was pinned to caelestia's own palette.
-- This is loaded after hyprland/env.lua, so it overrides that default.
hl.env("QT_QPA_PLATFORMTHEME", "kde")

-- Hyprland never reads XDG autostart files, so the entries enabled in KDE
-- System Settings must be bridged explicitly.
hl.on("hyprland.start", function()
	hl.exec_cmd(home .. "/.config/caelestia/autostart.sh")
end)

-- Input method: fcitx5 with the Hazkey engine for Japanese. The base layout
-- stays `us` (with the altgr-intl variant, see hyprland/input.lua), so fcitx5
-- is only responsible for the Japanese IME. Alt+grave toggles it on and off.
hl.env("GTK_IM_MODULE", "fcitx")
hl.env("QT_IM_MODULE", "fcitx")
hl.env("XMODIFIERS", "@im=fcitx")
hl.env("SDL_IM_MODULE", "fcitx")

hl.on("hyprland.start", function()
	hl.exec_cmd("fcitx5 -d --replace")
	hl.exec_cmd("albert")
end)

hl.bind("ALT + grave", hl.dsp.exec_cmd("fcitx5-remote -t"))

-- Shortcut for Japanese OCR
hl.bind("CTRL + ALT + O", hl.dsp.exec_cmd("bash /home/kuro/.local/bin/ocr-jp-caelestia.sh"))

-- ALBERT
hl.bind("ALT + A", hl.dsp.exec_cmd("albert toggle"))
