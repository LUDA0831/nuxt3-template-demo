export default defineNuxtPlugin({
  name: 'router',
  hooks: {
    'page:start': function () {
      const nuxtApp = useNuxtApp()
      nuxtApp.$router.running = false
      nuxtApp.$router.beforeEach((to, from, next) => {
        if (nuxtApp.$router.running) {
          next(true)
        }
        else {
          console.warn('Re-rendering layout because of https://github.com/vuejs/core/issues/5513')
          console.warn('Re-rendering layout because of https://github.com/nuxt/nuxt/issues/13350')
          nuxtApp.$router.nextRoute = to.fullPath
          next(false)
        }
      })
    },
    'page:transition:finish': function () {
      const nuxtApp = useNuxtApp()
      nuxtApp.$router.running = true
      if (nuxtApp.$router.nextRoute) {
        nuxtApp.$router.push(nuxtApp.$router.nextRoute)
        nuxtApp.$router.nextRoute = null
      }
    },
  },
})
