/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3A', 800: '#10294a', 700: '#16355e' },
        emerald: { brand: '#2FA37F' },
        solar: '#F4B942',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(47,163,127,0.6)' },
          '70%': { boxShadow: '0 0 0 16px rgba(47,163,127,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(47,163,127,0)' },
        },
      },
      animation: { 'pulse-ring': 'pulseRing 2s infinite' },
    },
  },
  plugins: [],
}
