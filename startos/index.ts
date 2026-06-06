import { buildManifest } from '@start9labs/start-sdk'
import { manifest as sdkManifest } from './manifest'
import { versionGraph } from './versions'

export const manifest = buildManifest(versionGraph, sdkManifest)
export { main } from './main'
export { init, uninit } from './init'
export { setInterfaces } from './interfaces'
export { setDependencies } from './dependencies'
