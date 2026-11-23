#!/bin/sh
# Prints one JSON object per container (running or not), for the Docker Status widget.
# Usage: fetch.sh <context>
# An empty context uses docker's current context.
if [ -n "$1" ]; then
    exec docker --context "$1" ps --all --no-trunc --format '{{json .}}'
fi
exec docker ps --all --no-trunc --format '{{json .}}'
