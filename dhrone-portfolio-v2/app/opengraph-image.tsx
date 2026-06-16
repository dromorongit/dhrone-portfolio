import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0F',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: 400, backgroundColor: 'rgba(108,99,255,0.15)' }} />
        <div style={{ position: 'absolute', bottom: -120, right: -120, width: 400, height: 400, borderRadius: 400, backgroundColor: 'rgba(255,107,107,0.12)' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 20, backgroundColor: '#6C63FF', marginBottom: 36 }}>
          <span style={{ color: 'white', fontSize: 32, fontWeight: 700 }}>&lt;/&gt;</span>
        </div>

        <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, color: '#F5F5F5' }}>
          <span>Narh&nbsp;H.P&nbsp;</span>
          <span style={{ color: '#6C63FF' }}>Dromor</span>
        </div>

        <div style={{ fontSize: 26, color: '#A0A0B0', marginTop: 18 }}>
          Software Engineer &amp; Creative Technologist
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          {['React', 'Next.js', 'Node.js', 'TypeScript'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                backgroundColor: '#111118',
                color: '#A0A0B0',
                fontSize: 20,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}