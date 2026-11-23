#!/bin/sh
# Prints one JSON object per image (including untagged ones), for the Docker Status widget.
# Usage: images.sh <context>
# An empty context uses docker's current context.
if [ -n "$1" ]; then
    exec docker --context "$1" image ls --no-trunc --format '{{json .}}'
fi
exec docker image ls --no-trunc --format '{{json .}}'
