// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig, createViteConfig } from './vite-config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    'dayjs-nuxt',
    'nuxt-lottie',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],
  shadcn: {
    prefix: '',
    componentDir: '~/components/ui',
  },
  // 从第三方包自动导入
  imports: {
    presets: [
      { from: 'vue-sonner', imports: ['toast'] },
    ],
  },

  css: ['~/assets/css/index.css'],
  runtimeConfig: createRuntimeConfig(),

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: false,
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
  compatibilityDate: '2025-07-08',
})
