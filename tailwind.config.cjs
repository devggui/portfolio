/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '3px 3px 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}