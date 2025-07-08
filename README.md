# Nuxt3模版示例

## 依赖

- Typescript
- 状态管理 `pinia` + `pinia-plugin-persistedstate`持久化
- 样式库 `tailwindcss`
- 工具库 `es-toolkit` `vueuse`
- 代码风格 `eslint` `@antfu/eslint-config`
- 动画 `lottie-web`
- UI库 `shadcn`
- 视频播放器 `DPlayer`
- GZIP压缩 `vite-plugin-compression2`

## 全局状态管理pinia

`stores/user.store.ts`

示例使用setup语法. 持久化插件,默认使用cookie,不然服务端使用token认证会出问题.

## api封装

`composables/useHttp.ts`

简单封装fetch,使用拦截器请求添加token认证,错误拦截处理,使用hook方式导出
