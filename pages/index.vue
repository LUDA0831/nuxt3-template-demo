<script lang="ts" setup>
import { useDayjs } from '#dayjs'
import { SwiperAutoplay } from '#imports'
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '首页',
})
const dayjs = useDayjs()

function onShowEnv() {
  const config = useRuntimeConfig()
  Message.info(JSON.stringify(config.public))
}
</script>

<template>
  <div>
    <Swiper :modules="[SwiperAutoplay]" autoplay loop>
      <SwiperSlide>
        <div h-400px w-full flex-center bg-amber>
          1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div h-400px w-full flex-center bg-red>
          2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div h-400px w-full flex-center bg-blue>
          3
        </div>
      </SwiperSlide>
    </Swiper>
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
