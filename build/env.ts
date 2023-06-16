import { loadEnv } from 'vite'
import { wrapperEnv } from './utils'

interface EnvConfig {
  viteEnv: ViteEnv
  mode: 'production' | 'development'
}

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd())
const viteEnv = wrapperEnv(env)

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'
export function useEnv(): EnvConfig {
  return {
    viteEnv,
    mode,
  }
}
