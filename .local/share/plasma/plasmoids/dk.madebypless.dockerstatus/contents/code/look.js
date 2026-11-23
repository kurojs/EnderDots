.pragma library
// The shared look: badge style, spacing, logo and colours that every madebypless widget can
// follow, so they all look the same. It lives in ~/.config/madebypless-widgets/look.json.
// This file is identical in every widget; tests/widgets/look.test.mjs checks that.
//
// Widgets have their own colour settings (colorFailed, colorUp, …). Each widget's logic.js maps
// those to the shared colour roles below in its colorRoles.

// The shared colour roles, in the order the settings page lists them.
var roles = ["error", "attention", "warning", "active", "info", "ok", "neutral", "countBackground"]

var defaults = {
    badgeStyle: "square",
    badgeSpacing: 4,
    logoSpacing: 0,
    showLogo: false,
    colors: {
        error: "#d71920",
        attention: "#e5534b",
        warning: "#f2b712",
        active: "#ff9800",
        info: "#2a72d6",
        ok: "#7ba700",
        neutral: "#8a8a8a",
        countBackground: "#2b2f33"
    }
}

// "dot" (an icon with a status dot) exists only in some widgets; the others show it as square badges.
var badgeStyles = ["square", "rounded", "dot"]

function isColor(value) {
    return typeof value === "string" && /^#[0-9a-fA-F]{6}$/.test(value)
}

function isSpacing(value, max) {
    return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= max
}

// The shared look from the file's text, with anything missing or invalid taken from the
// defaults. Null when there is no file or it isn't a JSON object.
function parse(text) {
    let data
    try {
        data = JSON.parse(text)
    } catch (e) {
        return null
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) {
        return null
    }
    const colors = data.colors && typeof data.colors === "object" ? data.colors : {}
    const look = {
        badgeStyle: badgeStyles.indexOf(data.badgeStyle) >= 0 ? data.badgeStyle : defaults.badgeStyle,
        badgeSpacing: isSpacing(data.badgeSpacing, 16) ? data.badgeSpacing : defaults.badgeSpacing,
        logoSpacing: isSpacing(data.logoSpacing, 24) ? data.logoSpacing : defaults.logoSpacing,
        showLogo: typeof data.showLogo === "boolean" ? data.showLogo : defaults.showLogo,
        colors: {}
    }
    for (const role of roles) {
        look.colors[role] = isColor(colors[role]) ? colors[role].toLowerCase() : defaults.colors[role]
    }
    return look
}

function serialize(look) {
    return JSON.stringify(look, null, 2) + "\n"
}

// Colours from the settings arrive as QColor objects in QML; this turns them into "#rrggbb".
function colorName(value) {
    const text = String(value)
    return isColor(text) ? text.toLowerCase() : null
}

// What a widget should look like: its own settings, or the shared look when `shared` is set.
// `colors` maps each of the widget's colour settings (e.g. colorFailed) to a colour.
function resolve(config, shared, colorRoles) {
    const source = shared || config
    const look = {
        badgeStyle: source.badgeStyle,
        badgeSpacing: source.badgeSpacing,
        logoSpacing: source.logoSpacing,
        showLogo: source.showLogo,
        colors: {}
    }
    for (const key in colorRoles) {
        look.colors[key] = shared ? shared.colors[colorRoles[key]] : config[key]
    }
    return look
}

// A shared look made from one widget's own settings, so turning the shared look on for the
// first time keeps that widget looking as it did. A role the widget doesn't use gets the default.
function fromConfig(config, colorRoles) {
    const look = {
        badgeStyle: badgeStyles.indexOf(config.badgeStyle) >= 0 ? config.badgeStyle : defaults.badgeStyle,
        badgeSpacing: isSpacing(config.badgeSpacing, 16) ? config.badgeSpacing : defaults.badgeSpacing,
        logoSpacing: isSpacing(config.logoSpacing, 24) ? config.logoSpacing : defaults.logoSpacing,
        showLogo: !!config.showLogo,
        colors: {}
    }
    for (const role of roles) {
        const key = Object.keys(colorRoles).find(k => colorRoles[k] === role)
        look.colors[role] = (key && colorName(config[key])) || defaults.colors[role]
    }
    return look
}

// A copy of `look` with one setting changed; `key` is a setting name or a colour role.
function withValue(look, key, value) {
    const copy = JSON.parse(JSON.stringify(look))
    if (roles.indexOf(key) >= 0) {
        copy.colors[key] = value
    } else {
        copy[key] = value
    }
    return copy
}

// The widget's colour settings that use `role`, e.g. ["colorFailed"] for "error".
function keysForRole(colorRoles, role) {
    return Object.keys(colorRoles).filter(k => colorRoles[k] === role)
}

function shellQuote(text) {
    return "'" + String(text).replace(/'/g, "'\\''") + "'"
}

// Shell commands for reading and writing the file. Reading creates the folder first, so the
// folder can be watched for changes even before the first save. `seq` makes each read a new
// command: Plasma runs identical commands only once and shares their output.
function readCommand(dir, path, seq) {
    return "mkdir -p " + shellQuote(dir) + " && cat " + shellQuote(path) + " 2>/dev/null; true # " + seq
}

// Writes through a temporary file of its own, so two saves at once can't mix, and runs in the
// background, so closing the settings dialog right after OK can't cut the save short.
function writeCommand(dir, path, look) {
    return "(mkdir -p " + shellQuote(dir) + " && t=$(mktemp " + shellQuote(dir + "/.look.XXXXXX") + ")"
        + " && printf '%s' " + shellQuote(serialize(look)) + " > \"$t\" && mv -f \"$t\" " + shellQuote(path)
        + ") </dev/null >/dev/null 2>&1 &"
}
