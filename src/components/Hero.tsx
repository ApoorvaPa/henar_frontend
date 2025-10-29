'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
  backgroundImages?: string[];
  slideIntervalMs?: number;
  showRating?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage = '/images/hero-bg.jpg',
  backgroundImages,
  slideIntervalMs = 5500,
  showRating = false
}: HeroProps) => {
  const slides = useMemo(() => {
    if (backgroundImages && backgroundImages.length > 0) return backgroundImages;
    return [
      backgroundImage ,
      '/images/hero/mehndi1.jpg',
      '/images/hero/mehndi2.jpg',
      '/images/hero/mehndi3.jpg',
      '/images/hero/mehndi4.jpg',
      '/images/hero/mehndi5.jpg',
    ];
  }, [backgroundImage, backgroundImages]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Preload images to avoid flicker/jank on first reveal
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, slideIntervalMs);
    return () => clearInterval(id);
  }, [slides.length, slideIntervalMs]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeIndex]}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[activeIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              willChange: 'opacity, transform'
            }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55" />
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-maroon-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-beige-400/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-lg font-medium tracking-wide uppercase"
          >
            {subtitle}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Rating */}
          {showRating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center space-x-2 text-white"
            >
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
              <span className="text-white font-medium">4.9/5 (200+ Reviews)</span>
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Link href={primaryButtonLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 shadow-lg"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
                >
                  {secondaryButtonText}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-gold-500' : 'w-2 bg-white/70 hover:bg-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
