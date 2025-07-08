import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu({
  // 开启 eslint-plugin-format 格式化css,html,markdown 等文件
  // 参考 https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters
  formatters: true,
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindcss,
  },
  rules: {
    // enable all recommended rules to report a warning
    ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
    // enable all recommended rules to report an error
    // ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

    // or configure rules individually
    'better-tailwindcss/enforce-consistent-line-wrapping': ['warn', { printWidth: 100 }],
  },
  settings: {
    'better-tailwindcss': {
      // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
      entryPoint: 'app/assets/css/index.css',
    },
  },
})
