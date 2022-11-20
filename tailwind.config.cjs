/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center:true,
      padding: {
        default:'0rem',
        sm: '1rem',
        md: '0rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'montserrat':['Montserrat'],
      }
    },
  },
  plugins: [],
}
