'use client'

import { useEffect, useState } from 'react'
import { FiStar, FiGitBranch, FiBook, FiUsers, FiExternalLink } from 'react-icons/fi'

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  name: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  html_url: string
  topics: string[]
}

const langColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  default: '#6C63FF',
}

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'dromorongit'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`),
        ])
        const userData = await userRes.json()
        const reposData = await reposRes.json()
        setUser(userData)
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch (err) {
        console.error('GitHub fetch error:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])

  if (loading) {
    return (
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="h-8 w-16 rounded bg-[var(--surface-hover)] mb-2" />
                <div className="h-3 w-24 rounded bg-[var(--surface-hover)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Open Source</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>GitHub Activity</h2>
          </div>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer"
            className="btn-outline text-sm hidden sm:flex items-center gap-2">
            <FiExternalLink size={15} /> View Profile
          </a>
        </div>

        {/* Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {
              [
                { icon: FiBook, label: 'Repositories', value: user.public_repos, color: '#6C63FF' },
                { icon: FiUsers, label: 'Followers', value: user.followers, color: '#FF6B6B' },
                { icon: FiStar, label: 'Total Stars', value: repos.reduce((a, r) => a + r.stargazers_count, 0), color: '#FFD93D' },
                { icon: FiGitBranch, label: 'Total Forks', value: repos.reduce((a, r) => a + r.forks_count, 0), color: '#6C63FF' },
              ].map((stat) => (
                <div key={stat.label} className="card p-6 text-center">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${stat.color}20` }}>
                    <stat.icon size={16} style={{ color: stat.color }} />
                  </div>
                  <p className="text-2xl font-extrabold mb-1" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              ))
            }
          </div>
        )}

        {/* Top Repos */}
        {repos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.slice(0, 6).map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                className="card p-5 group block">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center">
                    <FiBook size={14} className="text-violet" />
                  </div>
                  <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1"><FiStar size={12} /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><FiGitBranch size={12} /> {repo.forks_count}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-violet transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {repo.name}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                  {repo.description || 'No description provided.'}
                </p>
                {repo.language && (
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColors[repo.language] || langColors.default }} />
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{repo.language}</span>
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}