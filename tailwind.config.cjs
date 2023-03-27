/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}", './index.html'],
  purge: [
    './src/**/*.{html,js,tsx}',
    './index.html',
    './dist/**/*.{html,js,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
