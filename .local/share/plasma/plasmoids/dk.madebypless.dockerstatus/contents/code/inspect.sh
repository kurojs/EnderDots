#!/bin/sh
# Prints one JSON object per container ({id, restarts, state}), for the Docker Status widget:
# why it is failed, unhealthy or restarting (OOM kill, error, health check output).
# Usage: inspect.sh <context> <container-id>...
# An empty context uses docker's current context. A trailing "#..." in the command line is just a
# comment that keeps two runs from looking like the same command.
context=$1
shift
template='{"id":{{json .Id}},"restarts":{{.RestartCount}},"state":{{json .State}}}'
if [ -n "$context" ]; then
    exec docker --context "$context" inspect --format "$template" "$@"
fi
exec docker inspect --format "$template" "$@"
