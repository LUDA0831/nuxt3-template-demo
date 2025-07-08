import { useUserStore } from '~/stores/user.store'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  if (!userStore.isLogin) {
    toast.warning('未登录,请登录之后访问', {
      position: 'top-right',
    })
    return navigateTo({ path: '/demo/api', query: { redirect: to.path } })
  }
})
