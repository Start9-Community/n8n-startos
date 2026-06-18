# TODO

- **Surface the external webhook/editor URL.** Behind the StartOS proxy, n8n shows
  webhook and "production" URLs (and password-reset email links) as `http://localhost:5678/...`.
  Add a **Set Primary URL** action (see papra) and pass the chosen address as `WEBHOOK_URL` /
  `N8N_EDITOR_BASE_URL` so the URLs shown in the editor and emails are externally reachable.
