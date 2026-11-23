#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Krohnkite contributors
# SPDX-License-Identifier: MIT
"""Install Kröhnkite's shared SVGs as user-local hicolor theme icons."""

import argparse
import os
from pathlib import Path
import shutil
import subprocess
import sys

APP_ICON = "krohnkite"
LAYOUT_PREFIX = "krohnkite-layout-"
LAYOUTS = ("tile", "monocle", "threecolumn", "spiral", "quarter", "stacked",
           "columns", "spread", "floating", "stair", "binarytree", "cascade")

MARKER = ".krohnkite-icons.pending"
# Markers written by earlier releases; removed once the new marker is used.
LEGACY_MARKERS = (".krohnkite-layout-icons.pending",)


def layout_directory(data_home):
    return data_home / "icons/hicolor/scalable/actions"


def app_directory(data_home):
    return data_home / "icons/hicolor/scalable/apps"


def refresh_marker(data_home):
    return data_home / "icons/hicolor" / MARKER


def refresh_icons(data_home):
    env = dict(os.environ)
    env["XDG_DATA_HOME"] = str(data_home)
    subprocess.run(
        ["xdg-icon-resource", "forceupdate", "--mode", "user", "--theme", "hicolor"],
        check=True,
        env=env,
    )


def mark_refresh_pending(data_home):
    marker = refresh_marker(data_home)
    marker.parent.mkdir(parents=True, exist_ok=True)
    marker.write_text("")
    for name in LEGACY_MARKERS:
        legacy = marker.parent / name
        if legacy.is_file():
            legacy.unlink()


def flush_icon_cache(data_home):
    """Refresh the theme cache after a change, retrying failed refreshes.

    The cache is optional for Qt/KDE; a missing or broken xdg-icon-resource
    must not fail the installation. The marker is removed only after a
    successful refresh, so the next run retries a failed/skipped refresh.
    """
    marker = refresh_marker(data_home)
    if not marker.is_file():
        return
    try:
        refresh_icons(data_home)
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"warning: could not refresh the icon cache: {error}", file=sys.stderr)
        return
    try:
        marker.unlink()
    except FileNotFoundError:
        pass


def collect_sources(layout_source, app_source):
    layout_files = [layout_source / f"{name}.svg" for name in LAYOUTS]
    app_file = app_source / f"{APP_ICON}.svg"
    for file in [*layout_files, app_file]:
        if not file.is_file():
            raise ValueError(f"Missing SVG icon: {file}")
    return layout_files, app_file


def pending_updates(files, destination, prefix):
    updates = []
    for file in files:
        target = destination / f"{prefix}{file.name}"
        if not target.is_file() or target.read_bytes() != file.read_bytes():
            updates.append((file, target))
    return updates


def install_icons(layout_source, app_source, data_home):
    layout_files, app_file = collect_sources(layout_source, app_source)
    updates = pending_updates(layout_files, layout_directory(data_home), LAYOUT_PREFIX)
    updates += pending_updates([app_file], app_directory(data_home), "")
    if updates:
        mark_refresh_pending(data_home)
        for file, target in updates:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(file, target)
    # Leave existing theme metadata and unrelated icons untouched.
    flush_icon_cache(data_home)
    return len(updates)


def uninstall_icons(data_home):
    # Include icons left by renamed layouts; keep unrelated theme files.
    directories = (layout_directory(data_home), app_directory(data_home))
    existing = [file for file in directories[0].glob(f"{LAYOUT_PREFIX}*.svg") if file.is_file()]
    app_file = directories[1] / f"{APP_ICON}.svg"
    if app_file.is_file():
        existing.append(app_file)
    if existing:
        mark_refresh_pending(data_home)
        for file in existing:
            file.unlink()
    flush_icon_cache(data_home)
    return len(existing)


def default_source(here, packaged_name, repository_name):
    packaged = here / "ui" / packaged_name
    return packaged if packaged.is_dir() else here / repository_name


def main():
    here = Path(__file__).resolve().parent.parent
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=default_source(here, "layouts", "res/layouts"))
    parser.add_argument("--app-source", type=Path, default=default_source(here, "appicon", "res/appicon"))
    parser.add_argument("--uninstall", action="store_true")
    args = parser.parse_args()
    configured = os.environ.get("XDG_DATA_HOME", "")
    data_home = Path(configured) if configured and Path(configured).is_absolute() else Path.home() / ".local/share"
    changed = uninstall_icons(data_home) if args.uninstall else install_icons(args.source, args.app_source, data_home)
    print(f"Kröhnkite SVG theme icons: {changed} {'removed' if args.uninstall else 'updated'}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, subprocess.CalledProcessError) as error:
        raise SystemExit(f"Icon installation failed: {error}") from error
