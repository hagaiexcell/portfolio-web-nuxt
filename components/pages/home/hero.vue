<script setup>
import { useGlobalStore } from "~/store/global";

const _controller = useHero();
const store = useGlobalStore();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.showHero();
    }
  },
  { immediate: !store.loader },
);
</script>

<template>
  <section id="homeHero">
    <div class="home-hero">
      <video
        class="hero-video"
        autoplay
        loop
        muted
        playsinline
        src="/videos/bg-video.mp4"
        type="video/webm"
        preload="metadata"
      ></video>

      <div class="hero-text-wrapper">
        <div class="hero-subdesc-wrapper hero-content-text">
          <h3 class="hero-subdesc-text">Hey, there</h3>
          <img
            class="ic-wave"
            width="40"
            src="/public/icons/ic-handwave.svg"
            alt=""
          />
        </div>
        <div class="hero-title-wrapper overflow-hidden">
          <h1 class="hero-title-text">
            <div class="relative inline-block">
              <span class="box" />
              <span class="static mr-2">I'm </span>
            </div>
            <span class="text" />
            <span class="cursor">|</span>
          </h1>
        </div>
        <div class="hero-desc-wrapper">
          <h2 class="hero-desc-text">
            currently focused on building user experiences that drive growth.
          </h2>
        </div>

        <a href="#contactForm">
          <div class="btn-wrapper">
            <div class="btn hero opacity-0">
              <p>CONTACT ME</p>
            </div>
          </div>
        </a>

        <div class="scroll-down">
          <div class="pointer-wrapper">
            <div class="pointer"></div>
          </div>
          <div class="text-xs text-white">Scroll Down</div>
        </div>
      </div>
    </div>
  </section>
</template>
