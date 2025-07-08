<script lang="ts" setup>
import { shuffle } from 'es-toolkit'

definePageMeta({
  title: '组件切换动画',
})
const actionKey = ref(1)
function onAction() {
  actionKey.value = actionKey.value === 1 ? 2 : 1
}

const getInitialItems = (): number[] => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}

function handleShuffle() {
  items.value = shuffle(items.value)
}

function remove(item: number) {
  const i = items.value.indexOf(item)
  if (i > -1)
    items.value.splice(i, 1)
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-4 flex space-x-4">
      <Button type="primary" @click="onAction">
        切换
      </Button>
    </div>
    <div class="mb-2 flex h-8 items-center">
      <Transition name="fade" mode="out-in" appear>
        <div v-if="actionKey === 1">
          TransitionFade
        </div>
        <div v-else>
          TransitionFade
        </div>
      </Transition>
    </div>
    <Separator />
    <div class="my-4 flex h-6 items-center space-x-4">
      <Button type="primary" @click="insert">
        插入
      </Button>
      <Separator orientation="vertical" />
      <Button type="primary" @click="reset">
        重置
      </Button>
      <Separator orientation="vertical" />
      <Button type="primary" @click="handleShuffle">
        打乱
      </Button>
    </div>

    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="item in items" :key="item" class="item">
        {{ item }}
        <Button variant="link" @click="remove(item)">
          x
        </Button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

</style>
