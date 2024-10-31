# Nuxt3模版示例

## 依赖

- Typescript
- 状态管理 `pinia` + `pinia-plugin-persistedstate`持久化
- 样式库 `unocss`
- 工具库 `lodash` `vueuse`
- 代码风格 `eslint` `@antfu/eslint-config`
- 动画 `lottie-web`
- UI库 arco `@arco-design/web-vue` + 自动引入 `unplugin-vue-components`
- 视频播放器 `DPlayer`
- GZIP压缩 `vite-plugin-compression`

## 全局状态管理pinia

`stores/user.store.ts`

示例使用setup语法. 持久化插件,默认使用cookie,不然服务端使用token认证会出问题.

## api封装

`composables/useHttp.ts`

简单封装fetch,使用拦截器请求添加token认证,错误拦截处理,使用hook方式导出

⚠️nuxt3.10之后直接使用useFetch封装会出现警告,建议使用$fetch封装,useFetch和useAsyncData只在setup顶层使用.
`[nuxt] [useFetch] Component is already mounted, please use $fetch instead. See https://nuxt.com/docs/getting-started/data-fetching`

## ArcoUI库按需导入

注意：这种方法并不会处理用户在 script 中手动导入的组件，比如 Message 组件，用户仍需要手动导入组件对应的样式文件，例如 @arco-design/web-vue/es/message/style/css.js

手动导入的组件在app.vue里导入样式,已导入`message` `notification`

## 已知问题

- ~~设置页面切换动画之后,页面之间快速点击跳转页面报错,~~在app.vue里使用`composables/useFixApp.ts`hook临时修复,~~ 在plugins/router.ts修复~~3.10之后测试已经修复,删除plugins/router.ts
- ~~⚠️ ArcoUI组件库日期选择组件在nuxt3里面报错,目前无法解决.~~
- ~~示例里添加第三方日期选择组件临时替代~~
