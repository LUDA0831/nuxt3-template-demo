<script lang="ts" setup>
const router = useRouter()
const navList = ref()

const routerList = router.getRoutes().map(item => ({ to: item.path, name: item.meta.title ?? item.name })).reverse()
navList.value = routerList
</script>

<template>
  <div class="mx-auto w-[1200px]">
    <div class="flex p-4 space-x-4">
      <nuxt-link v-for="nav in navList" :key="nav.name" :to="nav.to" class="hover:text-blue-500" active-class="text-blue-500" exact>
        {{ nav.name }}
      </nuxt-link>
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
