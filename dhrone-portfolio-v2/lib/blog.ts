import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_PATH = path.join(process.cwd(), 'content/blog')

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  accentColor: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_PATH)) return []
  const files = fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_PATH, filename), 'utf-8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      date: data.date || '',
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      accentColor: data.accentColor || '#6C63FF',
    } as BlogPostMeta
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || '',
    date: data.date || '',
    readTime: data.readTime || '5 min read',
    tags: data.tags || [],
    accentColor: data.accentColor || '#6C63FF',
    content,
  }
}