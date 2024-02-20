import type { BannerResultModel, BannerType } from '~/apis/sys/typing'

export * from './typing'

enum Api {
  getBanner = '/operation/app/banner/getBanner',
}

export async function getBanner(type: BannerType) {
  return useHttp.get<BannerResultModel[]>(Api.getBanner, { banner_type_id: type })
}
