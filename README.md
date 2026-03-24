# Ooka LLC Website

Vite + React + TypeScript + Tailwind CSS + React Router で構成した、應加合同会社向けの不動産会社サイトです。

## Setup

```bash
npm install
npm run dev
```

## Replace Content Later

- 物件データ・物件文言: `src/data/properties.ts`
- ホームや会社情報などの固定文言: `src/pages/`
- 共通UIやレイアウト: `src/components/`, `src/layouts/`
- 全体スタイルと色・余白ルール: `src/styles/index.css`, `tailwind.config.js`
- 画像差し替え先:
  - すぐ差し替えるなら `src/data/properties.ts` と各ページ内の `src` URL
  - ローカル画像にするなら `src/assets/` に配置して import

## Notes

- 現在の問い合わせフォームは UI のみで、送信処理は未実装です。
- プレースホルダー画像は外部URLを利用しています。正式画像に差し替える場合は `src/assets/` に置く運用が分かりやすいです。

