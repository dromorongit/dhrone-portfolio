import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiCalendar, FiUser, FiTag } from 'react-icons/fi'
import { projects, getProjectBySlug } from '@/app/data/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        {/* Back */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-textPrimary transition-colors mb-10">
          <FiArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Accent line */}
        <div className="h-1 w-16 rounded-full mb-8" style={{ backgroundColor: project.accentColor }} />

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="pill mb-4 inline-block">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-4">{project.title}</h1>
            <p className="text-textMuted leading-relaxed mb-8">{project.description}</p>
            {project.websiteUrl !== '#' && (
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex">
                Visit Website <FiExternalLink size={15} />
              </a>
            )}
          </div>

          <div className="space-y-4">
            {[
{ icon: FiUser, label: 'Client', value: project.client },
               { icon: FiTag, label: 'Role', value: project.role },
               { icon: FiCalendar, label: 'Year', value: project.year },
            ].map((item) => (
              <div key={item.label} className="card p-4 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-violet" />
                </div>
                <div>
                  <p className="text-xs text-textMuted mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-textPrimary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-lg font-bold text-textPrimary mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full text-sm font-medium bg-surface border border-border text-textMuted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex justify-between border-t border-border pt-8 mb-20">
          <Link href="/projects" className="btn-outline text-sm">
            <FiArrowLeft size={15} /> All Projects
          </Link>
          {project.websiteUrl !== '#' && (
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Live Site <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}