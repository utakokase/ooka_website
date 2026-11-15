# 應加合同会社 Webサイト

Vite + React + TypeScript + Tailwind CSS + React Router。Vercel にデプロイしています（`main` に push すると自動で反映）。

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド（型チェック込み）
npm run lint
```

## どこを直せばいいか

| 変えたいもの | ファイル |
| --- | --- |
| サイトの文言（全部） | `src/i18n/locales/ja.ts` |
| 物件の名前・説明・スペック | `src/i18n/locales/ja.ts` の `properties` |
| 物件の価格・種別・公開/非公開・外部リンク | `src/data/properties.ts` |
| 物件の写真 | `src/assets/properties/<物件のslug>/`（ファイル名順に並ぶ） |
| 電話・メール・免許番号・営業時間の表示 | `src/data/site.ts` |
| 色・フォント | `tailwind.config.js`、`src/index.css` |
| TSUCHIYAビルのページ（文言 / 募集状況・写真） | `ja.ts` の `tsuchiya` / `src/data/tsuchiya.ts`・`src/assets/properties/tsuchiya-building/` |
| Wix時代の旧URLからの転送 | `vercel.json` の `redirects` |

### 物件を追加する

1. `src/data/properties.ts` の `PROPERTY_SLUGS` と `properties` に1件追加
2. `src/assets/properties/<slug>/` に写真を入れる（長辺1600px・1枚300KB程度が目安）
3. `src/i18n/locales/ja.ts` の `properties` に文言を追加（足りないと型エラーで教えてくれます）

## 多言語対応（日本語・中国語・英語）

- 画面の文字はコンポーネントに直接書かず、すべて `src/i18n/locales/*.ts` に置いています。
- コンポーネントでは `const { t } = useI18n();` → `t.nav.properties` のように使います（キーの打ち間違いは型エラーになります）。
- `ja.ts` が「正」です。`zh.ts` / `en.ts` は同じ形で、訳したところだけ書けば OK（残りは日本語で表示）。
- `{count}` のような部分は `fmt(t.home.listingsCount, { count: 4 })` で値を差し込みます。
- 価格は言語ごとに書き方が変わります（`src/i18n/format.ts`）: 15,380万円 / 15,380万日元 / ¥153,800,000。
- **公開するとき**: `src/i18n/config.ts` の `ENABLED_LOCALES` に `'zh'` や `'en'` を追加するだけ。
  `/zh/properties` のようなURLが有効になり、ヘッダーに言語切り替えが出ます。日本語は今まで通り `/` です。

## 注意

- お問い合わせはメールソフトを開く方式（mailto）です。フォーム送信の仕組みはまだありません。
- Googleマップは埋め込み（APIキー不要）です。
