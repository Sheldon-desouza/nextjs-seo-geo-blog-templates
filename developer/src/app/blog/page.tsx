import type { Metadata } from "next";
import { getStore } from "../../lib/site.ts";
import { PostIndex, TagFilterRow } from "../../components/post-index.tsx";

export const metadata: Metadata = {
  title: "Writing",
  alternates: { canonical: "blog" },
};

export default async function BlogIndexPage() {
  const posts = await getStore().list();

  return (
    <div className="measure">
      <h1>All writing</h1>
      {posts.length === 0 ? (
        <p className="home-bio">No posts yet. Check back soon for the first one.</p>
      ) : (
        <>
          <TagFilterRow posts={posts} />
          <section className="index-section">
            <PostIndex posts={posts} />
          </section>
        </>
      )}
    </div>
  );
}
