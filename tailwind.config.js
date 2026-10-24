/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F5EF',
        ink: '#2D2926',
        wine: '#7D263D',
        rose: '#E8C8C4',
        sage: '#68755B',
        sand: '#E9E0D4',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 48px rgba(54, 35, 29, 0.08)',
      },
    },
  },
  plugins: [],
}
