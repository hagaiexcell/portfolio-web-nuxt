<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    image: string;
    description?: string;
    subtitle?: string;
    techstack: string[];
  };
}>();
</script>

<template>
  <div class="project-card">
    <div class="project-card-overlay"></div>
    <div class="project-card-inner">
      <div class="project-card-img">
        <NuxtImg
          :src="`/images/${project.image}`"
          :alt="project.title"
          placeholder
          format="webp"
        />
      </div>
    </div>
    <div class="project-card-content">
      <div class="project-card-title">
        {{ project.title }}
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(techStack, index) in project.techstack"
          :key="index"
          class="badge"
        >
          {{ techStack }}
        </div>
      </div>
      <div class="project-card-desc">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>
