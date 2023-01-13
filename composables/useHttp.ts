import { Message } from '@arco-design/web-vue'
import type { FetchResponse } from 'ofetch'
import { useUserStore } from '~/stores/user.store'
import IconEmoticonDead from '~icons/mdi/emoticon-dead'

export interface ResOptions<T> {
  data: T
  code: number
  message: string
  success: boolean
}

export const handleError = (response: FetchResponse<ResOptions<any>> & FetchResponse<ResponseType>) => {
  const err = (text: string) => {
    Message.error({
      content: response?._data?.message ?? text,
      icon: () => h(IconEmoticonDead),
    })
  }
  if (!response._data) {
    err('请求超时，服务器无响应！')
    return
  }
  const userStore = useUserStore()
  const handleMap: { [key: number]: () => void } = {
    404: () => err('服务器资源不存在'),
    500: () => err('服务器内部错误'),
    403: () => err('没有权限访问该资源'),
    401: () => {
      err('登录状态已过期，需要重新登录')
      userStore.clearUserInfo()
      // TODO 跳转实际登录页
      navigateTo('/')
    },
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}

const fetch = $fetch.create({
  // 请求拦截器
  onRequest({ options }) {
    // 添加baseURL,nuxt3环境变量要从useRuntimeConfig里面取
    const { public: { apiBase } } = useRuntimeConfig()
    options.baseURL = apiBase
    // 添加请求头,没登录不携带token
    const userStore = useUserStore()
    if (!userStore.isLogin)
      return
    options.headers = new Headers(options.headers)
    options.headers.set('Authorization', `Bearer ${userStore.getToken}`)
  },
  // 响应拦截
  onResponse({ response }) {
    if (response.headers.get('content-disposition') && response.status === 200)
      return response
    // 在这里判断错误
    if (response._data.code !== 200) {
      handleError(response)
      return Promise.reject(response._data)
    }

    // 成功返回
    return response._data
  },
  // 错误处理
  onResponseError({ response }) {
    handleError(response)
    return Promise.reject(response?._data ?? null)
  },
})

// 自动导出
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
