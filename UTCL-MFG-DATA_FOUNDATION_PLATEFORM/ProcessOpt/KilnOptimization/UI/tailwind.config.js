/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },} },
  plugins: [],
}