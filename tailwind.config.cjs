/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  purge: [
    './src/**/*.{html,js,tsx}',
    './dist/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
