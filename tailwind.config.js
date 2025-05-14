/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors : {
        shamrockGreen : '#32965d',
        beige: '#eaf0ce',
        honeydew : '#f1ffe7',
        palePurple : '#ffe4fa',
        smokyBlack : '#0b0500',
      },
    },
  },
  plugins: [],
}

