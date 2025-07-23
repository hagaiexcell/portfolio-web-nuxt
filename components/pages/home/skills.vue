<script setup>
import { useGlobalStore } from "~/store/global";
import skillsData from "assets/data/skills-data.json";

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
      <div class="section-title flex-nowrap">
        <h3 id="split-tech">
          Tech <br class="block md:hidden" />
          Stacks
        </h3>
      </div>
      <div id="skillsContainer" class="skills-container">
        <div id="skillsContent" class="flex gap-8">
          <template v-for="repeat in 2">
            <div
              v-for="(skill, index) in skillsData"
              :key="`${repeat}-${skill.title}-${index}`"
              class="skill-box group"
            >
              <div class="box">
                <div class="relative">
                  <NuxtImg
                    :src="skill.image"
                    :alt="skill.title"
                    placeholder
                    background="transparent"
                    format="webp"
                    height="50"
                    width="50"
                    fit="contain"
                  />
                  <div class="gradient-primary" />
                </div>
                <div class="skill-title">{{ skill.title }}</div>
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
              v-for="(skill, index) in skillsData"
              :key="`${repeat}-${skill.title}-${index}`"
              class="skill-box group"
            >
              <div class="box">
                <div class="relative">
                  <NuxtImg
                    :src="skill.image"
                    :alt="skill.title"
                    placeholder
                    background="transparent"
                    height="50"
                    width="50"
                    fit="contain"
                  />
                  <div class="gradient-primary" />
                </div>
                <div class="skill-title">{{ skill.title }}</div>
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
