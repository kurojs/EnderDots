// Pure helpers for OSD Desk Snake: no dependency on KWin or on QML items,
// so they can be unit tested with qmltestrunner.
.pragma library

// Anchor ids: row-major 3x3 grid, 0 = top-left ... 4 = center ... 8 = bottom-right.
// The margin pushes the OSD inward from the anchored edges; offsets are absolute.
function anchorPosition(area, size, anchor, margin, offsetX, offsetY) {
    const a = (anchor >= 0 && anchor <= 8) ? anchor : 4;
    const col = a % 3;
    const row = Math.floor(a / 3);

    function along(start, length, extent, slot) {
        if (slot === 0) {
            return start + margin;
        }
        if (slot === 2) {
            return start + length - extent - margin;
        }
        return start + (length - extent) / 2;
    }

    return {
        x: Math.round(along(area.x, area.width, size.width, col) + offsetX),
        y: Math.round(along(area.y, area.height, size.height, row) + offsetY)
    };
}

// Percentages place the OSD center; the result is kept inside the area.
function freePosition(area, size, percentX, percentY) {
    function place(start, length, extent, percent) {
        const wanted = start + length * percent / 100 - extent / 2;
        const max = start + length - extent;
        return Math.round(Math.max(start, Math.min(max, wanted)));
    }

    return {
        x: place(area.x, area.width, size.width, percentX),
        y: place(area.y, area.height, size.height, percentY)
    };
}

// Layout modes: 0 = follow the KWin desktop grid, 1 = single row, 2 = single column.
function gridSize(count, kwinColumns, kwinRows, mode) {
    if (count <= 0) {
        return { columns: 0, rows: 0 };
    }
    if (mode === 1) {
        return { columns: count, rows: 1 };
    }
    if (mode === 2) {
        return { columns: 1, rows: count };
    }
    const columns = kwinColumns > 0 ? Math.min(kwinColumns, count) : count;
    return { columns: columns, rows: Math.ceil(count / columns) };
}

// Label sources: 0 = number, 1 = desktop name, 2 = template (%d number, %n name), 3 = custom list.
function labelFor(index, name, source, template, list) {
    const number = String(index + 1);
    switch (source) {
    case 1:
        return name ? name : number;
    case 2:
        return String(template).replace(/%d/g, number).replace(/%n/g, name || "");
    case 3:
        return (list && list[index]) ? list[index] : number;
    default:
        return number;
    }
}

function splitList(text) {
    if (!text) {
        return [];
    }
    return String(text).split(/[,\n]/).map(s => s.trim()).filter(s => s.length > 0);
}

function iconFor(index, list, fallback) {
    return (list && list[index]) ? list[index] : fallback;
}

function toBool(value, fallback) {
    if (value === true || value === "true" || value === 1 || value === "1") {
        return true;
    }
    if (value === false || value === "false" || value === 0 || value === "0") {
        return false;
    }
    return fallback;
}

function toReal(value, fallback) {
    if (value === undefined || value === null || value === "") {
        return fallback;
    }
    const n = Number(value);
    return isFinite(n) ? n : fallback;
}

function toInt(value, fallback) {
    const n = toReal(value, undefined);
    return n === undefined ? fallback : Math.round(n);
}

function hex2(n) {
    const v = Math.max(0, Math.min(255, Math.round(n)));
    return (v < 16 ? "0" : "") + v.toString(16);
}

function argb(r, g, b, a) {
    return "#" + hex2(a) + hex2(r) + hex2(g) + hex2(b);
}

