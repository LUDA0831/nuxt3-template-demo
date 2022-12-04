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

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'

useHead({
  title: 'vueuse示例',
})

const onShowEnv = () => {
  const config = useRuntimeConfig()
  Message.info(JSON.stringify(config.public))
}
</script>

<script lang="ts">
export default { name: 'Index' }
</script>

<style scoped>

</style>
