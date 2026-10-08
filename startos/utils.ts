// Here we define any constants or functions that are shared by multiple components
// throughout the package codebase.

export const uiPort = 5678

// n8n stores its SQLite database, encryption key, config, and binary data under
// N8N_USER_FOLDER. The 'main' volume is mounted here so all of it persists.
export const dataDir = '/data'

// Host id (the `sdk.MultiHost.of` group) — distinct from the interface id
// exported on it.
export const uiHostId = 'ui-multi'
export const uiInterfaceId = 'ui'
