import type { BannerResultModel, BannerType } from '~/apis/sys/typing'
export * from './typing'

enum Api {
  getBanner = '/operation/app/banner/getBanner',
}

export const getBanner = async (type: BannerType) => {
  return await useRequest.get<BannerResultModel[]>(Api.getBanner, { banner_type_id: type }, { lazy: true })
}
