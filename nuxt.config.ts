// https://nuxt.com/docs/api/configuration/nuxt-config
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import compression from 'vite-plugin-compression'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-lodash', '@pinia-plugin-persistedstate/nuxt',
  ],
  css: ['assets/css/index.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
  },
  typescript: {
    shim: false,
  },
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    ssr: {
      noExternal: ['@arco-design/web-vue'],
    },
    plugins: [
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [ArcoResolver({
          sideEffect: true,
        })],
      }),
      compression({
        ext: '.gz',
        deleteOriginFile: false,
      }),
    ],
  },
})
