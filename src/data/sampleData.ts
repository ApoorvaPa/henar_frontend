export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  category: 'bridal' | 'party' | 'Festival' | 'Hobby';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'bridal' | 'party' | 'Festival' | 'Hobby';
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

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  masterCategory: 'bridal' | 'festival' | 'party' | 'hobby';
  subCategory: string;
  inStock: boolean;
  rating?: number;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'bridal',
    title: 'Bridal Mehndi',
    description: 'Exquisite bridal henna designs for your special day. Intricate patterns that tell your love story.',
    price: '₹5100 onwards',
    duration: '3-5 hours',
    features: [
      'Full hand and foot designs',
      'Custom pattern creation',
      'Bridal consultation',
      'Touch-up session included',
      'Premium henna paste'
    ],
    image: '/images/portfolio/bridalref.jpg',
    category: 'bridal'
  },
  {
    id: 'party',
    title: 'Party Mehndi',
    description: 'Beautiful designs perfect for celebrations, festivals, and special occasions.',
    price: '₹2,000-4,000',
    duration: '10 mins per hand',
    features: [
      'Hand designs',
      'Festival patterns',
      'Quick application',
      'Colorful options available',
      'Group bookings welcome'
    ],
    image: '/images/partyheader.jpg',
    category: 'party'
  },
  {
    id: 'Festival',
    title: 'Festival Mehndi',
    description: 'Elegant Festival-style henna designs with flowing patterns and geometric elements.',
    price: '₹3,200-6,000',
    duration: '1-2 hours',
    features: [
      'Karwa Chauth, Diwali, Holi, etc.',
      'Geometric designs',
      'Hand and arm coverage',
      'Professional application',
      'Special Discounts'
    ],
    image: '/images/festivalheader.jpeg',
    category: 'Festival'
  },
  {
    id: 'Hobby',
    title: 'Hobby Mehndi',
    description: 'Subtle, modern henna designs perfect for everyday wear or professional settings.',
    price: '₹1,200-2,400',
    duration: '30-60 minutes',
    features: [
      'Simple, elegant patterns',
      'Quick application',
      'Office-friendly designs',
      'Affordable pricing',
      'Easy maintenance'
    ],
    image: '/images/hobbyheader.jpg',
    category: 'Hobby'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Bridal Design',
    category: 'bridal',
    image: '/images/portfolio/bridal1.jpg',
    description: 'A stunning bridal design featuring intricate paisley patterns and floral motifs.',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Festival Celebration',
    category: 'party',
    image: '/images/festivalheader.jpeg',
    description: 'Colorful festival design perfect for Diwali celebrations.',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Festival Elegance',
    category: 'Festival',
    image: '/images/mehndigroup.jpg',
    description: 'Traditional Festival patterns with modern twist.',
    date: '2024-01-08'
  },
  {
    id: '4',
    title: 'Hobbyist Beauty',
    category: 'Hobby',
    image: '/images/hobbyheader.jpg',
    description: 'Simple yet elegant design for everyday wear.',
    date: '2024-01-05'
  },
  {
    id: '5',
    title: 'Grand Wedding Design',
    category: 'bridal',
    image: '/images/royalbridal.jpg',
    description: 'Elaborate bridal henna covering full arms and hands.',
    date: '2024-01-01'
  },
  {
    id: '6',
    title: 'Eid Celebration',
    category: 'party',
    image: '/images/eid.jpg',
    description: 'Beautiful Eid-themed henna design.',
    date: '2023-12-28'
  },
  {
    id: '7',
    title: 'Modern Festival',
    category: 'Festival',
    image: '/images/portfolio/Festival-2.jpg',
    description: 'Contemporary Festival patterns with geometric elements.',
    date: '2023-12-25'
  },
  {
    id: '8',
    title: 'Office Chic',
    category: 'Hobby',
    image: '/images/office.jpg',
    description: 'Professional-friendly Hobby design.',
    date: '2023-12-20'
  },
  {
    id: '9',
    title: 'Madhubani Bridal Design',
    category: 'bridal',
    
    image: '/images/madhubanibridal.jpg',
    description: 'A stunning bridal design featuring intricate paisley patterns and floral motifs.',
    date: '2024-01-15'
  },
  
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
    text: 'Perfect Festival mehndi design for my wedding. The patterns were intricate and beautiful. The henna lasted for weeks! Thank you for making my day special.',
    image: '/images/testimonials/sarah.jpg',
    service: 'Festival Mehndi'
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
    text: 'Love the Hobby designs! Perfect for my office environment. The artist understood exactly what I wanted and delivered beautifully. Professional and affordable.',
    image: '/images/testimonials/jennifer.jpg',
    service: 'Hobby Mehndi'
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
    text: 'Amazing Festival mehndi work! The artist was very skilled and the design was exactly what I envisioned. Highly professional service and beautiful results.',
    image: '/images/testimonials/lisa.jpg',
    service: 'Festival Mehndi'
  }
];

