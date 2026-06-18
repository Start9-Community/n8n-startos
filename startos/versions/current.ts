import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.26.4:0',
  releaseNotes: {
    en_US: 'Initial release of n8n for StartOS.',
    es_ES: 'Versión inicial de n8n para StartOS.',
    de_DE: 'Erstveröffentlichung von n8n für StartOS.',
    pl_PL: 'Pierwsze wydanie n8n dla StartOS.',
    fr_FR: 'Première version de n8n pour StartOS.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
