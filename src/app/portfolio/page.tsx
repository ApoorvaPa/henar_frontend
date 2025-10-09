'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import { portfolioItems } from '@/data/sampleData';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-white overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-beige-200 max-w-3xl mx-auto">
              Explore our collection of stunning mehndi designs, each crafted with precision and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Work"
            subtitle="Our Creations"
            description="Browse through our diverse collection of mehndi designs, from traditional bridal patterns to modern minimalist styles."
          />
          
          <Gallery items={portfolioItems} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Design Categories"
            subtitle="Our Specialties"
            description="We specialize in various styles of mehndi art, each with its own unique characteristics and beauty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Bridal Mehndi",
                description: "Elaborate designs for the most special day of your life",
                image: "/images/categories/bridal.jpg",
                count: "50+ Designs"
              },
              {
                title: "Party Mehndi",
                description: "Festive designs perfect for celebrations and festivals",
                image: "/images/categories/party.jpg",
                count: "30+ Designs"
              },
              {
                title: "Arabic Mehndi",
                description: "Elegant Arabic patterns with flowing geometric elements",
                image: "/images/categories/arabic.jpg",
                count: "25+ Designs"
              },
              {
                title: "Minimal Mehndi",
                description: "Subtle, modern designs for everyday elegance",
                image: "/images/categories/minimal.jpg",
                count: "20+ Designs"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif font-bold text-lg mb-1">
                      {category.title}
                    </h3>
                    <p className="text-beige-200 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-sage-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Creative Process"
            subtitle="How We Work"
            description="From concept to completion, here's how we bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, preferences, and any special requirements for your design."
              },
              {
                step: "02",
                title: "Design Planning",
                description: "Custom patterns are created based on your consultation and event requirements."
              },
              {
                step: "03",
                title: "Application",
                description: "Professional application using premium henna paste with attention to every detail."
              },
              {
                step: "04",
                title: "Aftercare",
                description: "Guidance on care instructions and follow-up to ensure the best results."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-maroon-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What They Say"
            description="Hear from our satisfied clients about their experience with our mehndi artistry."
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Priya Sharma",
                text: "The bridal mehndi design was absolutely stunning! Every detail was perfect and it lasted for weeks.",
                rating: 5
              },
              {
                name: "Sarah Ahmed",
                text: "Professional service and beautiful Arabic designs. Highly recommended for any special occasion.",
                rating: 5
              },
              {
                name: "Maya Patel",
                text: "Great experience for our Diwali party! The artist was friendly and created beautiful designs for all of us.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-400">★</span>
                  ))}
                </div>
                <p className="text-beige-200 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold text-gold-400">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-sage-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Love What You See?
            </h2>
            <p className="text-xl text-sage-800 max-w-2xl mx-auto">
              Let us create a beautiful design for your special occasion. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="bg-sage-900 hover:bg-sage-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="border-2 border-sage-900 text-sage-900 hover:bg-sage-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
