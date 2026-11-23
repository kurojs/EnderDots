.pragma library
// The Docker Status widget's logic, kept free of Plasma and i18n so it can be unit-tested
// (tests/widgets/dockerstatus.test.mjs). main.qml imports it as Logic.

// Docker exit codes that mean "stopped on purpose" (clean exit, Ctrl+C, docker stop's
// SIGTERM, or its SIGKILL after the timeout) rather than a crash.
var stoppedExitCodes = [0, 130, 137, 143]

function shellQuote(s) {
    return "'" + s.replace(/'/g, "'\\''") + "'"
}

// The value of one key in docker's "a=1,b=2" label string, or "".
function label(labels, key) {
    const match = new RegExp("(?:^|,)" + key.replace(/\./g, "\\.") + "=([^,]*)").exec(labels || "")
    return match ? match[1] : ""
}

// The exit code in a ps Status like "Exited (137) 3 minutes ago", or null.
function exitCodeOf(status) {
    const exit = /Exited \((\d+)\)/.exec(status || "")
    return exit ? parseInt(exit[1]) : null
}

// A container from `docker ps --format '{{json .}}'` -> failed | unhealthy | restarting | paused | stopped | running
function classify(c) {
    switch (c.State) {
    case "restarting": return "restarting"
    case "paused": return "paused"
    case "running":
        return c.HealthStatus === "unhealthy" || /\(unhealthy\)/.test(c.Status) ? "unhealthy" : "running"
    case "dead": return "failed"
    case "exited": {
        const code = exitCodeOf(c.Status)
        return code !== null && !stoppedExitCodes.includes(code) ? "failed" : "stopped"
    }
    default: return "stopped" // created, removing
    }
}

// "0.0.0.0:8888->80/tcp, [::]:8888->80/tcp" -> "8888→80"
function shortPorts(ports) {
    const seen = []
    const re = /:(\d+)->(\d+)/g
    let m
    while ((m = re.exec(ports || "")) !== null) {
        const p = m[1] + "→" + m[2]
        if (!seen.includes(p)) seen.push(p)
    }
    return seen.join(", ")
}

function shortImage(image) {
    return image.startsWith("sha256:") ? image.slice(7, 19) : image
}

// "a,b,,c" -> ["a", "b", "c"]
function splitList(s) {
    return (s || "").split(",").map(t => t.trim()).filter(t => t)
}

// ps CreatedAt "2026-10-09 07:57:56 +0200 CEST" -> "2026-10-09 07:57"
function shortDate(createdAt) {
    const m = /^(\d{4}-\d\d-\d\d \d\d:\d\d)/.exec(createdAt || "")
    return m ? m[1] : ""
}

// fetch.sh's output (one JSON object per line) -> [{id, name, fullName, project, workingDir, image, imageRef,
// stateKey, status, exitCode, ports, age, created, networks, mounts, writableSize, why}]
// `why` is filled in from inspect.sh by mergeInspect, for the containers inspectIds picks.
function parseContainers(stdout) {
    return stdout.split("\n").filter(line => line.trim()).map(line => JSON.parse(line)).map(c => ({
        id: c.ID,
        name: label(c.Labels, "com.docker.compose.service") || c.Names,
        fullName: c.Names,
        project: label(c.Labels, "com.docker.compose.project"),
        image: shortImage(c.Image),
        // The image as the container was created from it ("nginx", "nginx:1.27", "sha256:…").
        imageRef: c.Image,
        stateKey: classify(c),
        status: c.Status,
        ports: shortPorts(c.Ports),
        workingDir: label(c.Labels, "com.docker.compose.project.working_dir"),
        exitCode: exitCodeOf(c.Status),
        // How long ago it was created ("11 days ago"), separate from the uptime in `status`.
        age: c.RunningFor || "",
        created: shortDate(c.CreatedAt),
        networks: splitList(c.Networks),
        mounts: splitList(c.Mounts),
        // The writable layer ("4.1kB" of "4.1kB (virtual 174MB)").
        writableSize: (c.Size || "").split(" (")[0],
        why: null,
    }))
}

function countStates(containers) {
    const counts = {}
    containers.forEach(c => counts[c.stateKey] = (counts[c.stateKey] || 0) + 1)
    return counts
}

// Containers grouped by Compose project (standalone ones last), worst state first within a group,
// following `order` (state keys, worst first).
function groupContainers(containers, order) {
    const byProject = {}
    containers.forEach(c => (byProject[c.project] = byProject[c.project] || []).push(c))
    return Object.keys(byProject)
        .sort((a, b) => (a === "") - (b === "") || a.localeCompare(b))
        .map(project => ({
            project: project,
            workingDir: byProject[project].map(c => c.workingDir).find(d => d) || "",
            containers: byProject[project].sort((a, b) =>
                order.indexOf(a.stateKey) - order.indexOf(b.stateKey) || a.name.localeCompare(b.name))
        }))
}

// Whether a container is up (so it can be stopped or restarted) rather than down (so it can be started).
// Paused containers are neither.
function isActive(stateKey) {
    return stateKey === "running" || stateKey === "unhealthy" || stateKey === "restarting"
}

// Which buttons a Compose stack gets: start when any of its containers is down, stop and restart
// when any is up.
function stackActions(containers) {
    return {
        start: containers.some(c => !isActive(c.stateKey) && c.stateKey !== "paused"),
        stop: containers.some(c => isActive(c.stateKey)),
    }
}

// Containers that newly became failed or unhealthy since the last check, and the states to
// remember for the next one. Nothing is fresh on the first check (previousStates null).
function freshProblems(containers, previousStates) {
    const isProblem = key => key === "failed" || key === "unhealthy"
    const fresh = containers.filter(c => previousStates && isProblem(c.stateKey) && previousStates[c.id] !== c.stateKey)
    const states = {}
    containers.forEach(c => states[c.id] = c.stateKey)
    return { fresh: fresh, states: states }
}

// ---- Why a container is in a bad state (docker inspect) ----

// The ids worth inspecting: failed, unhealthy and restarting containers, and those stopped with
// exit code 137, which may have been killed for running out of memory. Inspecting only these keeps polls cheap.
function inspectIds(containers) {
    return containers
        .filter(c => c.stateKey === "failed" || c.stateKey === "unhealthy" || c.stateKey === "restarting"
                     || (c.stateKey === "stopped" && c.exitCode === 137))
        .map(c => c.id)
}

// inspect.sh's output (one JSON object per line: {id, restarts, state}) -> {id: {oom, error, exitCode, restarts, health}}
// `health` is the last health check's output on one line. Lines that don't parse are skipped.
function parseInspect(stdout) {
    const details = {}
    stdout.split("\n").filter(line => line.trim()).forEach(line => {
        let o
        try {
            o = JSON.parse(line)
        } catch (e) {
            return
        }
        const state = o.state || {}
        const log = state.Health && state.Health.Log ? state.Health.Log : []
        let health = log.length > 0 ? String(log[log.length - 1].Output || "").replace(/\s+/g, " ").trim() : ""
        if (health.length > 200) health = health.slice(0, 199) + "…"
        details[o.id] = {
            oom: state.OOMKilled === true,
            error: String(state.Error || "").replace(/\s+/g, " ").trim(),
            exitCode: typeof state.ExitCode === "number" ? state.ExitCode : null,
            restarts: o.restarts || 0,
            health: health,
        }
    })
    return details
}

// The containers with their inspect details in `why`. One that was killed for running out of
// memory counts as failed, not stopped. When inspect gave nothing for a container that would have
// been inspected, the details from `previous` (the containers shown at the last check) are carried
// forward, so an OOM kill is not forgotten (and notified again) because one inspect call failed.
function mergeInspect(containers, details, previous) {
    const before = {}
    ;(previous || []).forEach(c => before[c.id] = c)
    return containers.map(c => {
        let d = details[c.id]
        if (!d && before[c.id] && before[c.id].why && inspectIds([c]).length > 0) d = before[c.id].why
        if (!d) return c
        const oomKilled = d.oom && (c.stateKey === "stopped" || c.stateKey === "failed")
        return Object.assign({}, c, {
            stateKey: oomKilled ? "failed" : c.stateKey,
            exitCode: d.exitCode !== null ? d.exitCode : c.exitCode,
            why: d,
        })
    })
}

// A file:// URL for a local path; encodeURI leaves # and ? alone, which would cut the path short.
function fileUrl(path) {
    return "file://" + encodeURI(path).replace(/#/g, "%23").replace(/\?/g, "%3F")
}

// ---- Disk use (docker system df) ----

// "11.54GB" -> "11.5 GB", "632.9MB (83%)" -> "633 MB", "" when it isn't a size.
function formatSize(s) {
    const m = /^([\d.]+)\s*([kKMGTP]?i?B)/.exec(s || "")
    if (!m) return ""
    const n = parseFloat(m[1])
    return (n >= 100 ? String(Math.round(n)) : n.toFixed(1).replace(/\.0$/, "")) + " " + m[2]
}

function isZeroSize(s) {
    return !(parseFloat(s) > 0)
}

// df.sh's output (one JSON object per line) -> [{key, size, reclaimable}] for what is worth a line:
// the build cache (key "buildCache", when it is not empty), and images and volumes ("images", "volumes")
// that have something reclaimable. Sizes are formatted; `reclaimable` is "" when there is none.
function diskSummary(stdout) {
    const rows = {}
    stdout.split("\n").filter(line => line.trim()).forEach(line => {
        const r = JSON.parse(line)
        rows[r.Type] = { size: formatSize(r.Size), reclaimable: isZeroSize(r.Reclaimable) ? "" : formatSize(r.Reclaimable) }
    })
    const out = []
    const cache = rows["Build Cache"]
    if (cache && !isZeroSize(cache.size)) out.push({ key: "buildCache", size: cache.size, reclaimable: cache.reclaimable })
    const images = rows["Images"]
    if (images && images.reclaimable) out.push({ key: "images", size: images.size, reclaimable: images.reclaimable })
    const volumes = rows["Local Volumes"]
    if (volumes && volumes.reclaimable) out.push({ key: "volumes", size: volumes.size, reclaimable: volumes.reclaimable })
    return out
}

// The badge states to show: those switched on in the settings (st.inPanel) with containers in
// them, or all switched-on ones when showZero is set.
function panelStates(states, counts, showZero) {
    return states.filter(st => st.inPanel && (showZero || (counts[st.key] || 0) > 0))
}

function visibleStates(states, counts) {
    return states.filter(st => (counts[st.key] || 0) > 0)
}

// ---- Images ----

// "docker.io/library/nginx" -> "nginx", "ghcr.io/x/y" stays: how `docker image ls` names a repository.
function normalizeRepository(name) {
    return name.replace(/^docker\.io\//, "").replace(/^library\//, "")
}

// images.sh's output (one JSON object per line) -> [{id, ref, repository, tag, untagged, size, created}],
// tagged images by name first, untagged ones last. `ref` is what `docker image rm` gets: the
// repository:tag, or the id for an untagged image (so deleting one tag leaves the others).
function parseImages(stdout) {
    const images = stdout.split("\n").filter(line => line.trim()).map(line => JSON.parse(line)).map(i => {
        const untagged = !i.Repository || i.Repository === "<none>" || !i.Tag || i.Tag === "<none>"
        return {
            id: i.ID,
            ref: untagged ? i.ID : i.Repository + ":" + i.Tag,
            repository: untagged ? "" : i.Repository,
            tag: untagged ? "" : i.Tag,
            untagged: untagged,
            size: i.Size || "",
            created: i.CreatedSince || "",
        }
    })
    return images.sort((a, b) => a.untagged !== b.untagged ? (a.untagged ? 1 : -1) : a.ref.localeCompare(b.ref))
}

// The containers (running or not) created from `image`. Docker refuses to delete those images.
function imageUsers(image, containers) {
    return containers.filter(c => {
        const ref = c.imageRef || c.image
        if (ref === image.id || (ref.startsWith("sha256:") && image.id.startsWith(ref))) {
            return true
        }
        if (image.untagged) {
            return false
        }
        const name = normalizeRepository(ref)
        const colon = name.lastIndexOf(":")
        const hasTag = colon > name.lastIndexOf("/")
        const repository = hasTag ? name.slice(0, colon) : name
        const tag = hasTag ? name.slice(colon + 1) : "latest"
        return repository === image.repository && tag === image.tag
    })
}

// The collapsed groups list with key added, or removed if it was there
function toggled(list, key) {
    return list.includes(key) ? list.filter(k => k !== key) : list.concat([key])
}

// Which shared look colour role (see look.js) each colour setting follows when the widget
// uses the shared look.
var colorRoles = {
    colorFailed: "error",
    colorUnhealthy: "attention",
    colorRestarting: "active",
    colorPaused: "info",
    colorStopped: "neutral",
    colorRunning: "ok",
    colorCountBackground: "countBackground"
}