// Accepts what KWin.readConfig may return for a color entry: a QML color value,
// the KConfig "r,g,b[,a]" form, or "#rrggbb" / "#aarrggbb". Returns "#aarrggbb".
function parseColor(value, fallback) {
    if (value !== null && typeof value === "object" && typeof value.r === "number") {
        return argb(value.r * 255, value.g * 255, value.b * 255, value.a * 255);
    }
    const text = (value === undefined || value === null) ? "" : String(value).trim();
    const parts = text.split(",").map(s => s.trim());
    if ((parts.length === 3 || parts.length === 4) && parts.every(p => p !== "" && isFinite(Number(p)))) {
        const n = parts.map(Number);
        return argb(n[0], n[1], n[2], n.length === 4 ? n[3] : 255);
    }
    if (/^#[0-9a-fA-F]{6}$/.test(text)) {
        return ("#ff" + text.slice(1)).toLowerCase();
    }
    if (/^#[0-9a-fA-F]{8}$/.test(text)) {
        return text.toLowerCase();
    }
    return fallback === undefined ? "#ff000000" : parseColor(fallback, undefined);
}

// Windows that make a desktop "occupied": regular taskbar windows bound to specific desktops.
// A window of another activity is not on screen; no activity listed means all of them.
// Without a current activity (previews, tests), every activity counts.
function countsAsTask(w, activity) {
    const activities = (w && w.activities) || [];
    const onActivity = !activity || activities.length === 0 || activities.indexOf(activity) >= 0;
    return w && w.normalWindow && !w.skipTaskbar && !w.onAllDesktops && onActivity;
}

// Builds the per-desktop data used by the indicator from KWin objects (or look-alikes):
// desktops need id and name, windows need desktops, activities, onAllDesktops, normalWindow,
// skipTaskbar, icon. activity is the current activity id.
function desktopInfo(desktops, windows, maxIcons, activity) {
    const info = desktops.map(d => ({ id: d.id, name: d.name || "", occupied: false, icons: [], extra: 0, windowIds: [] }));
    const byId = {};
    info.forEach(entry => { byId[entry.id] = entry; });

    (windows || []).forEach(w => {
        if (!countsAsTask(w, activity)) {
            return;
        }
        (w.desktops || []).forEach(d => {
            const entry = byId[d.id];
            if (!entry) {
                return;
            }
            entry.occupied = true;
            entry.windowIds.push(String(w.internalId || w.resourceClass || ""));
            if (entry.icons.length < maxIcons) {
                entry.icons.push(w.icon);
            } else {
                entry.extra += 1;
            }
        });
    });
    return info;
}

// Identifies what the indicator shows, so the view is only rebuilt when it changes.
function infoSignature(info) {
    return info.map(e => [e.id, e.name, e.occupied, e.extra, e.windowIds.join(",")].join("|")).join(";");
}

// Radius for a box of the given size: 0 = rounded (radius, capped), 1 = circle, 2 = square.
function shapeRadius(shape, width, height, radius) {
    if (shape === 1) {
        return Math.min(width, height) / 2;
    }
    if (shape === 2) {
        return 0;
    }
    return Math.min(radius, width / 2, height / 2);
}

// Pill style marker. Shapes: 0 pill, 1 circle, 2 square, 3 diamond, 4 bar.
// dims: { width, height, activeWidth, activeHeight, radius }.
// width/height is the layout box; innerWidth/innerHeight is the drawn shape,
// rotated by `rotation` degrees around its center.
function markerGeometry(shape, active, dims) {
    const w = active ? dims.activeWidth : dims.width;
    const h = active ? dims.activeHeight : dims.height;
    function box(width, height, radius, rotation, outer) {
        return {
            width: outer === undefined ? width : outer,
            height: outer === undefined ? height : outer,
            radius: radius,
            rotation: rotation,
            innerWidth: width,
            innerHeight: height
        };
    }
    switch (shape) {
    case 1:
        return box(h, h, h / 2, 0);
    case 2:
        return box(w, h, 0, 0);
    case 3:
        return box(h, h, 0, 45, Math.round(h * Math.SQRT2));
    case 4: {
        const thin = Math.max(2, Math.round(h / 3));
        return box(w, thin, thin / 2, 0);
    }
    default:
        return box(w, h, Math.min(dims.radius, w / 2, h / 2), 0);
    }
}

