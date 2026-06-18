import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  smtp: smtpShape,
})

export const configJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/config.json' },
  shape,
)
