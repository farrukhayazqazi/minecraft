/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  purge: [
    './src/**/*.{html,js,tsx}',
    './src/components/**.{html,js,tsx}',
    './dist/**/*.{html,js,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
