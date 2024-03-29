import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from '../env'
import { createVitePlugins } from './plugins'

export function createViteConfig(): NuxtConfig['vite'] {
  const { viteEnv } = useEnv()
  return {
    ssr: {
      noExternal: ['@arco-design/web-vue'],
    },
    plugins: createVitePlugins(viteEnv),
  }
}
