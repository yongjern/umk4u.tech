import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-MY", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | UMK4U" };
  }

  return {
    title: `${post.title} | UMK4U`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author]
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="site-header blog-header">
        <div className="shell header-inner">
          <Link className="skip-link" href="#article">Skip to article</Link>
          <Link className="brand" href="/" aria-label="UMK4U home">
            <Image className="brand-mark" src="/logo_hq.png" alt="" width={40} height={40} priority />
            <span className="brand-name">UMK4U</span>
          </Link>
          <nav aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/blog">Blog</Link></nav>
          <Link className="header-link" href="/blog"><ArrowLeft /> All posts</Link>
        </div>
      </header>

      <main className="article-page" id="article">
        <article>
          <header className="article-hero">
            <div className="shell article-hero-inner" data-enter>
              <time className="article-label" dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
              <h1>{post.title}</h1>
            </div>
          </header>
          <div className="shell article-layout">
            <div className="article-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>

      <footer className="blog-footer">
        <div className="shell"><Link href="/blog"><ArrowLeft /> Read all posts</Link><p>UMK4U · Independent student project</p></div>
      </footer>
    </>
  );
}