export const products: Product[] = [
  // ROYAL BRIDAL SUBCATEGORY
  {
    id: 'prod-1',
    name: 'Majestic Royal Bridal Design',
    description: 'Luxurious royal bridal mehndi with intricate paisley patterns, peacock motifs, and elegant borders perfect for a royal wedding celebration.',
    price: '₹8,500',
    originalPrice: '₹12,000',
    image: '/images/majestic.jpg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Imperial Royal Bridal Set',
    description: 'Complete royal bridal mehndi package covering both hands and feet with traditional royal motifs and contemporary elegance.',
    price: '₹10,000',
    image: '/images/imperial.jpg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Regal Royal Bridal Collection',
    description: 'Elaborate royal bridal mehndi with diamond patterns, floral cascades, and intricate geometric designs.',
    price: '₹9,500',
    image: '/images/regal.jpg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 4
  },

  // Festival BRIDAL SUBCATEGORY
  {
    id: 'prod-4',
    name: 'Elegant Festival Bridal Design',
    description: 'Beautiful Festival bridal mehndi with flowing patterns, elegant curves, and sophisticated geometric elements.',
    price: '₹6,500',
    image: '/images/elegant.jpg',
    masterCategory: 'bridal',
    subCategory: 'Festival Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-5',
    name: 'Floral Festival Bridal Set',
    description: 'Exquisite Festival bridal mehndi featuring delicate floral patterns and graceful lines perfect for modern brides.',
    price: '₹7,200',
    image: '/images/floralfestival.jpg',
    masterCategory: 'bridal',
    subCategory: 'Festival Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-6',
    name: 'Contemporary Festival Bridal',
    description: 'Modern Festival bridal mehndi design combining traditional Festival patterns with contemporary artistic elements.',
    price: '₹7,800',
    image: '/images/contemporary.jpg',
    masterCategory: 'bridal',
    subCategory: 'Festival Bridal',
    inStock: true,
    rating: 4
  },

  // MOROCCAN BRIDAL SUBCATEGORY
  {
    id: 'prod-7',
    name: 'Moroccan Geometric Bridal',
    description: 'Stunning Moroccan bridal mehndi with distinctive geometric patterns, bold lines, and traditional Moroccan motifs.',
    price: '₹7,500',
    image: '/images/moroccan.jpg',
    masterCategory: 'bridal',
    subCategory: 'Moroccan Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-8',
    name: 'Madhubani Bridal with Pattern',
    description: 'Intricate patter bridal mehndi featuring madhubani-inspired designs and beautiful symmetrical patterns.',
    price: '₹8,200',
    image: '/images/madhubanipattern.jpg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-9',
    name: 'Traditional Moroccan Bridal',
    description: 'Authentic Moroccan bridal mehndi design with traditional patterns and cultural significance.',
    price: '₹7,000',
    image: '/images/portfolio/bridal1.jpg',
    masterCategory: 'bridal',
    subCategory: 'Moroccan Bridal',
    inStock: true,
    rating: 4
  },

  // MADHUBANI BRIDAL SUBCATEGORY
  {
    id: 'prod-10',
    name: 'Madhubani Folk Bridal',
    description: 'Unique Madhubani bridal mehndi inspired by traditional Indian folk art with nature motifs and storytelling patterns.',
    price: '₹6,100',
    originalPrice: '₹11,000',
    image: '/images/madhubani.jpg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-11',
    name: 'Contemporary Madhubani Design',
    description: 'Modern interpretation of Madhubani art in bridal mehndi with fish, birds, and nature-inspired patterns.',
    price: '₹9,500',
    image: '/images/madhubani2.jpg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-12',
    name: 'Traditional Madhubani Bridal',
    description: 'Authentic Madhubani bridal mehndi featuring traditional geometric and figurative motifs.',
    price: '₹8,800',
    image: '/images/madhubani3.jpg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 4
  },

  // 3-D BRIDAL SUBCATEGORY
  {
    id: 'prod-13',
    name: '3D Dimensional Bridal Design',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹12,000',
    originalPrice: '₹15,000',
    image: '/images/3dbridal.jpg',
    masterCategory: 'bridal',
    subCategory: '3-D Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-14',
    name: '3D Raised Bridal Mehndi',
    description: 'Innovative 3D bridal mehndi with raised elements and dimensional patterns for a unique wedding look.',
    price: '₹11,500',
    image: '/images/3draised.jpg',
    masterCategory: 'bridal',
    subCategory: '3-D Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-15',
    name: '3D Textured Bridal Set',
    description: 'Premium 3D textured bridal mehndi with multiple layers creating depth and visual interest.',
    price: '₹13,000',
    image: '/images/3dnew.jpg',
    masterCategory: 'bridal',
    subCategory: '3-D Bridal',
    inStock: true,
    rating: 4
  },

  // RAJASTHANI BRIDAL SUBCATEGORY
  {
    id: 'prod-16',
    name: 'Rajasthani Traditional Bridal',
    description: 'Classic Rajasthani bridal mehndi with traditional motifs, elephant designs, and cultural patterns.',
    price: '₹8,500',
    image: '/images/rajasthani.jpg',
    masterCategory: 'bridal',
    subCategory: 'Rajasthani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-17',
    name: 'Normal Rajasthani Bridal',
    description: 'Magnificent Rajasthani bridal mehndi featuring detailed peacock motifs and traditional Rajasthani patterns.',
    price: '₹9,200',
    image: '/images/normal.jpg',
    masterCategory: 'bridal',
    subCategory: 'Rajasthani Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-18',
    name: 'Arabic Royal Bridal',
    description: 'Complete Rajasthani bridal mehndi package with hands, feet, and traditional Rajasthani designs.',
    price: '₹10,500',
    originalPrice: '₹13,000',
    image: '/images/arabicbridal.jpg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 4
  },

  // PAKISTANI BRIDAL SUBCATEGORY
  {
    id: 'prod-19',
    name: 'Pakistani Traditional Bridal',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹9,000',
    image: '/images/pakistani.jpg',
    masterCategory: 'bridal',
    subCategory: 'Pakistani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-20',
    name: 'Pakistani Dense Bridal Design',
    description: 'Elaborate Pakistani bridal mehndi with dense patterns, covering entire hands with beautiful traditional motifs.',
    price: '₹10,000',
    image: '/images/pakistani1.jpg',
    masterCategory: 'bridal',
    subCategory: 'Pakistani Bridal',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-21',
    name: 'Pakistani Floral Bridal',
    description: 'Elegant Pakistani bridal mehndi featuring delicate floral patterns and sophisticated designs.',
    price: '₹9,500',
    image: '/images/pakistani2.jpg',
    masterCategory: 'bridal',
    subCategory: 'Pakistani Bridal',
    inStock: true,
    rating: 4
  }
];
