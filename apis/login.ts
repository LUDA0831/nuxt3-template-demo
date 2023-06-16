import type { HttpOption } from '~/composables/useHttp'

export interface LoginParams {
  mobile: number
  user_pass?: string
  sms_code?: number
}
export interface Orders {
  user_id: number
  shop_id: number
  course_end_time: string
}

export interface Vip_type {
  user_id: number
  id: number
  vipType: number
  vipName: string
  endDate: string
  course_end_time: string
}

export interface LoginResultModel {
  id: number
  user_name: string
  real_name: string
  user_nickname: string
  mobile: string
  status: string
  sex: string
  last_login_ip: string
  last_login_time: number
  birthday: string
  avatar: string
  avatar_frame: string
  grade_id: string
  province_id: number
  city_id: number
  area_id: number
  score: number
  days: number
  updated_at: string
  orders: Orders[]
  vip_type: Vip_type
  isSimplePwd: boolean
  remember_token: string
}
enum Api {
  login = '/users/app/login',
  logout = '/users/app/logout',
  getUserInfo = '/users/app/getUserInfo',
}

// option就是useFetch的选项参数
export async function login(params: LoginParams, option?: HttpOption<LoginResultModel>) {
  return useHttp.post<LoginResultModel>(Api.login, params, option)
}

export async function logout(option?: HttpOption<any>) {
  return useHttp.post<void>(Api.logout, {}, option)
}

export async function getUserInfo(option?: HttpOption<any>) {
  return useHttp.get(Api.getUserInfo, {}, option)
}
