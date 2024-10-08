// 全局路由中间件
import { Message } from '@arco-design/web-vue'

export default defineNuxtRouteMiddleware((to, from) => {
  // 判断环境
  if (import.meta.client)
    Message.info(`来自全局路由中间件${from.fullPath}->${to.fullPath}`)

  const { public: { appTitle } } = useRuntimeConfig()
  useHead({
    title: to.meta.title ? `${appTitle}-${to.meta.title}` : appTitle,
  })
})
