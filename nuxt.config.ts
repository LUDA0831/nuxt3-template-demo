// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './build'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia-plugin-persistedstate/nuxt',
    'arco-design-nuxt-module',
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
  vue: {
    // 实验性:启用' defineProps '的响应式解构 [Vue RFC#502](https://github.com/vuejs/rfcs/discussions/502)
    propsDestructure: true,
  },
  vite: createViteConfig(),
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
