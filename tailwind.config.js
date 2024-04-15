import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Ensure dark mode is enabled with the 'class' strategy
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#C3F4FD', 
            text: '#000',
          },
        },
        dark: {
          colors: {
            background: '#053B48',
            text: '#FFF',
          },
        },
      },
    }),
  ],
};
