/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    backgroundColor: theme =>({
      ...theme('colors'),
      back:'#fae8ff',
    }),
    
    extend: {
      backgroundImage:{
        home_desk:"url('./assets/images/background-pattern-desktop.svg')",
        home_mob:"url('./assets/images/background-pattern-mobile.svg')",
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

