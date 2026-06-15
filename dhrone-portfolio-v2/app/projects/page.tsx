'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/app/data/projects'
import PageWrapper from '@/components/PageWrapper'

const categories = ['All', 'E-commerce Platform', 'Business Platform', 'Business Website', 'Desktop Application', 'Service Website', 'Personal Website']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
              Web <span className="text-gradient-violet">Platforms</span>
            </h1>
            <p className="text-textMuted max-w-xl">
              A showcase of modern, responsive websites and web applications built for clients across various industries.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-violet text-white'
                    : 'bg-surface border border-border text-textMuted hover:text-textPrimary'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {filtered.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}
                className="card p-6 group block">
                <div className="h-0.5 w-8 rounded mb-5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: project.accentColor }} />
                <div className="flex items-start justify-between mb-3">
                  <span className="pill text-xs">{project.category}</span>
                  <span className="text-xs text-textMuted">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-sm text-textMuted leading-relaxed mb-5">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="pill text-xs">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="pill text-xs">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color: project.accentColor }}>
                  View Project <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              { value: '12', label: 'Projects Showcased' },
              { value: '5+', label: 'Industries' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <p className="text-2xl font-extrabold text-gradient-violet mb-1">{s.value}</p>
                <p className="text-xs text-textMuted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}