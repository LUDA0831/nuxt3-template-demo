<script lang="ts" setup>
import type { Ref } from 'vue'
import { Message } from '@arco-design/web-vue'

defineOptions({ name: 'DemoDplayer' })
definePageMeta({
  title: '播放视频',
})
const url: Ref<string> = ref('https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4')

function onCanplay() {
  Message.success('视频准备就绪')
}
function onPlaying() {
  Message.success('开始播放')
}
function onPause() {
  Message.success('暂停')
}
</script>

<template>
  <div mx-auto container>
    <div class="text-2xl font-bold">
      dplayer
    </div>
    <DPlayer class="w-[500px]" :url="url" @canplay="onCanplay" @playing="onPlaying" @pause="onPause" />
    <DPlayer class="w-[500px]" :url="url" @canplay="onCanplay" @playing="onPlaying" @pause="onPause" />
  </div>
</template>

<style scoped>

</style>
