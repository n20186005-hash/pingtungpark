import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim() || 'https://pingtungpark.com';

// Locales: zh-Hant is the default (served at root), en / hak use path prefixes (/en, /hak).
const locales = { 'zh-Hant': 'zh-Hant', en: 'en', hak: 'hak' };

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-Hant',
        locales
      }
    })
  ],
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en', 'hak'],
    routing: { prefixDefaultLocale: false }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
