import { configJson } from '../fileModels/config.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { getN8nUrls, pickDefaultUrl } from '../utils'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  primaryUrl: Value.dynamicSelect(async ({ effects }) => {
    const urls = await getN8nUrls(effects)

    return {
      name: i18n('Primary URL'),
      values: urls.reduce(
        (obj, url) => ({ ...obj, [url]: url }),
        {} as Record<string, string>,
      ),
      default: pickDefaultUrl(urls) ?? '',
    }
  }),
})

export const setPrimaryUrl = sdk.Action.withInput(
  'set-primary-url',

  async ({ effects }) => ({
    name: i18n('Set Primary URL'),
    description: i18n(
      'Choose which of your n8n addresses n8n should treat as primary. It is used for the webhook URLs shown in the editor and registered with external services, and for the links in the emails n8n sends.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => ({
    primaryUrl:
      (await configJson.read((c) => c.primaryUrl).once()) || undefined,
  }),

  async ({ effects, input }) =>
    configJson.merge(effects, { primaryUrl: input.primaryUrl }),
)
