<template>
  <div class="mx-auto w-[1200px]">
    <div class="flex space-x-4  p-4">
      <nuxt-link v-for="nav in navList" :key="nav.name" :to="nav.to" class="hover:text-blue-500" active-class="text-blue-500" exact>
        {{ nav.name }}
      </nuxt-link>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const navList = ref()

const routerList = router.getRoutes().map(item => ({ to: item.path, name: item.meta.title ?? item.name })).reverse()
navList.value = routerList
</script>

<script lang="ts">
export default { name: 'Default' }
</script>

<style scoped>

</style>
