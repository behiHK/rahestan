/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      purple: {
        50: "#8a44cf",
        100: "#803fbf",
        400: "#5547a6",
        500: '#58337d', //"#592E83"
        600: "#4f2e70",
        700: "#3e2459",
        900: "#221b33"
      },
      gray: {
        0: "#F5F5F5",
        50: "#b7bcbf",
        100: "#677189", //"#909090"
        200: "#484c57",
        300: "#202d40",
        400: "#3d4254",
        500: "#2D313E",
        600: "#1F222B",
        700: "#17191F",
        900: "#121319",
      },
      white: "#ffffff",
      black: "#000000",
      red: {
        400: "#9e0607",
        500: "#8b0000",
        600: "#870917"
      },
      zinc: {
        100: "#e5e3e3",
        150: "#a69fa0",
        200: "#b2acac",
        400: "#83797a",
        700: "#1d1b1b"
      },
      navy: {
        200: "#15253f",
        400: "#4e5356"
      },
      orange: {
        50: "#d18019",
        100: "#bd7418",
        200: "#cd7213",
        300: "#b54b16",
        400: "#8c370d"
      },
      coal: {
        600: "#353333"
      },
      gold: {
        50: "#f9d402",
        100: "#e3ba59",
        200: "#CDA952",
        300: "#d9a62b"
      },
      violet: {
        0: "#a866e8",
        200: "#632a6d",
        300: "#4f2157"
      },
      khaki: {
        0: "#d9d1c5",
        100: "#a3947f"
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
