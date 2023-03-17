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
        bgVal: '#ECE8E1',
        redval: '#FF4655',
        blackval: '#111111',
        lightval: '#DBD9D2',
        paraVal: '#768079',
        secondary: '#A8B2D1',
        built: '#233554',
        project: '#112240',
        textLight: '#0F1923',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        tungsten: ['"Tungsten Bold"', 'sans-serif'],
        din: ['"DINNextW1G-Regular"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bez-loading': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
