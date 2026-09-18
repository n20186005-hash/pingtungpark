# 屏東公園單頁景點網站

Astro + Tailwind CSS + TypeScript，部署目標為 Cloudflare Workers。

## 版本
- Astro 7.3.3
- @astrojs/cloudflare 14.3.2
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.4
- Tailwind CSS / @tailwindcss/vite 4.3.3
- TypeScript 6.0.3（@astrojs/check 0.9.10 支援 6.x；TypeScript 7 暫不適用 astro check）
- Wrangler 4.134.0
- pnpm 12.4.2
- Node.js 24.21.0 LTS

## 域名 / site 唯一配置
不要在頁面硬編正式域名。部署時只需設定環境變數：

```bash
SITE_URL=https://你的域名 pnpm build
```

`astro.config.mjs` 會把它寫入 Astro 的 `site` 欄位；canonical、Open Graph、JSON-LD 與 sitemap 都從 `Astro.site` / `site` 派生。若 `SITE_URL` 缺失，仍可正常建置，且 sitemap 不啟用。

## 開發與檢查
```bash
corepack enable
corepack prepare pnpm@12.4.2 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers
```bash
pnpm deploy
```

`wrangler.jsonc` 使用 `@astrojs/cloudflare/entrypoints/server`，並把 `dist` 作為靜態資產目錄。

## 圖片授權
網站使用 Wikimedia Commons 真實照片：
- Pingtung Park, Jan 2025 (1).jpg — Ralff Nestor Nacor — CC BY-SA 4.0
- Pingtung Park, Jan 2025 (2).jpg — Ralff Nestor Nacor — CC BY-SA 4.0
- Pingtung Park, Jan 2025 (3).jpg — Ralff Nestor Nacor — CC BY-SA 4.0

目前 HTML 直接引用 Commons 原圖 URL，以保留授權來源可追溯性。如需完全本地化，下載三張原圖至 `public/images/` 後，把 `src/pages/index.astro` 的 `photos` 陣列改成本地路徑即可。

## GA4
已配置：`G-HXM22WWPKP`
