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
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "5rem",
        },
      },
      fontFamily: {
        "notosans-l": ["notosans-Light"],
        "notosans-r": ["notosans-Regular"],
        "notosans-m": ["notosans-Medium"],
        "notosans-sb": ["notosans-SemiBold"],
        "notosans-b": ["notosans-Bold"],
        "notosans-eb": ["notosans-ExtraBold"],
      },
    },
  },
  plugins: [],
};
