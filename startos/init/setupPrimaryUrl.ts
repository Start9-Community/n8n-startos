import { configJson } from '../fileModels/config.json'
import { sdk } from '../sdk'
import { getN8nUrls, pickDefaultUrl } from '../utils'

// Keeps a usable primary URL on file without ever holding the service on a
// prompt: seeded on install, and re-picked if the stored address stops being
// published (a gateway disabled, a domain removed, a restore onto a different
// server). Deliberately silent rather than a task — the alternative is leaving
// n8n handing out webhook URLs it knows are stale until someone answers.
export const setupPrimaryUrl = sdk.setupOnInit(async (effects) => {
  const urls = await getN8nUrls(effects)
  const primaryUrl = await configJson.read((c) => c.primaryUrl).const(effects)

  if (!primaryUrl || !urls.includes(primaryUrl)) {
    const fallback = pickDefaultUrl(urls)
    if (fallback) {
      await configJson.merge(
        effects,
        { primaryUrl: fallback },
        { allowWriteAfterConst: true },
      )
    }
  }
})
