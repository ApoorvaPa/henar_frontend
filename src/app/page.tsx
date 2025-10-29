'use client';

import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Gallery from '@/components/Gallery';
import { services, testimonials, portfolioItems } from '@/data/sampleData';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Beautiful Mehndi Designs"
        subtitle="Traditional Artistry"
        description="Transform your special moments with exquisite henna artistry. From bridal elegance to festive celebrations, we create stunning designs that tell your story."
        primaryButtonText="Book Appointment"
        primaryButtonLink="/booking"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        showRating={true}
      />

      {/* Services Preview */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="What We Offer"
            description="Choose from our range of professional mehndi services, each designed to make your special moments unforgettable."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Designs"
            subtitle="Our Portfolio"
            description="Explore our collection of stunning mehndi designs, each crafted with precision and artistic excellence."
          />
          
          <Gallery items={portfolioItems.slice(0, 6)} />
          
          <div className="text-center mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 hover:bg-gold-400 text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gold-500 hover:bg-gold-500 text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>Browse Products</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto">
                <Users size={32} className="text-sage-900" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-gold-400">500+</h3>
              <p className="text-beige-200 text-lg">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto">
                <Award size={32} className="text-sage-900" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-gold-400">5+</h3>
              <p className="text-beige-200 text-lg">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto">
                <Star size={32} className="text-sage-900" />
              </div>
              <h3 className="text-4xl font-serif font-bold text-gold-400">4.9</h3>
              <p className="text-beige-200 text-lg">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Testimonials"
            description="Don't just take our word for it. Here's what our satisfied clients have to say about their experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>Read More Reviews</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready to Create Beautiful Memories?
            </h2>
            <p className="text-xl text-beige-200 max-w-2xl mx-auto">
              Book your appointment today and let us transform your special moments with our exquisite mehndi artistry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-500 hover:bg-gold-400 text-sage-900 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-xl hover:shadow-2xl ring-2 ring-gold-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-200"
                >
                  <span>Book Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}