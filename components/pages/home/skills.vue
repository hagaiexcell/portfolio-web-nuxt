<script setup>
import { useGlobalStore } from "~/store/global";

const _controller = useSkills();
const store = useGlobalStore();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.showSkills();
    }
  },
  { immediate: !store.loader },
);
</script>
<template>
  <section id="homeSkills">
    <div class="home-skills overlay container">
      <div class="section-title">
        <h3 id="split-tech">Tech<span class="stroke">Stacks</span></h3>
      </div>
      <div id="skillsContainer" class="skills-container">
        <div id="skillsContent" class="flex gap-8">
          <template v-for="repeat in 2">
            <div
              v-for="index in 12"
              :key="`${repeat}-${index}`"
              class="skill-box group"
            >
              <div class="box">
                <div class="relative">
                  <NuxtImg src="/icons/ic-tailwind.png" alt="" />
                  <div class="gradient-primary" />
                </div>
                <div class="skill-title">TAILWIND CSS</div>
              </div>
              <div class="square">
                <span class="left-side" />
                <span class="top-side" />
                <span class="right-side" />
                <span class="bottom-side" />
              </div>
            </div>
          </template>
        </div>
        <div id="skillsContent2" class="flex gap-8">
          <template v-for="repeat in 2">
            <div
              v-for="index in 12"
              :key="`${repeat}-${index}`"
              class="skill-box group"
            >
              <div class="box">
                <div class="relative">
                  <NuxtImg src="/icons/ic-tailwind.png" alt="" />
                  <div class="gradient-primary" />
                </div>
                <div class="skill-title">TAILWIND CSS</div>
              </div>
              <div class="square">
                <span class="left-side" />
                <span class="top-side" />
                <span class="right-side" />
                <span class="bottom-side" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
