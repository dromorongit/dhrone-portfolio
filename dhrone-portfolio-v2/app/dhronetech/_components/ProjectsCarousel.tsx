'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { dhronetechContent } from '@/app/data/dhronetech'
import { projects } from '@/app/data/projects'

interface ProjectCard {
  slug: string
  title: string
  label: string
  image: string
}

export default function ProjectsCarousel() {
  const { projects: projectsSection } = dhronetechContent
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projectData: ProjectCard[] = projectsSection.cards.map((config) => {
    const project = projects.find((p) => p.slug === config.slug)
    return {
      ...config,
      image: project?.image || '',
    }
  })

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) setCardsPerView(4)
      else if (window.innerWidth >= 768) setCardsPerView(2)
      else setCardsPerView(1)
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, projectData.length - cardsPerView)

  const scrollToIndex = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(clampedIndex)
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / projectData.length
      carouselRef.current.scrollTo({
        left: clampedIndex * cardWidth,
        behavior: 'smooth',
      })
    }
  }, [maxIndex, projectData.length])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const handleScroll = () => {
      const cardWidth = el.scrollWidth / projectData.length
      if (cardWidth <= 0) return
      const idx = Math.round(el.scrollLeft / cardWidth)
      const clamped = Math.max(0, Math.min(idx, maxIndex))
      setCurrentIndex(clamped)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [projectData.length, maxIndex])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollToIndex(currentIndex - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollToIndex(currentIndex + 1)
    }
  }

  return (
    <section
      id="projects"
      className="dt-section relative overflow-hidden"
      style={{ backgroundColor: 'var(--dt-navy-900)' }}
      aria-labelledby="projects-title"
      onKeyDown={handleKeyDown}
    >
      <div className="dt-container-lg">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          <div className="w-full max-w-lg min-w-0">
            <p className="dt-eyebrow">{projectsSection.eyebrow}</p>
            <h2 id="projects-title" className="dt-h1 mb-6">
              {projectsSection.h2[0]} <br />
              <span className="dt-h1-gold">{projectsSection.h2[1]}</span>
            </h2>
            <p className="dt-p-light mb-8">{projectsSection.paragraph}</p>
            <Link
              href={projectsSection.cta.href}
              className="dt-btn dt-btn-gold-outline"
            >
              {projectsSection.cta.label}
              <FiArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto scroll-snap-x mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              role="region"
              aria-label="Projects carousel"
              aria-roledescription="carousel"
            >
              {projectData.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="dt-card-glass flex-shrink-0 scroll-snap-start flex flex-col rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--dt-gold-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dt-navy-900)]"
                  style={{
                    width: `calc(100% / ${cardsPerView} - ${cardsPerView > 1 ? '1rem' : '0'})`,
                    minWidth: '280px',
                  }}
                  aria-label={`View ${project.title} project`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 p-4 bg-[rgba(6,18,46,0.7)] backdrop-blur-md border-t border-white/10">
                    <div className="min-w-0">
                      <h3 className="text-white text-[17px] font-semibold truncate">
                        {project.title}
                      </h3>
                      <p className="text-[#9BB5FF] text-[13px] truncate">
                        {project.label}
                      </p>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0">
                      <FiArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 mt-4">
              <div className="flex gap-1.5" role="tablist" aria-label="Project pagination">
                {projectData.slice(0, maxIndex + 1).map((__, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => scrollToIndex(index)}
                    className={`dt-dot ${index === currentIndex ? 'dt-dot-active' : ''}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollToIndex(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="dt-carousel-arrow"
                  aria-label="Previous project"
                  aria-disabled={currentIndex === 0}
                >
                  <FiChevronLeft size={18} />
                </button>
                <button
                  onClick={() => scrollToIndex(currentIndex + 1)}
                  disabled={currentIndex >= maxIndex}
                  className="dt-carousel-arrow"
                  aria-label="Next project"
                  aria-disabled={currentIndex >= maxIndex}
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


