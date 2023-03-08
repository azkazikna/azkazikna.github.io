/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html','achievement.html'],
  theme: {
    extend: {
      colors: {
        background: '#020C1B',
        primary: '#64FFDA',
        primaryLight: '#322727',
        bgLight: '#F0EEF0',
        secondary: '#A8B2D1',
        built: '#233554',
        project: '#112240',
        textLight: '#312F31',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bez-loading': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
