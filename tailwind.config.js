/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        background: '#020C1B',
        primary: '#64FFDA',
        secondary: '#A8B2D1',
        built: '#233554',
        project: '#112240'
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
