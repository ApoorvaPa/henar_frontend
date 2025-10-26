'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-beige-200 max-w-3xl mx-auto">
              Get in touch with us for bookings, inquiries, or any questions about our mehndi services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Get in Touch"
            subtitle="Contact Information"
            description="Multiple ways to reach us. We're here to help with all your mehndi needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                description: "+91 9318435436",
                action: "Call Now",
                href: "tel:+1234567890"
              },
              {
                icon: Mail,
                title: "Email",
                description: "henar9813@gmail.com",
                action: "Send Email",
                href: "mailto:henar9813@gmail.com"
              },
              {
                icon: MapPin,
                title: "Location",
                description: "123 Art Street, Creative City",
                action: "Get Directions",
                href: "#"
              },
              {
                icon: Clock,
                title: "Hours",
                description: "Mon-Sat: 9AM-7PM",
                action: "View Schedule",
                href: "#"
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
                <a
                  href={contact.href}
                  className="bg-maroon-600 hover:bg-maroon-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 inline-block"
                >
                  {contact.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Contact Form"
            description="Fill out the form below and we'll get back to you within 24 hours."
          />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-sage-600 mb-4">
                Thank you for your message. We&apos;ll get back to you within 24 hours.
              </p>
              <p className="text-sm text-sage-500">
                You can also reach us directly at +91 9318435436
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-beige-50 rounded-2xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
                      placeholder="+91 9318435436"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="custom">Custom Design</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sage-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors resize-none"
                    placeholder="Tell us about your needs, questions, or any special requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-maroon-600 hover:bg-maroon-700 disabled:bg-sage-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Follow Us"
            subtitle="Social Media"
            description="Stay connected with us on social media for design inspiration, tips, and updates."
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                platform: "Instagram",
                handle: "@Henar_official",
                description: "Follow us for daily design inspiration and behind-the-scenes content.",
                color: "from-pink-500 to-purple-600"
              },
              {
                platform: "Facebook",
                handle: "Henar Official",
                description: "Connect with us and see client reviews and testimonials.",
                color: "from-blue-500 to-blue-700"
              },
              {
                platform: "WhatsApp",
                handle: "+91 9318435436",
                description: "Quick booking and instant responses to your queries.",
                color: "from-green-500 to-green-700"
              }
            ].map((social, index) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${social.color} rounded-2xl p-8 text-center`}
              >
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {social.platform}
                </h3>
                <p className="text-white/90 mb-4">
                  {social.handle}
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  {social.description}
                </p>
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
            subtitle="Quick Answers"
            description="Find answers to common questions about our services and booking process."
          />

          <div className="space-y-6 mt-12">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours. For urgent booking requests, you can call us directly at +91 9318435436."
              },
              {
                question: "Do you offer consultations?",
                answer: "Yes, we offer free consultations to discuss your design preferences, requirements, and to provide pricing information."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater metropolitan area and surrounding regions. Contact us to confirm if we can travel to your location."
              },
              {
                question: "Can I see examples of your work before booking?",
                answer: "Absolutely! Check out our portfolio page to see our latest work, or follow us on social media for regular updates."
              },
              {
                question: "Do you offer group bookings?",
                answer: "Yes, we love working with groups for parties, weddings, and special events. Contact us for group pricing and availability."
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
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600 text-sage-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-sage-800 max-w-2xl mx-auto">
              Don&apos;t wait! Book your consultation today and let us create beautiful memories for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="bg-sage-900 hover:bg-sage-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Now
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-sage-900 text-sage-900 hover:bg-sage-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
