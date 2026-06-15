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
    id: 1,
    name: 'Netyark Mall Team',
    role: 'E-commerce Client',
    company: 'Netyark Mall',
    text: 'Dhrone delivered an exceptional e-commerce platform that transformed our business. The attention to detail and the quality of the code was outstanding. Our sales increased significantly after the launch.',
    accentColor: '#6C63FF',
    initials: 'NM',
  },
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
    id: 4,
    name: 'Rezar Aluminium',
    role: 'Manufacturing Client',
    company: 'Rezar Aluminium Company',
    text: 'Professional, fast, and highly skilled. Dhrone built us a modern business website that truly represents our brand. The project was completed on time and exceeded our expectations.',
    accentColor: '#6C63FF',
    initials: 'RA',
  },
  {
    id: 5,
    name: 'Sweet Treets',
    role: 'E-commerce Client',
    company: 'SweetTreets',
    text: 'Dhrone created an amazing online store for us. The design is clean, the checkout process is smooth, and our customers keep complimenting how easy it is to shop. Best investment we made.',
    accentColor: '#FF6B6B',
    initials: 'ST',
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