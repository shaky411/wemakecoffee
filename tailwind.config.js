import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'laurel': {
          '50': '#f2f7f3',
          '100': '#e0ebe1',
          '200': '#c3d7c7',
          '300': '#9abba2',
          '400': '#699575',
          '500': '#4e7b5c',
          '600': '#3a6147',
          '700': '#2e4e39',
          '800': '#273e30',
          '900': '#203428',
          '950': '#111d16',
      },
      'sun': {
        '50': '#fffcea',
        '100': '#fff6c5',
        '200': '#ffed86',
        '300': '#ffdd47',
        '400': '#ffcb1d',
        '500': '#fdac09',
        '600': '#e08100',
        '700': '#ba5903',
        '800': '#96450a',
        '900': '#7c390b',
        '950': '#471c01',
    },
      },
    },
  },
  plugins: [
    nextui(),
  ],
}
