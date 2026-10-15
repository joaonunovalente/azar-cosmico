# Azar Cósmico

Podcast website for [Azar Cósmico](https://www.azarcosmico.com), by **João Guilherme Matos** — episodes, blog, and videos.

**Live Website:** [AzarCosmico.com](https://www.azarcosmico.com)

## Features

- Homepage with featured episodes, posts, and ways to listen
- Episodes in Markdown validated by content collections, with RedCircle audio
- Paginated episode index (`/episodios/`, `/episodios/pagina/2/`, …)
- Blog (`/blog/`) and YouTube videos (`/videos/`)
- Listen (`/ouvir/`) and About (`/sobre/`) pages configurable in `src/config`
- Changelog (`/registo-de-alteracoes/`) editable in `src/config/changelog.ts`
- Privacy and Terms in MDX, designed 404 page
- Light and dark mode, applied before first paint
- Optimized images via the Astro pipeline, 1200×630 social cards
- Canonical URLs, Open Graph, sitemap, `robots.txt`, and JSON-LD (PodcastSeries, episodes, breadcrumbs)
- Static output, no framework islands

## Tech Stack

- Astro 7 with MDX
- Tailwind CSS 4 via Vite plugin
- TypeScript, Astro content collections
- `@astrojs/sitemap`, Sharp
- Self-hosted Hanken Grotesk and Instrument Serif, Lucide and Bootstrap icons

## Requirements

- Node.js `22.12.0` or higher
- npm

## Getting started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

Before publishing, run type checking, build, and formatting:

```bash
npm run release:check
```

## Customization

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for site settings, homepage, episodes/posts/videos, Listen and About pages, legal pages, design tokens, fonts, icons, and dark mode.

Set `siteConfig.siteUrl` in [src/config/site.ts](./src/config/site.ts) before building — canonical URLs, social images, sitemap, `robots.txt`, and structured data derive from it. The build is static: `public/_redirects` configures legacy redirects (`/ac-*`, etc.) on Cloudflare, `public/_headers` sets cache and security headers, and any other static host serves `dist/` with `npm run build`.

## Content

- Episodes in [src/content/episodes](./src/content/episodes) (`ac-*.md`), validated in [src/content.config.ts](./src/content.config.ts)
- Posts in [src/content/posts](./src/content/posts)
- Videos in [src/content/videos](./src/content/videos)

## License

© João Guilherme Matos. All rights reserved. This project is not distributed under the MIT License. See [LICENSE](./LICENSE), which retains attribution to the Maria theme (© Andrei Alba) and lists third-party font and icon licenses.

## Credits

- Maria theme by Andrei Alba, under MIT License for inherited portions (see [LICENSE](./LICENSE))

- [Hanken Grotesk](https://github.com/marcologous/hanken-grotesk) by Alfredo Marco Pradil, under SIL Open Font License
- [Instrument Serif](https://github.com/Instrument/instrument-serif) by Instrument, under SIL Open Font License
- [Lucide](https://lucide.dev/), under ISC License
- [Bootstrap Icons](https://icons.getbootstrap.com/), under MIT License
