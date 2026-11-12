import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | UMK4U",
  description: "Product updates, campus guides, and notes from the UMK4U student project."
};

const dateFormatter = new Intl.DateTimeFormat("en-MY", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <header className="site-header blog-header">
        <div className="shell header-inner">
          <Link className="skip-link" href="#posts">Skip to posts</Link>
          <Link className="brand" href="/" aria-label="UMK4U home">
            <Image className="brand-mark" src="/logo_hq.png" alt="" width={40} height={40} priority />
            <span className="brand-name">UMK4U</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/blog" aria-current="page">Blog</Link>
          </nav>
          <Link className="header-link" href="/"><ArrowLeft /> Back home</Link>
        </div>
      </header>

      <main className="blog-page">
        <section className="blog-hero">
          <div className="shell blog-hero-inner" data-enter>
            <p className="kicker">Notes from an independent student project</p>
            <h1>The UMK4U<br />blog.</h1>
            <p>Product updates, practical campus guides, and what we learn while building tools for UMK students.</p>
            <span className="blog-count">{String(posts.length).padStart(2, "0")} articles</span>
          </div>
        </section>

        <section className="blog-list-section" id="posts">
          <div className="shell">
            <div className="blog-list-heading">
              <p className="section-number">Latest writing</p>
              <h2>All posts</h2>
            </div>
            <div className="post-list">
              {posts.length === 0 ? (
                <p className="empty-posts">No posts have been published yet.</p>
              ) : posts.map((post, index) => (
                <article className="post-row" key={post.slug}>
                  <span className="post-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="post-row-copy">
                    <div className="post-meta">
                      <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                      <span><Clock3 /> {post.readingTime} min read</span>
                    </div>
                    <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p>{post.description}</p>
                    <div className="post-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <Link className="post-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><ArrowUpRight /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="blog-footer">
        <div className="shell">
          <Link className="brand" href="/"><Image className="brand-mark" src="/logo_hq.png" alt="" width={40} height={40} /><span className="brand-name">UMK4U</span></Link>
          <p>Independent student project · Not an official UMK service</p>
        </div>
      </footer>
    </>
  );
}