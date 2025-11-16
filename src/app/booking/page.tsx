'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import BookingForm from '@/components/BookingForm';
import { services } from '@/data/sampleData';
import { Calendar, Clock, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Booking() {
  // Colorful gradient functions (same as catalog)
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

  const getColorfulButtonGradient = (index: number) => {
    const buttonGradients = [
      'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
      'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600',
      'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
      'bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600',
      'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
      'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600',
      'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
    ];
    return buttonGradients[index % buttonGradients.length];
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Colorful Background Elements - More Prominent */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating colorful circles - larger and more visible */}
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 bg-pink-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-56 h-56 bg-blue-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-52 h-52 bg-yellow-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-60 h-60 bg-green-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-44 h-44 bg-purple-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 35, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-orange-400 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, 45, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>

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
    <h1 className="text-4xl md:text-6xl font-serif font-bold text-black">
      Book Your Appointment
    </h1>
    <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto">
      Schedule your mehndi session and let us create beautiful memories for your special occasion.
    </p>
  </motion.div>
</div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-beige-50 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="animate-pulse space-y-6">
                <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          }>
            <BookingForm />
          </Suspense>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Available Services"
            subtitle="What We Offer"
            description="Choose from our range of professional mehndi services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-white/50 backdrop-blur-sm`}
              >
                <div className="text-center">
                  <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="text-gray-700 mb-4">
                    {service.duration}
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-yellow-500 fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-beige-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Booking Information"
            subtitle="What to Expect"
            description="Everything you need to know about booking and preparing for your appointment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Calendar,
                title: "Scheduling",
                description: "Book at least 2-3 weeks in advance for bridal services. We can sometimes accommodate shorter notice requests."
              },
              {
                icon: Clock,
                title: "Duration",
                description: "Service duration varies by type. Bridal mehndi typically takes 3-5 hours, while party mehndi takes 1-2 hours."
              },
              {
                icon: CheckCircle,
                title: "Preparation",
                description: "We'll provide detailed preparation instructions after booking. Generally, avoid lotions and oils on the day of your appointment."
              }
            ].map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <info.icon size={32} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-beige-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Information"
            subtitle="Get in Touch"
            description="Have questions or need assistance? We're here to help."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                description: "+91 9318435436",
                action: "Call Now"
              },
              {
                icon: Mail,
                title: "Email",
                description: "henar9318@gmail.com",
                action: "Send Email"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50 backdrop-blur-sm`}
              >
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <contact.icon size={32} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {contact.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${getColorfulButtonGradient(index)} text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg`}
                >
                  {contact.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Got Questions?"
            description="Here are answers to some common questions about booking and our services."
          />

          <div className="space-y-6 mt-12">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-3 weeks in advance, especially for bridal services. However, we can sometimes accommodate shorter notice requests depending on availability."
              },
              {
                question: "Do you travel to locations?",
                answer: "Yes, we provide mobile services and can travel to your home, venue, or preferred location within our service area. Travel fees may apply for locations outside our standard area."
              },
              {
                question: "What should I do to prepare for my appointment?",
                answer: "We'll provide detailed preparation instructions after booking. Generally, avoid lotions, oils, and exfoliating products on the areas to be decorated 24 hours before your appointment."
              },
              {
                question: "Can I customize my design?",
                answer: "Absolutely! We love creating custom designs based on your preferences, cultural traditions, and personal style. During consultation, we'll discuss your vision and create a design that's perfect for you."
              },
              {
                question: "What if I need to reschedule?",
                answer: "We understand that plans can change. Please give us at least 48 hours notice for rescheduling. Rescheduling fees may apply for last-minute changes."
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
    </div>
  );
}
