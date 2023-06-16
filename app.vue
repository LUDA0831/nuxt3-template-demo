<script lang="ts" setup>
import '@arco-design/web-vue/es/message/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'

const { key } = useFixApp()

useHead({
  meta: [
    { name: 'description', content: '我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.我的神奇网站.' },
    { name: 'keywords', content: 'keywords.keywords.keywords.keywords.keywords.keywords.' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :key="key" />
  </NuxtLayout>
</template>
