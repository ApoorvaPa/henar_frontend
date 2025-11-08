'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import BookingForm from '@/components/BookingForm';
import { services } from '@/data/sampleData';
import { Calendar, Clock, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Booking() {
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
      <section className="py-20 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm />
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-white">
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
                className="bg-beige-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <h3 className="text-lg font-serif font-bold text-sage-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="text-2xl font-bold text-maroon-600 mb-2">
                    {service.price}
                  </div>
                  <div className="text-sage-600 mb-4">
                    {service.duration}
                  </div>
                  <ul className="space-y-1 text-sm text-sage-600">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-gold-500" />
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
      <section className="py-20 bg-sage-900 text-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Booking Information"
            subtitle="What to Expect"
            description="Everything you need to know about booking and preparing for your appointment."
            className="text-brown"
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon size={32} className="text-sage-900" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-4">
                  {info.title}
                </h3>
                <p className="text-beige-200 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-beige-50">
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
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <contact.icon size={32} className="text-maroon-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-sage-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-sage-600 mb-4">
                  {contact.description}
                </p>
                <button className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                  {contact.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                className="bg-beige-50 rounded-2xl p-6"
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
    </div>
  );
}
