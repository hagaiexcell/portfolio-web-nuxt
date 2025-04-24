<script setup>
import { LottieAnimation } from "lottie-web-vue";
import assetsLottie from "@/assets/lottie/loader.json";
import { useGlobalStore } from "~/store/global";

const store = useGlobalStore();

const loaderState = computed(() => {
  return store.loader;
});
</script>

<template>
  <div :class="['loader', loaderState ? '' : 'hide']">
    <ClientOnly>
      <LottieAnimation
        :animation-data="assetsLottie"
        :auto-play="true"
        :loop="true"
        :speed="1"
        class="loader-anim"
      />
    </ClientOnly>
  </div>
</template>
