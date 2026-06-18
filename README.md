<p align="center">
  <img src="icon.svg" alt="n8n Logo" width="21%">
</p>

# n8n on StartOS

> **Upstream docs:** <https://docs.n8n.io/>
>
> Everything not listed in this document should behave the same as upstream
> n8n. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable.

[n8n](https://n8n.io) is a fair-code workflow automation platform: connect hundreds of apps and services, automate repetitive tasks, and build AI-powered workflows with a visual, node-based editor — self-hosted, with your data and credentials on your own server.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property      | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Image         | `n8nio/n8n` (the official image, unmodified)                          |
| Architectures | x86_64, aarch64                                                       |
| Entrypoint    | Upstream default (`sdk.useEntrypoint()` → `tini` → `docker-entrypoint.sh` → n8n) |

A `chown` one-shot gives the image's `node` user ownership of the mounted data directory before the server starts, since StartOS owns the volume as root.

---

## Volume and Data Layout

| Volume | Mount Point | Purpose                                                            |
| ------ | ----------- | ------------------------------------------------------------------ |
| `main` | `/data`     | n8n's `N8N_USER_FOLDER`: SQLite database, encryption key, config, and binary data |

The SQLite database is at `/data/database.sqlite`. The credential **encryption key** is written to `/data/.n8n/config` on first start — it is required to decrypt every stored credential, and it lives on the `main` volume so it is preserved across restarts and included in backups.

StartOS also writes `config.json` to the volume root, holding the SMTP settings managed by the **Configure SMTP** action.

---

## Installation and First-Run Flow

- No StartOS setup wizard and no generated secrets. Install, start, and open the Web UI.
- On first launch, n8n's **own** screen prompts you to create the owner account (email + password). That account is the administrator.
- The server is usable as soon as the health check passes.

---

## Configuration Management

Most of n8n's runtime is configured through fixed environment variables set in `startos/main.ts`. The only user-tunable setting is SMTP, applied through the **Configure SMTP** action and stored in `config.json`. Everything else is managed inside n8n's own settings UI.

| Variable                                | Value     | Purpose                                                              |
| --------------------------------------- | --------- | ------------------------------------------------------------------- |
| `N8N_USER_FOLDER`                       | `/data`   | Root of all persisted data                                          |
| `N8N_PORT`                              | `5678`    | Web UI / API port                                                   |
| `N8N_PROTOCOL`                          | `http`    | StartOS terminates TLS at its proxy and forwards plain HTTP         |
| `N8N_SECURE_COOKIE`                     | `false`   | Allows the auth cookie over StartOS's HTTP access methods (Tor, LAN IP) |
| `DB_TYPE` / `DB_SQLITE_DATABASE`        | `sqlite` / `/data/database.sqlite` | Embedded database — no external DB needed         |
| `N8N_DIAGNOSTICS_ENABLED`               | `false`   | Disables telemetry                                                  |
| `N8N_VERSION_NOTIFICATIONS_ENABLED`     | `false`   | StartOS manages updates; suppress upstream update nags             |
| `N8N_PERSONALIZATION_ENABLED`           | `false`   | Skips the personalization survey                                   |
| `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS` | `true`    | Enforces strict permissions on the settings file                   |
| `GENERIC_TIMEZONE` / `TZ`               | `UTC`     | Default timezone for schedule/cron nodes                           |
| `N8N_EMAIL_MODE` / `N8N_SMTP_*`         | _(unset until configured)_ | Set by the **Configure SMTP** action to enable email (password resets) |

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose                    |
| --------- | ---- | -------- | -------------------------- |
| Web UI    | 5678 | HTTP     | n8n editor, API, webhooks  |

**Access methods:**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address (after you add a Tor interface to the service)
- Custom domains (if configured)

The editor, REST API, and webhook endpoints are all served from this one interface.

---

## Actions (StartOS UI)

| Action                   | Purpose                                                                                                   | Inputs                              | Allowed Status |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------- |
| **Configure SMTP**       | Set an SMTP server (StartOS system SMTP or custom) so n8n can send email, including the login screen's "Forgot password" reset and emailed user invitations. | Disabled / system / custom SMTP     | any            |
| **Reset Owner Password** | Generate a new password for the owner account when you are locked out and have no SMTP. It hashes the new password with n8n's own bcryptjs and updates **only** the owner's `password` row via Node's built-in sqlite — every other user, workflow, and credential is untouched, and no restart is needed. The new password is returned once. | None                                | any            |

**Password recovery — two non-destructive paths.** Either **Configure SMTP** and use the login screen's "Forgot password" link (n8n emails a reset and updates the one password in place), or run **Reset Owner Password** when you have no email (generates a fresh owner password directly). n8n ships no CLI for an in-place single-password reset, so the second action does the equivalent itself: a one-row `UPDATE` of the owner's bcrypt hash, failing loud if it would touch anything other than exactly one owner row. User accounts themselves are created and managed inside n8n (owner → **Settings → Users**), not via StartOS.

---

## Backups and Restore

**Included in backup:**

- `main` volume (database, encryption key, config, and binary data)

**Restore behavior:** The volume is fully restored before the service starts. Because the encryption key lives on the volume, restored credentials remain decryptable.

---

## Health Checks

| Check         | Method                                  | Grace Period | Messages                                              |
| ------------- | --------------------------------------- | ------------ | ----------------------------------------------------- |
| Web Interface | HTTP GET `http://127.0.0.1:5678/healthz` | 60s          | Success: "n8n is ready" / Error: "n8n is not ready"   |

The grace period covers first-start database setup. The upstream `/healthz` endpoint returns `200` once the server is up.

---

## Dependencies

None.

---

## Limitations and Differences

1. **Webhook and editor URLs show `localhost`.** Behind the StartOS proxy, n8n is not told its external address, so the URLs it displays for webhooks and "production" endpoints — and the links in password-reset emails — are built from `http://localhost:5678`. The endpoints work; only the displayed/emailed URL may need to be adjusted to your real address. Wiring a primary-URL action is tracked in `TODO.md`.
2. **SQLite only.** The package runs n8n's embedded SQLite database; the external PostgreSQL option is not exposed.
3. **No queue mode.** n8n runs as a single process; the Redis-backed queue/worker mode is not configured.

---

## What Is Unchanged from Upstream

- The visual workflow editor, all nodes, and the expression engine
- Credentials, executions, schedules, and webhook triggers
- The public REST API
- User management within n8n (owner account, additional users)
- Everything else documented at <https://docs.n8n.io/>

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: n8n
image: n8nio/n8n
architectures: [x86_64, aarch64]
volumes:
  main: /data
ports:
  ui: 5678
dependencies: none
database: sqlite (embedded, at /data/database.sqlite)
startos_managed_env_vars:
  - N8N_USER_FOLDER
  - N8N_PORT
  - N8N_PROTOCOL
  - N8N_SECURE_COOKIE
  - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS
  - N8N_DIAGNOSTICS_ENABLED
  - N8N_VERSION_NOTIFICATIONS_ENABLED
  - N8N_PERSONALIZATION_ENABLED
  - DB_TYPE
  - DB_SQLITE_DATABASE
  - GENERIC_TIMEZONE
  - TZ
  - N8N_EMAIL_MODE # set by manage-smtp
  - N8N_SMTP_HOST # set by manage-smtp
  - N8N_SMTP_PORT # set by manage-smtp
  - N8N_SMTP_USER # set by manage-smtp
  - N8N_SMTP_PASS # set by manage-smtp
  - N8N_SMTP_SENDER # set by manage-smtp
  - N8N_SMTP_SSL # set by manage-smtp
  - N8N_SMTP_STARTTLS # set by manage-smtp
startos_managed_files:
  - config.json # SMTP settings (manage-smtp)
actions:
  - manage-smtp
  - reset-owner-password
```
