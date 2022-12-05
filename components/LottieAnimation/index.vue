<template>
  <div ref="animationRef" />
</template>

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

const init = (container: Element) => {
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
const destroy = (): void => {
  if (anim.value)
    anim.value.destroy()
}

const play = (): void => {
  if (anim.value)
    anim.value.play()
}
const stop = () => {
  if (anim.value)
    anim.value.stop()
}
const pause = () => {
  if (anim.value)
    anim.value.pause()
}
const setSpeed = (speed: number) => {
  if (anim.value)
    anim.value.setSpeed(speed)
}
const setDirection = (direction: AnimationDirection) => {
  if (anim.value)
    anim.value.setDirection(direction)
}
const getDuration = (inFrames: boolean) => {
  if (anim.value)
    return anim.value.getDuration(inFrames)
  return 0
}
const goToAndStop = (position: number, isFrame: boolean): void => {
  if (anim.value) {
    anim.value.goToAndStop(position, isFrame)
    emit('stopped')
  }
}
const goToAndPlay = (position: number, isFrame: boolean): void => {
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

<style scoped>

</style>
