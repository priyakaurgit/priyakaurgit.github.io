// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// This is a GitHub Pages *user* site served from the root path of a custom
// domain. `site` is the custom domain; `base` must stay unset — setting it
// would prefix every internal link and break the whole site.
export default defineConfig({
  site: 'https://thepriyakaur.com',

  // GitHub Pages serves static files. No adapter, no SSR, no API routes.
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],

  // Self-hosted fonts via Astro's built-in Fonts API. Only the weights and
  // subsets actually used are downloaded.
  fonts: [
    {
      // Display: headings only.
      provider: fontProviders.fontsource(),
      name: 'Archivo',
      cssVariable: '--font-display',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      // Body: paragraphs and long-form text.
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-body',
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
    {
      // Utility: status labels, dates, tags, nav. Small sizes only.
      provider: fontProviders.fontsource(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],

  // Later: content collections.
  // When writing starts after the markAtt pilot, add `src/content.config.ts`
  // defining a `writing` collection (glob loader over `src/content/writing/`)
  // and swap `src/pages/writing.astro` for an index + `[...slug].astro`.
  // Nothing else in this config needs to change for that.
});
