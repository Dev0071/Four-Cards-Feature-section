/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    // screens: {
    //   '2xl': {'max': '1535px'},
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': {'max': '1279px'},
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': {'max': '1023px'},
    //   // => @media (max-width: 1023px) { ... }

    //   'md': {'max': '767px'},
    //   // => @media (max-width: 800px) { ... }

    //   'sm': {'max': '639px'},
    //   // => @media (max-width: 639px) { ... }
    // },
    extend: {
      
      colors: {
        'Red': 'hsl(0, 78%, 62%)',
        'Cyan': 'hsl(180, 62%, 55%)',
        'Orange': 'hsl(34, 97%, 64%)',
        'Blue': 'hsl(212, 86%, 64%)',
        'VeryDarkBlue': 'hsl(234, 12%, 34%)',
        'GrayishBlue': 'hsl(229, 6%, 66%)',
        'VerylightGray': 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
