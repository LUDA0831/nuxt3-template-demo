<template>
  <div>
    <div>
      {{ data }}
    </div>
    <div class="flex space-x-4">
      <button @click="onLogout">
        logout
      </button>
      <button @click="onLoginApi">
        login
      </button>
      <button @click="onGetUserInfoApi">
        getUserInfo
      </button>
      <a-button :loading="pending" @click="refresh">
        刷新接口
      </a-button>
      <a-button :loading="pending" @click="onUseFetchLogin">
        useFetchLogin
      </a-button>
      <a-button :loading="pending" @click="onUseFetchLogout">
        useFetchLogout
      </a-button>
      <a-button :loading="pending" @click="onUseFetchGetUserInfo">
        useFetchGetUserInfo
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'
import type { LoginParams } from '~/apis/login'

definePageMeta({
  title: 'API示例',
})
const route = useRoute()

const router = useRouter()

const userStore = useUserStore()
const { login, sys } = useApi()

const redirect = route.query.redirect ?? '/demo/api'
const onLoginApi = async () => {
  const params = { mobile: 13333333333, user_pass: '333333' }
  await userStore.login(params)
  Message.success('登录成功!')
  router.push(redirect as string)
}
const onLogout = async () => {
  await userStore.logout()
  Message.success('已退出登录!')
}
const onGetUserInfoApi = async () => {
  const { message } = await login.getUserInfo()
  Message.success(message!)
}

// useFetch封装示例,获取页面初始数据时比较有用
const { data, pending, error, refresh } = await sys.getBanner(6)
watch(pending, () => {
  console.log(pending)
})
watch(data, (newData) => {
  console.log(newData)
})
const onUseFetchLogin = async () => {
  const params: LoginParams = { mobile: 13333333333, user_pass: '333333' }
  const { data, pending, error, refresh } = await login.useFetchLogin(params)
  userStore.setUserInfo(data.value!.data)
  Message.success('登录成功!')
  router.push(redirect as string)
}
const onUseFetchGetUserInfo = async () => {
  const { data, pending, refresh, error } = await login.useFetchGetUserInfo()
  Message.success(data.value!.message)
}
const onUseFetchLogout = async () => {
  const { data, pending, refresh, error } = await login.useFetchLogout()
  Message.success('已退出登录!')
}
</script>

<script lang="ts">
export default { name: 'Api' }
</script>

<style scoped>

</style>
