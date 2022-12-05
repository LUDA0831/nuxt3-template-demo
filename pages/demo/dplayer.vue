<template>
  <div>
    <div class="text-2xl font-bold">
      dplayer
    </div>
    <DPlayer class="w-[500px]" :url="url" @canplay="onCanplay" @playing="onPlaying" @pause="onPause" />
    <DPlayer class="w-[500px]" :url="url" @canplay="onCanplay" @playing="onPlaying" @pause="onPause" />
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '播放视频',
})
const url: Ref<string> = ref('https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4')

const onCanplay = () => {
  Message.success('视频准备就绪')
}
const onPlaying = () => {
  Message.success('开始播放')
}
const onPause = () => {
  Message.success('暂停')
}
</script>

<script lang="ts">
export default { name: 'Dplayer' }
</script>

<style scoped>

</style>
