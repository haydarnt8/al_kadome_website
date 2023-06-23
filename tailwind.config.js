/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '275px',
      'sm': '570px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1366px',
      '2xl': '1440px',

    },
  },
  plugins: [],
}

