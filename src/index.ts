import type { RumPublicApi } from '@datadog/browser-rum-core'

export { ErrorBoundary } from './ErrorBoundary'
export { RumRoute } from './Router'
export { WithRumComponentContext, RumComponentContextProvider, useRumError, useRumAction } from './RumComponentContext'

declare global {
  interface Window {
    DD_RUM?: RumPublicApi;
  }
}
