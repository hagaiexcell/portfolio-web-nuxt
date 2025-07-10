<script setup>
import { useGlobalStore } from "~/store/global";
import projectData from "assets/data/project-data.json";

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
      <div class="section-title flex-nowrap">
        <h3 id="split-project">Projects</h3>
      </div>
      <div class="projects-container">
        <div v-for="(project, index) in projectData" :key="index">
          <ProjectsCard :project="project" :data-offset="20 * `${index}`" />
        </div>
      </div>
    </div>
  </section>
</template>
