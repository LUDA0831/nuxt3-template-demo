import type { Preset } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  toEscapedSelector,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetRemToPx(),
    createEnterPlugin(),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})

/**
 * 用于元素显示时的动画
 * @param maxOutput MaxOutput输出越大，生成的css体积就越大。
 */
function createEnterPlugin(maxOutput = 2): Preset {
  const createCss = (index: number, d: string, selector: string) => {
    const upd = d.toUpperCase()
    return `
    *>${selector}:nth-child(${index}){
      transform: translate${upd}(50px);
    }
    *>.-enter-${d}:nth-child(${index}) {
      transform: translate${upd}(-50px);
    }
    *>${selector}:nth-child(${index}),*>.-enter-${d}:nth-child(${index}){
      z-index: ${10 - index};
      opacity:0;
      animation:enter-${d}-animation 0.4s ease-in-out 0.3s;
      animation-fill-mode:forwards;
      animation-delay:${(index) / 10}s;
    }
    `
  }
  return {
    name: 'createEnter',
    rules: [
      [/^enter-(.+)$/, ([,name], { rawSelector }) => {
        if (!['y', 'x'].includes(name))
          return

        const selector = toEscapedSelector(rawSelector)
        const addRawCss = []
        for (let index = 1; index < maxOutput; index++)
          addRawCss.push(createCss(index, name, selector))

        return addRawCss.join('')
      }, {
        autocomplete: [
          'enter-y',
          'enter-x',
        ],
      }],
    ],
    preflights: [
      {
        getCSS: () => `
      @keyframes enter-y-animation{to{opacity: 1;transform: translateY(0);}}
      @keyframes enter-x-animation{to{opacity: 1;transform: translateX(0);}}
    `,
      },
    ],
  }
}
