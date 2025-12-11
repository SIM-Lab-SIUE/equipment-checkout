/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siue: {
          red: '#e5182d',
          black: '#000000',
        }
      }
    },
  },
  plugins: [],
}

