<script lang="tsx" setup>
const props = defineProps({
  error: Object,
})
function handleError() {
  console.error(props.error)
  clearError({ redirect: '/' })
}

function btnDom() {
  return <a-button class="w-[120px]" type="primary" onClick={() => handleError()}>
      返回首页
      </a-button>
}

function emptyDom() {
  const has404 = props.error?.statusCode === 404
  return <a-empty><a-space direction="vertical" fill>{has404 ? '页面不存在' : '应用发生错误异常'}{btnDom()}</a-space></a-empty>
}
function Render() {
  return (<div class=" flex h-screen w-screen items-center justify-center">{emptyDom()}</div>)
}
</script>

<template>
  <Render />
</template>

<style scoped>

</style>
