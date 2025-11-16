'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/sampleData';
import { CheckCircle, Clock, CreditCard, Star } from 'lucide-react';

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-amber-900 max-w-3xl mx-auto drop-shadow-lg">
              Professional mehndi services tailored to make your special moments unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Choose Your Perfect Service"
            subtitle="What We Offer"
            description="Each service is designed with care and expertise to meet your specific needs and occasion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Service Details"
            subtitle="What's Included"
            description="Every service comes with our commitment to excellence and attention to detail."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: CheckCircle,
                title: "Premium Materials",
                description: "We use only the highest quality henna paste and tools for lasting, beautiful results."
              },
              {
                icon: Clock,
                title: "Flexible Timing",
                description: "We work around your schedule to ensure convenience and comfort."
              },
              {
                icon: CreditCard,
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden fees or surprises."
              },
              {
                icon: Star,
                title: "Satisfaction Guarantee",
                description: "We stand behind our work with a 100% satisfaction guarantee."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <feature.icon size={32} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-beige-50 relative overflow-hidden">
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
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Service Pricing"
            subtitle="Investment"
            description="Transparent pricing for all our services. Contact us for custom quotes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-6 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {service.price}
                </div>
                <div className="text-gray-700 mb-6 font-medium">
                  {service.duration}
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <CheckCircle size={16} className="text-yellow-500 fill-current" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl"
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
            className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full opacity-20 blur-3xl"
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Got Questions?"
            description="Here are answers to some common questions about our services."
          />

          <div className="space-y-6 mt-12">
            {[
              {
                question: "How long does the henna last?",
                answer: "Our henna designs typically last 1-3 weeks, depending on skin type, care, and location on the body. Proper aftercare can extend the duration."
              },
              {
                question: "Do you travel to locations?",
                answer: "Yes, we provide mobile services and can travel to your home, venue, or preferred location within our service area."
              },
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-3 weeks in advance, especially for bridal services. However, we can sometimes accommodate shorter notice requests."
              },
              {
                question: "What if I'm allergic to henna?",
                answer: "We use natural, high-quality henna paste. If you have concerns about allergies, please let us know during consultation so we can discuss alternatives."
              },
              {
                question: "Can I customize my design?",
                answer: "Absolutely! We love creating custom designs based on your preferences, cultural traditions, and personal style."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-6 border-2 border-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-amber-900 max-w-2xl mx-auto drop-shadow-lg">
              Contact us today to discuss your needs and schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
