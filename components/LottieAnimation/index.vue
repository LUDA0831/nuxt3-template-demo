<script lang="ts" setup>
import type { AnimationDirection, AnimationItem } from 'lottie-web'
import Lottie from 'lottie-web'

const props = defineProps({
  animationData: { type: Object, default: () => ({}) },
  path: { type: String, default: '' },
  loop: { type: [Number, Boolean], default: false },
  autoPlay: { type: Boolean, default: true },
  speed: { type: Number, default: 1 },
  assetsPath: { type: String },
})

const emit = defineEmits<{
  (e: 'complete'): void
  (e: 'loopComplete'): void
  (e: 'enterFrame'): void
  (e: 'segmentStart'): void
  (e: 'stopped'): void
}>()
const animationRef = shallowRef<Element>()
const anim = ref<AnimationItem>()

function init(container: Element) {
  const animationData = props?.animationData && JSON.parse(JSON.stringify(props.animationData))
  const path = props?.path
  if (!animationData && !path)
    throw new Error('path或animationData必须有一项不为空')

  anim.value = Lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoPlay,
    ...path ? { path } : { animationData },
    ...props.assetsPath && { assetsPath: props.assetsPath },
  })
  anim.value.setSpeed(props.speed)
  anim.value.addEventListener('loopComplete', () => {
    emit('loopComplete')
  })
  anim.value.addEventListener('complete', () => {
    emit('complete')
  })
  anim.value.addEventListener('enterFrame', () => {
    emit('enterFrame')
  })
  anim.value.addEventListener('segmentStart', () => {
    emit('segmentStart')
  })
}
function destroy(): void {
  if (anim.value)
    anim.value.destroy()
}

function play(): void {
  if (anim.value)
    anim.value.play()
}
function stop() {
  if (anim.value)
    anim.value.stop()
}
function pause() {
  if (anim.value)
    anim.value.pause()
}
function setSpeed(speed: number) {
  if (anim.value)
    anim.value.setSpeed(speed)
}
function setDirection(direction: AnimationDirection) {
  if (anim.value)
    anim.value.setDirection(direction)
}
function getDuration(inFrames: boolean) {
  if (anim.value)
    return anim.value.getDuration(inFrames)
  return 0
}
function goToAndStop(position: number, isFrame: boolean): void {
  if (anim.value) {
    anim.value.goToAndStop(position, isFrame)
    emit('stopped')
  }
}
function goToAndPlay(position: number, isFrame: boolean): void {
  if (anim.value)
    anim.value.goToAndPlay(position, isFrame)
}
onMounted(() => {
  if (animationRef.value)
    init(animationRef.value)
})

onBeforeUnmount(() => {
  destroy()
})
defineExpose({
  play,
  pause,
  stop,
  setSpeed,
  setDirection,
  getDuration,
  goToAndStop,
  goToAndPlay,
  destroy,
})
</script>

<template>
  <div ref="animationRef" />
</template>

<style scoped>

</style>
