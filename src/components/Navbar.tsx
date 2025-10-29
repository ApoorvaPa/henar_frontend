'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Booking', href: '/booking' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-beige-50/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-bold text-maroon-700"
            >
              Henar
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sage-700 hover:text-maroon-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1 text-sage-600 hover:text-maroon-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+91 9318435436</span>
            </a>
            <a
              href="mailto:henar9318@gmail.com"
              className="flex items-center space-x-1 text-sage-600 hover:text-maroon-600 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">henar9318@gmail.com</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-sage-700 hover:text-maroon-600 hover:bg-beige-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige-50/95 backdrop-blur-md border-t border-beige-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sage-700 hover:text-maroon-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-beige-200 space-y-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-sage-600 hover:text-maroon-600 transition-colors"
                >
                  <Phone size={16} />
                  <span>+91 9318435436</span>
                </a>
                <a
                  href="mailto:henar9318@gmail.com"
                  className="flex items-center space-x-2 text-sage-600 hover:text-maroon-600 transition-colors"
                >
                  <Mail size={16} />
                  <span>henar9318@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
