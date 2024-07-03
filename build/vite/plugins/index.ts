import type { PluginOption } from 'vite'
import { createCompression } from './compression'

export function createVitePlugins(viteEnv: ViteEnv) {
  const vitePlugins: (PluginOption | PluginOption[])[] = []
  // gzip压缩插件
  vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
