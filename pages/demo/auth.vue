<script lang="ts" setup>
defineOptions({ name: 'DemoAuth' })
definePageMeta({
  middleware: 'auth',
  title: '中间件认证示例',
})
</script>

<template>
  <div mx-auto container>
    auth
  </div>
</template>

<style scoped>

</style>
