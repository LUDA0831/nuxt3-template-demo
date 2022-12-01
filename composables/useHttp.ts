import { Message } from '@arco-design/web-vue'
import { useUserStore } from '~/stores/user.store'

export interface ResOptions<T> {
  data?: T
  code?: number
  message?: string
  success?: boolean
}

const fetch = $fetch.create({
  async onRequest({ options }) {
    // 添加baseURL
    const { public: { apiBase } } = useRuntimeConfig()
    options.baseURL = apiBase
    // 添加请求头
    const userStore = useUserStore()
    if (!userStore.isLogin)
      return
    const token = userStore.getToken()
    options.headers = new Headers(options.headers)
    options.headers.set('Authorization', `Bearer ${token.value}`)
  },
  onResponse({ response }) {
    if (response.headers.get('content-disposition') && response.status === 200)
      return response
    // 在这里判断错误
    if (response._data.code !== 200)
      return Promise.resolve(response._data)

    return response._data
  },
  onResponseError(error) {
    const err = (text: string) => {
      Message.error(error.response && error.response._data && error.response._data.message ? error.response._data.message : text)
    }
    if (error.response && error.response._data) {
      const userStore = useUserStore()

      switch (error.response.status) {
        case 404:
          err('服务器资源不存在')
          break
        case 500:
          err('服务器内部错误')
          break
        case 401:
          // 清除缓存
          userStore.clearUserInfo()
          err('登录状态已过期，需要重新登录')
          break
        case 403:
          err('没有权限访问该资源')
          break
        default:
          err('未知错误！')
      }
    }
    else {
      err('请求超时，服务器无响应！')
    }
    return Promise.reject(error.response && error.response._data ? error.response._data : null)
  },
})

export const useHttp = {
  get: <T>(url: string, params?: any) => {
    return fetch<ResOptions<T>>(url, { method: 'get', params })
  },

  post: <T>(url: string, body?: any) => {
    return fetch<ResOptions<T>>(url, { method: 'post', body })
  },

  put: <T>(url: string, body?: any) => {
    return fetch<ResOptions<T>>(url, { method: 'put', body })
  },

  delete: <T>(url: string, body?: any) => {
    return fetch<ResOptions<T>>(url, { method: 'delete', body })
  },
}
