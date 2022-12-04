// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-lodash', '@pinia-plugin-persistedstate/nuxt',
  ],
  css: ['assets/css/index.css'],
  runtimeConfig: createRuntimeConfig(),
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
  vite: createViteConfig(),
})
