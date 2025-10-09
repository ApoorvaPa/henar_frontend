'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/sampleData';
import { CheckCircle, Clock, DollarSign, Star } from 'lucide-react';

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-beige-200 max-w-3xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                icon: DollarSign,
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-maroon-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Service Pricing"
            subtitle="Investment"
            description="Transparent pricing for all our services. Contact us for custom quotes."
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-white mb-4">
                  {service.price}
                </div>
                <div className="text-beige-200 mb-6">
                  {service.duration}
                </div>
                <ul className="space-y-2 text-beige-200 text-sm">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <CheckCircle size={16} className="text-gold-400" />
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
      <section className="py-20 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-serif font-bold text-sage-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-beige-200 max-w-2xl mx-auto">
              Contact us today to discuss your needs and schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="bg-gold-500 hover:bg-gold-400 text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Now
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-sage-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
