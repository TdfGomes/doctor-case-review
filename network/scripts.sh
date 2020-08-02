#!/bin/bash
removecontainers() {
    docker stop $(docker ps -aq)
    docker rm $(docker ps -aq)
    docker volume rm $(docker volume ls -q)
    docker network prune -f
}

armageddon() {
    removecontainers
    docker rmi -f $(docker images --filter dangling=true -qa)
    docker volume rm $(docker volume ls --filter dangling=true -q)
    docker rmi -f $(docker images -qa)
}
