import Link from 'next/link'
import { FiClock, FiCalendar } from 'react-icons/fi'
import { getAllPosts } from '@/lib/blog'
import PageWrapper from '@/components/PageWrapper'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              Thoughts & <span className="text-gradient-violet">insights</span>
            </h1>
            <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
              Writing on software engineering, building for the Ghanaian market, and the creative process.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="card p-12 text-center mb-20">
              <p style={{ color: 'var(--text-muted)' }}>No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-6 group block">
                  <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: post.accentColor }} />
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="pill text-xs">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><FiCalendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><FiClock size={12} /> {post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}