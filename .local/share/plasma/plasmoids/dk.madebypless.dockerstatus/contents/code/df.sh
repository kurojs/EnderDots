#!/bin/sh
# Prints one JSON object per kind of disk use (images, containers, volumes, build cache),
# for the Docker Status widget.
# Usage: df.sh <context>
# An empty context uses docker's current context.
if [ -n "$1" ]; then
    exec docker --context "$1" system df --format '{{json .}}'
fi
exec docker system df --format '{{json .}}'
