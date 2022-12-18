import { defineStore } from 'pinia'
import type { LoginParams, LoginResultModel } from '~/apis/login'

const storeSetup = () => {
  const userInfo = ref<LoginResultModel>()
  const getUserInfo = computed(() => userInfo.value)
  const isLogin = computed(() => !!userInfo.value?.remember_token)
  const getToken = computed(() => userInfo.value?.remember_token)

  const login = async (params: LoginParams) => {
    const { login } = useApi()
    const { data } = await login.login(params)
    userInfo.value = data
  }
  const clearUserInfo = () => {
    userInfo.value = undefined
  }
  const logout = async () => {
    const { login } = useApi()
    await login.logout()
    clearUserInfo()
  }

  const count = ref(1)
  const getCount = computed(() => count.value)
  const addCount = () => {
    count.value++
  }

  return { userInfo, login, logout, getUserInfo, getToken, isLogin, clearUserInfo, count, getCount, addCount }
}
export const useUserStore = defineStore('app-user', storeSetup, { persist: true })
