<template>
  <div>
    <div class="flex space-x-4">
      <button :class="{ 'text-blue-500': actionKey === 1 }" @click="onAction(1)">
        切换
      </button>
      <button :class="{ 'text-blue-500': actionKey === 2 }" @click="onAction(2)">
        切换
      </button>
    </div>
    <TransitionFade mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionFade
      </div>
      <div v-if="actionKey === 2">
        TransitionFade
      </div>
    </TransitionFade>
    <TransitionExpand mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionExpand
      </div>
      <div v-if="actionKey === 2">
        TransitionExpand
      </div>
    </TransitionExpand>
    <TransitionScale mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionScale
      </div>
      <div v-if="actionKey === 2">
        TransitionScale
      </div>
    </TransitionScale>
    <TransitionSlide mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionSlide
      </div>
      <div v-if="actionKey === 2">
        TransitionSlide
      </div>
    </TransitionSlide>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  keepalive: true,
})
const actionKey = ref(1)
const onAction = (key: number) => {
  actionKey.value = key
}
</script>

<script lang="ts">
export default { name: 'Transition' }
</script>

<style scoped>

</style>
