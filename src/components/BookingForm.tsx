'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { services } from '@/data/sampleData';

interface BookingFormProps {
  preselectedService?: string;
}

const BookingForm = ({ preselectedService }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    date: '',
    time: '',
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
        service: preselectedService || '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-sage-900 mb-2">
          Booking Request Sent!
        </h3>
        <p className="text-sage-600 mb-4">
          Thank you for your booking request. We&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
        <p className="text-sm text-sage-500">
          You can also reach us directly at +1 (234) 567-890
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-sage-900 mb-2">
          Book Your Appointment
        </h2>
        <p className="text-sage-600">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sage-700 font-medium mb-2">
              <User size={16} className="inline mr-2" />
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
              <Mail size={16} className="inline mr-2" />
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
              <Phone size={16} className="inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
              placeholder="+1 (234) 567-890"
            />
          </div>

          <div>
            <label className="block text-sage-700 font-medium mb-2">
              Service Type *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title} - {service.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sage-700 font-medium mb-2">
              <Calendar size={16} className="inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sage-700 font-medium mb-2">
              <Clock size={16} className="inline mr-2" />
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors"
            >
              <option value="">Select time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sage-700 font-medium mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            Special Requests or Notes
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:outline-none focus:border-maroon-500 transition-colors resize-none"
            placeholder="Any special requests, allergies, or additional information..."
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
              <span>Submitting...</span>
            </>
          ) : (
            <span>Book Appointment</span>
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-sage-500">
          By submitting this form, you agree to our terms of service and privacy policy.
        </p>
      </div>
    </motion.div>
  );
};

export default BookingForm;
