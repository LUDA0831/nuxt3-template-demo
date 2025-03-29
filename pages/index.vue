<script lang="ts" setup>
import type { SwiperContainer } from 'swiper/element'
import type { Swiper } from 'swiper/types'
import { useDayjs } from '#dayjs'
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '首页',
})
const dayjs = useDayjs()

function onShowEnv() {
  const config = useRuntimeConfig()
  Message.info(JSON.stringify(config.public))
}
const swiperRef = ref<Nullable<SwiperContainer>>(null)
const swiperIns = useSwiper(swiperRef, {
  on: {
    slideChange: handleSwiperChange,
  },
})

function handleSwiperChange(swiper: Swiper) {
  console.warn(swiper.realIndex)
}
function handleSlideNext() {
  swiperIns.next()
}
</script>

<template>
  <div>
    <client-only>
      <swiper-container ref="swiperRef" :autoplay="true" :loop="true" :init="false">
        <swiper-slide>
          <div h-400px w-full flex-center bg-amber>
            1
          </div>
        </swiper-slide>
        <swiper-slide>
          <div h-400px w-full flex-center bg-red>
            2
          </div>
        </swiper-slide>
        <swiper-slide>
          <div h-400px w-full flex-center bg-blue>
            3
          </div>
        </swiper-slide>
      </swiper-container>
    </client-only>
    <div mt-2 flex-center space-x-4>
      <a-button type="primary" @click="() => swiperIns.prev()">
        上一张
      </a-button>
      <a-button type="primary" @click="handleSlideNext">
        下一张
      </a-button>
    </div>
    <div mx-auto w-1200px flex flex-col space-y-4>
      <div class="text-2xl font-bold">
        index {{ dayjs().format('YYYY-MM-DD HH:mm') }}
      </div>
      <div flex space-x-4>
        <div i-mdi-user text-4xl text-red />
        <div i-mdi-github animate-spin text-36px />
      </div>
      <a-button type="primary" w-80px @click="onShowEnv">
        env
      </a-button>
    </div>
  </div>
</template>

<style scoped>

</style>
