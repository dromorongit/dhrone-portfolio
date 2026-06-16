export interface LabProject {
  id: string
  title: string
  description: string
  status: 'Live' | 'Prototype' | 'In Progress'
  tech: string[]
  accentColor: string
}

export const labProjects: LabProject[] = [
  {
    id: 'palette-forge',
    title: 'Palette Forge',
    description: 'A color palette generator for designers — generates accessible, harmonious palettes from a single seed color.',
    status: 'Live',
    tech: ['React', 'Tailwind CSS'],
    accentColor: '#6C63FF',
  },
  {
    id: 'momo-calc',
    title: 'MoMo Fee Calculator',
    description: 'Quick calculator for mobile money transaction fees across MTN, AirtelTigo, and Telecel — built for everyday use in Ghana.',
    status: 'Live',
    tech: ['Next.js', 'TypeScript'],
    accentColor: '#FF6B6B',
  },
  {
    id: 'dumsor-watch',
    title: 'Dumsor Watch',
    description: 'A lighthearted power outage tracker concept that lets neighborhoods log and predict ECG load-shedding schedules.',
    status: 'Prototype',
    tech: ['React', 'Node.js'],
    accentColor: '#FFD93D',
  },
  {
    id: 'proverb-generator',
    title: 'Akan Proverb Generator',
    description: 'A fun little tool that surfaces random Akan proverbs with English translations — built to preserve and share local wisdom.',
    status: 'Live',
    tech: ['JavaScript', 'HTML/CSS'],
    accentColor: '#6C63FF',
  },
  {
    id: 'qr-forge',
    title: 'QR Forge',
    description: 'A minimal QR code generator with custom colors and logo embedding for business cards and flyers.',
    status: 'Live',
    tech: ['React', 'Canvas API'],
    accentColor: '#FF6B6B',
  },
  {
    id: 'md-to-pdf',
    title: 'Markdown to PDF',
    description: 'A simple browser tool that converts Markdown notes into clean, styled PDF documents — no installs required.',
    status: 'In Progress',
    tech: ['Next.js', 'jsPDF'],
    accentColor: '#FFD93D',
  },
]