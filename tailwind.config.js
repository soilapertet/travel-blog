/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors : {
        seaGreen : '#3e885b',
        night : '#00120b',
        lightGreen : '#aafcb8',
        babyPowder : '#fffffc'
      },
    },
  },
  plugins: [],
}

