/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily:{
      'oswald':[ 'Oswald', 'sans-serif'],
      'raleway':[ 'Raleway', 'sans-serif'],
      'cursive':['Dancing Script','cursive']
    },
    backgroundImage:{
      'hero':"url('	https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg')",

    },
    extend: {},
  },
  plugins: [],
}

