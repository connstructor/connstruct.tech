# connstruct-site

Personal website — front page, blog, about, and resume — with a restrained
terminal aesthetic: monospace chrome, a single soft-cyan accent on muted slate,
and proportional body type tuned for comfortable long-form reading. Built with
[Astro](https://astro.build).

## Design at a glance

- **Palette:** muted slate + soft cyan (`#0d1117` / `#c9d1d9` / `#56b6c2`), with
  a complementary light theme. Defined as CSS custom properties in
  [`src/styles/global.css`](src/styles/global.css).
- **Type:** JetBrains Mono for nav/headings/code/prompts, Inter for body prose.
  Self-hosted via Fontsource (no external requests, no FOUC).
- **Themes:** respects the OS `prefers-color-scheme`, with a remembered manual
  toggle. An inline `<head>` script sets the theme before first paint, so there
  is no flash. Code blocks use Shiki dual themes (github-light / github-dark-dimmed).
- **Extras:** RSS feed (`/rss.xml`), sitemap, a print-friendly resume, a custom
  404, SEO/OpenGraph meta, and a skip link.

## Make it yours

Search the project for `TODO` — the main spots are:

1. **[`src/consts.ts`](src/consts.ts)** — your name (`AUTHOR`), handle, taglines,
   contact/social links, and the deployed `SITE_URL` (also update the URL in
   [`public/robots.txt`](public/robots.txt)).
2. **[`src/pages/about.astro`](src/pages/about.astro)** — the about copy.
3. **[`src/pages/resume.astro`](src/pages/resume.astro)** — experience, skills,
   and education data (currently clean placeholder content). The "print / pdf"
   button uses the browser print dialog against a print stylesheet.
4. **[`src/content/blog/`](src/content/blog/)** — replace the two sample posts.
   Add a post by dropping in a `.md` file with the frontmatter shown below.
5. *(optional)* add a `public/og.png` and emit `og:image` in
   [`src/components/BaseHead.astro`](src/components/BaseHead.astro) for rich
   social previews.

### Blog post frontmatter

```md
---
title: 'Post title'
description: 'One-line summary for listings, SEO, and RSS.'
pubDate: 2026-06-22
updatedDate: 2026-06-25   # optional
tags: ['design', 'css']   # optional
draft: false              # optional — true hides it from listings, RSS, and routes
---

Your markdown here.
```

The schema lives in [`src/content.config.ts`](src/content.config.ts).

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Install dependencies                         |
| `pnpm dev`     | Dev server at `localhost:4321`               |
| `pnpm build`   | Build the static site to `./dist/`           |
| `pnpm preview` | Preview the production build locally         |

## Deploying (GitHub Pages)

This repo is wired to deploy to GitHub Pages at the custom domain
**connstruct.tech** via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
Every push to `main`/`master` builds with pnpm and publishes `dist/`.

One-time setup:

1. **Create the repo and push** (default branch `main` or `master` — the
   workflow handles both):
   ```sh
   git add -A
   git commit -m "Initial site"
   git remote add origin git@github.com:connstructor/<repo>.git
   git push -u origin HEAD
   ```
2. **Enable Pages via Actions:** GitHub → repo **Settings → Pages → Build and
   deployment → Source: GitHub Actions**. The first push then deploys.
3. **Custom domain DNS** (at your registrar for `connstruct.tech`):
   - Apex `A` records → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - (optional) `CNAME` `www` → `connstructor.github.io`
   - `public/CNAME` already pins the domain; once DNS resolves, tick
     **Settings → Pages → Enforce HTTPS**.

To deploy elsewhere instead (Netlify/Vercel/Cloudflare): `pnpm build` outputs a
fully static `dist/`. If you ever move off the apex domain to a project page
(`user.github.io/repo/`), set `base` in `astro.config.mjs` and update internal
links — and change `SITE_URL` in `src/consts.ts` so canonical/sitemap/RSS URLs
stay correct.

## Structure

```
src/
├── components/      # BaseHead, Header, Footer, ThemeToggle, Command, PostCard, …
├── content/blog/    # markdown posts (content collection)
├── layouts/         # Layout (base shell), PostLayout (article wrapper)
├── pages/           # index, about, resume, 404, blog/, rss.xml.js
├── styles/          # global.css — design tokens + base styles
├── consts.ts        # site-wide config (edit this first)
└── content.config.ts
```
