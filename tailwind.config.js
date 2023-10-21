/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        low: '0px 0px 68px 7px rgba(128, 0, 128, 0.15)',
        regular: '0px 0px 68px 7px rgba(128, 0, 128, 0.4)',
        high: '0px 0px 68px 7px rgba(128, 0, 128, 1.0)',
      },
    },
  },
  plugins: [],
};
