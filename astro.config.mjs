import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const configuredSite = 'https://pingtungpark.com';

// The existing pages are Traditional Chinese at root and English under /en.
const locales = { 'zh-Hant': 'zh-Hant', en: 'en' };

// Topic pages are Chinese-only; dropping their auto i18n links avoids dead /en/<slug> alternates.
const guidePages = JSON.parse(readFileSync(fileURLToPath(new URL('./src/data/guide.json', import.meta.url)), 'utf8'));
const pillarPaths = new Set([...Object.keys(guidePages).map(k => (k === 'index' ? '/' : '/' + k)), '/privacy']);

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare({ configPath: 'wrangler.jsonc' }),
  integrations: [
    sitemap({
      serialize(item) {
        const normalize = (value) => { const u = new URL(value); if (u.pathname !== '/' && u.pathname !== '/en/') u.pathname = u.pathname.replace(/\/$/, ''); return u.href; };
        item.url = normalize(item.url);
        if (item.links) item.links = item.links.map(link => ({ ...link, url: normalize(link.url) }));
        const pathname = new URL(item.url).pathname.replace(/^\/en(?=\/|$)/, '') || '/';
        if (!pillarPaths.has(pathname)) item.links = [];
        return item;
      },
      i18n: {
        defaultLocale: 'zh-Hant',
        locales
      }
    })
  ],
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
