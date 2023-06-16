import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export function createComponents() {
  return Components({
    dts: true,
    resolvers: [ArcoResolver({
      sideEffect: true,
    })],
  })
}
