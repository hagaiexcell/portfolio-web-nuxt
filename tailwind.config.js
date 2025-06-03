/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/css/main.css",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "10rem",
        },
      },
      fontFamily: {
        notosans: ["'Noto Sans'", "sans-serif"],
      },
      colors: {
        primaryBg: "#151515",
        secondary: "#242424",
        primary: "#4EE29F",
      },
    },
  },
  plugins: [],
};
