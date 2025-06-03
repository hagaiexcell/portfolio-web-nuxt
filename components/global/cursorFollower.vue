<script setup>
const _controller = useCursor();
onMounted(() => {
  clg("Cursor Follower Component Mounted");
  _controller.initCursorFollower();
});
</script>

<template>
  <div class="cursor-follower" />
</template>
