import { defineStore } from 'pinia'
import type { LoginResultModel } from '~/apis/login'

const storeSetup = () => {
  const userInfo = ref<LoginResultModel>()
  const getUserInfo = () => computed(() => userInfo.value)
  const isLogin = () => computed(() => !!userInfo.value?.remember_token)
  const getToken = () => computed(() => userInfo.value?.remember_token)

  const login = async () => {
    const params = { mobile: 18602780217, user_pass: '123123' }
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
  return { userInfo, login, logout, getUserInfo, getToken, isLogin, clearUserInfo }
}
export const useUserStore = defineStore('app-user', storeSetup, { persist: true })
