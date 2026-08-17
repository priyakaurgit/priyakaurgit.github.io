# thepriyakaur.com

Personal site for Priya Kaur. Built with [Astro](https://astro.build), served
as static files from GitHub Pages at
[thepriyakaur.com](https://thepriyakaur.com).

## Running it locally

Requires Node 24 (see `.nvmrc`).

```sh
nvm use          # optional, if you use nvm
npm install
npm run dev      # http://localhost:4321
```

Other commands:

| Command           | Does                                              |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the dev server                              |
| `npm run build`   | Type check, then build to `dist/`                 |
| `npm run preview` | Serve the built site, to check it before pushing  |
| `npm run check`   | Type check only                                   |

`npm run dev` starts a background dev server. Stop it with `npx astro dev stop`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

This requires **Settings → Pages → Build and deployment → Source** to be set to
**GitHub Actions**. If it is set to "Deploy from a branch", the workflow runs
but the live site never updates.

### Things that will break the custom domain

- **`public/CNAME`.** It contains `thepriyakaur.com` and Astro copies it into
  `dist/` unchanged. If it stops being in the build output, GitHub Pages drops
  the custom domain and every URL 404s — including the app store privacy and
  support URLs.
- **`base` in `astro.config.mjs`.** It must stay unset. This is a user site
  served from the root path; setting `base` prefixes every internal link.

## Structure

```
public/            Copied into dist/ verbatim — CNAME, robots.txt, favicon
src/consts.ts      Site metadata, nav, markAtt details, date formatting
src/styles/        global.css: all colour tokens, type scale, layout
src/layouts/       Base.astro: head, meta, nav, footer. Every page uses it
src/components/    Status.astro, SupportEmail.astro
src/pages/         One file per route
```

## markAtt app store URLs

These two pages are required before the app can be submitted:

- <https://thepriyakaur.com/markatt/privacy>
- <https://thepriyakaur.com/markatt/support>

Both read the support email and Supabase region from `src/consts.ts`. While
those values still start with `FILL IN`, the pages render a highlighted marker
instead of the value, rather than shipping a dead `mailto:` link or an invented
storage location.
