# Pingtung Park bilingual visitor guide

Traditional Chinese and English pages retain the original static-prerendered route family inside the Astro Cloudflare server build. Shared reviewed content is in `src/data/guide.json`; private research/export evidence is not part of this repository.

Use Node 24.21.0 and pnpm 12.4.2. Dependencies remain pinned by the existing lockfile. Run a normal `pnpm install --frozen-lockfile`, then `pnpm run check` and `pnpm run build`.

The established production build command is `pnpm run build` and deployment command is `npx wrangler deploy`. The source wrapper is compiled through `@astrojs/cloudflare/entrypoints/server`; default Wrangler follows the adapter-generated deployment config. Preserve SESSION, IMAGES and ASSETS. Project name is `pingtungpark`; no new domain bindings are declared. Use the pinned local Wrangler for native preview after building: `pnpm exec wrangler dev --ip 127.0.0.1 --port 8947 --local`.

`pnpm run build` removes local machine root paths from deliverable modules while retaining the generated local deployment metadata. Unknown URLs and explicit error aliases must return HTTP 404. The former offline homepage cache is retired; this site does not promise offline route delivery.

## Images

Only the verified file **Pingtung Park, Jan 2025 (1).jpg**, Ralff Nestor Nacor, 4 January 2025, is used. Exact source: https://commons.wikimedia.org/wiki/File:Pingtung_Park,_Jan_2025_(1).jpg . Licence: https://creativecommons.org/licenses/by-sa/4.0/ . Variants are resized/recompressed; social image also centre-cropped, with the same licence retained. On-page captions contain source, creator, date, licence and modifications. Historical imagery does not verify current site conditions. A photographic licence does not clear every depicted subject right.

## Privacy

GA4 automatically loads using the existing identifier. There is no site analytics consent switch. Bilingual privacy pages describe the actual behaviour, browser controls and hosting/possible independent measurement limits. Confirm final production HTML and actual browser requests after release; do not treat a single response as proof of permanent absence of hosting injection.
