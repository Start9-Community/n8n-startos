import { sdk } from '../sdk'
import { versionGraph } from '../versions'
import { setInterfaces } from '../interfaces'
import { setDependencies } from '../dependencies'

export const init = sdk.setupInit(versionGraph, setInterfaces, setDependencies)
export const uninit = sdk.setupUninit(versionGraph)
