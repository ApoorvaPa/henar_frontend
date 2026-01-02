'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { Heart, Award, Users, Star } from 'lucide-react';

export default function About() {
  // Colorful gradient function (same as home page)
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
            <h1 className="text-amber-950 text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
              About Henar
            </h1>
            <p className="text-xl md:text-2xl text-amber-950 max-w-3xl mx-auto drop-shadow-lg">
              Where tradition meets artistry, creating beautiful memories one design at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionTitle
                title="Our Story"
                subtitle="The Journey"
                description=""
                centered={false}
              />
              
              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  Henar was born from a deep passion for traditional mehndi artistry and a vision to bring this beautiful cultural heritage to modern celebrations. Our founder, discovered their love for henna art at a young age, learning from their ancestor who was a renowned mehndi artist in their hometown.
                </p>
                <p>
                  What started as a hobby quickly evolved into a professional service when friends and family began requesting her designs for their special occasions. The intricate patterns, attention to detail, and commitment to excellence soon made Henar the go-to choice for bridal mehndi and celebratory designs.
                </p>
                <p>
                  Today, we continue to honor traditional techniques while embracing contemporary styles, ensuring each design tells a unique story and creates lasting memories for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Artists.png"
                  alt="Mehndi artist at work"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center">
                <Heart size={32} className="text-sage-900" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Values"
            subtitle="What Drives Us"
            description="These core principles guide everything we do, ensuring exceptional service and beautiful results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Heart,
                title: "Passion for Art",
                description: "We pour our heart into every design, treating each piece as a work of art that deserves the utmost care and attention."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for perfection in every detail, from the initial consultation to the final application and aftercare."
              },
              {
                icon: Users,
                title: "Client-Centric",
                description: "Your vision and comfort are our priority. We listen, understand, and create designs that exceed your expectations."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-white/50 backdrop-blur-sm`}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <value.icon size={32} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mehndigroup.jpg"
                  alt="Professional mehndi application"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-maroon-600 rounded-full flex items-center justify-center">
                <Star size={32} className="text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <SectionTitle
                title="Professional Excellence"
                subtitle="Our Expertise"
                description=""
                centered={false}
              />
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 rounded-xl p-4 border-2 border-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-gray-800 font-bold text-sm">15+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Years of Experience</h4>
                    <p className="text-gray-700">Professional mehndi artistry with hundreds of satisfied clients</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200 rounded-xl p-4 border-2 border-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-gray-800 font-bold text-sm">15000+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Happy Clients</h4>
                    <p className="text-gray-700">From brides to party-goers, we&apos;ve made countless special moments beautiful</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-green-200 via-green-100 to-emerald-200 rounded-xl p-4 border-2 border-white/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-gray-800 font-bold text-sm">4.9</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Average Rating</h4>
                    <p className="text-gray-700">Consistently high ratings from our clients across all platforms</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Process"
            subtitle="How We Work"
            description="From consultation to completion, we ensure a seamless and enjoyable experience."
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
                whileHover={{ y: -5, scale: 1.02 }}
                className={`${getColorfulGradient(index)} rounded-2xl p-8 text-center border-2 border-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-gray-800 font-bold text-lg">{process.step}</span>
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
              Ready to Experience Our Artistry?
            </h2>
            <p className="text-xl text-sage-800 max-w-2xl mx-auto">
              Let us create beautiful memories for your special occasion. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/booking"
                className="bg-sage-900 hover:bg-sage-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
              >
                Book Consultation
              </a>
              <a
                href="/portfolio"
                className="border-2 border-sage-900 text-sage-900 hover:bg-sage-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
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
