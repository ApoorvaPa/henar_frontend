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
    image: '/images/madhubani2.jpg',
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
    image: '/images/coverbridal.jpeg',
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
    rating: 5,
    text: 'Absolutely stunning work! The bridal mehndi design was beyond my expectations. The artist was professional, punctual, and incredibly talented. Highly recommended!',
    image: '/images/testimonials/priya.jpg',
    service: 'Bridal Mehndi'
  },
  {
    id: '2',
    name: 'Sarah Ahmed',
    rating: 5,
    text: 'Perfect Festival mehndi design for my wedding. The patterns were intricate and beautiful. The henna lasted for weeks! Thank you for making my day special.',
    image: '/images/testimonials/sarah.jpg',
    service: 'Festival Mehndi'
  },
  {
    id: '3',
    name: 'Maya Patel',
    rating: 5,
    text: 'Great experience for our Diwali party! The artist was friendly and created beautiful designs for all of us. Will definitely book again for future celebrations.',
    image: '/images/testimonials/maya.jpg',
    service: 'Party Mehndi'
  },
  {
    id: '4',
    name: 'Jennifer Kim',
    rating: 5,
    text: 'Love the Hobby designs! Perfect for my office environment. The artist understood exactly what I wanted and delivered beautifully. Professional and affordable.',
    image: '/images/testimonials/jennifer.jpg',
    service: 'Hobby Mehndi'
  },
  {
    id: '5',
    name: 'Fatima Ali',
    rating: 5,
    text: 'Exceptional bridal mehndi service! The design was unique and the application was flawless. Made my wedding day even more memorable. Thank you!',
    image: '/images/testimonials/fatima.jpg',
    service: 'Bridal Mehndi'
  },
  {
    id: '6',
    name: 'Lisa Johnson',
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
  },

  // FESTIVAL MEHNDI - DIWALI SUBCATEGORY
  {
    id: 'prod-22',
    name: 'Diwali Celebration Mehndi',
    description: 'Beautiful Diwali mehndi design with traditional patterns, diya motifs, and festive elements perfect for the festival of lights.',
    price: '₹2,100',
    originalPrice: '₹4,500',
    image: '/images/diwali1.jpeg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-23',
    name: 'Traditional Diwali Design',
    description: 'Classic Diwali mehndi featuring intricate patterns, lotus motifs, and elegant borders for festive celebrations.',
    price: '₹1,100',
    originalPrice: '₹5,500',
    image: '/images/diwali2.jpeg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 4
  },

  // FESTIVAL MEHNDI - KARWA CHAUTH SUBCATEGORY
  {
    id: 'prod-24',
    name: 'Karwa Chauth Special Mehndi',
    description: 'Elegant Karwa Chauth mehndi design with moon motifs, traditional patterns, and romantic elements for this special occasion.',
    price: '₹4,000',
    image: '/images/elegant.jpg',
    masterCategory: 'festival',
    subCategory: 'Karwa Chauth',
    inStock: true,
    rating: 5,
    featured: true
  },

  // FESTIVAL MEHNDI - HOLI SUBCATEGORY
  {
    id: 'prod-25',
    name: 'Holi Festival Mehndi',
    description: 'Vibrant Holi mehndi design with colorful patterns, playful motifs, and festive elements perfect for the spring festival.',
    price: '₹1,100',
    image: '/images/diwali3.jpeg',
    masterCategory: 'festival',
    subCategory: 'Holi Festival',
    inStock: true,
    rating: 4
  },

  // FESTIVAL MEHNDI - EID SUBCATEGORY
  {
    id: 'prod-26',
    name: 'Eid Celebration Mehndi',
    description: 'Beautiful Eid mehndi design with traditional Islamic patterns, geometric motifs, and elegant designs for Eid celebrations.',
    price: '₹1,100',
    image: '/images/eid1.jpeg',
    masterCategory: 'festival',
    subCategory: 'Eid Festival',
    inStock: true,
    rating: 5
  },

  // PARTY MEHNDI - WEDDING PARTY SUBCATEGORY
  {
    id: 'prod-27',
    name: 'Wedding Party Mehndi',
    description: 'Stunning wedding party mehndi design with elegant patterns perfect for wedding celebrations and sangeet ceremonies.',
    price: '₹1,100',
    originalPrice: '₹4,000',
    image: '/images/party1.jpeg',
    masterCategory: 'party',
    subCategory: 'Wedding Party',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-28',
    name: 'Sangeet Party Design',
    description: 'Beautiful sangeet party mehndi with dance motifs, musical patterns, and celebration-themed designs.',
    price: '₹1,100',
    image: '/images/party2.jpeg',
    masterCategory: 'party',
    subCategory: 'Wedding Party',
    inStock: true,
    rating: 4
  },

  // PARTY MEHNDI - BIRTHDAY PARTY SUBCATEGORY
  {
    id: 'prod-29',
    name: 'Birthday Party Mehndi',
    description: 'Fun and festive birthday party mehndi design with playful patterns and celebratory motifs perfect for birthday celebrations.',
    price: '₹1,100',
    image: '/images/party3.jpeg',
    masterCategory: 'party',
    subCategory: 'Birthday Party',
    inStock: true,
    rating: 4
  },

  // PARTY MEHNDI - ANNIVERSARY PARTY SUBCATEGORY
  {
    id: 'prod-30',
    name: 'Anniversary Celebration Mehndi',
    description: 'Romantic anniversary mehndi design with heart motifs, couple patterns, and elegant designs for special anniversaries.',
    price: '₹1,100',
    image: '/images/party4.jpg',
    masterCategory: 'party',
    subCategory: 'Anniversary Party',
    inStock: true,
    rating: 5
  },

  // PARTY MEHNDI - CELEBRATION PARTY SUBCATEGORY
  {
    id: 'prod-31',
    name: 'General Celebration Combo - 10 hands',
    description: 'Versatile celebration mehndi design suitable for any party or special occasion with elegant and festive patterns.',
    price: '₹5,800',
    image: '/images/partyheader.jpg',
    masterCategory: 'party',
    subCategory: 'Celebration Party',
    inStock: true,
    rating: 4
  },

  // HOBBY MEHNDI - MINIMALIST SUBCATEGORY
  {
    id: 'prod-32',
    name: 'Minimalist Hobby Mehndi',
    description: 'Simple and elegant minimalist mehndi design with clean lines and subtle patterns perfect for everyday wear.',
    price: '₹1,500',
    originalPrice: '₹2,000',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-33',
    name: 'Simple Minimalist Design',
    description: 'Clean and simple minimalist mehndi with delicate patterns and understated elegance for casual occasions.',
    price: '₹1,200',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 4
  },

  // HOBBY MEHNDI - OFFICE-FRIENDLY SUBCATEGORY
  {
    id: 'prod-34',
    name: 'Office-Friendly Mehndi',
    description: 'Professional and subtle office-friendly mehndi design with discreet patterns perfect for workplace settings.',
    price: '₹1,800',
    image: '/images/office.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-35',
    name: 'Professional Hobby Design',
    description: 'Elegant professional mehndi with sophisticated patterns suitable for business environments and formal settings.',
    price: '₹2,000',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 4
  },

  // HOBBY MEHNDI - CASUAL HOBBY SUBCATEGORY
  {
    id: 'prod-36',
    name: 'Casual Hobby Mehndi',
    description: 'Relaxed and comfortable casual mehndi design with simple patterns perfect for everyday activities and leisure time.',
    price: '₹1,400',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Casual Hobby',
    inStock: true,
    rating: 4
  },

  // ADDITIONAL FESTIVAL MEHNDI - DIWALI FESTIVAL SUBCATEGORY
  {
    id: 'prod-37',
    name: 'Diwali Special Mehndi Design',
    description: 'Exquisite Diwali mehndi with intricate rangoli-inspired patterns, diya motifs, and festive geometric designs for the festival of lights.',
    price: '₹3,800',
    image: '/images/diwali1.jpeg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-38',
    name: 'Lakshmi Diwali Mehndi',
    description: 'Beautiful Diwali mehndi featuring Lakshmi motifs, lotus patterns, and prosperity symbols perfect for Diwali celebrations.',
    price: '₹4,000',
    originalPrice: '₹5,000',
    image: '/images/floralfestival.jpg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-39',
    name: 'Rangoli Diwali Design',
    description: 'Stunning Diwali mehndi inspired by traditional rangoli patterns with colorful motifs and festive elements.',
    price: '₹3,600',
    image: '/images/festivalheader.jpeg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-40',
    name: 'Premium Diwali Mehndi',
    description: 'Luxurious Diwali mehndi design with elaborate patterns, peacock motifs, and elegant borders for special Diwali celebrations.',
    price: '₹4,500',
    image: '/images/diwali1.jpeg',
    masterCategory: 'festival',
    subCategory: 'Diwali Festival',
    inStock: true,
    rating: 5
  },

  // ADDITIONAL FESTIVAL MEHNDI - KARWA CHAUTH SUBCATEGORY
  {
    id: 'prod-41',
    name: 'Romantic Karwa Chauth Mehndi',
    description: 'Beautiful Karwa Chauth mehndi with moon and star motifs, romantic patterns, and traditional designs for this special fast.',
    price: '₹4,200',
    image: '/images/elegant.jpg',
    masterCategory: 'festival',
    subCategory: 'Karwa Chauth',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-42',
    name: 'Traditional Karwa Chauth Design',
    description: 'Classic Karwa Chauth mehndi featuring traditional patterns, moon designs, and elegant motifs for the auspicious occasion.',
    price: '₹3,800',
    image: '/images/floralfestival.jpg',
    masterCategory: 'festival',
    subCategory: 'Karwa Chauth',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-43',
    name: 'Elegant Karwa Chauth Mehndi',
    description: 'Sophisticated Karwa Chauth mehndi with delicate patterns, crescent moon motifs, and graceful designs perfect for the occasion.',
    price: '₹4,500',
    originalPrice: '₹5,500',
    image: '/images/elegant.jpg',
    masterCategory: 'festival',
    subCategory: 'Karwa Chauth',
    inStock: true,
    rating: 5,
    featured: true
  },

  // ADDITIONAL FESTIVAL MEHNDI - HOLI FESTIVAL SUBCATEGORY
  {
    id: 'prod-44',
    name: 'Colorful Holi Mehndi',
    description: 'Vibrant Holi mehndi design with playful patterns, flower motifs, and festive elements perfect for the spring festival of colors.',
    price: '₹3,500',
    image: '/images/mehndigroup.jpg',
    masterCategory: 'festival',
    subCategory: 'Holi Festival',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-45',
    name: 'Spring Holi Design',
    description: 'Beautiful Holi mehndi featuring spring flowers, colorful patterns, and joyful motifs for Holi celebrations.',
    price: '₹3,900',
    image: '/images/floralfestival.jpg',
    masterCategory: 'festival',
    subCategory: 'Holi Festival',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-46',
    name: 'Festive Holi Mehndi',
    description: 'Energetic Holi mehndi design with dynamic patterns, celebration motifs, and vibrant designs for the festival of colors.',
    price: '₹4,000',
    image: '/images/festivalheader.jpeg',
    masterCategory: 'festival',
    subCategory: 'Holi Festival',
    inStock: true,
    rating: 4
  },

  // ADDITIONAL FESTIVAL MEHNDI - EID FESTIVAL SUBCATEGORY
  {
    id: 'prod-47',
    name: 'Eid Mubarak Mehndi',
    description: 'Elegant Eid mehndi with traditional Islamic geometric patterns, crescent moon motifs, and sophisticated designs for Eid celebrations.',
    price: '₹4,500',
    image: '/images/eid.jpg',
    masterCategory: 'festival',
    subCategory: 'Eid Festival',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-48',
    name: 'Traditional Eid Design',
    description: 'Classic Eid mehndi featuring intricate Islamic patterns, geometric motifs, and elegant borders for festive celebrations.',
    price: '₹4,000',
    image: '/images/elegant.jpg',
    masterCategory: 'festival',
    subCategory: 'Eid Festival',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-49',
    name: 'Premium Eid Mehndi',
    description: 'Luxurious Eid mehndi design with elaborate geometric patterns, traditional motifs, and sophisticated designs for special Eid celebrations.',
    price: '₹4,800',
    originalPrice: '₹5,500',
    image: '/images/eid.jpg',
    masterCategory: 'festival',
    subCategory: 'Eid Festival',
    inStock: true,
    rating: 5
  },

  // ADDITIONAL PARTY MEHNDI - WEDDING PARTY SUBCATEGORY

  {
    id: 'prod-51',
    name: 'Cocktail Party Mehndi',
    description: 'Elegant cocktail party mehndi with sophisticated patterns and modern designs perfect for wedding cocktail parties.',
    price: '₹3,200',
    image: '/images/contemporary.jpg',
    masterCategory: 'party',
    subCategory: 'Wedding Party',
    inStock: true,
    rating: 4
  },
  
  {
    id: 'prod-53',
    name: 'Haldi Party Mehndi',
    description: 'Vibrant Haldi party mehndi with playful patterns and celebratory motifs perfect for Haldi ceremonies and wedding parties.',
    price: '₹3,000',
    image: '/images/mehndigroup.jpg',
    masterCategory: 'party',
    subCategory: 'Wedding Party',
    inStock: true,
    rating: 4
  },

  // ADDITIONAL PARTY MEHNDI - BIRTHDAY PARTY SUBCATEGORY
  {
    id: 'prod-54',
    name: 'Kids Birthday Party Mehndi',
    description: 'Fun and playful birthday party mehndi with cute patterns, cartoon motifs, and celebratory designs perfect for children\'s birthdays.',
    price: '₹2,000',
    image: '/images/mehndigroup.jpg',
    masterCategory: 'party',
    subCategory: 'Birthday Party',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-55',
    name: 'Adult Birthday Celebration',
    description: 'Elegant birthday party mehndi with sophisticated patterns and festive designs perfect for adult birthday celebrations.',
    price: '₹2,800',
    image: '/images/partyheader.jpg',
    masterCategory: 'party',
    subCategory: 'Birthday Party',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-56',
    name: 'Milestone Birthday Mehndi',
    description: 'Special milestone birthday mehndi design with elaborate patterns and celebration motifs for significant birthday celebrations.',
    price: '₹3,200',
    originalPrice: '₹4,000',
    image: '/images/floralfestival.jpg',
    masterCategory: 'party',
    subCategory: 'Birthday Party',
    inStock: true,
    rating: 5,
    featured: true
  },

  // ADDITIONAL PARTY MEHNDI - ANNIVERSARY PARTY SUBCATEGORY
  {
    id: 'prod-57',
    name: 'Golden Anniversary Mehndi',
    description: 'Luxurious golden anniversary mehndi with elegant patterns, romantic motifs, and sophisticated designs for milestone anniversaries.',
    price: '₹3,500',
    image: '/images/elegant.jpg',
    masterCategory: 'party',
    subCategory: 'Anniversary Party',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-58',
    name: 'Romantic Anniversary Design',
    description: 'Beautiful romantic anniversary mehndi with heart patterns, couple motifs, and elegant designs for celebrating love.',
    price: '₹3,000',
    image: '/images/floralfestival.jpg',
    masterCategory: 'party',
    subCategory: 'Anniversary Party',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-59',
    name: 'Wedding Anniversary Mehndi',
    description: 'Elegant wedding anniversary mehndi with traditional patterns and romantic elements perfect for celebrating marriage milestones.',
    price: '₹3,600',
    image: '/images/partyheader.jpg',
    masterCategory: 'party',
    subCategory: 'Anniversary Party',
    inStock: true,
    rating: 5
  },

  // ADDITIONAL PARTY MEHNDI - CELEBRATION PARTY SUBCATEGORY
  {
    id: 'prod-60',
    name: 'Graduation Party Mehndi',
    description: 'Celebratory graduation party mehndi with achievement motifs, elegant patterns, and festive designs for graduation celebrations.',
    price: '₹2,500',
    image: '/images/contemporary.jpg',
    masterCategory: 'party',
    subCategory: 'Celebration Party',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-61',
    name: 'Engagement Party Mehndi',
    description: 'Beautiful engagement party mehndi with romantic patterns, ring motifs, and elegant designs for engagement celebrations.',
    price: '₹3,000',
    image: '/images/partyheader.jpg',
    masterCategory: 'party',
    subCategory: 'Celebration Party',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-62',
    name: 'Housewarming Party Mehndi',
    description: 'Festive housewarming party mehndi with home motifs, prosperity patterns, and celebratory designs for new home celebrations.',
    price: '₹2,800',
    image: '/images/mehndigroup.jpg',
    masterCategory: 'party',
    subCategory: 'Celebration Party',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-63',
    name: 'Success Party Mehndi',
    description: 'Elegant success party mehndi with achievement patterns and celebratory motifs for celebrating accomplishments and milestones.',
    price: '₹3,200',
    originalPrice: '₹4,000',
    image: '/images/floralfestival.jpg',
    masterCategory: 'party',
    subCategory: 'Celebration Party',
    inStock: true,
    rating: 5,
    featured: true
  },

  // ADDITIONAL HOBBY MEHNDI - MINIMALIST HOBBY SUBCATEGORY
  {
    id: 'prod-64',
    name: 'Ultra Minimalist Design',
    description: 'Extremely subtle minimalist mehndi with minimal patterns and clean lines perfect for those who prefer understated elegance.',
    price: '₹1,000',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-65',
    name: 'Modern Minimalist Mehndi',
    description: 'Contemporary minimalist mehndi with modern geometric patterns and sleek designs for the fashion-forward individual.',
    price: '₹1,600',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-66',
    name: 'Delicate Minimalist Design',
    description: 'Fine and delicate minimalist mehndi with subtle patterns and elegant simplicity perfect for everyday elegance.',
    price: '₹1,300',
    originalPrice: '₹1,800',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-67',
    name: 'Classic Minimalist Mehndi',
    description: 'Timeless minimalist mehndi with classic patterns and refined elegance suitable for any casual occasion.',
    price: '₹1,400',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Minimalist Hobby',
    inStock: true,
    rating: 4
  },

  // ADDITIONAL HOBBY MEHNDI - OFFICE-FRIENDLY SUBCATEGORY
  {
    id: 'prod-68',
    name: 'Corporate Hobby Mehndi',
    description: 'Professional corporate mehndi with discreet patterns and business-appropriate designs perfect for corporate environments.',
    price: '₹2,200',
    image: '/images/office.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 5
  },
  {
    id: 'prod-69',
    name: 'Subtle Office Design',
    description: 'Very subtle office-friendly mehndi with minimal patterns and professional appearance suitable for formal workplace settings.',
    price: '₹1,600',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-70',
    name: 'Executive Hobby Mehndi',
    description: 'Sophisticated executive mehndi with elegant patterns and refined designs perfect for professional executives and business leaders.',
    price: '₹2,400',
    originalPrice: '₹3,000',
    image: '/images/office.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-71',
    name: 'Business Casual Mehndi',
    description: 'Versatile business casual mehndi with balanced patterns suitable for both professional and casual business settings.',
    price: '₹1,900',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Office-Friendly',
    inStock: true,
    rating: 4
  },

  // ADDITIONAL HOBBY MEHNDI - CASUAL HOBBY SUBCATEGORY
  {
    id: 'prod-72',
    name: 'Weekend Casual Mehndi',
    description: 'Relaxed weekend casual mehndi with comfortable patterns and easy-going designs perfect for weekend activities.',
    price: '₹1,300',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Casual Hobby',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-73',
    name: 'Everyday Hobby Design',
    description: 'Simple everyday mehndi with practical patterns and comfortable designs perfect for daily wear and casual occasions.',
    price: '₹1,200',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Casual Hobby',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-74',
    name: 'Relaxed Casual Mehndi',
    description: 'Comfortable relaxed casual mehndi with simple patterns and laid-back designs for leisure time and casual activities.',
    price: '₹1,500',
    originalPrice: '₹2,000',
    image: '/images/normal.jpg',
    masterCategory: 'hobby',
    subCategory: 'Casual Hobby',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-75',
    name: 'Comfortable Hobby Mehndi',
    description: 'Easy and comfortable hobby mehndi with simple patterns perfect for those who enjoy mehndi as a relaxing hobby activity.',
    price: '₹1,350',
    image: '/images/hobbyheader.jpg',
    masterCategory: 'hobby',
    subCategory: 'Casual Hobby',
    inStock: true,
    rating: 4
  },
  {
    id: 'prod-76',
    name: 'Madhubani featured bridal',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹9,000',
    image: '/images/madhubani8100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-77',
    name: 'Rajasthani Regal',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6100',
    image: '/images/raj6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Rajasthani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-78',
    name: 'Madhubani featured bridal',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹5,100',
    image: '/images/madhu5100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-79',
    name: 'Madhubani on hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/madhu6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-80',
    name: 'Pakistani from Rajasthan',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/pakistani6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Pakistani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-81',
    name: 'Rajasthani hand and feet',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/rajas6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Rajasthani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },

  {
    id: 'prod-83',
    name: 'Madhubani Pretty Feet',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹5,100',
    image: '/images/mad5100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-84',
    name: 'Rajasthani Joda',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/raj7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Rajasthani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
    {
    id: 'prod-85',
    name: 'Madhubani joda hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/madhu7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-86',
    name: 'Madhubani floral hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/madhub7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-87',
    name: 'Madhubani hands and feet',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/madhuba7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-88',
    name: 'Madhubani flower hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/mad6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-89',
    name: 'Madhubani feet',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/madfeet7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-90',
    name: 'Madhubani joda hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/pakhandf.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Pakistani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-91',
    name: 'Arabic Tapestry',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹5,100',
    image: '/images/arab5100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-92',
    name: 'Arabic Feet',
    description: 'Authentic Arabic bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/arabic6100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-101',
    name: 'Arabic Feet Flora',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹11,000',
    image: '/images/arabic0001.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-102',
    name: 'Arabic Hands Flora',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/arabic0002.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-103',
    name: 'Majestic Arabic Hands',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹8,100',
    image: '/images/arabic004.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-104',
    name: 'Royal Majestic Arabic Hands',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹11,000',
    image: '/images/arabic0005.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-105',
    name: 'Royal Majestic Arabic with Name',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹8,100',
    image: '/images/arabic0006.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-106',
    name: 'Arabic Flower Climbers',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹8,100',
    image: '/images/arabic0007.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-107',
    name: 'Arabic Intricate Arts',
    description: 'Authentic Arabic bridal mehndi with Smart floral patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹6,100',
    image: '/images/arabic0008.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Arabic',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-93',
    name: 'Madhubani joda hands',
    description: 'Authentic Pakistani bridal mehndi with intricate patterns, detailed motifs, and traditional Pakistani designs.',
    price: '₹7,100',
    image: '/images/madhu7100.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Madhubani Bridal',
    inStock: true,
    rating: 5,
    // featured: true
  },
  {
    id: 'prod-94',
    name: '3D Dimensional Bridal Design',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹8,100',
    originalPrice: '₹15,000',
    image: '/images/3d8100.jpeg',
    masterCategory: 'bridal',
    subCategory: '3-D Bridal',
    inStock: true,
    rating: 5,
    featured: true
  }, 
  {
    id: 'prod-95',
    name: 'The Ultimate Royal Bridal',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹31,000',
    originalPrice: '₹40,000',
    image: '/images/royal31000.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-108',
    name: 'The Ultimate Royal Hands and Feet',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹15,000',
    originalPrice: '₹21,000',
    image: '/images/Royal0001.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-109',
    name: 'The heavy floral royal art',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹11,000',
    originalPrice: '₹21,000',
    image: '/images/royal0003.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },
  {
    id: 'prod-110',
    name: 'The heavy floral twist',
    description: 'Stunning 3D bridal mehndi design that creates an illusion of depth with layered patterns and shadow effects.',
    price: '₹15,000',
    originalPrice: '₹21,000',
    image: '/images/royal0004.jpeg',
    masterCategory: 'bridal',
    subCategory: 'Royal Bridal',
    inStock: true,
    rating: 5,
    featured: true
  },

];
