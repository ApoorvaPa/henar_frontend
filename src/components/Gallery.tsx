'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface GalleryProps {
  items: Array<{
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    date: string;
  }>;
  categories?: string[];
}

const Gallery = ({ items, categories = ['all', 'bridal', 'party', 'Festival', 'Hobby'] }: GalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => {
          const getCategoryGradient = (idx: number) => {
            const categoryGradients = [
              'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
              'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
              'bg-gradient-to-r from-yellow-500 to-amber-500 text-white',
              'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
              'bg-gradient-to-r from-purple-500 to-violet-500 text-white',
            ];
            return categoryGradients[idx % categoryGradients.length];
          };
          
          const isAllCategory = category === 'all';
          return (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-md ${
                isAllCategory
                  ? selectedCategory === category
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-beige-100 text-sage-700 hover:bg-maroon-100 hover:text-maroon-600'
                  : selectedCategory === category
                  ? `${getCategoryGradient(index)} shadow-lg scale-105`
                  : 'bg-beige-100 text-sage-700 hover:bg-maroon-100 hover:text-maroon-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${selectedCategory}-${item.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #ec4899, #a855f7, #3b82f6, #10b981)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 20px rgba(236, 72, 153, 0.2), 0 0 40px rgba(168, 85, 247, 0.15), 0 0 60px rgba(59, 130, 246, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gold-500 text-sage-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
              {/* Caption Container */}
              <div className="p-4 bg-white">
                <h3 className="text-sage-900 font-serif font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 overflow-hidden rounded-t-lg">
                <Image
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
                
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Image Info and Button Container */}
              <div className="bg-gradient-to-b from-black/95 to-black p-6 rounded-b-lg">
                <div className="mb-4">
                  <h3 className="font-serif font-semibold text-xl mb-2 text-white">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {filteredItems[selectedImage].description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="bg-gold-500 text-sage-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {filteredItems[selectedImage].category.charAt(0).toUpperCase() + filteredItems[selectedImage].category.slice(1)}
                    </span>
                    <span className="text-white/80 text-sm">
                      {new Date(filteredItems[selectedImage].date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                {/* Book This Category Button */}
                <Link 
                  href={`/booking?service=${filteredItems[selectedImage].category}&product=${encodeURIComponent(filteredItems[selectedImage].title)}`}
                  onClick={closeLightbox}
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Calendar size={20} />
                    <span>Book This Category</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
