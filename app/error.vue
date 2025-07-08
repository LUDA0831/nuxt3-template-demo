<script lang="tsx" setup>
// tsx 写法示例
import { Button } from '#components'

const props = defineProps({
  error: Object,
})
function handleError() {
  console.error(props.error)
  clearError({ redirect: '/' })
}

function btnDom() {
  return (
    <Button class="w-120px" type="primary" onClick={() => handleError()}>
      返回首页
    </Button>
  )
}

function emptyDom() {
  const has404 = props.error?.statusCode === 404
  return (
    <div class="flex flex-col space-y-4">
      <div>{has404 ? '页面不存在' : '应用发生错误异常'}</div>
      {btnDom()}
    </div>
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
