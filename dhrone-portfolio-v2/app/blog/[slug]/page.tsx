import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { mdxComponents } from '@/components/MDXComponents'
import PageWrapper from '@/components/PageWrapper'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm transition-colors mb-10" style={{ color: 'var(--text-muted)' }}>
            <FiArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: post.accentColor }} />

          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="pill text-xs">{tag}</span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-sm mb-12 pb-8 border-b" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
            <span className="flex items-center gap-1.5"><FiCalendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><FiClock size={14} /> {post.readTime}</span>
          </div>

          <article className="mb-20">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          <div className="card p-8 text-center mb-20">
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Enjoyed this post?</h2>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>Let&apos;s talk about your next project.</p>
            <Link href="/contact" className="btn-primary inline-flex">Get in Touch</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}