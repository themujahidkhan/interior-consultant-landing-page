/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css", "./*.html", "./js/index.js"],
  theme: {
    extend: {
      fontFamily: {
        logoText: ["Crimson Pro", "serif"],
        headings: ["Lora", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
