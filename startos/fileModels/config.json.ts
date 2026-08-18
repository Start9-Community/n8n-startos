import { FileHelper, smtpShape, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  // The address n8n builds webhook and editor links from. Optional rather than
  // defaulted: which addresses exist is only known once the interface is
  // exported, so it is seeded at init and re-picked if it stops being published.
  primaryUrl: z.string().optional().catch(undefined),
  smtp: smtpShape,
})

export const configJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: '/config.json' },
  shape,
)
