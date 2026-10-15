# Customization Guide

Guide for the Azar Cósmico site.

## Site Settings

Edit [src/config/site.ts](./src/config/site.ts) first: name, metadata, canonical domain, header button, availability badge, and social links.

Set `siteConfig.siteUrl` before building for production. Canonical URLs, social images, `robots.txt`, sitemap, and JSON-LD derive from it.

| Key            | What it controls                                                      |
| -------------- | --------------------------------------------------------------------- |
| `name`         | Wordmark in the header/footer and `<title>` suffix                    |
| `title`        | Homepage `<title>` and default social title                           |
| `description`  | Default meta description                                              |
| `siteUrl`      | Production domain, without trailing slash                             |
| `language`     | `lang` attribute                                                      |
| `locale`       | Open Graph locale, e.g. `pt_PT`                                       |
| `dateLocale`   | Date format on legal pages, e.g. `pt-PT`                              |
| `socialImage`  | Default Open Graph/Twitter image, path in `public/`                   |
| `author`       | Name, href, role, location, and email, used in the footer and JSON-LD |
| `availability` | Pill above the title; `enabled: false` removes it                     |
| `action`       | Button at the end of the header and in the mobile menu                |
| `socials`      | Footer links; Spotify, Apple, YouTube, Instagram have custom icons    |

`navigation` is the header/mobile menu, `legalLinks` the footer Legal column.

The logomark is [src/components/ui/Logomark.astro](./src/components/ui/Logomark.astro). The favicon is [public/favicon.svg](./public/favicon.svg).

## Homepage

Built in [src/pages/index.astro](./src/pages/index.astro) with sections in [src/components/home](./src/components/home) and copy in [src/config/home.ts](./src/config/home.ts): hero, episodes, posts, services, and closing panel.

The closing panel appears above the footer on every page except legal pages and 404. Passing `closing={false}` to `BaseLayout` hides it.

## Episodes, Posts, and Videos

Each episode is a Markdown file in [src/content/episodes](./src/content/episodes):

```yaml
---
title: AC 11 - Chat with Pedro Silva
description: Short episode summary.
date: '2020-10-10'
episodeNumber: 11
season: 1
duration: '1:23:45'
audioUrl: https://audio3.redcircle.com/...
image: ''
---
```

Posts ([src/content/posts](./src/content/posts)) use `title`, `description`, `date`, `image`. Videos ([src/content/videos](./src/content/videos)) use `title`, `description`, `date`, `youtubeId`, `thumbnail`. Schemas in [src/content.config.ts](./src/content.config.ts).

Listing, sorting, and pt-PT formatting helpers in [src/lib/podcast.ts](./src/lib/podcast.ts). The episode index is paginated (`/episodios/pagina/2/`).

## Listen and About

The Listen page copy lives in [src/config/ouvir.ts](./src/config/ouvir.ts) and the About copy in [src/config/about.ts](./src/config/about.ts). The podcast cover is [src/assets/images/podcast-cover.webp](./src/assets/images/podcast-cover.webp).

## Changelog

Entries live in [src/config/changelog.ts](./src/config/changelog.ts), newest first, and are rendered in [src/pages/registo-de-alteracoes.astro](./src/pages/registo-de-alteracoes.astro). The page is listed in `legalLinks` (footer Legal column). It is `noindex`, has no closing panel, and is excluded from the sitemap, like the legal pages.

## Legal Pages

Privacy and Terms are MDX pages in [src/pages](./src/pages) with [src/layouts/LegalLayout.astro](./src/layouts/LegalLayout.astro). Edit the text directly and update `updated` in the frontmatter. They are `noindex` and excluded from the sitemap. The changelog follows the same treatment (`noindex`, no closing panel, out of the sitemap), but keeps its own list layout.

The included text is a starting point, not legal advice.

## Theme Tokens

Colors, shadows, header height, and page width are CSS custom properties in [src/styles/global.css](./src/styles/global.css), under `:root` and `:root.dark`. For a rebrand, change `--accent` and `--accent-strong`.

## Light and Dark Mode

Follows the system until the visitor chooses; the choice is stored in `localStorage` under `azar-cosmico-theme`. The script in [src/layouts/BaseLayout.astro](./src/layouts/BaseLayout.astro) applies the mode before first paint.

## Fonts

Hanken Grotesk and Instrument Serif are in [public/fonts](./public/fonts). Only the serif italic is included, used for accents.

## Icons

Interface icons in [src/icons/lucide](./src/icons/lucide) and brands in [src/icons/bootstrap](./src/icons/bootstrap), via [src/components/ui/Icon.astro](./src/components/ui/Icon.astro). Map new socials in [src/lib/socials.ts](./src/lib/socials.ts).

## Motion

Titles rise on load and sections reveal on scroll, all in CSS, disabled with `prefers-reduced-motion`.

## SEO

- Every page has canonical, Open Graph/Twitter, and JSON-LD (`WebSite` + `PodcastSeries`, episodes/posts/videos with breadcrumbs).
- Pages without their own image use [public/og-image.png](./public/og-image.png) (1200×630).
- `/sitemap-index.xml` via `@astrojs/sitemap`; `/robots.txt` points to it.
- URLs end with a trailing slash.

## Deployment

`npm run build` writes to `dist/`. [vercel.json](./vercel.json) configures Vercel (includes legacy `/ac-*` → `/episodios/` redirects). Any other static host serves `dist/`.

## Footer Version

The footer shows the `package.json` version (e.g. `v2.0.0`) linking to `/registo-de-alteracoes/`, via [src/lib/version.ts](./src/lib/version.ts). When the build provides a commit SHA through `CF_PAGES_COMMIT_SHA`, `VERCEL_GIT_COMMIT_SHA`, `GITHUB_SHA`, or `COMMIT_SHA`, the short SHA is appended (e.g. `v2.0.0 · a3f9c1d`). Without a SHA only the version is shown.
