/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F4',
          100: '#F5F1E8',
          200: '#EDE6D6',
          300: '#E2D8C2',
          400: '#D4C6A9',
          500: '#C0B08E',
          DEFAULT: '#F3EFE6'
        },
        parchment: {
          light: '#F8F5EE',
          DEFAULT: '#EFEAE0',
          dark: '#E5DEC8'
        },
        forest: {
          DEFAULT: '#14422E',
          dark: '#0C2D1F',
          deep: '#082016',
          light: '#1D5A3F',
          bright: '#247451',
          subtle: '#E2EFE7',
          glow: 'rgba(20, 66, 46, 0.12)'
        },
        gold: {
          DEFAULT: '#C4841D',
          light: '#F4D388',
          bright: '#E59C24',
          dark: '#9A6410',
          amber: '#D97706',
          glow: 'rgba(196, 132, 29, 0.22)'
        },
        navy: {
          DEFAULT: '#0B3B70',
          dark: '#062447',
          light: '#135399',
          subtle: '#E4EEF8'
        },
        charcoal: {
          DEFAULT: '#181F1C',
          soft: '#2D3833',
          muted: '#5A6660',
          light: '#88968F'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury-sm': '0 4px 20px -2px rgba(24, 31, 28, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'luxury-md': '0 10px 30px -4px rgba(24, 31, 28, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'luxury-lg': '0 20px 45px -8px rgba(24, 31, 28, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'luxury-gold': '0 12px 35px -5px rgba(196, 132, 29, 0.18), 0 0 0 1px rgba(196, 132, 29, 0.25)',
      }
    },
  },
  plugins: [],
}
