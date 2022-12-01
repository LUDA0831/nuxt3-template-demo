<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage :key="key" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import '@arco-design/web-vue/es/message/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'
const { key } = useFixApp()
</script>
