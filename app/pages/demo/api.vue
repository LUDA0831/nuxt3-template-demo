<script lang="ts" setup>
import { useUserStore } from '~/stores/user.store'

definePageMeta({
  title: 'API示例',
})

const route = useRoute()

const router = useRouter()

const userStore = useUserStore()
const { login, sys } = useApi()

const redirect = route.query.redirect ?? '/demo/api'
async function onLoginApi() {
  const params = { mobile: 13333333333, user_pass: '333333' }
  await userStore.login(params)
  toast.success('登录成功!')
  await router.push(redirect as string)
}
async function onLogout() {
  await userStore.logout()
  toast.success('已退出登录!')
}
// immediate 进入页面请求接口,使用execute手动请求,顶层请求使用useAsyncData
const { data: userInfoResult, execute } = await useAsyncData(() => login.getUserInfo(), { immediate: false })
const userInfo = computed(() => userInfoResult.value?.data)
async function onGetUserInfoApi() {
  await execute()
  toast.info(JSON.stringify(userInfo.value))
  toast.success(userInfoResult.value?.message ?? '请求成功')
}

// 封装示例,lazy 不阻塞路由导航,进入页面服务端请求数据,顶层请求使用useAsyncData
const { data, status, refresh } = await useAsyncData(() => sys.getBanner(6), { lazy: true })

const bannerList = computed(() => {
  return data.value?.data
})
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-8">
      {{ status === 'pending' ? 'Loading' : bannerList }}
    </div>
    <div class="mt-8 flex space-x-4">
      <Button variant="outline" @click="onLogout">
        logout
      </Button>
      <Button variant="outline" @click="onLoginApi">
        login
      </Button>
      <Button variant="outline" @click="onGetUserInfoApi">
        getUserInfo
      </Button>
      <Button :loading="status === 'pending'" @click="refresh()">
        刷新接口
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>
