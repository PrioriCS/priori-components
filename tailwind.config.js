const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './resources/js/*.js',
    './tests/js/*.js',
  ],

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
    customForms: () => ({
      default: {
        checkbox: {
          '&:indeterminate': {
            background:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='2' x='4' y='7' rx='1'/%3E%3C/svg%3E\");",
            borderColor: 'transparent',
            backgroundColor: 'currentColor',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        },
      },
    }),
  },

  plugins: [require('@tailwindcss/forms'), require('autoprefixer')],
};
