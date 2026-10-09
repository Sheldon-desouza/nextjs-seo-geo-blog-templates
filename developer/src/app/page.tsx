import Link from "next/link";
import { getStore } from "../lib/site.ts";
import { authorName, authorUrl, sameAsUrls, siteName, siteUrl } from "../lib/site.ts";
import { serialiseJsonLd } from "../lib/scatterpost/safe-html.ts";
import { BIO, ROLE, SOCIAL_LINKS } from "../lib/config.ts";
import { PostIndex, TagFilterRow } from "../components/post-index.tsx";
import { postsAtRoot } from "../lib/scatterpost/post-paths.ts";
import { withBasePath } from "../lib/scatterpost/post-paths.ts";

export default async function HomePage() {
  const posts = await getStore().list();
  const site = siteUrl();

  const sameAs = sameAsUrls();
  const author = authorUrl()
    ? { "@type": "Person", name: authorName(), url: authorUrl(), sameAs: sameAs.length > 0 ? sameAs : undefined }
    : { "@type": "Organization", name: authorName(), sameAs: sameAs.length > 0 ? sameAs : undefined };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: siteName(), url: site },
      author,
    ],
  };

  return (
    <div>
      <section className="home-hero">
        <h1>{authorName()}</h1>
        <p className="home-role">{ROLE}</p>
        <p className="home-bio">{BIO}</p>
        {SOCIAL_LINKS.length > 0 ? (
          <nav className="home-links" aria-label="Elsewhere">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.href} href={withBasePath(link.href)} className="tap-target">
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </section>

      {posts.length === 0 ? (
        <div className="empty-state">
          <h2>No posts yet</h2>
          <p>
            This blog is ready for its first post. Add a Markdown file under <code>content/posts</code> when running locally, or connect a publishing source. See this template&apos;s README for the exact steps.
          </p>
        </div>
      ) : (
        <>
          <section className="index-section">
            <h2>Latest</h2>
            <PostIndex posts={posts} />
          </section>
          <TagFilterRow posts={posts} />
          {/* With posts at the root this page already is the full
              listing (/blog redirects here), so no link to it. */}
          {postsAtRoot() ? null : (
            <p className="home-links">
              <Link href="/blog" className="tap-target">
                All writing
              </Link>
            </p>
          )}
        </>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(jsonLd) }} />
    </div>
  );
}
