/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16150F',
        paper: '#F4F1EC',
        warm: '#E8E2D9',
        accent: '#8B6F4E',
        'accent-light': '#C4A882',
        muted: '#6B6560',
        faint: '#A8A39D',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}


