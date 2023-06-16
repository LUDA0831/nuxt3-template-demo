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
  <div>
    <div class="text-2xl font-bold">
      index
    </div>
    <a-button type="primary" @click="onShowEnv">
      env
    </a-button>
  </div>
</template>

<style scoped>

</style>
