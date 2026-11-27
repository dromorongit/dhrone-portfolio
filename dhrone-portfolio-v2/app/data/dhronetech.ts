export interface DhronetechContent {
  hero: {
    eyebrow: string
    h1: [string, string]
    paragraph: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    trustBadges: Array<{ label: string[]; icon: string }>
  }
  services: {
    eyebrow: string
    h2: string
    paragraph: string
    cta: { label: string; href: string }
    tiles: Array<{
      title: string
      text: string
      iconColor: 'blue' | 'purple' | 'green' | 'pink' | 'orange'
      icon: string
      href?: string
    }>
  }
  about: {
    eyebrow: string
    h2: string
    paragraph: string
    link: { label: string; href: string }
    whyChoose: {
      title: string
      items: string[]
    }
  }
  projects: {
    eyebrow: string
    h2: [string, string]
    paragraph: string
    cta: { label: string; href: string }
    cards: Array<{ slug: string; title: string; label: string }>
  }
  founder: {
    eyebrow: string
    name: string
    text: string
    cta: { label: string; href: string }
  }
  testimonial: {
    eyebrow: string
    quote: string
    attribution: string
  }
  contact: {
    title: string
    text: string
    rows: Array<{ icon: string; text: string; href: string }>
    cta: { label: string; href: string }
  }
  footer: {
    centerLinks: Array<{ label: string; href: string }>
    socialLinks: Array<{ icon: string; href: string; label: string }>
  }
  assets: {
    hero: string
    building: string
    contactBg: string
    founder: string
  }
}

export const dhronetechContent: DhronetechContent = {
  hero: {
    eyebrow: 'DHRONETECH SOLUTIONS',
    h1: ['Your Vision.', 'Technology.'],
    paragraph: 'We build, manage and grow digital solutions that help businesses operate smarter, compete better and achieve more.',
    primaryCta: { label: "Explore Our Services", href: '#services' },
    secondaryCta: { label: 'About Us', href: '#about' },
    trustBadges: [
      { label: ['Innovative', 'Solutions'], icon: 'rocket' },
      { label: ['Reliable', 'Partner'], icon: 'shield-check' },
      { label: ['Client Focused'], icon: 'users' },
      { label: ['Results Driven'], icon: 'bar-chart' },
    ],
  },
  services: {
    eyebrow: 'OUR SERVICES',
    h2: 'Comprehensive Digital Solutions',
    paragraph: 'From ideation to execution, we deliver cutting-edge technology solutions tailored to your needs.',
    cta: { label: 'Discover All Services', href: '/services' },
    tiles: [
      { title: 'Web Development', text: 'Build powerful web experiences.', iconColor: 'blue', icon: 'code' },
      { title: 'Mobile App Development', text: 'Create engaging mobile applications.', iconColor: 'purple', icon: 'smartphone' },
      { title: 'Desktop Software Development', text: 'Enhance productivity with custom software.', iconColor: 'blue', icon: 'laptop' },
      { title: 'Backend & Business Systems', text: 'Build scalable business systems.', iconColor: 'green', icon: 'bar-chart' },
      { title: 'Social Media Management', text: 'Grow your brand online.', iconColor: 'pink', icon: 'megaphone' },
      { title: 'Creative & Visual Production', text: 'Bring your ideas to life.', iconColor: 'orange', icon: 'video' },
      { title: 'The School of DhroneTech', text: 'Learn. Build. Innovate.', iconColor: 'green', icon: 'graduation-cap', href: '/academy' },
    ],
  },
  about: {
    eyebrow: 'ABOUT DHRONETECH SOLUTIONS',
    h2: 'A Technology Partner for a Digital Future',
    paragraph: 'DhroneTech Solutions is a forward-thinking technology company committed to delivering innovative and reliable digital solutions. We help individuals, startups and organisations harness the power of technology.',
    link: { label: 'Learn More', href: '#contact' },
    whyChoose: {
      title: 'Why Choose DhroneTech?',
      items: [
        'Innovative & Cutting-Edge Solutions',
        'Experienced & Skilled Team',
        'Client-Centric Approach',
        'On-Time Delivery',
        'Long-Term Support',
      ],
    },
  },
  projects: {
    eyebrow: 'OUR PROJECTS',
    h2: ['Solutions', 'That Deliver'],
    paragraph: 'Explore some of our successful projects and the impact we\'ve made.',
    cta: { label: 'View Our Portfolio', href: '/projects' },
    cards: [
      { slug: 'dhream-market', title: 'Dhream Market', label: 'E-commerce Platform' },
      { slug: 'nedhub-ghana', title: 'Nedhub Ghana', label: 'Digital Services' },
      { slug: 'opulenport-trading', title: 'OpulenPort Trading', label: 'Corporate Website' },
      { slug: 'naaso-travels', title: 'Naaso Travels & Tours', label: 'Travel Booking' },
    ],
  },
  founder: {
    eyebrow: 'OUR FOUNDER & CEO',
    name: 'Narh H.P. Dromor',
    text: 'A Software Engineer, Creative Technologist and Entrepreneur, leading the innovation journey at DhroneTech Solutions.',
    cta: { label: 'Learn More', href: '/about' },
  },
  testimonial: {
    eyebrow: 'WHAT OUR CLIENTS SAY',
    quote: 'DhroneTech delivered beyond our expectations. Their professionalism, creativity and technical expertise are truly world-class.',
    attribution: 'A Valued Client',
  },
  contact: {
    title: "Let's Build Together",
    text: 'Have a project in mind? Let\'s turn your ideas into reality with technology.',
    rows: [
      { icon: 'phone', text: '0596522239', href: 'tel:+233596522239' },
      { icon: 'mail', text: 'business.dhrone@gmail.com', href: 'mailto:business.dhrone@gmail.com' },
    ],
    cta: { label: 'Get in Touch', href: '/contact' },
  },
  footer: {
    centerLinks: [
      { label: 'Home', href: '/dhronetech' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Our Work', href: '#projects' },
      { label: 'The School of DhroneTech', href: '/academy' },
      { label: 'Contact', href: '#contact' },
    ],
    socialLinks: [
      { icon: 'linkedin', href: '', label: 'LinkedIn' },
      { icon: 'youtube', href: '', label: 'YouTube' },
      { icon: 'facebook', href: '', label: 'Facebook' },
      { icon: 'x', href: '', label: 'X' },
      { icon: 'instagram', href: 'https://instagram.com/iamdhrone', label: 'Instagram' },
    ],
  },
  assets: {
    hero: '/images/dhronetech/heroimage.jpg',
    building: '/images/dhronetech/dhronetechbuilding.jpg',
    contactBg: '/images/dhronetech/contactbg.jpg',
    founder: '/images/dhrone.jpg',
  },
}