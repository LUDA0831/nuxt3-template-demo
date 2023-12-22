// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: ['assets/css/index.css', '@unocss/reset/tailwind-compat.css'],
  runtimeConfig: createRuntimeConfig(),
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
  },
  typescript: {
    shim: false,
    strict: true,
  },
  experimental: {
    reactivityTransform: true,
    typedPages: true,
  },
  vite: createViteConfig(),
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
