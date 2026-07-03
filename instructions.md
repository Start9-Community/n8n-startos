# n8n

n8n is a self-hosted workflow automation tool. Build automations visually, connect hundreds of services, and create AI-powered workflows — all running on your own StartOS server.

## Documentation

- [n8n documentation](https://docs.n8n.io/) — the upstream guide to building workflows, nodes, and credentials.
- [Workflow templates](https://n8n.io/workflows/) — ready-made workflows you can import and adapt.

## What you get on StartOS

- A self-hosted **Web UI** — the n8n editor, REST API, and webhook endpoints, all on one interface.
- Your workflows, credentials, and execution history live entirely on your server's `main` volume and are included in StartOS backups.
- An embedded SQLite database — no separate database to run or configure.

## Getting set up

1. Open the **Web UI** interface from the **Dashboard** tab.
2. On first launch, n8n asks you to create the **owner account** (email + password). This account is the administrator — keep its credentials safe, as anyone who can sign in can create and run workflows.
3. You're ready to build. Create a workflow, add a trigger node, and connect the services you want to automate.

## Using n8n

### Connecting services

Most integrations work by adding a **credential** (an API key or token) to a node:

1. In a workflow, add the node for the service you want (e.g. a **Telegram Trigger**, an **HTTP Request**, or an AI node).
2. Open the node's **Credentials** field and create a new credential.
3. Paste the API key or token from that service and save.

Credentials are encrypted at rest using a key stored on your server's volume — they never leave your StartOS.

### AI workflows

n8n includes AI nodes (AI Agent, model nodes, and a generic HTTP Request node). Point them at a hosted provider with an API key, or at a model you run yourself elsewhere on your network.

## Adding more users

User accounts are created and managed **inside n8n**, not through StartOS. As the owner, open **Settings → Users** and invite people. With **Configure SMTP** set up, invitations are emailed; without it, n8n gives you an invite link to share manually.

## Actions

Two StartOS actions are available under the service's **Actions** tab:

- **Configure SMTP** — give n8n an email server (your StartOS system SMTP or a custom one). It enables the login screen's **"Forgot password"** reset and lets n8n email the user invitations above. Set it up if you want self-service password resets.
- **Reset Owner Password** — locked out of the owner account with no email set up? Run this to get a freshly generated owner password (shown once — copy it, then sign in and change it in **Settings** if you like). It changes **only** the owner's password; every other user, workflow, and credential is left exactly as it was, and n8n keeps running.

## Accessing n8n remotely

By default the Web UI is reachable on your **local network** — via the server's `.local` hostname or its LAN IP. StartOS does not put the service on Tor automatically. To reach n8n from outside your LAN, add an address to its **Web UI** interface from the service's **Interfaces** screen:

- a **Tor** `.onion` address (requires the Tor service on your StartOS), or
- a **custom domain** you control.

## Uninstalling

Uninstalling n8n permanently deletes all of your workflows, saved credentials, and execution history. Export anything you want to keep before continuing.

## Limitations

- **Webhook URLs show `localhost`.** n8n is not told its external address, so the webhook and "production" URLs shown in the editor read `http://localhost:5678`. The endpoints themselves work when reached through a real address; only the displayed URL is wrong. The same applies to the link inside a password-reset email — you may need to swap `localhost:5678` for your real address.
- **Forgot the owner password?** Two non-destructive fixes: set up **Configure SMTP** and use the login screen's "Forgot password" link, or just run the **Reset Owner Password** action to get a new one. Either way, nothing else is touched.
