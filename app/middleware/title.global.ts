// 全局路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // 判断环境
  if (import.meta.client) {
    toast.info(`来自全局路由中间件${from.fullPath}->${to.fullPath}`)
  }

  const { public: { appTitle } } = useRuntimeConfig()
  useHead({
    title: to.meta.title ? `${appTitle}-${to.meta.title}` : appTitle,
  })
})
