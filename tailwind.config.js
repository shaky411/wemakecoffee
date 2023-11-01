/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
    },
  },
  plugins: [],
}
