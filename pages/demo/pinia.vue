<template>
  <div>
    pinia
    <div>
      {{ userStore.userInfo }}
    </div>
    <div>
      {{ getUserInfo() }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/stores/user.store'

definePageMeta({
  title: 'Pinia全局状态',
})
const userStore = useUserStore()
const getUserInfo = userStore.getUserInfo
</script>

<script lang="ts">
export default { name: 'Pinia' }
</script>

<style scoped>

</style>
