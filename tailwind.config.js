/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      purple: {
        900: '#28153c'//"#592E83"
      },
      gray: {
        0: "#F5F5F5",
        100: "#909090",
        500: "#2D313E",
        600: "#1F222B",
        700: "#17191F",
        900: "#121319",
      },
      white: "#ffffff",
      black: "#000000",
      red: {
        500: "#9D0610",
        600: "#6A040F"
      }
    },
    fontFamily: {
      vazir: ["'Vazirmatn'"],
    },
    backgroundImage: {
      'hero-pattern': "url('/src/images/road.jpg')"
    },
    extend: {},
  },
  plugins: [],
}
