// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'

export default defineNuxtConfig({
  compatibilityDate: '2024-10-15',
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'arco-design-nuxt-module',
    'nuxt-swiper',
    'dayjs-nuxt',
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
    // 启用新的实验性类型路由器使用 [unplugin-vue-router](https://github.com/posva/unplugin-vue-router).
    typedPages: true,
  },
  vite: createViteConfig(),
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  dayjs: {
    plugins: ['relativeTime', 'advancedFormat', 'quarterOfYear', 'customParseFormat', 'isBetween', 'weekOfYear', 'weekYear'],
    locales: ['zh-cn'],
  },
})
