/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#f7f7fb',
        card: '#ffffff',
        soft: '#eef1ff',
        primary: '#5667ff',
        secondary: '#7d8cff',
        accent: '#39b7bd',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        orbit: 'orbit 12s linear infinite',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(86, 103, 255, 0.12)',
      },
    },
  },
  plugins: [],
}
