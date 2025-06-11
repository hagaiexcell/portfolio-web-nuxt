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
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        monsterrat: ["Montserrat"],
      },
      colors: {
        primaryBg: "#151515",
        secondary: "#242424",
        primary: "#9C27B0",
      },
    },
  },
  plugins: [],
};
