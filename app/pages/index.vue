<script lang="ts" setup>
import type Swiper from 'swiper'
import type { SwiperContainer } from 'swiper/element'

definePageMeta({
  title: '首页',
})
const dayjs = useDayjs()

function onShowEnv() {
  const config = useRuntimeConfig()
  toast.info(JSON.stringify(config.public))
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
          <div class="flex-center flex h-[400px] w-full items-center justify-center bg-pink-500">
            1
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex-center flex h-[400px] w-full items-center justify-center bg-red-500">
            2
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="flex-center flex h-[400px] w-full items-center justify-center bg-blue-500">
            3
          </div>
        </swiper-slide>
      </swiper-container>
    </client-only>
    <div class="mt-2 flex-center space-x-4">
      <Button @click="() => swiperIns.prev()">
        上一张
      </Button>
      <Button @click="handleSlideNext">
        下一张
      </Button>
    </div>
    <div class="mx-auto flex w-[1200px] flex-col space-y-4">
      <div class="text-2xl font-bold">
        dayjs自动导入: {{ dayjs().format('YYYY-MM-DD HH:mm') }}
      </div>
      <div class="flex items-center space-x-4">
        <span>图标自动导入:</span>
        <IMdiUser class="text-4xl text-red-500" />
        <IMdiGithub class="animate-spin text-4xl" />
      </div>
      <Button class="w-[80px]" @click="onShowEnv">
        env
      </Button>
    </div>
  </div>
</template>

<style scoped>

</style>
