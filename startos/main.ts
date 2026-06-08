import { sdk } from './sdk'
import { i18n } from './i18n'

const uiPort = 5678

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('n8n-starting'))

  const n8nContainer = await sdk.SubContainer.of(
    effects,
    { imageId: 'n8n' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/data',
      readonly: false,
    }),
    'n8n',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('chown', {
      subcontainer: n8nContainer,
      exec: {
        command: ['chown', '-R', 'node:node', '/data'],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: n8nContainer,
      exec: {
        command: sdk.useEntrypoint(),
        env: {
          N8N_USER_FOLDER: '/data',
          N8N_PORT: String(uiPort),
          N8N_PROTOCOL: 'http',
          N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: 'true',
          N8N_DIAGNOSTICS_ENABLED: 'false',
          N8N_VERSION_NOTIFICATIONS_ENABLED: 'false',
          N8N_PERSONALIZATION_ENABLED: 'false',
          DB_TYPE: 'sqlite',
          DB_SQLITE_DATABASE: '/data/database.sqlite',
          GENERIC_TIMEZONE: 'UTC',
          TZ: 'UTC',
        },
      },
      ready: {
        display: i18n('webui-name'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: i18n('n8n-running'),
            errorMessage: i18n('n8n-not-responding'),
          }),
        gracePeriod: 60_000,
      },
      requires: ['chown'],
    })
})
