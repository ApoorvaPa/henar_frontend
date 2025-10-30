'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';
import { portfolioItems, products } from '@/data/sampleData';

export default function Portfolio() {
  // Active tab state for category chips
  const [activeMaster, setActiveMaster] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  // Build master → subcategory cards from products
  const cards = useMemo(() => {
    const masterToSubs: Record<string, string[]> = {};
    products.forEach(p => {
      const key = p.masterCategory.toUpperCase();
      masterToSubs[key] = masterToSubs[key] || [];
      if (p.subCategory && !masterToSubs[key].includes(p.subCategory)) {
        masterToSubs[key].push(p.subCategory);
      }
    });

    const orderedMasters = ['BRIDAL', 'PARTY', 'FESTIVAL', 'HOBBY'];
    return orderedMasters.map(master => ({
      title: master,
      image:
        master === 'BRIDAL' ? '/images/categories/bridal.jpg' :
        master === 'PARTY' ? '/images/categories/party.jpg' :
        master === 'FESTIVAL' ? '/images/categories/Festival.jpg' :
        '/images/categories/Hobby.jpg',
      subcategories: masterToSubs[master] || []
    }));
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-600 to-maroon-800 text-black overflow-hidden">
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
            description="Browse through our diverse collection of mehndi designs, from traditional bridal patterns to modern Hobbyist styles."
            className="text-black"
          />
          
          <Gallery items={portfolioItems} />
        </div>
      </section>
{/* Categories Section - Consistent with Catalog (Master + Subcategories) */}
<section className="py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Browse by Category"
            subtitle="Master & Subcategories"
            description="Explore designs by master categories and their subcategories, just like in the catalog."
            className="text-black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {cards.map((card, index) => (
              <motion.button
                key={card.title}
                type="button"
                onClick={() => { setActiveMaster(card.title); setActiveSub(null); }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-maroon-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-maroon-300 text-left w-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-maroon-900/80 group-hover:via-maroon-600/30 transition-all duration-300" />
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-gold-400"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif font-bold text-2xl mb-1 tracking-wide transform transition-transform duration-300 group-hover:translate-x-1">
                      {card.title}
                    </h3>
                    <div className="h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-16"></div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span className="text-maroon-900 text-xs font-bold uppercase tracking-wider">View Category</span>
                  </div>
                </div>

                {/* Subcategory chips */}
                <div className="p-5 bg-gradient-to-b from-white to-beige-50 group-hover:from-beige-50 group-hover:to-white transition-all duration-300">
                  {card.subcategories.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {card.subcategories.map((sub) => {
                        const isActive = activeMaster === card.title && activeSub === sub;
                        return (
                          <button
                            key={sub}
                            type="button"
                            onClick={(e) => { 
                              e.stopPropagation();
                              setActiveMaster(card.title); 
                              setActiveSub(sub); 
                            }}
                            aria-pressed={isActive}
                            className={`${isActive
                              ? 'bg-maroon-700 text-white border-maroon-700 shadow-md scale-105'
                              : 'bg-gold-100 text-maroon-900 border-gold-300 hover:bg-maroon-600 hover:text-white hover:border-maroon-600 hover:shadow-md'
                            } px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all duration-200 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-400`}
                          >
                            {sub}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sage-600 text-sm italic">No subcategories yet</p>
                  )}
                </div>
              </motion.button>
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

      {/* Testimonials Preview (Stats Section) */}
      <section className="py-20 bg-beige-50 text-[#4a361f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Client Testimonials"
            subtitle="What They Say"
            description="Hear from our satisfied clients about their experience with our mehndi artistry."
            className="text-[#4a361f]"
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
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#4a361f]">★</span>
                  ))}
                </div>
                <p className="text-[#4a361f] mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <h4 className="font-semibold text-[#4a361f]">
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
