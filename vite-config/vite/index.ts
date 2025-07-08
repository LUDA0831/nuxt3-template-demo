import type { NuxtConfig } from '@nuxt/schema'
import tailwindcss from '@tailwindcss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ViteComponents from 'unplugin-vue-components/vite'
import { compression } from 'vite-plugin-compression2'

export function createViteConfig(): NuxtConfig['vite'] {
  return {
    ssr: {
      noExternal: ['@arco-design/web-vue'],
    },
    plugins: [
      tailwindcss(),
      ViteComponents({
        resolvers: [
          IconsResolver(),
        ],
      }),
      compression({
        algorithms: ['gz', 'br'],
      }),
    ],
  }
}
