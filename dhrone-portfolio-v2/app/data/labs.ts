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
    id: 'healthbox',
    title: 'HealthBox Mobile App',
    description: 'A comprehensive health and wellness mobile application for tracking personal health metrics, appointments, medications, and connecting patients with healthcare providers across Ghana.',
    status: 'In Progress',
    tech: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    accentColor: '#6C63FF',
  },
  {
    id: 'dhreampay',
    title: 'DhreamPay',
    description: 'A Visa Card and VIP Transaction Reconciliation and Settlement System built for banking institutions. Features per-bank isolated deployments, real-time transaction tracking, and automated reconciliation workflows.',
    status: 'In Progress',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Railway'],
    accentColor: '#FF6B6B',
  },
  {
    id: 'edubox',
    title: 'EduBox',
    description: 'A modern school management platform designed for Ghanaian educational institutions. Covers student records, attendance, grades, fee management, and parent-teacher communication in one unified system.',
    status: 'In Progress',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    accentColor: '#FFD93D',
  },
  {
    id: 'mohee-homes',
    title: 'Mohee Homes System',
    description: 'A premium smart home SaaS platform with Ghana-specific features including Dumsor Manager, Smart Water Tank Monitor, WhatsApp Bot control, ECG bill prediction, solar integration, and multi-property management for homeowners, hotels, and Airbnb properties.',
    status: 'In Progress',
    tech: ['Next.js', 'React Native', 'Socket.IO', 'MQTT', 'TimescaleDB', 'Redis'],
    accentColor: '#6C63FF',
  },
  {
    id: 'bundleguard',
    title: 'BundleGuard Mobile App',
    description: 'A smart mobile data bundle management app for Ghanaian users. Monitors real-time data usage, blocks background data drains, enforces bundle limits, and sends alerts before bundles run out — keeping users in control of their data spend.',
    status: 'In Progress',
    tech: ['React Native', 'Expo', 'TypeScript', 'Chrome Extension'],
    accentColor: '#FF6B6B',
  },
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
    description: 'A fun little tool that surfaces random Akan proverbs with English translations — built to preserve and share local wisdom. ',
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
