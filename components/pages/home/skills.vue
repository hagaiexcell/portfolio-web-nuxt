<script setup></script>
<template>
  <section id="homeSkills">
    <div class="home-skills container">
      <h3 class="section-title">Tech Stacks</h3>
      <div class="skills-wrapper">
        <div v-for="index in 12" :key="index" class="skill-box group">
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
      </div>
    </div>
  </section>
</template>
