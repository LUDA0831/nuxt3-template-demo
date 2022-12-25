<template>
  <span class="arco-input-wrapper">
    <FlatPick v-model="date" class="arco-input arco-input-size-medium" :config="config" />
  </span>
</template>

<script lang="tsx" setup>
import '@arco-design/web-vue/es/input/style/css'
import type { Ref } from 'vue'
import FlatPick from 'vue-flatpickr-component'
import { Mandarin } from 'flatpickr/dist/l10n/zh.js'
import 'flatpickr/dist/flatpickr.css'
import type { BaseOptions } from 'flatpickr/dist/types/options'
const props = defineProps<{
  modelValue: string
  config?: Partial<BaseOptions>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const config: Ref<Partial<BaseOptions>> = ref({
  ...{
    locale: Mandarin, // locale for this instance only
  },
  ...props.config && props.config,
})

const date = useVModel(props, 'modelValue', emit)
</script>

<style scoped>

</style>
