<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user.store'

defineOptions({ name: 'DemoPinia' })
definePageMeta({
  title: 'Pinia全局状态',
})
const userStore = useUserStore()
const getUserInfo = userStore.getUserInfo
const count = computed(() => userStore.getCount)
const { getCount } = storeToRefs(userStore)
function addCount() {
  userStore.addCount()
}
</script>

<template>
  <div>
    pinia
    <div>
      {{ userStore.userInfo }}
    </div>
    <div>
      {{ getUserInfo }}
    </div>
    <div>userStore.count---{{ userStore.count }}</div>
    <div>count---{{ count }}</div>
    <div>useUserStore.getCount---{{ userStore.getCount }}</div>
    <div>getCount---{{ getCount }}</div>
    <a-button @click="addCount">
      增加
    </a-button>
  </div>
</template>

<style scoped>

</style>
