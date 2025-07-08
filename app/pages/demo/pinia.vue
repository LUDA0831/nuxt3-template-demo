<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user.store'

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
  <div class="container mx-auto">
    <h2 class="my-2 font-bold">
      pinia
    </h2>
    <div class="space-y-2">
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
    </div>
    <Button class="mt-6" @click="addCount">
      增加
    </Button>
  </div>
</template>

<style scoped>

</style>