// How far the parts of a cell reach beyond its shape of height cellHeight:
// the content (label or icon) centered on it, and the parts placed under the
// content by markY, given as { offset, height } (null when not drawn).
// Returns { top, bottom }, both >= 0: the cell grows by that much, so nothing
// leaves the indicator (the OSD window cuts it off) and grid rows keep apart.
function cellExtents(cellHeight, contentHeight, parts) {
    let top = (cellHeight - contentHeight) / 2;
    let bottom = (cellHeight + contentHeight) / 2;
    parts.forEach(part => {
        if (part) {
            const y = markY(cellHeight, contentHeight, part.offset);
            top = Math.min(top, y);
            bottom = Math.max(bottom, y + part.height);
        }
    });
    return { top: Math.max(0, -top), bottom: Math.max(0, bottom - cellHeight) };
}

// Top of what sits `distance` px under the content (label or icon) centered in a
// cell of height cellHeight: the occupied dot, the line highlight. Negative
// distances go up into the content.
function markY(cellHeight, contentHeight, distance) {
    return (cellHeight + contentHeight) / 2 + distance;
}

// Horizontal room around the content of a cell (both sides), at 100 % zoom.
const cellPadding = 16;

// Lowest CellWidth and CellHeight that still change something (see cellGeometry):
// circles never get smaller than the widest content, and a cell is never
// narrower than its own content, so below the narrowest one CellWidth does nothing.
function cellSizeFloors(shape, widestContent, narrowestContent) {
    if (shape === 1) {
        const diameter = Math.ceil(widestContent + cellPadding);
        return { CellWidth: diameter, CellHeight: diameter };
    }
    return { CellWidth: Math.ceil(narrowestContent + cellPadding), CellHeight: 1 };
}

// Cell of the label, icon and task styles. Shapes: 0 rounded, 1 circle, 2 square.
// factor: the zoom (Settings.sizeFactor), for the padding; sizes come zoomed already.
function cellGeometry(shape, contentWidth, cellWidth, cellHeight, radius, factor = 1) {
    const w = Math.max(cellWidth, contentWidth + cellPadding * factor);
    if (shape === 1) {
        const d = Math.max(w, cellHeight);
        return { width: d, height: d, radius: d / 2 };
    }
    return { width: w, height: cellHeight, radius: shapeRadius(shape, w, cellHeight, radius) };
}

// Anchor (0..8) whose position is closest to the given top-left point.
function nearestAnchor(area, size, point, margin) {
    let best = 4;
    let bestDistance = Infinity;
    for (let a = 0; a <= 8; a++) {
        const p = anchorPosition(area, size, a, margin, 0, 0);
        const d = Math.hypot(point.x - p.x, point.y - p.y);
        if (d < bestDistance) {
            bestDistance = d;
            best = a;
        }
    }
    return best;
}

