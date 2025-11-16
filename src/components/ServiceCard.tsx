'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Clock } from 'lucide-react';
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

const getColorfulButtonGradient = (index: number) => {
  const buttonGradients = [
    'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
    'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600',
    'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    'bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600',
    'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
    'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600',
    'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
  ];
  return buttonGradients[index % buttonGradients.length];
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`${getColorfulGradient(index)} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-white/50 backdrop-blur-sm`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-white/60 backdrop-blur-sm">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-700 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Price and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">{service.price}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Clock size={16} />
            <span className="text-sm font-medium">{service.duration}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2 text-gray-700">
              <Check size={16} className="text-yellow-500 fill-current flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

       {/* CTAs */}
       <div className="flex flex-col gap-3 mt-4">
          <Link href={`/booking?service=${service.id}`} className="w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
            >
              Book This Service
            </motion.button>
          </Link>
          <Link href={`/catalog?category=${service.category.toLowerCase()}`} className="w-full">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white hover:bg-gray-100 text-black border-2 border-black px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
            >
              Explore More
            </motion.button>
          </Link>
        </div>      </div>
    </motion.div>
  );
};

export default ServiceCard;
