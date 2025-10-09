export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  category: 'bridal' | 'party' | 'arabic' | 'minimal';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'party' | 'arabic' | 'minimal';
  image: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  service: string;
}

export const services: Service[] = [
  {
    id: 'bridal',
    title: 'Bridal Mehndi',
    description: 'Exquisite bridal henna designs for your special day. Intricate patterns that tell your love story.',
    price: '$150-300',
    duration: '3-5 hours',
    features: [
      'Full hand and foot designs',
      'Custom pattern creation',
      'Bridal consultation',
      'Touch-up session included',
      'Premium henna paste'
    ],
    image: '/images/bridal-mehndi.jpg',
    category: 'bridal'
  },
  {
    id: 'party',
    title: 'Party Mehndi',
    description: 'Beautiful designs perfect for celebrations, festivals, and special occasions.',
    price: '$50-100',
    duration: '1-2 hours',
    features: [
      'Hand or foot designs',
      'Festival patterns',
      'Quick application',
      'Colorful options available',
      'Group bookings welcome'
    ],
    image: '/images/party-mehndi.jpg',
    category: 'party'
  },
  {
    id: 'arabic',
    title: 'Arabic Mehndi',
    description: 'Elegant Arabic-style henna designs with flowing patterns and geometric elements.',
    price: '$80-150',
    duration: '2-3 hours',
    features: [
      'Traditional Arabic patterns',
      'Geometric designs',
      'Hand and arm coverage',
      'Professional application',
      'Long-lasting results'
    ],
    image: '/images/arabic-mehndi.jpg',
    category: 'arabic'
  },
  {
    id: 'minimal',
    title: 'Minimal Mehndi',
    description: 'Subtle, modern henna designs perfect for everyday wear or professional settings.',
    price: '$30-60',
    duration: '30-60 minutes',
    features: [
      'Simple, elegant patterns',
      'Quick application',
      'Office-friendly designs',
      'Affordable pricing',
      'Easy maintenance'
    ],
    image: '/images/minimal-mehndi.jpg',
    category: 'minimal'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Bridal Design',
    category: 'bridal',
    image: '/images/portfolio/bridal-1.jpg',
    description: 'A stunning bridal design featuring intricate paisley patterns and floral motifs.',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Festival Celebration',
    category: 'party',
    image: '/images/portfolio/party-1.jpg',
    description: 'Colorful festival design perfect for Diwali celebrations.',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Arabic Elegance',
    category: 'arabic',
    image: '/images/portfolio/arabic-1.jpg',
    description: 'Traditional Arabic patterns with modern twist.',
    date: '2024-01-08'
  },
  {
    id: '4',
    title: 'Minimalist Beauty',
    category: 'minimal',
    image: '/images/portfolio/minimal-1.jpg',
    description: 'Simple yet elegant design for everyday wear.',
    date: '2024-01-05'
  },
  {
    id: '5',
    title: 'Grand Wedding Design',
    category: 'bridal',
    image: '/images/portfolio/bridal-2.jpg',
    description: 'Elaborate bridal henna covering full arms and hands.',
    date: '2024-01-01'
  },
  {
    id: '6',
    title: 'Eid Celebration',
    category: 'party',
    image: '/images/portfolio/party-2.jpg',
    description: 'Beautiful Eid-themed henna design.',
    date: '2023-12-28'
  },
  {
    id: '7',
    title: 'Modern Arabic',
    category: 'arabic',
    image: '/images/portfolio/arabic-2.jpg',
    description: 'Contemporary Arabic patterns with geometric elements.',
    date: '2023-12-25'
  },
  {
    id: '8',
    title: 'Office Chic',
    category: 'minimal',
    image: '/images/portfolio/minimal-2.jpg',
    description: 'Professional-friendly minimal design.',
    date: '2023-12-20'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'New York, NY',
    rating: 5,
    text: 'Absolutely stunning work! The bridal mehndi design was beyond my expectations. The artist was professional, punctual, and incredibly talented. Highly recommended!',
    image: '/images/testimonials/priya.jpg',
    service: 'Bridal Mehndi'
  },
  {
    id: '2',
    name: 'Sarah Ahmed',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Perfect Arabic mehndi design for my wedding. The patterns were intricate and beautiful. The henna lasted for weeks! Thank you for making my day special.',
    image: '/images/testimonials/sarah.jpg',
    service: 'Arabic Mehndi'
  },
  {
    id: '3',
    name: 'Maya Patel',
    location: 'Chicago, IL',
    rating: 5,
    text: 'Great experience for our Diwali party! The artist was friendly and created beautiful designs for all of us. Will definitely book again for future celebrations.',
    image: '/images/testimonials/maya.jpg',
    service: 'Party Mehndi'
  },
  {
    id: '4',
    name: 'Jennifer Kim',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Love the minimal designs! Perfect for my office environment. The artist understood exactly what I wanted and delivered beautifully. Professional and affordable.',
    image: '/images/testimonials/jennifer.jpg',
    service: 'Minimal Mehndi'
  },
  {
    id: '5',
    name: 'Fatima Ali',
    location: 'Houston, TX',
    rating: 5,
    text: 'Exceptional bridal mehndi service! The design was unique and the application was flawless. Made my wedding day even more memorable. Thank you!',
    image: '/images/testimonials/fatima.jpg',
    service: 'Bridal Mehndi'
  },
  {
    id: '6',
    name: 'Lisa Johnson',
    location: 'Miami, FL',
    rating: 5,
    text: 'Amazing Arabic mehndi work! The artist was very skilled and the design was exactly what I envisioned. Highly professional service and beautiful results.',
    image: '/images/testimonials/lisa.jpg',
    service: 'Arabic Mehndi'
  }
];
