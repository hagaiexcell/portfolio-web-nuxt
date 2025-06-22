<script setup>
import { useGlobalStore } from "~/store/global";

const store = useGlobalStore();
const loaderState = computed(() => {
  return store.loader;
});

onMounted(() => {
  setTimeout(() => {
    store.loader = false;
  }, 1500);
});
</script>

<template>
  <div>
    <Splashscreen />

    <div :class="loaderState ? 'hidden' : ''">
      <header>
        <!-- <Navbar /> -->
      </header>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
