<script setup>
import { useGlobalStore } from "~/store/global";

const _controller = useContactMe();
const store = useGlobalStore();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.initContactMe();
    }
  },
  { immediate: !store.loader },
);
</script>

<template>
  <section id="contactMe">
    <div class="contact-me overlay container overflow-y-hidden">
      <div
        class="section-title paralax-wrapper !text-6xl !leading-normal md:!text-8xl md:!leading-none lg:!text-[10rem]"
      >
        <h3 id="split-contact">
          <span class="stroke">Let's</span> create <br />
          great things
          <span class="stroke"> together</span>
        </h3>
      </div>
    </div>
  </section>
</template>
