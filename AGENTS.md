# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (architecture, for developers and LLMs) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Package id is `n8n`.** A single `ui` interface (port 5678) exposes the n8n editor, REST API, and webhook endpoints over plain HTTP; no hosts or interfaces are exported for dependents. State lives entirely on the `main` volume, backed by an embedded SQLite database (no external DB). The **Reset Owner Password** action spins up a temporary subcontainer to rewrite the owner row directly with n8n's bundled bcryptjs via Node's built-in `node:sqlite`.

## Inspecting a running install

To run a command inside the service's container (read its generated config, grep app logs), use `start-cli package attach n8n -n n8n -- <cmd>`. Select the subcontainer by **name** with `-n` (the name passed to `SubContainer.of` in `main.ts` — here `n8n-sub`) or by image with `-i`. Note: `-s/--subcontainer` matches the internal **Guid**, not the name, so passing a name to `-s` fails with "no matching subcontainers".
