<script lang="ts" setup>
definePageMeta({
  title: 'Lottie动画示例',
})

const path = 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'
</script>

<template>
  <div class="container mx-auto">
    <div class="mx-auto h-[500px] w-[500px]">
      <Lottie :link="path" />
    </div>
  </div>
</template>

<style scoped>

</style>
