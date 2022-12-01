<template>
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
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'

const userStore = useUserStore()
const onLogout = async () => {
  await userStore.logout()
  Message.success('已退出登录!')
}
const onLoginApi = async () => {
  await userStore.login()
  Message.success('登录成功!')
}

const onGetUserInfoApi = async () => {
  const { login } = useApi()
  const { message } = await login.getUserInfo()
  Message.success(message!)
}
</script>

<script lang="ts">
export default { name: 'Api' }
</script>

<style scoped>

</style>
