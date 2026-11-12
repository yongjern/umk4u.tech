import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | UMK4U",
  description: "Product updates, campus guides, and notes from the UMK4U student project."
};

const dateFormatter = new Intl.DateTimeFormat("en-MY", {
  day: "2-digit",
  month: "2-digit",
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
            <h1><span>UMK4U.tech</span> News</h1>
          </div>
        </section>

        <section className="blog-list-section" id="posts">
          <div className="shell">
            <div className="blog-list-heading" aria-hidden="true">
              <span>Title</span>
              <span>Published</span>
            </div>
            <div className="post-list">
              {posts.length === 0 ? (
                <p className="empty-posts">No posts have been published yet.</p>
              ) : posts.map((post) => (
                <article className="post-row" key={post.slug}>
                  <div className="post-row-copy">
                    <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                    <span className="post-row-leader" aria-hidden="true" />
                    <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                  </div>
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