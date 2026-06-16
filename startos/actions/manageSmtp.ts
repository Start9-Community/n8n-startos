import { smtpPrefill } from '@start9labs/start-sdk'
import { configJson } from '../fileModels/config.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec } = sdk

const inputSpec = InputSpec.of({
  smtp: sdk.inputSpecConstants.smtpInputSpec,
})

export const manageSmtp = sdk.Action.withInput(
  'manage-smtp',

  async ({ effects }) => ({
    name: i18n('Configure SMTP'),
    description: i18n(
      'Add an SMTP server so n8n can send email — most importantly the password-reset message behind the "Forgot password" link on the login screen. Without SMTP, that link cannot work.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => ({
    smtp: smtpPrefill(await configJson.read((c) => c.smtp).once()),
  }),

  async ({ effects, input }) => configJson.merge(effects, { smtp: input.smtp }),
)
