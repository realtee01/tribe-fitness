import React from 'react';
import { motion } from 'motion/react';
import { GsapText } from './GsapText';

export function Gallery() {
  const images = [
    { src: "https://plus.unsplash.com/premium_photo-1661963851125-d84b526f1068?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
    { src: "https://plus.unsplash.com/premium_photo-1661919600742-d924545b3cee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-brand-dark border-y border-brand-light/10 overflow-hidden">
      
      {/* Decorative text behind */}
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-anton text-[20vw] leading-none whitespace-nowrap text-brand-purple/[0.03] pointer-events-none z-0">
        THE SWEAT
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-hand text-brand-purple text-2xl sm:text-3xl inline-block -rotate-6">
              Witness the grind
            </span>
          </motion.div>
          <GsapText 
            as="h2" 
            text="NO FAKE WEIGHTS" 
            className="font-anton text-5xl md:text-7xl uppercase text-brand-light mb-4" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-300 z-10" />
              <img 
                src={img.src} 
                alt="Gym culture and heavy lifting" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
