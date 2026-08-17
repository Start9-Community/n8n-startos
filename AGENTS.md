# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **`N8N_SECURE_COOKIE: 'false'` is load-bearing.** StartOS publishes the UI over origins a browser does not treat as secure, so a `Secure`-flagged auth cookie is never sent back and every login silently bounces to the login screen. Don't "harden" it.
- **`reset-owner-password` uses n8n's own bundled `bcryptjs`, resolved from inside the image** (falling back to the pnpm store layout), so the hash format matches what n8n writes. It updates the `global:owner` row via Node's built-in `node:sqlite` in a temp container, and **aborts unless exactly one row changed** — that guard is what catches schema drift on an upstream bump instead of corrupting the user table.
- **No restart after a password reset.** n8n reads the hash per login, so don't add one.
- **The encryption key lives on the `main` volume beside the database.** Both are needed to decrypt stored credentials — never split them across volumes or exclude either from the backup.
- **The `chown` oneshot is required.** The image runs as `node`; the volume arrives root-owned and n8n cannot create its database or config without it.
