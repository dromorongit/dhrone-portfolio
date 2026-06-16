import { ImageResponse } from 'next/og'
import { getProjectBySlug } from '@/app/data/projects'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  const title = project?.title || 'Project'
  const category = project?.category || 'Web Platform'
  const color = project?.accentColor || '#6C63FF'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          backgroundColor: '#0A0A0F',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: 360, backgroundColor: `${color}22` }} />
        <div style={{ display: 'flex', padding: '8px 20px', borderRadius: 999, backgroundColor: '#111118', color: color, fontSize: 22, marginBottom: 28 }}>
          {category}
        </div>
        <div style={{ display: 'flex', fontSize: 60, fontWeight: 800, color: '#F5F5F5', maxWidth: 900 }}>
          {title}
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#A0A0B0', marginTop: 20 }}>
          By Narh H.P Dromor — DhroneTech Solutions
        </div>
      </div>
    ),
    { ...size }
  )
}