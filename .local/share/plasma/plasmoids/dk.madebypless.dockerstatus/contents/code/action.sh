#!/bin/sh
# Container, Compose stack and image actions for the Docker Status widget.
# Usage: action.sh <context> <start|stop|restart> <container-id>
#        action.sh <context> <start|stop|restart|down> --project <compose-project>
#        action.sh <context> rmi <image>
# An empty context uses docker's current context. A stack is addressed by its project name only,
# so its compose file doesn't have to be on this machine. "down" removes the stack's containers
# and networks (not its volumes or images); "rmi" deletes an image (a tag, or an untagged image by id).
context=$1
case "$2:$3" in
    start:--project|stop:--project|restart:--project|down:--project)
        set -- compose --project-name "$4" "$2" ;;
    start:*|stop:*|restart:*)
        set -- "$2" "$3" ;;
    down:*)
        echo "down needs --project <compose-project>" >&2; exit 2 ;;
    rmi:--project|rmi:)
        echo "rmi needs an image" >&2; exit 2 ;;
    rmi:*)
        set -- image rm "$3" ;;
    *)
        echo "Unknown action: $2" >&2; exit 2 ;;
esac
if [ -n "$context" ]; then
    exec docker --context "$context" "$@"
fi
exec docker "$@"
