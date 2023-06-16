<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  title: '中间件认证示例',
})
defineOptions({ name: 'DemoAuth' })
</script>

<template>
  <div>
    auth
  </div>
</template>

<style scoped>

</style>
