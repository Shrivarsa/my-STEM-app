/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#333333',
        'off-white': '#FAF9F6',
        'coral': '#FF6F61',
        'gold': '#D4AF37',
        'mint': '#3EB489',
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};