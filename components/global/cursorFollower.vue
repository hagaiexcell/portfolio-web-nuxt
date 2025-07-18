<script setup>
import { useGlobalStore } from "~/store/global";

const store = useGlobalStore();
const _controller = useCursor();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.initCursorFollower();
    }
  },
  { immediate: !store.loader },
);
</script>

<template>
  <div class="cursor-follower" />
</template>
