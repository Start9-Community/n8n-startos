# n8n for StartOS

[n8n](https://n8n.io) workflow automation packaged for [StartOS](https://start9.com).

Self-host your own automation server — connect Telegram, Claude AI, webhooks, and 400+ other services. Fully isolated: no access to Bitcoin or Lightning services.

## Features

- Visual workflow editor in your browser
- Telegram bot trigger (chat with your automations from your phone)
- AI integration: Claude API, OpenAI, or local Ollama
- SQLite database (no external DB needed)
- Tor access via StartOS
- Full data sovereignty — your workflows, your server

## Build & Install

### Requirements

- Node.js 22+
- Docker + Docker Buildx
- `squashfs-tools` and `squashfs-tools-ng`
- `start-cli` binary from [Start9Labs/start-os releases](https://github.com/Start9Labs/start-os/releases)

```bash
# Download start-cli (x86)
curl -L https://github.com/Start9Labs/start-os/releases/download/v0.4.0-beta.9/start-cli_x86_64-linux \
  -o /usr/local/bin/start-cli
chmod +x /usr/local/bin/start-cli

# Init signing key (once)
start-cli init-key

# Clone and build
git clone https://github.com/YOUR_USERNAME/n8n-startos
cd n8n-startos
npm ci
make n8n_x86.s9pk
```

### Install on StartOS

```bash
# Copy to server and install
scp n8n_x86.s9pk start9@<YOUR_SERVER_IP>:~/
ssh start9@<YOUR_SERVER_IP> "start-cli package install -s ~/n8n_x86.s9pk"
```

Or drag-and-drop the `.s9pk` file into your StartOS Marketplace UI.

## Roadmap

- [x] v1.0 — Basic n8n on StartOS (SQLite, Tor, no dependencies)
- [ ] v1.1 — Config UI for timezone, webhook base URL
- [ ] v1.2 — Password reset action
- [ ] v2.0 — Iroh P2P transport for mobile app connectivity

## Community Registry

This package is listed in the [Start9 Community Registry](https://github.com/Start9-Community).

## Contributing

PRs welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions.
