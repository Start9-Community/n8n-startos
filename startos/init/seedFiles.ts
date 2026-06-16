import { configJson } from '../fileModels/config.json'
import { sdk } from '../sdk'

export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (kind === 'install') {
    await configJson.merge(effects, {
      smtp: { selection: 'disabled', value: {} },
    })
  } else {
    await configJson.merge(effects, {})
  }
})
