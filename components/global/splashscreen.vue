<script setup>
import { useGlobalStore } from "~/store/global";

const store = useGlobalStore();

const loaderState = computed(() => {
  return store.loader;
});

const _controller = useSplashScreen();

onMounted(() => {
  _controller.hide();
  global.loader = false;
});
</script>

<template>
  <div :class="['loader', loaderState ? '' : 'hide']">
    <div class="splash-wrapper">
      <div class="splash-container" />
      <div class="splash-container-2" />
    </div>
  </div>
</template>

<style scoped>
.splash-wrapper {
  @apply relative h-screen w-screen;
}
.splash-container {
  @apply absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-primary;
}
.splash-container-2 {
  @apply absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-secondary;
}
</style>
