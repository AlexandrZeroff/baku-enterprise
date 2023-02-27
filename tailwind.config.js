/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'th-orange': '#FF8B00',
        'th-gray': '#666666',
        'th-red': '#DD2400',
      },
      backgroundImage: {
        'header': "url('assets/header-bg.jpg')",
      },
    },
  },
  plugins: [],
}
