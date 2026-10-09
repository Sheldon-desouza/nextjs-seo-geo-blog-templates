import Link from "next/link";
import { getStore } from "../lib/site.ts";
import { authorName, authorUrl, sameAsUrls, siteName, siteUrl } from "../lib/site.ts";
import { serialiseJsonLd } from "../lib/scatterpost/safe-html.ts";
import { readingTime } from "../lib/reading-time.ts";
import { BIO, SOCIAL_LINKS } from "../lib/config.ts";
import { PostIndex } from "../components/PostIndex.tsx";
import { postPath } from "../lib/scatterpost/post-paths.ts";
import { withBasePath } from "../lib/scatterpost/post-paths.ts";

export default async function HomePage() {
  const posts = await getStore().list();
  const [featured, ...rest] = posts;
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
          {featured ? (
            <Link
              href={postPath(featured.slug)}
              className={`featured-post${featured.cover ? " featured-post-with-cover" : ""}`}
            >
              {featured.cover ? (
                <div className="featured-cover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.cover} alt={featured.coverAlt ?? featured.title} width={600} height={400} referrerPolicy="no-referrer" />
                </div>
              ) : null}
              <div className="featured-body">
                <p className="featured-kicker">
                  Latest &middot;{" "}
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>{" "}
                  &middot; {readingTime(featured.bodyMarkdown)}
                </p>
                <h2>{featured.title}</h2>
                {featured.description ? <p>{featured.description}</p> : null}
              </div>
            </Link>
          ) : null}

          <section className="index-section">
            <h2>All writing</h2>
            <PostIndex posts={rest.length > 0 ? rest : posts} />
          </section>
        </>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiseJsonLd(jsonLd) }} />
    </div>
  );
}
