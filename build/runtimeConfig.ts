import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from './env'
export const createRuntimeConfig = (): NuxtConfig['runtimeConfig'] => {
  const { viteEnv } = useEnv()
  return {
    public: {
      apiBase: viteEnv.VITE_APP_BASE_URL,
      appTitle: viteEnv.VITE_APP_TITLE,
    },
  }
}
