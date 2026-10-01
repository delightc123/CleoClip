import type { CleoClipAPI, BridgeClipAPI } from '../../preload/index'

declare global {
  interface Window {
    cleoclip: CleoClipAPI
    bridgeclip?: BridgeClipAPI
  }
}

export function getApi(): CleoClipAPI {
  return window.cleoclip ?? (window.bridgeclip as CleoClipAPI)
}
