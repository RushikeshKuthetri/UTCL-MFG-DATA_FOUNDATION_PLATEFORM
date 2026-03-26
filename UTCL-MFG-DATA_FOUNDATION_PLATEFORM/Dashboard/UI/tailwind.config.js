module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        // new left drawer shadow using your CSS variable
        'left-drawer-light': '0 -2px 6px rgba(0, 0, 0, 0.1), 2px 0 6px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.1)',
        'left-drawer-dark': '0 -2px 6px rgba(255, 255, 255, 0.12), 2px 0 6px rgba(255, 255, 255, 0.12), 0 2px 6px rgba(255, 255, 255, 0.12)',
        'header-shadow-light': '0 2px 6px rgba(0, 0, 0, 0.25)',
        'header-shadow-dark': '0 2px 6px rgba(255, 255, 255, 0.25)',
      }
    }
  },
  plugins: [],
};