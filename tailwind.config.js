/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'button-yellow': '#FEE715',
        'button-hover-yellow': '#F4DB01',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(135deg, #FEE715 0%, #F4DB01 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(244, 219, 1, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(244, 219, 1, 0.8)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

