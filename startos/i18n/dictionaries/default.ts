export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting n8n!': 0,
  'Web Interface': 1,
  'n8n is ready': 2,
  'n8n is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The n8n workflow automation editor': 5,

  // actions/manageSmtp.ts
  'Configure SMTP': 6,
  'Add an SMTP server so n8n can send email — most importantly the password-reset message behind the "Forgot password" link on the login screen. Without SMTP, that link cannot work.': 7,

  // actions/resetOwnerPassword.ts
  'Reset Owner Password': 8,
  'Generate a new password for the n8n owner account — use this if you are locked out and have not set up SMTP password resets. Your workflows, credentials, and any other user accounts are left untouched.': 9,
  'Owner Password Reset': 10,
  'Sign in to n8n with the new owner password below. It is shown only once — copy it now.': 11,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
