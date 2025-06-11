<script setup>
import { useGlobalStore } from "~/store/global";

const _controller = useProject();
const store = useGlobalStore();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.showProject();
    }
  },
  { immediate: !store.loader },
);
</script>
<template>
  <section id="homeProjects">
    <div class="home-projects overlay container">
      <h3 id="split-project" class="section-title flex-nowrap">
        Pro<span class="stroke">jects</span>
      </h3>
      <div class="projects-container">
        <div v-for="index in 5" :key="index">
          <ProjectsCard :data-offset="20 * `${index}`" />
        </div>
      </div>
      <div class="h-80"></div>
    </div>
  </section>
</template>
