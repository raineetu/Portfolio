/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Correctly place darkMode here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px', // Adjust the value to fit your smallest device width
      },
    },
  },
  plugins: [],
}
