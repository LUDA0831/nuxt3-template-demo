import type { PluginOption } from 'vite'
import { createCompression } from './compression'
import { createComponents } from './components'

export const createVitePlugins = (viteEnv: ViteEnv) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 组件按需导入
    createComponents(),
  ]
  // gzip压缩插件
  vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
