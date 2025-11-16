'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { products } from '@/data/sampleData';
import { ShoppingCart, Star, Heart, Filter, Search, Sparkles, X } from 'lucide-react';

export default function Catalog() {
  const [selectedMasterCategory, setSelectedMasterCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const masterCategories = [
    { id: 'all', name: 'All Categories' },
    { id: 'bridal', name: 'Bridal Mehndi' },
    { id: 'festival', name: 'Festival Mehndi' },
    { id: 'party', name: 'Party Mehndi' },
    { id: 'hobby', name: 'Hobby Mehndi' }
  ];

  // Get all unique subcategories for the selected master category
  const getSubCategories = () => {
    if (selectedMasterCategory === 'all') return [];
    const subCategories = products
      .filter(p => p.masterCategory === selectedMasterCategory)
      .map(p => p.subCategory);
    return [...new Set(subCategories)];
  };

  const subCategories = [
    { id: 'all', name: 'All Subcategories' },
    ...getSubCategories().map(sub => ({ id: sub, name: sub }))
  ];

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesMasterCategory = selectedMasterCategory === 'all' || product.masterCategory === selectedMasterCategory;
    const matchesSubCategory = selectedSubCategory === 'all' || product.subCategory === selectedSubCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMasterCategory && matchesSubCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured);

  // Reset subcategory when master category changes
  useEffect(() => {
    setSelectedSubCategory('all');
  }, [selectedMasterCategory]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-beige-400/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-gold-400/30 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold flex items-center justify-center gap-3 text-amber-950">
              <Sparkles className="text-amber-950" size={48} />
              Product Catalog
              <Sparkles className="text-amber-950" size={48} />
            </h1>
            <p className="text-xl md:text-2xl text-amber-950 max-w-3xl mx-auto">
              Discover our exquisite collection of mehndi designs, each crafted with precision and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <SectionTitle
                title="Featured Designs"
                subtitle="Premium Collection"
                description="Our most popular and highly rated mehndi designs"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gold-400/30"
                >
                  {/* Badge */}
                  <div className="absolute z-10 top-4 left-4">
                    <span className="bg-gold-500 text-sage-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      Featured
                    </span>
                  </div>

                  {/* Image */}
                  <div 
                    className="relative h-64 overflow-hidden bg-gradient-to-br from-beige-100 to-sage-50 cursor-pointer"
                    onClick={() => setSelectedImage({ src: product.image, alt: product.name })}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-maroon-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Sale
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-sage-900 flex-1">
                        {product.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="p-2 hover:bg-beige-100 rounded-full transition-colors"
                      >
                        <Heart 
                          size={20} 
                          className={favorites.includes(product.id) ? 'text-maroon-600 fill-current' : 'text-sage-400'} 
                        />
                      </button>
                    </div>
                    
                    <p className="text-sage-600 mb-4 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < product.rating! ? 'text-gold-500 fill-current' : 'text-sage-300'}
                          />
                        ))}
                        <span className="text-sage-600 text-sm ml-2">({product.rating})</span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-maroon-600">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sage-400 line-through ml-2 text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                      >
                        <ShoppingCart size={18} />
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage-400" size={20} />
                <input
                  type="text"
                  placeholder="Search mehndi designs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                />
              </div>
              {/* Filter Button */}
              <div className="flex items-center gap-2">
                <Filter size={24} className="text-sage-600" />
                <span className="text-sage-600 font-semibold">Filter:</span>
              </div>
            </div>

            {/* Master Category Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              {masterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedMasterCategory(category.id);
                    setSelectedSubCategory('all');
                  }}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    selectedMasterCategory === category.id
                      ? 'bg-black text-white shadow-lg scale-105'
                      : 'bg-beige-100 text-sage-700 hover:bg-maroon-100 hover:text-maroon-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sub Category Buttons */}
            {subCategories.length > 1 && (
              <div className="flex flex-wrap gap-3">
                {subCategories.map((subCat) => (
                  <button
                    key={subCat.id}
                    onClick={() => setSelectedSubCategory(subCat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedSubCategory === subCat.id
                        ? 'bg-black text-white shadow-md scale-105'
                        : 'bg-white text-sage-700 hover:bg-gold-100'
                    }`}
                  >
                    {subCat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div 
                  className="relative h-52 overflow-hidden bg-gradient-to-br from-beige-100 to-sage-50 cursor-pointer"
                  onClick={() => setSelectedImage({ src: product.image, alt: product.name })}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-white/90 backdrop-blur-sm text-sage-900 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                      {product.masterCategory}
                    </span>
                    <span className="bg-gold-500/90 backdrop-blur-sm text-sage-900 px-2 py-1 rounded-full text-xs font-medium">
                      {product.subCategory}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-maroon-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Sale
                      </span>
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors z-10"
                  >
                    <Heart 
                      size={16} 
                      className={favorites.includes(product.id) ? 'text-maroon-600 fill-current' : 'text-sage-400'} 
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold text-sage-900 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-sage-600 mb-3 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < product.rating! ? 'text-gold-500 fill-current' : 'text-sage-300'}
                        />
                      ))}
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-maroon-600">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sage-400 line-through text-sm">{product.originalPrice}</div>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      <ShoppingCart size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-sage-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900">
              Need Something Custom?
            </h2>
            <p className="text-xl text-amber-900 max-w-2xl mx-auto">
              We can create a unique mehndi design tailored specifically to your vision and occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="bg-gold-500 hover:bg-gold-400 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={32} className="bg-black/50 rounded-full p-1" />
            </button>

            {/* Zoomed Image */}
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[90vh] object-contain"
                priority
              />
            </div>

            {/* Image Title */}
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

