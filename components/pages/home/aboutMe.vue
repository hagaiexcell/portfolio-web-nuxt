<script setup>
import { useGlobalStore } from "~/store/global";

const _controller = useAbout();
const store = useGlobalStore();

watch(
  () => store.loader,
  (val) => {
    if (!val) {
      _controller.showAbout();
    }
  },
  { immediate: !store.loader },
);
</script>
<template>
  <section id="homeAbout">
    <div class="home-about overlay container">
      <div class="section-title">
        <h3 id="split-about">About<span class="stroke ml-5">Me</span></h3>
      </div>
      <div class="about-container">
        <div class="about-image-wrapper">
          <img src="/public/images/avt-card.webp" alt="" class="about-image" />
        </div>
        <div class="about-content-wrapper">
          <div
            class="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0"
          >
            <div class="title">
              <div class="text-lg font-semibold text-white">
                Marwahal Hagai Excellent
              </div>
              <div class="font-medium text-gray-500">Software Developer</div>
            </div>
            <div class="flex gap-2 text-white">
              <div class="socmed-icon">
                <Iconify icon="line-md:github" class="text-3xl" />
              </div>
              <div class="socmed-icon">
                <Iconify icon="ic:outline-email" class="text-3xl" />
              </div>
              <div class="socmed-icon">
                <Iconify icon="mdi:linkedin" class="text-3xl" />
              </div>
            </div>
          </div>
          <div class="description">
            <div class="mb-5 text-3xl font-bold text-white">
              Passionate about technology and frontend craftsmanship.
            </div>
            <p class="text-white">
              I'm a frontend web and mobile developer focused on building
              responsive, user-friendly applications using technologies like
              React.js, Next.js, Vue.js, Nuxt.js, Laravel, React Native, and
              Flutter. I enjoy turning ideas into clean, efficient, and scalable
              solutions that enhance user experience and performance. With
              strong attention to detail and a fast learning curve, I thrive on
              learning, leading, and solving complex challenges—always
              reflecting on how each experience contributes to both personal and
              team growth. I'm passionate about writing clean, maintainable code
              and continuously pushing myself to grow as a developer.
            </p>
          </div>

          <div class="btn-wrapper mt-5">
            <div class="btn about">
              <p>Download CV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
