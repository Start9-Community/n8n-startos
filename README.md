<p align="center">
  <img src="icon.png" alt="n8n Logo" width="21%">
</p>

# n8n on StartOS

> Everything not listed in this document should behave the same as upstream
> n8n. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable — see the Documentation
> section of `instructions.md` for links.

[n8n](https://github.com/n8n-io/n8n) is a workflow automation tool: you wire together triggers, apps, and code in a visual editor, and it runs them for you. This package runs it self-hosted against a local SQLite database, with telemetry off and a way back in if you lose the owner password.

- **Upstream repo:** <https://github.com/n8n-io/n8n>
- **Wrapper repo:** <https://github.com/Start9-Community/n8n-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One upstream image, consumed unmodified.

| Property      | Value                      |
| ------------- | -------------------------- |
| Image         | `n8nio/n8n`                |
| Architectures | x86_64, aarch64            |
| Command       | The image's own entrypoint |

| Subcontainer | Purpose                                  |
| ------------ | ---------------------------------------- |
| `n8n-sub`    | The only daemon — the one to `attach` to |

One oneshot runs first: the volume arrives owned by root, and the image runs the application as an unprivileged user that has to own its own data directory.

**n8n is not open source.** It ships under the Sustainable Use License, which permits self-hosting for internal business purposes but is not an OSI licence — worth knowing before building a product on top of it.

## Volume and Data Layout

One volume, holding everything.

| Volume | Mount Point | Purpose                 |
| ------ | ----------- | ----------------------- |
| `main` | `/data`     | n8n's whole user folder |

| Path              | Written by | Holds                                     |
| ----------------- | ---------- | ----------------------------------------- |
| `database.sqlite` | n8n        | Workflows, credentials, executions, users |
| `config`          | n8n        | The encryption key                        |
| `binaryData/`     | n8n        | Files that pass through workflows         |
| `config.json`     | The action | The SMTP settings                         |

**The encryption key is the important file.** Every credential in the database is encrypted with it, and it is generated on first start — so the database alone is not enough to recover anything. Both live on this volume, which is what makes the backup sufficient and also what makes it sensitive.

## File Models

One model, and it covers only what StartOS contributes.

| File          | Format | Modelled                | Written by |
| ------------- | ------ | ----------------------- | ---------- |
| `config.json` | JSON   | Yes — `FileHelper.json` | The action |

It holds the SMTP configuration and nothing else: n8n's own settings live in its database and are edited in the interface.

The model is seeded with SMTP disabled at install and merged on every later init, so a field added by a newer version picks up its default rather than being missing.

**Everything else n8n needs is passed as environment**, composed at start: the data directory, the port, the database type and path, the timezone, and the switches described below.

## Dependencies

None.

**But most workflows reach the internet**, since automating an external service means talking to it. n8n itself needs no other package here.

## Network Access and Interfaces

One interface.

| Interface | Id   | Type | Port | Description                             |
| --------- | ---- | ---- | ---- | --------------------------------------- |
| Web UI    | `ui` | ui   | 5678 | The workflow editor and everything else |

Bound on the `ui-multi` MultiHost over HTTP and not masked. **n8n's own login gates it**, and StartOS adds no gate of its own.

**The session cookie's `Secure` flag is deliberately turned off.** StartOS fronts the interface with its own reverse proxy and publishes addresses that a browser does not treat as secure origins; a `Secure` cookie would never be sent back over those, and the symptom would be a login that appears to succeed and then bounces straight back to the login screen.

Webhook and trigger URLs that n8n hands out are built from the address it is reached on. **A workflow triggered by an external service needs an address that service can reach**, which is a StartOS address decision rather than anything this package configures.

## Installation and First-Run Flow

Install seeds the configuration with SMTP disabled. There is no task and no credential generated here.

**The owner account is created in the interface**, on first visit: n8n asks for an email address and a password, and that account owns the instance. Until it exists, the service is running and reachable but has nothing in it — and the password-reset action has nothing to reset.

The daemon carries a generous grace period, because a first start initializes the database and generates the encryption key before it answers.

## Actions

Two actions.

### Configure SMTP

Points n8n at a mail server, either the one StartOS provides or one you supply.

- **What it changes:** the SMTP settings in the configuration.
- **Cost:** the service restarts, since the values become environment.
- **Repeat safety:** idempotent, and pre-filled with the current values.
- **Why it matters:** the "Forgot password" link on n8n's login screen sends mail. **Without SMTP that link cannot work**, which is what makes the next action necessary.

Choosing the system option uses the server's own SMTP settings, with an optional override of the From address.

### Reset Owner Password

Generates a new password for the owner account and shows it once.

- **For being locked out** with no SMTP configured.
- **What it changes:** only the owner's password. Workflows, credentials, and any other user accounts are untouched.
- **Cost:** none — no restart. It runs in a temporary container against the database directly, and n8n reads the hash on each login.
- **How it is done:** the password is hashed with **n8n's own bundled bcrypt**, taken from inside the image, so the stored format matches what n8n writes itself.
- **It fails loudly rather than guessing.** If no owner row exists yet, or if it would update more than one, it aborts and says so instead of writing something the application might not understand.
- **Runnable at any status**, including stopped.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the only daemon.

| Check     | Displayed as    | Method                    | Grace |
| --------- | --------------- | ------------------------- | ----- |
| `primary` | "Web Interface" | n8n's own health endpoint | 60s   |

It queries the application rather than probing the port, so it reports that n8n is actually serving.

**It says nothing about workflows.** A failing trigger, an expired credential, or an execution erroring on every run all show a green check; those are visible in n8n's own executions list.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. That is the database, the encryption key, and the binary data workflows have passed through.

**The backup is equivalent to every credential n8n holds.** The credentials are encrypted in the database, the key that decrypts them is on the same volume, and the backup contains both — which is exactly what makes a restore work.

A restored instance comes back with the same workflows, the same credentials, the same users, and its execution history. Anything that depended on the old address — a webhook URL registered with an external service — has to be re-pointed, since the address is the server's rather than the backup's.

## Limitations and Differences

1. **Not open source.** The Sustainable Use License allows self-hosting but restricts commercial redistribution.
2. **SQLite only.** The database type is fixed; there is no option to point n8n at PostgreSQL.
3. **Single instance.** No queue mode, no separate workers — executions run in the one process.
4. **The backup is as sensitive as the credentials**, because it contains the encryption key alongside them.
5. **Password reset needs either SMTP or the action.** There is no other way back into a locked-out instance.
6. **Telemetry, version notifications, and personalization prompts are turned off** by this package and are not switchable from the interface.
7. **Externally triggered workflows depend on the address** n8n is reached on being reachable by whoever triggers them.
8. **The timezone is fixed to UTC**, so schedules are expressed in UTC.

---

## Quick Reference for AI Consumers

```yaml
package_id: n8n
image: n8nio/n8n
architectures:
  - x86_64
  - aarch64
subcontainers:
  - n8n-sub
volumes:
  main: /data # N8N_USER_FOLDER: database.sqlite, the encryption key, binaryData/
file_models:
  - config.json # SMTP only; n8n's own settings live in its database
startos_managed_env_vars:
  - N8N_USER_FOLDER
  - N8N_PORT
  - N8N_PROTOCOL
  - N8N_SECURE_COOKIE # false — StartOS addresses are not secure origins
  - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS
  - N8N_DIAGNOSTICS_ENABLED
  - N8N_VERSION_NOTIFICATIONS_ENABLED
  - N8N_PERSONALIZATION_ENABLED
  - DB_TYPE
  - DB_SQLITE_DATABASE
  - GENERIC_TIMEZONE
  - TZ
  - N8N_EMAIL_MODE # the N8N_SMTP_* block only when SMTP is configured
dependencies: []
interfaces:
  ui: { type: ui, port: 5678 } # n8n's own login; no gate added by StartOS
actions:
  - manage-smtp
  - reset-owner-password # temp container, n8n's own bcrypt, no restart
tasks: []
health_checks:
  - primary # displayed "Web Interface"; queries /healthz, says nothing about workflows
```
