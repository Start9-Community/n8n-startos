# n8n — Workflow Automation

n8n is a self-hosted workflow automation tool. Build automations visually, connect services, and create AI-powered workflows — all running on your StartOS server.

## First Setup

1. Open the n8n Web UI from your StartOS dashboard
2. Create your admin account (username + password)
3. You're ready to build workflows

> **Security note:** Keep your login credentials safe. Anyone with access to the Web UI can create and run workflows.

## Connecting Telegram (Recommended)

Telegram is the easiest way to interact with n8n from your phone:

1. Open Telegram and message `@BotFather`
2. Send `/newbot` and follow the prompts
3. Copy your **Bot Token**
4. In n8n, create a new workflow with a **Telegram Trigger** node
5. Paste your Bot Token into the credentials
6. Add your desired actions (AI, notifications, etc.)

## Connecting Claude AI

1. Get your API key from [console.anthropic.com](https://console.anthropic.com)
2. In n8n, go to **Settings → Credentials → New Credential**
3. Select **Anthropic** and paste your API key
4. Use the **AI Agent** or **HTTP Request** node in your workflows

## Connecting Local AI (Ollama)

If you have Ollama installed on StartOS:

1. In n8n, use an **HTTP Request** node
2. Set URL to `http://ollama.startos:11434/api/generate`
3. No API key needed — fully local and private

## Access from Outside Your Network

n8n is available via your StartOS **Tor** address. To use it from your phone:

1. Install **Tor Browser** or **Onion Browser** on your device
2. Find the n8n `.onion` address in **Services → n8n → Interfaces**
3. Open that address in Tor Browser

## Security

- n8n has **no access** to your Bitcoin or Lightning services
- All data is stored locally in `/data/database.sqlite`
- External API calls (Telegram, Claude, etc.) are made only through workflows you create
- Backups are included in your StartOS backup

## Troubleshooting

**n8n won't start:** Check the service logs in StartOS. Usually a permissions issue on `/data`.

**Webhook not working:** Webhooks require your n8n to be reachable from the internet. Use the Tor address for testing, or configure port forwarding.

**Forgot password:** Use the n8n CLI via StartOS terminal actions (coming in v1.1).
