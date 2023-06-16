<script lang="ts" setup>
import { Message, Notification } from '@arco-design/web-vue'
import type { Ref } from 'vue'

definePageMeta({
  title: 'ARCO示例',
})

defineOptions({ name: 'DemoArco' })

const date = ref('2022-12-12')
const modalVisible: Ref<boolean> = ref(false)
function onModal() {
  modalVisible.value = true
}
function modalHandleOk() {
  modalVisible.value = false
}
function modalHandleCancel() {
  modalVisible.value = false
}

const drawerVisible: Ref<boolean> = ref(false)
function onDrawer() {
  drawerVisible.value = true
}
function drawerHandleOk() {
  drawerVisible.value = false
}
function drawerHandleCancel() {
  drawerVisible.value = false
}
function onNotification() {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
  })
}
function onMessage() {
  Message.success('成功消息')
}
</script>

<template>
  <div>
    <div class="text-2xl font-bold">
      Arco UI
    </div>
    <a-space direction="vertical">
      <a-space>
        <a-button type="primary">
          按钮示例
        </a-button>
        <a-button @click="onNotification">
          Notification通知示例
        </a-button>
        <a-button type="dashed" @click="onMessage">
          message消息示例
        </a-button>
        <a-button type="outline" @click="onDrawer">
          抽屉示例
        </a-button>
        <a-button type="text" @click="onModal">
          模态框示例
        </a-button>
      </a-space>
      <a-space direction="vertical">
        <a-alert type="warning">
          ArcoUI组件库日期选择组件在nuxt3里面报错,目前无法解决.使用第三方替代
        </a-alert>
        <DatePick v-model="date" />
      </a-space>
    </a-space>
    <a-drawer :width="340" :visible="drawerVisible" unmount-on-close @ok="drawerHandleOk" @cancel="drawerHandleCancel">
      <template #title>
        Title
      </template>
      <div>
        You can cusstomize modal body text by the current situation. This modal will be closed immediately once you
        press the OK button.
      </div>
    </a-drawer>
    <a-modal v-model:visible="modalVisible" draggable @ok="modalHandleOk" @cancel="modalHandleCancel">
      <template #title>
        Title
      </template>
      <div>You can cusstomize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
    </a-modal>
  </div>
</template>

<style scoped>

</style>
