import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  readingTime: number;
};

function requireText(value: unknown, field: string, fileName: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Blog post ${fileName} requires a non-empty "${field}" field.`);
  }

  return value;
}

function readPost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(blogDirectory, fileName), "utf8");
  const { data, content } = matter(source);
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: requireText(data.title, "title", fileName),
    description: requireText(data.description, "description", fileName),
    date: requireText(data.date, "date", fileName),
    author: requireText(data.author, "author", fileName),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
    readingTime: Math.max(1, Math.ceil(wordCount / 220))
  };
}

export function getAllPosts() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .sort((first, second) => Date.parse(second.date) - Date.parse(first.date));
}

export function getPostBySlug(slug: string) {
  const safeSlug = path.basename(slug);
  const fileName = `${safeSlug}.md`;

  if (safeSlug !== slug || !fs.existsSync(path.join(blogDirectory, fileName))) {
    return null;
  }

  return readPost(fileName);
}