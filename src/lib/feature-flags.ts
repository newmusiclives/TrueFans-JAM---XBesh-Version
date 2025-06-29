interface FeatureFlags {
  enableSpotifyIntegration: boolean
  enableBandsinTownIntegration: boolean
  enableManifestPayments: boolean
  enableAdvancedAnalytics: boolean
  enableRealTimeUpdates: boolean
}

export const featureFlags: FeatureFlags = {
  enableSpotifyIntegration: import.meta.env.VITE_ENABLE_SPOTIFY === 'true',
  enableBandsinTownIntegration: import.meta.env.VITE_ENABLE_BANDSINTOWN === 'true',
  enableManifestPayments: import.meta.env.VITE_ENABLE_MANIFEST === 'true',
  enableAdvancedAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableRealTimeUpdates: import.meta.env.VITE_ENABLE_REALTIME === 'true',
}

export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  return featureFlags[feature] || false
}
