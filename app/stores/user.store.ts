import type { LoginParams, LoginResultModel } from '~/apis/login'
import { defineStore } from 'pinia'

function storeSetup() {
  const userInfo = ref<LoginResultModel>()
  const getUserInfo = computed(() => userInfo.value)
  const isLogin = computed(() => !!userInfo.value?.remember_token)
  const getToken = computed(() => userInfo.value?.remember_token)
  const setUserInfo = (info: LoginResultModel) => {
    userInfo.value = info
  }
  const login = async (params: LoginParams) => {
    const { login } = useApi()
    const { data } = await login.login(params)
    userInfo.value = data
    return data
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

  return { userInfo, login, logout, getUserInfo, getToken, isLogin, clearUserInfo, count, getCount, addCount, setUserInfo }
}
export const useUserStore = defineStore('app-user', storeSetup, { persist: true })
