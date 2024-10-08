/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home_desk:"url('./assets/images/background-pattern-desktop.svg')",
        home_mob:"url('./assets/images/background-pattern-mobile.svg')",
        home_color:"#CBC3E3",
      },
      colors:{
        back:"#fae8ff",
      },
      fontFamily: {
        worksans : ['Worksans', 'sans-serif'],   
      },
      screens: {
        mv: '480px',
      },
    },
  },
  plugins: [],
}

