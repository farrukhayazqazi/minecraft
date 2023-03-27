/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", './dist/index.html'],
  purge: [
    './src/**/*.{html,js,tsx}',
    './dist/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
