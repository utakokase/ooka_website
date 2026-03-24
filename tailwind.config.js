/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f4ef',
        ink: '#1d2733',
        navy: '#233246',
        stone: '#d8d2c8',
        mist: '#ebe7df',
        muted: '#66717d',
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Yu Gothic"',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 20px 45px rgba(24, 34, 47, 0.08)',
      },
      maxWidth: {
        layout: '1180px',
      },
      letterSpacing: {
        wideish: '0.08em',
      },
    },
  },
  plugins: [],
};
