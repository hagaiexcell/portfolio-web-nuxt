<script setup>
const _controller = useCursor();
onMounted(() => {
  _controller.initCursorFollower();
});
</script>

<template>
  <div class="cursor-follower" />
</template>
