<script lang="ts" setup>
import LottieAnimation from '@/components/LottieAnimation/index.vue'

defineOptions({ name: 'DemoLottie' })
definePageMeta({
  title: 'Lottie动画示例',
})
const lottieRef = ref<InstanceType<typeof LottieAnimation>>()

const path = 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'
</script>

<template>
  <div mx-auto container>
    <div>lottie</div>
    <LottieAnimation ref="lottieRef" :path="path" :loop="true" class="mx-auto h-[500px] w-[500px]" />
  </div>
</template>

<style scoped>

</style>
