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

If you plan to have an outside service call into n8n — a GitHub or Stripe webhook, for example — see **Accessing n8n remotely** below before you copy any webhook URL out of the editor.

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

Three StartOS actions are available under the service's **Actions** tab:

- **Set Primary URL** — tells n8n which of its addresses to put in the webhook and "production" URLs it shows in the editor, and in the links of the emails it sends. StartOS picks one for you when you install, so this is only needed when you want a different one — see below. **Reload your n8n browser tab after running it**, or it will keep showing the old URLs.
- **Configure SMTP** — give n8n an email server (your StartOS system SMTP or a custom one). It enables the login screen's **"Forgot password"** reset and lets n8n email the user invitations above. Set it up if you want self-service password resets.
- **Reset Owner Password** — locked out of the owner account with no email set up? Run this to get a freshly generated owner password (shown once — copy it, then sign in and change it in **Settings** if you like). It changes **only** the owner's password; every other user, workflow, and credential is left exactly as it was, and n8n keeps running.

## Accessing n8n remotely

By default the Web UI is reachable on your **local network** — via the server's `.local` hostname or its LAN IP. StartOS does not put the service on Tor automatically. To reach n8n from outside your LAN, add an address to its **Web UI** interface from the service's **Interfaces** screen:

- a **Tor** `.onion` address (requires the Tor service on your StartOS), or
- a **custom domain** you control.

**After adding one, run the Set Primary URL action and choose it.** n8n copies its primary URL into every webhook URL it shows you, so if it is still set to a `.local` address, the URL you copy out of the editor will not work for a service calling in from the internet.

Four things worth knowing:

- **Reload your n8n tab after changing the primary URL.** n8n reads its own address once when the page loads, so a tab you already had open keeps displaying the old webhook URLs — even on a brand-new workflow. The URLs it is actually serving changed straight away; only the open page is out of date. A browser refresh is enough.

- **The address you choose still has to be reachable by whoever calls it.** Choosing a `.local` address as primary does not expose it to the internet — that is what adding a Tor address or a custom domain does.
- **Your existing workflows keep working.** Changing the primary URL only changes the address n8n *displays* — every webhook still answers at every address your server publishes, including the one it used before. Active workflows are not deactivated or re-registered.
- **But a URL you already gave to an outside service will not update itself.** A URL you pasted into GitHub or Stripe is stored on their side. After changing the primary URL, copy the new one from the editor and update it there.

## Uninstalling

Uninstalling n8n permanently deletes all of your workflows, saved credentials, and execution history. Export anything you want to keep before continuing.

## Limitations

- **Forgot the owner password?** Two non-destructive fixes: set up **Configure SMTP** and use the login screen's "Forgot password" link, or just run the **Reset Owner Password** action to get a new one. Either way, nothing else is touched.
