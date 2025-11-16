'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/sampleData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  // Colorful gradient function
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white overflow-hidden">
        {/* Colorful Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-pink-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, 60, 0],
              x: [0, -50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -70, 0],
              x: [0, 50, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-60 h-60 bg-green-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-56 h-56 bg-purple-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 35, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-beige-400/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-900 drop-shadow-lg">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-amber-900 max-w-3xl mx-auto drop-shadow-lg">
              Hear from our satisfied clients about their experience with our mehndi artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4.9", label: "Average Rating" },
              { value: "5000+", label: "Reviews" },
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl font-serif font-bold text-gray-800 mb-2">{stat.value}</div>
                <p className="text-gray-700 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Real Reviews"
            description="Read genuine testimonials from our satisfied clients who have experienced our mehndi artistry."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Featured Reviews"
            subtitle="Standout Experiences"
            description="Some of our most memorable client experiences and feedback."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                name: "Priya Sharma",
                service: "Bridal Mehndi",
                rating: 5,
                text: "The bridal mehndi design was absolutely stunning! Every detail was perfect and it lasted for weeks. The artist was professional, punctual, and incredibly talented. She made my wedding day even more special. I couldn't have asked for a better experience."
              },
              {
                name: "Sarah Ahmed",
                service: "Festival Mehndi",
                rating: 5,
                text: "Perfect Festival mehndi design for my wedding. The patterns were intricate and beautiful. The henna lasted for weeks! The artist was very skilled and the design was exactly what I envisioned. Highly professional service and beautiful results."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="text-6xl text-gray-300 mb-4">
                  <Quote />
                </div>
                <p className="text-gray-800 mb-6 leading-relaxed italic text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-teal-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Reviews by Service"
            subtitle="Service-Specific Feedback"
            description="See what our clients say about each of our specialized services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                service: "Bridal Mehndi",
                count: "45+ Reviews",
                rating: 4.9,
                highlight: "Perfect for your special day"
              },
              {
                service: "Party Mehndi",
                count: "35+ Reviews",
                rating: 4.8,
                highlight: "Great for celebrations"
              },
              {
                service: "Festival Mehndi",
                count: "30+ Reviews",
                rating: 4.9,
                highlight: "Elegant traditional designs"
              },
              {
                service: "Hobby Mehndi",
                count: "25+ Reviews",
                rating: 4.7,
                highlight: "Subtle everyday elegance"
              }
            ].map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-6 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                  {service.service}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(service.rating) ? "text-yellow-500 fill-current" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-gray-700 text-sm ml-2 font-semibold">{service.rating}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4 font-medium">
                  {service.count}
                </p>
                <p className="text-gray-800 font-semibold text-sm">
                  {service.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white relative overflow-hidden">
        {/* Colorful Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-pink-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, 60, 0],
              x: [0, -50, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -70, 0],
              x: [0, 50, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-60 h-60 bg-green-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-56 h-56 bg-purple-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 35, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 drop-shadow-lg">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-amber-900 max-w-2xl mx-auto drop-shadow-lg">
              Book your appointment today and experience the artistry that our clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Your Appointment
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
