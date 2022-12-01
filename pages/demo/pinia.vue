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

const userStore = useUserStore()
const getUserInfo = userStore.getUserInfo
</script>

<script lang="ts">
export default { name: 'Pinia' }
</script>

<style scoped>

</style>
