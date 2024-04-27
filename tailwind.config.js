/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-yellow': '#FEE715',  // Normal state yellow
        'button-hover-yellow': '#F4DB01'  // Hover state yellow
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(to top left, #FEE715, #F4DB01)'
      },
      gradientColorStops: {
        'button-start': '#FEE715',
        'button-end': '#F4DB01',
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

