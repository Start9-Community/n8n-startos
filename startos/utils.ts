// Here we define any constants or functions that are shared by multiple components
// throughout the package codebase.

import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 5678

// n8n stores its SQLite database, encryption key, config, and binary data under
// N8N_USER_FOLDER. The 'main' volume is mounted here so all of it persists.
export const dataDir = '/data'

// Host id (the `sdk.MultiHost.of` group) — distinct from the interface id
// exported on it. Used for `sdk.host.getOwn` lookups.
export const uiHostId = 'ui-multi'
export const uiInterfaceId = 'ui'

// Every address StartOS currently publishes for the Web UI, excluding loopback.
// These are the candidates the user picks a primary URL from, and the set the
// stored choice is validated against when addresses come and go.
export async function getN8nUrls(effects: T.Effects): Promise<string[]> {
  return sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === uiInterfaceId)
      return iface ? iface.addressInfo.nonLocal.format() : []
    })
    .const()
}

// The address to fall back on when the user has not chosen one. Prefers a
// `.local` hostname: it is the address every StartOS box publishes on the LAN
// and the one most likely to keep working, where a raw IP can move with DHCP.
// Shared so the seeder, the action's default, and main.ts cannot disagree.
export function pickDefaultUrl(urls: string[]): string | undefined {
  return urls.find((u) => u.includes('.local')) ?? urls[0]
}
