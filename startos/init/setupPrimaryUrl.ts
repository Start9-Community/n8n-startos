import { configJson } from '../fileModels/config.json'
import { sdk } from '../sdk'
import { getN8nUrls, pickDefaultUrl } from '../utils'

// The `.const` reads make this a live watcher: it re-runs whenever the address
// set or the stored choice changes, not only when the container starts.
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
