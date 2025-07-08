<script lang="ts" setup>
const { url } = defineProps<{
  elId?: string
  url: string
}>()
const emit = defineEmits<{
  (e: 'playing'): void
  (e: 'pause'): void
  (e: 'abort'): void
  (e: 'canplay'): void
}>()
const playerRef = shallowRef()
const dp = ref()
const { $player } = useNuxtApp()
onMounted(async () => {
  await nextTick()
  dp.value = new $player({
    container: playerRef.value,
    video: {
      url,
    },
  })
  addEvent()
})
/**
 * 添加视频事件
 */
function addEvent() {
  // 点击播放事件
  dp.value.on('playing', () => emit('playing'))
  // 暂停事件
  dp.value.on('pause', () => emit('pause'))
  // 视频关闭事件
  dp.value.on('abort', () => emit('abort'))
  // 视频准备完毕事件
  dp.value.on('canplay', () => emit('canplay'))
}

defineExpose({ dp })
</script>

<!-- https://dplayer.diygod.dev/zh/guide.html#special-thanks -->
<script lang="ts">
export default { name: 'Index' }
</script>

<template>
  <div>
    <div ref="playerRef" />
  </div>
</template>

<style scoped>

</style>
