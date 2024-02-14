const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          ...colors.blue,
          1000: '#14275c', // 900 but with 1/3 of brightness (value in HSV)
        },
        secondary: colors.teal,
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        sweep: 'transition 1s ease-in-out',
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('autoprefixer')],
};
