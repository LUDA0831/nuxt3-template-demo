<template>
  <div>
    auth
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})
</script>

<script lang="ts">
export default { name: 'Auth' }
</script>

<style scoped>

</style>
