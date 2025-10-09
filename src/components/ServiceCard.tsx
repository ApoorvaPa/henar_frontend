'use client';

import { motion } from 'framer-motion';
import { Check, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    image: string;
    category: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-gold-500 text-sage-900 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-sage-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-sage-600 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Price and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gold-600">
            <DollarSign size={20} />
            <span className="font-semibold text-lg">{service.price}</span>
          </div>
          <div className="flex items-center space-x-2 text-sage-600">
            <Clock size={16} />
            <span className="text-sm">{service.duration}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-sage-600">
              <Check size={16} className="text-gold-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link href={`/booking?service=${service.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-maroon-600 hover:bg-maroon-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Book This Service
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
