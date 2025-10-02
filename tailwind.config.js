/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cartapani: ['Cartapani', 'Playfair Display', 'serif'],
      },
      colors: {
        aurora: {
          green: '#00ff88',
          purple: '#aa00ff',
          pink: '#ff00aa',
          blue: '#0088ff',
          yellow: '#ffcc00',
        },
      },
      animation: {
        'flare-orbit': 'flareOrbit 3s ease-in-out infinite',
      },
      keyframes: {
        flareOrbit: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};