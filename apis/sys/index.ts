import type { BannerResultModel, BannerType } from '~/apis/sys/typing'
import type { HttpOption } from '~/composables/useHttp'

export * from './typing'

enum Api {
  getBanner = '/operation/app/banner/getBanner',
}

export async function getBanner(type: BannerType, option?: HttpOption<BannerResultModel[]>) {
  return useHttp.get<BannerResultModel[]>(Api.getBanner, { banner_type_id: type }, option)
}
