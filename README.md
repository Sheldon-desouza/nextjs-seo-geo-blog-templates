# Next.js SEO and GEO blog templates

Four free, MIT-licensed Next.js blog templates built for SEO and GEO (generative engine optimization, in UK English "optimisation"): structured data, `llms.txt`, a sitemap, an RSS feed, canonical links and social preview images are generated for you.

**Stack:** Next.js App Router, TypeScript, Tailwind CSS, Markdown posts with front matter. Each template is a self-contained app you can deploy on its own.

**Designs:** [Minimal](https://demo.scatterpost.io/minimal/), [Developer](https://demo.scatterpost.io/developer/), [Magazine](https://demo.scatterpost.io/magazine/) and [Changelog](https://demo.scatterpost.io/changelog/). All four are listed below with a live demo and a Deploy to Vercel button. Browse them together in the [demo gallery](https://demo.scatterpost.io/).

They work fully on their own. [scatterpost](https://scatterpost.io) is an optional extra, described in one section near the end.

## Preview

Each demo runs on sample posts so you can click around before you deploy.

<table>
  <tr>
    <td width="50%">
      <a href="https://demo.scatterpost.io/minimal/">
        <img src="docs/previews/minimal.gif" width="100%" alt="Minimal template demo">
      </a>
      <br>
      <strong>Minimal</strong>: single column, readable, serif, light and dark.
      <br>
      <a href="https://demo.scatterpost.io/minimal/">Live demo</a> ·
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fminimal&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL">Deploy</a>
    </td>
    <td width="50%">
      <a href="https://demo.scatterpost.io/developer/">
        <img src="docs/previews/developer.gif" width="100%" alt="Developer template demo">
      </a>
      <br>
      <strong>Developer</strong>: syntax highlighting, table of contents, dark-first.
      <br>
      <a href="https://demo.scatterpost.io/developer/">Live demo</a> ·
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fdeveloper&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL">Deploy</a>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="https://demo.scatterpost.io/magazine/">
        <img src="docs/previews/magazine.gif" width="100%" alt="Magazine template demo">
      </a>
      <br>
      <strong>Magazine</strong>: card grid home with cover images, tags and categories.
      <br>
      <a href="https://demo.scatterpost.io/magazine/">Live demo</a> ·
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fmagazine&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL">Deploy</a>
    </td>
    <td width="50%">
      <a href="https://demo.scatterpost.io/changelog/">
        <img src="docs/previews/changelog.gif" width="100%" alt="Changelog template demo">
      </a>
      <br>
      <strong>Changelog</strong>: blog plus a changelog timeline.
      <br>
      <a href="https://demo.scatterpost.io/changelog/">Live demo</a> ·
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fchangelog&project-name=my-changelog&repository-name=my-changelog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL">Deploy</a>
    </td>
  </tr>
</table>

## Deploy in one click

Each button clones that one template into its own repository on your own Vercel account, with the project's "Root Directory" preset to that template, and provisions a private Vercel Blob store for it.

| Template | Deploy |
|---|---|
| [`minimal/`](./minimal) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fminimal&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL) |
| [`developer/`](./developer) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fdeveloper&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL) |
| [`magazine/`](./magazine) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fmagazine&project-name=my-blog&repository-name=my-blog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL) |
| [`changelog/`](./changelog) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSheldon-desouza%2Fnextjs-seo-geo-blog-templates%2Ftree%2Fmain%2Fchangelog&project-name=my-changelog&repository-name=my-changelog&stores=%5B%7B%22type%22%3A%22blob%22%7D%5D&env=NEXT_PUBLIC_SITE_URL) |

