'use client'

import { useState } from 'react'
import { Play, Music, Tv, Film, Clock, X } from 'lucide-react'
import { videos, Video } from '@/app/data/videos'
import PageWrapper from '@/components/PageWrapper'

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'music' | 'commercial'>('all')
  const [selected, setSelected] = useState<Video | null>(null)

  const filtered = activeCategory === 'all' ? videos : videos.filter((v) => v.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All Videos', icon: Film },
    { id: 'music', label: 'Music Videos', icon: Music },
    { id: 'commercial', label: 'Commercials', icon: Tv },
  ]

  const catColor = (cat: string) => cat === 'music' ? '#6C63FF' : '#FF6B6B'

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Creative Work</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-4">
              Video <span className="text-gradient-violet">Portfolio</span>
            </h1>
            <p className="text-textMuted max-w-xl">Professional video directing and editing for music videos and commercial content.</p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-10">
            {categories.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActiveCategory(id as 'all' | 'music' | 'commercial')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === id ? 'bg-violet text-white' : 'bg-surface border border-border text-textMuted hover:text-textPrimary'
                }`}>
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {filtered.map((video) => (
              <div key={video.id} onClick={() => video.videoFile && setSelected(video)}
                className={`card p-5 group ${video.videoFile ? 'cursor-pointer' : 'opacity-80'}`}>
                {/* Thumbnail area */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${catColor(video.category)}20, ${catColor(video.category)}08)`, border: `1px solid ${catColor(video.category)}20` }}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
                    style={{ backgroundColor: `${catColor(video.category)}30` }}>
                    <Play size={22} style={{ color: catColor(video.category) }} className="ml-0.5" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="pill text-xs" style={{ color: catColor(video.category) }}>
                      {video.category === 'music' ? 'Music Video' : 'Commercial'}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <h3 className="font-semibold text-textPrimary text-sm leading-snug mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-xs text-textMuted">
                  <span>{video.client}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} /> {video.duration}
                  </div>
                </div>
                <div className="text-xs text-textMuted mt-1">{video.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelected(null)}>
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors">
                <X size={28} />
              </button>
              <video src={`/videos/${selected.videoFile}`} controls autoPlay
                className="w-full rounded-xl" />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">{selected.title}</h3>
                <p className="text-sm text-white/50 mt-1">{selected.client} · {selected.year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  )
}