import type { PluginOption } from 'vite'
import { compression } from 'vite-plugin-compression2'

export function createCompression(env: ViteEnv) {
  const { VITE_BUILD_COMPRESS } = env
  const compressList = VITE_BUILD_COMPRESS?.split(',') ?? []
  const plugin: (PluginOption | PluginOption[])[] = []
  if (compressList.includes('gzip')) {
    plugin.push(
      compression(),
    )
  }
  if (compressList.includes('brotli')) {
    plugin.push(
      compression({
        algorithm: 'brotliCompress',
      }),
    )
  }
  return plugin
}
