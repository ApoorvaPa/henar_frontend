'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    rating: number;
    text: string;
    image: string;
    service: string;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-gold-200">
        <Quote size={32} />
      </div>

      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-gold-400 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-sage-600 mb-6 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Service Badge */}
      <div className="mb-4">
        <span className="bg-maroon-100 text-maroon-700 px-3 py-1 rounded-full text-sm font-medium">
          {testimonial.service}
        </span>
      </div>

      {/* Client Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gold-400 to-maroon-500 flex items-center justify-center">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `<span class="text-white font-semibold text-lg">${testimonial.name.charAt(0)}</span>`;
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-sage-900">{testimonial.name}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
