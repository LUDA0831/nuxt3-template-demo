<script lang="tsx" setup>
// tsx 写法示例

const props = defineProps({
  error: Object,
})
function handleError() {
  console.error(props.error)
  clearError({ redirect: '/' })
}

function btnDom() {
  return (
    <a-button w-120px type="primary" onClick={() => handleError()}>
      返回首页
    </a-button>
  )
}

function emptyDom() {
  const has404 = props.error?.statusCode === 404
  return (
    <a-empty>
      <a-space direction="vertical" fill>
        {has404 ? '页面不存在' : '应用发生错误异常'}
        {btnDom()}
      </a-space>
    </a-empty>
  )
}
function Render() {
  return (<div class="h-screen w-screen flex items-center justify-center">{emptyDom()}</div>)
}
</script>

<template>
  <Render />
</template>

<style scoped>

</style>
