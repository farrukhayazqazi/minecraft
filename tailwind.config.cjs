/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./dist/index.html"],
  purge: [
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
