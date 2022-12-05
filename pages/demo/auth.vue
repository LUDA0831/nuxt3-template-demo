<template>
  <div>
    auth
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  title: '中间件认证示例',
})
</script>

<script lang="ts">
export default { name: 'Auth' }
</script>

<style scoped>

</style>