Vercel asks for `NEXT_PUBLIC_SITE_URL` (your site's full `https://` address). If you later connect scatterpost, add `SCATTERPOST_WEBHOOK_SECRET` in the Vercel project settings and redeploy. Each template's own README has the full environment variable table.

## What's built in for SEO and AI search

Every item below exists in the code of all four templates.

- [x] JSON-LD structured data (`BlogPosting`, `BreadcrumbList`, `WebSite`, plus `Person` and `Organization` for the author)
- [x] `llms.txt` and `llms-full.txt`, generated from your posts on every request
- [x] `sitemap.xml`, generated
- [x] `robots.txt` that explicitly allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended
- [x] RSS feed at `/feed.xml`
- [x] Canonical links on every post, which use a post's own canonical URL when it has one
- [x] Open Graph images generated for every post
- [x] Search Console and Bing Webmaster verification through `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`
- [x] IndexNow pings for new posts that arrive through the optional connector, once you set `INDEXNOW_KEY` (off by default)
- [x] Optional GA4 analytics behind a consent banner: nothing loads and no cookie is set until a visitor agrees
- [x] Light and dark mode, and semantic markup

This gives search engines and AI assistants a clean, well-described copy of your site to read. It does not promise any ranking, traffic or citation. What search engines and AI assistants do with it is up to them.

Step-by-step setup for Search Console, Bing, GA4 and IndexNow is in [`SETUP.md`](./SETUP.md).

## FAQ

**Is this an SEO-friendly blog template?**
It generates the technical pieces that search engines commonly read: structured data, a sitemap, an RSS feed, canonical links and Open Graph images. Whether a page ranks depends on much more than a template, and nothing here guarantees a ranking.

**What is GEO and how does this help?**
GEO is generative engine optimisation (also written "generative engine optimization"): making your content easy for AI assistants and AI search to find and read. These templates publish `llms.txt` and `llms-full.txt` plain-text summaries, structured data, and a `robots.txt` that allows the main AI crawlers. That helps an AI system read your site. It does not promise that any assistant will cite you.

**Does it work without scatterpost?**
Yes. Each template is a normal Next.js blog. Add Markdown files under `content/posts` when running locally, or use the connector if you want to publish from an AI assistant. With the scatterpost environment variables unset, the two connector endpoints return an error if called and the rest of the site is unaffected.

**Is it free?**
Yes. All four templates are free and MIT licensed. Deploying one to Vercel runs on Vercel's own plan limits; scatterpost is a separate product you only need if you want it.

**Can I use my own domain?**
Yes. Point any domain at the Vercel project and set `NEXT_PUBLIC_SITE_URL` to it; the canonical links, sitemap, feed and `llms.txt` follow.

**Can I customise the design?**
Yes. Each template is a plain Next.js app you own outright: edit the components, the CSS or the content.

**Where are posts stored?**
In Vercel Blob by default once deployed, with a file store (`content/posts/*.md`) for local development and an optional Supabase store as an alternative. `CONTENT_STORE` chooses between them.

**How do I remove the "Built with" credit?**
Set `NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT=false` in the deployed project's environment variables and redeploy.

## Optional: publish from your AI assistant with scatterpost

Let your AI assistant write and publish here, then share copies to Dev.to, LinkedIn and more. [scatterpost](https://scatterpost.io) is a separate, paid tool that publishes to your blog first, then cross-posts with the canonical link pointing back to your site.

Tested with Claude, ChatGPT and Gemini. Other AI apps that support remote MCP connectors with sign-in can use the same address.

1. Deploy a template with the button above.
2. In scatterpost, add a Website channel and paste the secret it gives you into the blog's `SCATTERPOST_WEBHOOK_SECRET` env var, then redeploy. See the [website connector docs](https://scatterpost.io/docs/website-connector), or [connecting an existing site](https://scatterpost.io/docs/existing-site) if you already have a blog.
3. Ask your assistant to publish.

Every template ships `POST /api/scatterpost` (push mode: scatterpost calls this site) and `GET /api/scatterpost/pull` (pull mode: this site polls scatterpost on a schedule). If you stop using scatterpost, the blog and every post stay with you.

Claude, ChatGPT, Gemini, LinkedIn, Dev.to and the other platforms named here are trade marks of their owners; scatterpost is not affiliated with them.

## Reference

### Repository layout

```
LICENSE            MIT, Copyright (c) 2026 Sheldon de Souza
AGENTS.md          guide for coding agents
llms.txt           summary of this repository for AI assistants
shared/            the connector code once: signature verification, payload
                   validation, the content stores (Vercel Blob, Supabase, file),
                   pull, slugify, safe HTML and Markdown rendering, plus their tests
scripts/sync-shared.mjs   copies shared/ into <template>/src/lib/scatterpost/;
                          --check exits 1 if any copy has drifted
demo/              static gallery site for demo.scatterpost.io; Vercel Root Directory = demo
minimal/           self-contained Next.js app; Vercel Root Directory = minimal
developer/         self-contained Next.js app; Vercel Root Directory = developer
magazine/          self-contained Next.js app; Vercel Root Directory = magazine
changelog/         self-contained Next.js app; Vercel Root Directory = changelog
```

Each template is self-contained: its own `package.json` and `package-lock.json`, no `workspace:` or `@scatterpost/*` dependency, so `npm install` works from a plain copy of that one folder. The code under each template's `src/lib/scatterpost/` is a synced copy of `shared/`, never hand-edited; run `npm run sync` from the repository root after changing `shared/`, and `npm run check` to confirm nothing has drifted. The `scatterpost` names in folders, modules and environment variables are kept so existing deployments keep working.

### Licence

MIT. This repository is independent of scatterpost's own proprietary codebase: nothing here depends on a private package, and these templates may be used, forked and redeployed freely under the terms of the licence.

---

Made by [scatterpost](https://scatterpost.io)
