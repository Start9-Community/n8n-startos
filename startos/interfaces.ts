import { sdk } from './sdk'

const uiPort = 5678

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.MultiHost.of(effects, 'main')
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, { protocol: 'http' })

  const ui = sdk.createInterface(effects, {
    name: 'Web UI',
    id: 'ui',
    description: 'n8n visual workflow editor',
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    query: {},
  })

  const receipt = await uiMultiOrigin.export([ui])
  return [receipt]
})
