<template>
  <div>
    <div class="text-2xl font-bold">
      Arco UI
    </div>
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

<script lang="ts" setup>
import { Message, Notification } from '@arco-design/web-vue'
import type { Ref } from 'vue'

const modalVisible: Ref<boolean> = ref(false)
const onModal = () => {
  modalVisible.value = true
}
const modalHandleOk = () => {
  modalVisible.value = false
}
const modalHandleCancel = () => {
  modalVisible.value = false
}

const drawerVisible: Ref<boolean> = ref(false)
const onDrawer = () => {
  drawerVisible.value = true
}
const drawerHandleOk = () => {
  drawerVisible.value = false
}
const drawerHandleCancel = () => {
  drawerVisible.value = false
}
const onNotification = () => {
  Notification.info({
    title: 'Notification',
    content: 'This is a notification!',
  })
}
const onMessage = () => {
  Message.success('成功消息')
}
</script>

<script lang="ts">
export default { name: 'Arco' }
</script>

<style scoped>

</style>
