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

// Colorful gradient function (same as catalog)
const getColorfulGradient = (index: number) => {
  const gradients = [
    'bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200',
    'bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200',
    'bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-200',
    'bg-gradient-to-br from-green-200 via-green-100 to-emerald-200',
    'bg-gradient-to-br from-purple-200 via-purple-100 to-violet-200',
    'bg-gradient-to-br from-orange-200 via-orange-100 to-red-200',
    'bg-gradient-to-br from-teal-200 via-teal-100 to-cyan-200',
    'bg-gradient-to-br from-indigo-200 via-indigo-100 to-blue-200',
  ];
  return gradients[index % gradients.length];
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`${getColorfulGradient(index)} rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative border-2 border-white/50 backdrop-blur-sm`}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-gray-400/60">
        <Quote size={32} />
      </div>

      {/* Rating */}
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-500 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Service Badge */}
      <div className="mb-4">
        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {testimonial.service}
        </span>
      </div>

      {/* Client Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md border-2 border-white">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `<span class="text-gray-800 font-semibold text-lg">${testimonial.name.charAt(0)}</span>`;
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
