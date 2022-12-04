import compression from 'vite-plugin-compression'
import type { PluginOption } from 'vite'

export const createCompression = (env: ViteEnv) => {
  const { VITE_BUILD_COMPRESS } = env
  const compressList = VITE_BUILD_COMPRESS?.split(',') ?? []
  const plugin: (PluginOption | PluginOption[])[] = []
  if (compressList.includes('gzip')) {
    plugin.push(
      compression({
        ext: '.gz',
        deleteOriginFile: false,
      }),
    )
  }
  if (compressList.includes('brotli')) {
    plugin.push(
      compression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: false,
      }),
    )
  }
  return plugin
}