// Settings to store after the indicator was dragged to `dropped` (its top-left).
// cfg: { positionMode, anchor, margin, snap, snapDistance }.
// Free mode: percentages of the center, one decimal, never snapped.
// Anchor mode: exact offsets from the current anchor, or with snap, from the
// nearest anchor, and no offset at all when dropped within snapDistance of it.
function dropResult(area, size, dropped, cfg) {
    if (cfg.positionMode === 1) {
        function percent(pos, extent, start, length) {
            const value = (pos + extent / 2 - start) / length * 100;
            return Math.round(Math.max(0, Math.min(100, value)) * 10) / 10;
        }
        return {
            PercentX: percent(dropped.x, size.width, area.x, area.width),
            PercentY: percent(dropped.y, size.height, area.y, area.height)
        };
    }
    const anchor = cfg.snap ? nearestAnchor(area, size, dropped, cfg.margin) : cfg.anchor;
    const base = anchorPosition(area, size, anchor, cfg.margin, 0, 0);
    const dx = Math.round(dropped.x - base.x);
    const dy = Math.round(dropped.y - base.y);
    if (cfg.snap && Math.hypot(dx, dy) <= cfg.snapDistance) {
        return { Anchor: anchor, OffsetX: 0, OffsetY: 0 };
    }
    return { Anchor: anchor, OffsetX: dx, OffsetY: dy };
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Rect of the sliding highlight for the highlight point (hx, hy), from the rects
// { x, y, width, height, radius } of the cells in grid order: position, size and
// corner radius go from one cell to the next. A missing neighbor (incomplete last
// row) keeps the existing cell; points out of the grid stick to its edge.
function slideRect(rects, columns, hx, hy) {
    if (!rects.length) {
        return null;
    }
    const cols = Math.max(1, Math.min(columns, rects.length));
    const rows = Math.ceil(rects.length / cols);
    const x = Math.max(0, Math.min(cols - 1, hx));
    const y = Math.max(0, Math.min(rows - 1, hy));
    const at = (c, r) => (c < cols && r * cols + c < rects.length ? rects[r * cols + c] : null);
    const mix = (a, b, t) => {
        if (!a || !b || t === 0) {
            return a || b;
        }
        return {
            x: lerp(a.x, b.x, t),
            y: lerp(a.y, b.y, t),
            width: lerp(a.width, b.width, t),
            height: lerp(a.height, b.height, t),
            radius: lerp(a.radius, b.radius, t)
        };
    };
    const c0 = Math.floor(x);
    const r0 = Math.floor(y);
    const top = mix(at(c0, r0), at(c0 + 1, r0), x - c0);
    const bottom = mix(at(c0, r0 + 1), at(c0 + 1, r0 + 1), x - c0);
    return mix(top, bottom, y - r0);
}

// Grid cell (column, row) of a desktop index.
function gridPoint(index, columns) {
    const c = Math.max(1, columns);
    return { x: index % c, y: Math.floor(index / c) };
}

// How much a desktop is highlighted (0..1) when the highlight sits at grid point
// (hx, hy), which can be between cells while it moves.
function highlightWeight(index, columns, hx, hy) {
    const p = gridPoint(index, columns);
    return Math.max(0, Math.min(1, 1 - Math.hypot(p.x - hx, p.y - hy)));
}

// markerGeometry() between inactive (weight 0) and active (weight 1).
function markerGeometryAt(shape, weight, dims) {
    const a = markerGeometry(shape, false, dims);
    const b = markerGeometry(shape, true, dims);
    const w = Math.max(0, Math.min(1, weight));
    return {
        width: lerp(a.width, b.width, w),
        height: lerp(a.height, b.height, w),
        radius: lerp(a.radius, b.radius, w),
        rotation: a.rotation,
        innerWidth: lerp(a.innerWidth, b.innerWidth, w),
        innerHeight: lerp(a.innerHeight, b.innerHeight, w)
    };
}

// Grid offset of the highlight for a KWin desktop swipe in progress: swiping left
// brings the desktop on the right, swiping up the one below (VirtualDesktopManager).
function gestureOffset(direction, progress) {
    const p = Math.max(0, Math.min(1, progress));
    switch (direction) {
    case "left":
        return { x: p, y: 0 };
    case "right":
        return { x: -p, y: 0 };
    case "up":
        return { x: 0, y: p };
    default:
        return { x: 0, y: -p };
    }
}

function clampToGrid(point, columns, rows) {
    return {
        x: Math.max(0, Math.min(Math.max(0, columns - 1), point.x)),
        y: Math.max(0, Math.min(Math.max(0, rows - 1), point.y))
    };
}

// Color between a (t = 0) and b (t = 1), as "#aarrggbb". Accepts what parseColor() does.
function mixColor(a, b, t) {
    const ca = parseColor(a, "#ff000000");
    const cb = parseColor(b, "#ff000000");
    function channel(c, i) {
        return parseInt(c.substr(1 + 2 * i, 2), 16);
    }
    const out = [0, 1, 2, 3].map(i => lerp(channel(ca, i), channel(cb, i), t));
    return argb(out[1], out[2], out[3], out[0]);
}

// Highlight weight for the "once the switch is done" motion: the previous desktop
// fades out while the new one fades in; the desktops in between never light up.
function crossfadeWeight(index, from, to, progress) {
    const p = Math.max(0, Math.min(1, progress));
    if (index === to) {
        return from === to ? 1 : p;
    }
    return index === from ? 1 - p : 0;
}
