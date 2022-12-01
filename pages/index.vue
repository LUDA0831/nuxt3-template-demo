<template>
  <div>
    <div class="text-2xl font-bold">
      index
    </div>
    <a-button type="primary" @click="onClone">
      lodash 使用
    </a-button>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'vueuse示例',
})
const base = reactive({
  a: 123,
  b: 321,
})
const onClone = () => {
  const clone = useCloneDeep(base)
  clone.b = 666
}
</script>

<script lang="ts">
export default { name: 'Index' }
</script>

<style scoped>

</style>
