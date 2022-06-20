/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: '#2B2D42',
      secondary: '#8D99AE',
      accent: '#EF233C',
      neutral: '#EDF2F4'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
