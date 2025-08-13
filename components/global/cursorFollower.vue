<script setup>
import { useGlobalStore } from "~/store/global";

const store = useGlobalStore();
const _controller = useCursor();

onMounted(() => {
  const isDesktop = window.matchMedia("(pointer: fine)").matches;

  watch(
    () => store.loader,
    (val) => {
      if (!val && isDesktop) {
        _controller.initCursorFollower();
      }
    },
    { immediate: !store.loader },
  );
});
</script>

<template>
  <div class="cursor-follower" />
</template>
