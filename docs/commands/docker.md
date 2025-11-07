## **Running The Application With Docker**

If you are using [`npm`](https://www.npmjs.com/package/npm) as your package manager, use this command:

```bash
# build and run as daemonized process
docker compose -f docker-compose.npm.yaml up --build -d
```

If you are using [`pnpm`](https://www.npmjs.com/package/pnpm) as your package manager, use this command:

```bash
# build and run as daemonized process
docker compose -f docker-compose.pnpm.yaml up --build -d
```

If you are using [`bun`](https://www.npmjs.com/package/bun) as your package manager, use this command:

```bash
# build and run as daemonized process
docker compose -f docker-compose.bun.yaml up --build -d
```

Utility commands for [`docker`](https://docker.com):

```bash
# quick start if no changes
docker compose up

# remove all containers
docker system prune --force --all

# remove all volumes
docker volume prune --force --all
```
