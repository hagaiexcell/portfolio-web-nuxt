// https://nuxt.com/docs/api/configuration/nuxt-config
import compression from "vite-plugin-compression";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css", "@/assets/css/lenis.css"],
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "@hypernym/nuxt-gsap",
    "@nuxtjs/eslint-module",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "storeToRefs",
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    "@nuxt/fonts",
  ],
  vite: {
    plugins: [
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
      }),
      compression({
        algorithm: "gzip",
        ext: ".gz",
      }),
    ],
  },
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
