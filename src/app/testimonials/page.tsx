'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/sampleData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-beige-400/20 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-darkbrown text-black-200 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience with our mehndi artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-black">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="text-4xl font-serif font-bold text-maroon-600">4.9</div>
              <p className="text-sage-600 text-lg">Average Rating</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="text-4xl font-serif font-bold text-maroon-600">5000+</div>
              <p className="text-sage-600 text-lg">Reviews</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-4xl font-serif font-bold text-maroon-600">500+</div>
              <p className="text-sage-600 text-lg">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="text-4xl font-serif font-bold text-maroon-600">98%</div>
              <p className="text-sage-600 text-lg">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 bg-sage-900 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Reviews"
            subtitle="Standout Experiences"
            description="Some of our most memorable client experiences and feedback."
            className="text-black"
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold-400 fill-current" />
                  ))}
                </div>
                <div className="text-6xl text-gold-400/20 mb-4">
                  <Quote />
                </div>
                <p className="text-beige-200 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gold-400 text-lg">
                      {testimonial.name}
                    </h4>
                  </div>
                  <span className="bg-gold-500 text-sage-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-serif font-bold text-sage-900 mb-2">
                  {service.service}
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(service.rating) ? "text-gold-400 fill-current" : "text-sage-300"} 
                    />
                  ))}
                  <span className="text-sage-600 text-sm ml-2">{service.rating}</span>
                </div>
                <p className="text-sage-600 text-sm mb-4">
                  {service.count}
                </p>
                <p className="text-maroon-600 font-medium text-sm">
                  {service.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-beige-200 max-w-2xl mx-auto">
              Book your appointment today and experience the artistry that our clients rave about.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="border-2 border-darkbrown bg-gold-500 hover:bg-gold-400 text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Your Appointment
              </a>
              <a
                href="/portfolio"
                className="border-2 border-darkbrown text-black hover:bg-white hover:text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
