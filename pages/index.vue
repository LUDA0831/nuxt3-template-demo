<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

definePageMeta({
  title: '首页',
})

function onShowEnv() {
  const config = useRuntimeConfig()
  Message.info(JSON.stringify(config.public))
}
</script>

<template>
  <div flex flex-col space-y-4>
    <div class="text-2xl font-bold">
      index
    </div>
    <div flex space-x-4>
      <div i-mdi-user text-4xl text-red />
      <div i-mdi-github animate-spin text-36px />
    </div>
    <a-button type="primary" w-80px @click="onShowEnv">
      env
    </a-button>
  </div>
</template>

<style scoped>

</style>
