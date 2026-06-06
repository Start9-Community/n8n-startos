// startos/i18n/default.ts
// All UI strings — must be in sync with translations.ts

export const defaultStrings = {
  // Service status messages
  "n8n-running": "n8n is running",
  "n8n-not-responding": "n8n is not responding",
  "n8n-starting": "n8n is starting up...",

  // Interface names
  "webui-name": "Web UI",
  "webui-description": "n8n visual workflow editor and automation dashboard",
} as const

export type StringKey = keyof typeof defaultStrings
