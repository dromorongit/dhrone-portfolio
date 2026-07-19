'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiPlay, FiMusic, FiTv, FiFilm, FiClock, FiX } from 'react-icons/fi'
import { videos, Video } from '@/app/data/videos'
import PageWrapper from '@/components/PageWrapper'

type Category = 'all' | 'music' | 'commercial'

const catColor = (cat: string) => cat === 'music' ? '#6C63FF' : '#FF6B6B'

function getYoutubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

function YouTubeModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
          aria-label="Close video"
        >
          <FiX size={28} />
        </button>
        <div className="relative w-full">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-white">{video.title}</h3>
          <p className="text-sm text-white/50 mt-1">{video.client} · {video.year}</p>
        </div>
      </div>
    </div>
  )
}

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selected, setSelected] = useState<Video | null>(null)

  const filtered = activeCategory === 'all' ? videos : videos.filter((v) => v.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All Videos', icon: FiFilm },
    { id: 'music', label: 'Music Videos', icon: FiMusic },
    { id: 'commercial', label: 'Commercials', icon: FiTv },
  ]

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold text-violet uppercase tracking-widest mb-3">Creative Work</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              Video <span className="text-gradient-violet">Portfolio</span>
            </h1>
            <p style={{ color: 'var(--text-muted)' }} className="max-w-xl">
              Professional video directing and editing for music videos and commercial content.
            </p>
          </div>

          <div className="flex gap-2 mb-10">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id as Category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === id
                    ? 'bg-violet text-white'
                    : 'bg-surface border border-border text-textMuted hover:text-textPrimary'
                }`}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {filtered.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelected(video)}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: 'var(--surface-hover)' }}>
                  <Image
                    src={getYoutubeThumbnail(video.youtubeId)}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${catColor(video.category)}CC` }}
                    >
                      <FiPlay size={22} className="text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className="pill text-xs"
                      style={{ color: catColor(video.category) }}
                    >
                      {video.category === 'music' ? 'Music Video' : 'Commercial'}
                      {video.isShort ? ' · Short' : ''}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span>{video.client}</span>
                    <div className="flex items-center gap-1">
                      <FiClock size={12} /> {video.duration}
                    </div>
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{video.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <YouTubeModal video={selected} onClose={() => setSelected(null)} />
      )}
    </PageWrapper>
  )
}