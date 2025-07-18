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
        <h3 id="split-about">About<span class="stroke ml-2">Me</span></h3>
      </div>
      <div class="about-container">
        <div class="about-image-wrapper">
          <div class="about-image-inner">
            <div class="about-image-layer">
              <NuxtImg
                fit="cover"
                src="/images/about-img.png"
                alt="Marwahal Hagai Excellent"
                class="about-image"
                height="500"
                format="webp"
                placeholder
              />
            </div>
          </div>
        </div>
        <div class="about-content-wrapper">
          <div
            class="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0"
          >
            <div class="title">
              <div class="text-lg font-semibold text-white">
                Marwahal Hagai Excellent
              </div>
              <div class="font-medium text-gray-500">Software Developer</div>
            </div>
            <div class="flex gap-2 text-white">
              <a
                target="_blank"
                href="https://github.com/excellent-hwg"
                class="socmed-icon"
              >
                <Iconify icon="line-md:github" class="text-3xl" />
              </a>
              <a href="mailto:hagaiexcellent3@gmail.com" class="socmed-icon">
                <Iconify icon="ic:outline-email" class="text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hagaiexcell/"
                class="socmed-icon"
              >
                <Iconify icon="mdi:linkedin" class="text-3xl" />
              </a>
            </div>
          </div>
          <div class="description">
            <div class="mb-5 text-3xl font-bold text-white">
              Passionate about technology and frontend craftsmanship.
            </div>
            <p class="text-white">
              I’m a frontend web and mobile developer who builds responsive,
              user-friendly apps with React.js, Next.js, Vue.js, Nuxt.js,
              Laravel, React Native, and Flutter. I enjoy turning ideas into
              clean, efficient solutions that improve user experience and
              performance. I pay close attention to detail, learn quickly, and
              like solving challenging problems. I’m passionate about writing
              clean, maintainable code and always look for ways to grow and help
              my team improve.
            </p>
          </div>

          <a
            href="pdf/myCv.pdf"
            rel="noopener"
            type="application/pdf"
            target="_blank"
          >
            <div class="btn-wrapper mt-5">
              <div class="btn about">
                <p>Download CV</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
