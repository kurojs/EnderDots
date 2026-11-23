-- User overrides for Hyprland variables (merged over ~/.config/hypr/variables.lua)

return {
	-- Reduced gaps
	workspaceGaps = 0,
	windowGapsIn = 0,
	windowGapsOut = 0,
	singleWindowGapsOut = 0,

	-- No window borders for now
	windowBorderSize = 0,

	-- No shadows/glow around windows
	shadowEnabled = false,

	-- No windows round
	windowRounding = 0,

	-- Cursor theme configured in KDE (kcminputrc). The caelestia default is
	-- "sweet-cursors", which never resolves because the installed theme is
	-- called "Sweet-cursors" (cursor theme names are case sensitive).
	cursorTheme = "Sweet-cursors",
}
