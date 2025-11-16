'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import { portfolioItems } from '@/data/sampleData';

export default function Portfolio() {
  // Colorful gradient function (same as booking page)
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
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-black overflow-hidden">
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
          <motion.div
            className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, 45, 0],
              x: [0, -25, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-52 h-52 bg-cyan-400 rounded-full opacity-30 blur-3xl"
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
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
            <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-beige-200 max-w-3xl mx-auto drop-shadow-lg">
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
            description="Browse through our diverse collection of mehndi designs, from traditional bridal patterns to modern Hobbyist styles."
            className="text-black"
          />
          
          <Gallery items={portfolioItems} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl"
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
            className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"
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
          <motion.div
            className="absolute top-1/2 left-1/2 w-56 h-56 bg-purple-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, 25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                whileHover={{ y: -8, scale: 1.03 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-gray-800 font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview (Stats Section) */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"
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
            className="absolute bottom-20 right-20 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl"
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
          <motion.div
            className="absolute top-1/2 right-1/4 w-56 h-56 bg-orange-300 rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, 35, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What They Say"
            description="Hear from our satisfied clients about their experience with our mehndi artistry."
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
                text: "Professional service and beautiful Festival designs. Highly recommended for any special occasion.",
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
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 mb-6 italic text-lg leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <h4 className="font-serif font-bold text-gray-900 text-xl">
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
