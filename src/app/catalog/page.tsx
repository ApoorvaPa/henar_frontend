'use client';

import { useState, useEffect, Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle';
import { products } from '@/data/sampleData';
import { ShoppingCart, Star, Heart, Filter, Search, Sparkles, X, Calendar, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import Link from 'next/link';

function CatalogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // Map service categories to catalog categories
  const mapCategoryToCatalog = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'bridal': 'bridal',
      'party': 'party',
      'festival': 'festival',
      'Festival': 'festival',
      'hobby': 'hobby',
      'Hobby': 'hobby'
    };
    return categoryMap[category] || 'all';
  };

  const [selectedMasterCategory, setSelectedMasterCategory] = useState<string>(
    categoryParam ? mapCategoryToCatalog(categoryParam) : 'all'
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; productId?: string } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

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

  const handleBookNow = (product: typeof products[0]) => {
    const productDetails = `Product: ${product.name}\nCategory: ${product.masterCategory}\nSubcategory: ${product.subCategory}\nPrice: ${product.price}${product.originalPrice ? ` (Original: ${product.originalPrice})` : ''}\nDescription: ${product.description}`;
    const encodedDetails = encodeURIComponent(productDetails);
    router.push(`/booking?product=${encodedDetails}`);
  };

  const filteredProducts = products.filter(product => {
    const matchesMasterCategory = selectedMasterCategory === 'all' || product.masterCategory === selectedMasterCategory;
    const matchesSubCategory = selectedSubCategory === 'all' || product.subCategory === selectedSubCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMasterCategory && matchesSubCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured);

  // Colorful gradient classes for product boxes
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

  // Colorful button gradient classes for CTA buttons
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

  // Colorful gradient classes for category buttons (active state)
  const getCategoryGradient = (index: number) => {
    const categoryGradients = [
      'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
      'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'bg-gradient-to-r from-yellow-500 to-amber-500 text-white',
      'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
      'bg-gradient-to-r from-purple-500 to-violet-500 text-white',
    ];
    return categoryGradients[index % categoryGradients.length];
  };

  // Colorful gradient classes for subcategory buttons (active state)
  const getSubCategoryGradient = (index: number) => {
    const subCategoryGradients = [
      'bg-gradient-to-r from-pink-500 to-rose-500 text-white',
      'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'bg-gradient-to-r from-yellow-500 to-amber-500 text-white',
      'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
      'bg-gradient-to-r from-purple-500 to-violet-500 text-white',
      'bg-gradient-to-r from-orange-500 to-red-500 text-white',
      'bg-gradient-to-r from-teal-500 to-cyan-500 text-white',
      'bg-gradient-to-r from-indigo-500 to-blue-500 text-white',
    ];
    return subCategoryGradients[index % subCategoryGradients.length];
  };

  // Set category from URL parameter on mount
  useEffect(() => {
    if (categoryParam) {
      const mappedCategory = mapCategoryToCatalog(categoryParam);
      setSelectedMasterCategory(mappedCategory);
      setSelectedSubCategory('all');
      
      // Scroll to filters section after a short delay
      setTimeout(() => {
        const filtersElement = document.getElementById('filters-section');
        if (filtersElement) {
          filtersElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  // Reset subcategory when master category changes
  useEffect(() => {
    setSelectedSubCategory('all');
  }, [selectedMasterCategory]);

  // Close modal on ESC key and reset zoom
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setZoom(1);
        setPan({ x: 0, y: 0 });
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

  // Reset zoom when image changes
  useEffect(() => {
    if (selectedImage) {
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [selectedImage]);

  // Handle zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (!selectedImage) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.min(Math.max(1, zoom + delta), 5);
    setZoom(newZoom);
  };

  // Handle mouse down for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  // Handle mouse move for panning
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom in
  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.5, 5));
  };

  // Zoom out
  const zoomOut = () => {
    const newZoom = Math.max(zoom - 0.5, 1);
    setZoom(newZoom);
    if (newZoom === 1) {
      setPan({ x: 0, y: 0 });
    }
  };

  // Reset zoom
  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-beige-50 relative overflow-hidden">
      {/* Animated Colorful Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating colorful circles */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-36 h-36 bg-yellow-300 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-44 h-44 bg-green-300 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-28 h-28 bg-purple-300 rounded-full opacity-20 blur-2xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

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

      {/* All Products */}
      <section className="py-16 bg-beige-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <div id="filters-section" className="bg-white rounded-2xl shadow-md p-6 mb-8">
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
              {masterCategories.map((category, index) => {
                const isAllCategory = category.id === 'all';
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => {
                      setSelectedMasterCategory(category.id);
                      setSelectedSubCategory('all');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                      isAllCategory
                        ? selectedMasterCategory === category.id
                          ? 'bg-black text-white shadow-lg scale-105'
                          : 'bg-beige-100 text-sage-700 hover:bg-maroon-100 hover:text-maroon-600'
                        : selectedMasterCategory === category.id
                        ? `${getCategoryGradient(index)} shadow-lg scale-105`
                        : 'bg-beige-100 text-sage-700 hover:bg-maroon-100 hover:text-maroon-600'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Sub Category Buttons */}
            {subCategories.length > 1 && (
              <div className="flex flex-wrap gap-3">
                {subCategories.map((subCat, index) => {
                  const isAllSubCategory = subCat.id === 'all';
                  return (
                    <motion.button
                      key={subCat.id}
                      onClick={() => setSelectedSubCategory(subCat.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isAllSubCategory
                          ? selectedSubCategory === subCat.id
                            ? 'bg-black text-white shadow-md scale-105'
                            : 'bg-white text-sage-700 hover:bg-gold-100'
                          : selectedSubCategory === subCat.id
                          ? `${getSubCategoryGradient(index)} shadow-md scale-105`
                          : 'bg-white text-sage-700 hover:bg-gold-100'
                      }`}
                    >
                      {subCat.name}
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`${getColorfulGradient(index)} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-white/50 backdrop-blur-sm`}
              >
                {/* Image */}
                <div 
                  className="relative h-52 overflow-hidden bg-white/60 backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedImage({ src: product.image, alt: product.name, productId: product.id })}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-white/95 backdrop-blur-md text-gray-800 px-2 py-1 rounded-full text-xs font-semibold capitalize shadow-md">
                      {product.masterCategory}
                    </span>
                    <span className="bg-yellow-400/95 backdrop-blur-md text-gray-900 px-2 py-1 rounded-full text-xs font-medium shadow-md">
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
                      className={favorites.includes(product.id) ? 'text-red-600 fill-current' : 'text-gray-600'} 
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < product.rating! ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      {product.originalPrice && (
                        <div className="text-gray-500 line-through text-sm">{product.originalPrice}</div>
                      )}
                    </div>
                    <motion.button
                      onClick={() => handleBookNow(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${getColorfulButtonGradient(index)} text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1 transition-all shadow-lg`}
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

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <SectionTitle
                title="Featured Designs"
                subtitle="Premium Collection"
                description="Our most popular and highly rated mehndi designs"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${getColorfulGradient(index)} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-white/50 backdrop-blur-sm`}
                >
                  {/* Badge */}
                  <div className="absolute z-10 top-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg backdrop-blur-sm">
                      <Star size={14} className="fill-current" />
                      Featured
                    </span>
                  </div>

                  {/* Image */}
                  <div 
                    className="relative h-64 overflow-hidden bg-white/60 backdrop-blur-sm cursor-pointer"
                    onClick={() => setSelectedImage({ src: product.image, alt: product.name, productId: product.id })}
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
                      <h3 className="text-xl font-serif font-bold text-gray-800 flex-1">
                        {product.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="p-2 hover:bg-white/50 rounded-full transition-colors backdrop-blur-sm"
                      >
                        <Heart 
                          size={20} 
                          className={favorites.includes(product.id) ? 'text-red-600 fill-current' : 'text-gray-600'} 
                        />
                      </button>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < product.rating! ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                          />
                        ))}
                        <span className="text-gray-700 text-sm ml-2">({product.rating})</span>
                      </div>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through ml-2 text-sm">{product.originalPrice}</span>
                        )}
                      </div>
                      <motion.button
                        onClick={() => handleBookNow(product)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${getColorfulButtonGradient(index)} text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg`}
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
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Book Consultation
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (() => {
        const product = selectedImage.productId ? products.find(p => p.id === selectedImage.productId) : null;
        return (
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
              className="relative max-w-7xl w-full max-h-[90vh] mx-4 flex flex-col"
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
              <div 
                ref={imageRef}
                className="relative flex-1 bg-black rounded-t-lg overflow-hidden shadow-2xl cursor-move"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={900}
                    className="max-w-full max-h-[70vh] object-contain select-none"
                    priority
                    draggable={false}
                  />
                </div>
                
                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                  <motion.button
                    onClick={zoomIn}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={zoom >= 5}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={20} />
                  </motion.button>
                  <motion.button
                    onClick={zoomOut}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={zoom <= 1}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={20} />
                  </motion.button>
                  <motion.button
                    onClick={resetZoom}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
                    className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw size={20} />
                  </motion.button>
                </div>
                
                {/* Zoom Indicator */}
                {zoom > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
                    {Math.round(zoom * 100)}%
                  </div>
                )}
              </div>

              {/* Image Info and Button Container */}
              <div className="bg-gradient-to-b from-black/95 to-black p-6 rounded-b-lg">
                <p className="text-white text-center mb-4 text-lg font-semibold">
                  {selectedImage.alt}
                </p>
                {product && (
                  <Link 
                    href={`/booking?product=${encodeURIComponent(`Product: ${product.name}\nCategory: ${product.masterCategory}\nSubcategory: ${product.subCategory}\nPrice: ${product.price}${product.originalPrice ? ` (Original: ${product.originalPrice})` : ''}\nDescription: ${product.description}`)}`}
                    onClick={() => setSelectedImage(null)}
                    className="block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Calendar size={20} />
                      <span>Book This Design</span>
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-maroon-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sage-600 text-lg">Loading catalog...</p>
        </div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}

