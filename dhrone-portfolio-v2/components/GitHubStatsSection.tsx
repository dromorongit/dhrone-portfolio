'use client'

import { useEffect, useRef, useState } from 'react'
import type { ComponentType } from 'react'

function GitHubSkeleton() {
  return (
    <section className="section">
      <div className="container mx-auto px-6 min-h-[520px]">
        <div className="h-8 w-48 rounded-lg mb-10" style={{ backgroundColor: 'var(--surface-hover)' }} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse min-h-[132px]">
              <div className="h-8 w-16 rounded mb-2" style={{ backgroundColor: 'var(--surface-hover)' }} />
              <div className="h-3 w-24 rounded" style={{ backgroundColor: 'var(--surface-hover)' }} />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card p-5 animate-pulse min-h-[140px]">
              <div className="h-4 w-32 rounded mb-3" style={{ backgroundColor: 'var(--surface-hover)' }} />
              <div className="h-3 w-full rounded mb-2" style={{ backgroundColor: 'var(--surface-hover)' }} />
              <div className="h-3 w-2/3 rounded" style={{ backgroundColor: 'var(--surface-hover)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type StatsComponent = ComponentType<Record<string, never>>

export default function GitHubStatsSection() {
  const [isInView, setIsInView] = useState(false)
  const [Stats, setStats] = useState<StatsComponent | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const target = containerRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return
    let mounted = true
    import('@/components/GitHubStats')
      .then((mod) => {
        if (mounted) setStats(() => mod.default as StatsComponent)
      })
      .catch(() => {
        if (mounted) setStats(null)
      })
    return () => {
      mounted = false
    }
  }, [isInView])

  return (
    <div ref={containerRef}>
      {Stats ? <Stats /> : <GitHubSkeleton />}
    </div>
  )
}
