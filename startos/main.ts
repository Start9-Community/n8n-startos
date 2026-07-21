import { T } from '@start9labs/start-sdk'
import { configJson } from './fileModels/config.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { dataDir, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting n8n!'))

  const env: Record<string, string> = {
    N8N_USER_FOLDER: dataDir,
    N8N_PORT: String(uiPort),
    N8N_PROTOCOL: 'http',
    // StartOS fronts the UI with its own reverse proxy and exposes it over
    // plain HTTP (Tor .onion, LAN IP). A Secure-flagged auth cookie would
    // never be sent back over those, so logins would silently fail.
    N8N_SECURE_COOKIE: 'false',
    N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: 'true',
    N8N_DIAGNOSTICS_ENABLED: 'false',
    N8N_VERSION_NOTIFICATIONS_ENABLED: 'false',
    N8N_PERSONALIZATION_ENABLED: 'false',
    DB_TYPE: 'sqlite',
    DB_SQLITE_DATABASE: `${dataDir}/database.sqlite`,
    GENERIC_TIMEZONE: 'UTC',
    TZ: 'UTC',
  }

  // SMTP enables n8n's email features — most importantly the "Forgot password"
  // reset flow. Resolved from the Configure SMTP action (system or custom).
  const config = await configJson.read().const(effects)
  let smtp: T.SmtpValue | null = null
  if (config?.smtp?.selection === 'system') {
    smtp = await sdk.getSystemSmtp(effects).const()
    if (smtp && config.smtp.value.customFrom) {
      smtp.from = config.smtp.value.customFrom
    }
  } else if (config?.smtp?.selection === 'custom') {
    const { host, from, username, password, security } =
      config.smtp.value.provider.value
    smtp = {
      host,
      port: Number(security.value.port),
      from,
      username,
      password: password ?? null,
      security: security.selection,
    }
  }
  if (smtp) {
    Object.assign(env, {
      N8N_EMAIL_MODE: 'smtp',
      N8N_SMTP_HOST: smtp.host,
      N8N_SMTP_PORT: String(smtp.port),
      N8N_SMTP_USER: smtp.username,
      N8N_SMTP_PASS: smtp.password ?? '',
      N8N_SMTP_SENDER: smtp.from,
      N8N_SMTP_SSL: smtp.security === 'tls' ? 'true' : 'false',
      N8N_SMTP_STARTTLS: smtp.security === 'starttls' ? 'true' : 'false',
    })
  }

  const n8nContainer = sdk.SubContainer.of(
    effects,
    { imageId: 'n8n' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: dataDir,
      readonly: false,
    }),
    'n8n-sub',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('chown', {
      subcontainer: n8nContainer,
      exec: {
        // The volume is owned by root; n8n's image runs as the `node` user and
        // must own its data directory to write the database and config.
        command: ['chown', '-R', 'node:node', dataDir],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer: n8nContainer,
      exec: {
        command: sdk.useEntrypoint(),
        env,
      },
      ready: {
        display: i18n('Web Interface'),
        gracePeriod: 60_000,
        fn: () =>
          sdk.healthCheck.checkWebUrl(
            effects,
            `http://127.0.0.1:${uiPort}/healthz`,
            {
              successMessage: i18n('n8n is ready'),
              errorMessage: i18n('n8n is not ready'),
            },
          ),
      },
      requires: ['chown'],
    })
})
