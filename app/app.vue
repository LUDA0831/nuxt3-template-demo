<script lang="ts" setup>
import 'vue-sonner/style.css'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
    <Toaster position="top-center" class="pointer-events-auto" />
  </NuxtLayout>
</template>
