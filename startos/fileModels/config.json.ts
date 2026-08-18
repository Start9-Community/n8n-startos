import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  // Not defaulted: which addresses exist is unknown until the interface has been
  // exported, so init seeds it instead.
  primaryUrl: z.string().optional().catch(undefined),
  smtp: smtpShape,
})

export const configJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/config.json' },
  shape,
)
