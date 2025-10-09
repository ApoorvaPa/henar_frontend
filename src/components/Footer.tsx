'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Bridal Mehndi', href: '/services#bridal' },
      { name: 'Party Mehndi', href: '/services#party' },
      { name: 'Arabic Mehndi', href: '/services#arabic' },
      { name: 'Minimal Mehndi', href: '/services#minimal' },
    ],
    pages: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="bg-sage-900 text-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
              Henar
            </h3>
            <p className="text-beige-200 mb-6 leading-relaxed">
              Creating beautiful, intricate henna designs for your special moments. 
              Traditional artistry meets modern elegance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-beige-200">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-beige-200">info@Henar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-beige-200">123 Art Street, Creative City</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beige-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-beige-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-serif font-semibold text-gold-400 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-sage-800 rounded-full text-beige-200 hover:text-gold-400 hover:bg-sage-700 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div>
              <h5 className="text-sm font-medium text-gold-400 mb-2">
                Newsletter
              </h5>
              <p className="text-beige-200 text-sm mb-3">
                Subscribe for design tips and special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-sage-800 border border-sage-700 rounded-l-md text-beige-200 placeholder-beige-400 focus:outline-none focus:border-gold-400"
                />
                <button className="px-4 py-2 bg-gold-500 text-sage-900 rounded-r-md hover:bg-gold-400 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-sage-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beige-300 text-sm">
              © {currentYear} Henar. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-beige-300 hover:text-gold-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-beige-300 hover:text-gold-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
