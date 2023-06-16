<script lang="ts" setup>
definePageMeta({
  title: '组件切换动画',
})
defineOptions({ name: 'DemoTransition' })

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

function shuffle() {
  items.value = useShuffle(items.value)
}

function remove(item: number) {
  const i = items.value.indexOf(item)
  if (i > -1)
    items.value.splice(i, 1)
}
</script>

<template>
  <div>
    <div class="flex space-x-4">
      <a-button type="primary" @click="onAction">
        切换
      </a-button>
    </div>
    <Transition name="fade" mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionFade
      </div>
      <div v-else>
        TransitionFade
      </div>
    </Transition>
    <Transition name="slide-left" mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionSlideLeft
      </div>
      <div v-else>
        TransitionSlideLeft
      </div>
    </Transition>
    <Transition name="slide-right" mode="out-in" appear>
      <div v-if="actionKey === 1">
        TransitionSlideRight
      </div>
      <div v-else>
        TransitionSlideRight
      </div>
    </Transition>
    <a-space class="mt-[20px]">
      <a-button type="primary" @click="insert">
        插入
      </a-button>
      <a-button type="primary" @click="reset">
        重置
      </a-button>
      <a-button type="primary" @click="shuffle">
        打乱
      </a-button>
    </a-space>

    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="item in items" :key="item" class="item">
        {{ item }}
        <button @click="remove(item)">
          x
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

</style>
