/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  purge: [
    './dist/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
