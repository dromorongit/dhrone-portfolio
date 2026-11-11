import { NextResponse } from 'next/server'

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

export const revalidate = 3600

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'dromorongit'

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`, { next: { revalidate: 3600 } }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ user: null, repos: [] as GitHubRepo[] }, { status: 200 })
    }

    const userData = await userRes.json()
    const reposData = await reposRes.json()

    const user: GitHubUser | null =
      userData && typeof userData.public_repos === 'number' ? (userData as GitHubUser) : null
    const repos: GitHubRepo[] = Array.isArray(reposData) ? (reposData as GitHubRepo[]) : []

    return NextResponse.json({ user, repos })
  } catch {
    return NextResponse.json({ user: null, repos: [] as GitHubRepo[] }, { status: 200 })
  }
}
