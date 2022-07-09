/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'sky': "url('./assets/background.jpg')",
      }
    },
  },
  plugins: [],
}
