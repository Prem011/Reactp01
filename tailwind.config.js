/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], 
        cheeseburga: ['CHEESEBURGA', 'sans-serif'], 
        kumbh: ['Kumbh Sans', 'sans-serif'],
        screens: {
          'xs': '480px', // Custom small breakpoint
          '3xl': '1920px', // Custom large breakpoint
        },
      },
    },
  },
  plugins: [],
}

