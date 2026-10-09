# AGENTS.md

Guide for coding agents working in this repository.

## What this is

nextjs-seo-geo-blog-templates: four free, MIT-licensed Next.js blog templates built for SEO and GEO (generative engine optimisation). Stack: Next.js App Router, TypeScript, Tailwind CSS, Markdown posts with front matter. Each template is a self-contained app. The scatterpost connector is optional: every template builds and runs without it.

## Folder map

- `minimal/`, `developer/`, `magazine/`, `changelog/`: the four templates, each with its own `package.json` and `package-lock.json`.
- `shared/`: connector, content-store and rendering code, written once. `npm run sync` (repo root) copies it into `<template>/src/lib/scatterpost/`; never edit those copies by hand. `npm run check` fails if a copy has drifted.
- `demo/`: static gallery site for demo.scatterpost.io.
- `scripts/`: `sync-shared.mjs`, `verify-templates.mjs`, `check-demo-hub.mjs`.
- `docs/previews/`: preview images used by the README.
- `README.md`, `SETUP.md`, `llms.txt`: human and machine entry points.

## Run, build, deploy

Work inside one template folder:

```bash
cd minimal            # or developer, magazine, changelog
npm install
npm run dev           # local dev server
npm run typecheck && npm run lint && npm test
npm run build
```

From the repo root, `npm run verify` runs typecheck, lint, test and build in every template. Run one template at a time on a busy machine.

Deploy: each template is its own Vercel project with Root Directory set to the template folder. The Deploy to Vercel buttons in `README.md` do this. Posts live in `content/posts/*.md` locally; deployed sites default to Vercel Blob (`CONTENT_STORE` chooses the store).

## Where the SEO and GEO pieces live

All paths are relative to a template's `src/app/` unless stated.

- JSON-LD: `page.tsx`, `blog/[slug]/page.tsx` (and `changelog/[slug]/page.tsx` in `changelog/`)
- `llms.txt/route.ts` and `llms-full.txt/route.ts`
- `sitemap.ts`, `robots.ts`, `feed.xml/route.ts`
- Canonical links and metadata: `layout.tsx` and the post pages
- Open Graph images: `blog/[slug]/opengraph-image.tsx` and `[slug]/opengraph-image.tsx`
- IndexNow: `src/lib/scatterpost/indexnow.ts`, called after posts arrive through the connector
- Setup walkthrough: `SETUP.md`

## Environment variables (names only)

Required for a real deploy: `NEXT_PUBLIC_SITE_URL`.
Site identity: `SITE_NAME`, `AUTHOR_NAME`, `AUTHOR_URL`, `SAME_AS`.
Storage: `CONTENT_STORE`, `BLOB_READ_WRITE_TOKEN`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.
Search and analytics (optional): `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`, `INDEXNOW_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
Footer: `NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT`, `NEXT_PUBLIC_SHOW_SCATTERPOST_BADGE`.
Optional connector: `SCATTERPOST_WEBHOOK_SECRET`, `SCATTERPOST_API_URL`, `SCATTERPOST_API_KEY`, `CRON_SECRET`.
Each template's `.env.example` is the full list. Never commit values.

## The scatterpost connector (optional)

scatterpost lets an AI assistant publish to a deployed template over MCP. Endpoints: `POST /api/scatterpost` and `GET /api/scatterpost/pull`. The `scatterpost` names in folders, modules and env vars are deliberate and must not be renamed, because deployed sites depend on them. With the variables unset the endpoints return errors and the rest of the site works.

## Rules

- UK English; no em dashes.
- Do not promise rankings, traffic or AI citations in any copy.
