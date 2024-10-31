import antfu from '@antfu/eslint-config'

export default antfu({
  // 开启 unocss 支持
  // 参考 https://github.com/antfu/eslint-config?tab=readme-ov-file#unocss
  unocss: true,
  // 开启 eslint-plugin-format 格式化css,html,markdown 等文件
  // 参考 https://github.com/antfu/eslint-config?tab=readme-ov-file#formatters
  formatters: true,
})
