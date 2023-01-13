import type { Ref } from 'vue'
import type { ResOptions } from '~/composables/useHttp'
import { useUserStore } from '~/stores/user.store'
import { handleError } from '~/composables/useHttp'
import type { UseFetchOptions } from '#app'

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

const fetch = <T>(url: UrlType, option: UseFetchOptions<ResOptions<T>>) => {
  return useFetch<ResOptions<T>>(url, {
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
    // 合并参数
    ...option,
  })
}

export const useRequest = {
  get: <T>(url: string, params?: any, option?: UseFetchOptions<ResOptions<T>>) => {
    return fetch<T>(url, { method: 'get', params, ...option })
  },

  post: <T>(url: string, body?: any, option?: UseFetchOptions<ResOptions<T>>) => {
    return fetch<T>(url, { method: 'post', body, ...option })
  },

  put: <T>(url: string, body?: any, option?: UseFetchOptions<ResOptions<T>>) => {
    return fetch<T>(url, { method: 'put', body, ...option })
  },

  delete: <T>(url: string, body?: any, option?: UseFetchOptions<ResOptions<T>>) => {
    return fetch<T>(url, { method: 'delete', body, ...option })
  },
}
