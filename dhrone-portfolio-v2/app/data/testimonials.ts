export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  text: string
  accentColor: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: 2,
    name: 'Naaso Travels Team',
    role: 'Travel Agency Client',
    company: 'Naaso Travels & Tours',
    text: 'Working with Dhrone was an absolute pleasure. He understood our vision immediately and built a beautiful, functional website for our Hajj and Umrah pilgrimage services. Highly recommend!',
    accentColor: '#FF6B6B',
    initials: 'NT',
  },
  {
    id: 3,
    name: 'Hair Elevation Studios',
    role: 'Beauty & E-commerce Client',
    company: 'Hair Elevation Studios',
    text: 'The website Dhrone built for us is stunning. It perfectly captures our brand aesthetic and the booking system works flawlessly. Our clients love the new experience.',
    accentColor: '#FFD93D',
    initials: 'HE',
  },
  {
    id: 6,
    name: 'Blaq Mili',
    role: 'Music Video Client',
    company: 'Independent Artist',
    text: 'The music video Dhrone directed for KaakaaMotobi was incredible. His creative vision and technical skills behind the camera brought our song to life in ways we never imagined.',
    accentColor: '#FFD93D',
    initials: 'BM',
  },
]