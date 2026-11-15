/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // テーマカラー（深い緑）
        brand: {
          DEFAULT: '#1f4a36',
          dark: '#163627',
          soft: '#e6efe9',
        },
        // 文字色
        ink: '#1f2328',
        sub: '#444b55',
        muted: '#5a6270',
        // 背景・罫線
        mist: '#eef3ef',
        line: '#d3ddd6',
        rule: '#bfcac3',
        placeholder: '#e2e8e4',
        'placeholder-text': '#56625b',
        // 価格・種別ラベル
        accent: '#b23a1e', // 売買・電話番号（朱色）
        rent: '#2f5f86', // 賃貸
        owned: '#7a5a1e', // 自社保有
      },
      fontFamily: {
        sans: [
          '"BIZ UDPGothic"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
