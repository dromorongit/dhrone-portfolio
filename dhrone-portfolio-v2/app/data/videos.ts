export interface Video {
  id: number
  title: string
  category: 'music' | 'commercial'
  duration: string
  client: string
  year: string
  videoFile?: string
}

export const videos: Video[] = [
  { id: 1, title: 'Blaq Mili ft Trust Bravo & Kweku Mortey — KaakaaMotobi', category: 'music', duration: '4:32', client: 'Blaq Mili', year: '2021', videoFile: 'kaakaamotobimusicvideo.mp4' },
  { id: 2, title: 'Yhaw Fhlexkid — Broken Heart Official Music Video', category: 'music', duration: '3:55', client: 'Yhaw Fhlexkid', year: '2022', videoFile: 'brokenheartmusicvideo.mp4' },
  { id: 3, title: 'Lipssy J — Dorkordorkor', category: 'music', duration: '3:45', client: 'Lipssy J', year: '2022', videoFile: 'dorkordorkormusicvideo.mp4' },
  { id: 4, title: 'Netyark Mall December Sales', category: 'commercial', duration: '1:30', client: 'Netyark Mall', year: '2022' },
  { id: 5, title: 'Netyark Mall Easter Sales', category: 'commercial', duration: '1:15', client: 'Netyark Mall', year: '2023' },
  { id: 6, title: "Anna's Body Treat — Sex Enhancements Product Video", category: 'commercial', duration: '2:15', client: "Anna's Body Treat", year: '2023', videoFile: 'annasexvid.mp4' },
  { id: 7, title: "Anna's Body Treat — Stretchmarks Product Video", category: 'commercial', duration: '3:20', client: "Anna's Body Treat", year: '2023', videoFile: 'annasstretchmarkvideo.mp4' },
  { id: 8, title: 'Mekgina Herbal Centre', category: 'commercial', duration: '1:45', client: 'Mekgina Herbal Centre', year: '2024', videoFile: 'mekginaherbalcentrevideo.mp4' },
  { id: 9, title: 'Misneat Akwaaba Video', category: 'commercial', duration: '2:30', client: 'Misneat', year: '2024', videoFile: 'misneatakwaabavideo.mp4' },
  { id: 10, title: 'Netyark Commercial', category: 'commercial', duration: '0:45', client: 'Netyark Mall', year: '2024', videoFile: 'netyarkcommercial.mp4' },
  { id: 11, title: 'Veritas International School End of Year Video', category: 'commercial', duration: '3:15', client: 'Veritas International School', year: '2024', videoFile: 'veritasendofyearvideo.mp4' },
  { id: 12, title: 'Netyark Mall 3 Years Anniversary', category: 'commercial', duration: '2:00', client: 'Netyark Mall', year: '2025', videoFile: 'netyarkmallanniversary3yrsvideo.mp4' },
]