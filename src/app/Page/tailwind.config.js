/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {

      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        Bounce : ""
      },  // Ajoute d'autres animations ici },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

