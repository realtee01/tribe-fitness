import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GsapText } from './GsapText';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Trainers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trainers = [
    {
      name: "Jax 'The Hammer' Stone",
      role: "Head of Strength",
      bio: "Former elite powerlifting champion. Jax specializes in maximal strength development and biomechanics. He treats every lift as a matter of life and death.",
      certs: "CSCS, USAW L2",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Elena Cruz",
      role: "MetCon Specialist",
      bio: "Ex-military endurance athlete. Elena will push your lungs, heart rate, and mental grit well past their breaking points. Quitting is not in her vocabulary.",
      certs: "CrossFit L3, NASM-CPT",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Marcus Thorne",
      role: "Mobility & Recovery",
      bio: "Focuses on bulletproofing joints and unlocking kinetic chains. Marcus ensures that resting hard and repairing tissue is treated with the same intensity as lifting.",
      certs: "FRCms, DPT",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  const prevTrainer = () => {
    setCurrentIndex((prev) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-brand-dark border-t border-brand-light/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-hand text-brand-lime text-2xl sm:text-3xl inline-block -rotate-6">
              Meet your makers
            </span>
          </motion.div>
          <GsapText 
            as="h2" 
            text="THE VANGUARD" 
            className="font-anton text-5xl md:text-7xl uppercase text-brand-light" 
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-20 z-30 hidden md:block">
            <button onClick={prevTrainer} aria-label="Previous Trainer" className="p-4 bg-brand-dark border-2 border-brand-purple/20 hover:border-brand-lime text-brand-light hover:text-brand-dark hover:bg-brand-lime rounded-full transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 lg:-right-20 z-30 hidden md:block">
            <button onClick={nextTrainer} aria-label="Next Trainer" className="p-4 bg-brand-dark border-2 border-brand-purple/20 hover:border-brand-lime text-brand-light hover:text-brand-dark hover:bg-brand-lime rounded-full transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full h-[650px] sm:h-[550px] md:h-[450px]">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group w-full absolute inset-0 flex flex-col md:flex-row gap-8 lg:gap-16 items-center"
              >
                {/* Image Container */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden border-2 border-brand-dark group-hover:border-brand-purple transition-colors duration-300 shrink-0">
                  <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-300 z-10" />
                  <img 
                    src={trainers[currentIndex].image} 
                    alt={trainers[currentIndex].name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Certifications Badge */}
                  <div className="absolute bottom-0 left-0 bg-brand-lime text-brand-dark font-oswald text-sm font-bold uppercase px-4 py-2 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {trainers[currentIndex].certs}
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-0">
                  <h3 className="font-anton text-4xl lg:text-6xl uppercase tracking-wide mb-2 text-brand-light group-hover:text-brand-purple transition-colors">
                    {trainers[currentIndex].name}
                  </h3>
                  <h4 className="font-oswald text-brand-lime uppercase tracking-widest text-lg mb-6">
                    {trainers[currentIndex].role}
                  </h4>
                  <p className="font-inter text-brand-light/70 font-medium leading-relaxed mb-6 text-base md:text-lg lg:pr-8">
                    {trainers[currentIndex].bio}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator & Mobile Controls */}
          <div className="flex justify-center items-center gap-6 mt-8 md:mt-12">
            <button onClick={prevTrainer} aria-label="Previous Trainer" className="p-3 bg-transparent border border-brand-purple/30 text-brand-light rounded-full transition-colors md:hidden hover:border-brand-lime hover:text-brand-lime focus:outline-none">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {trainers.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${idx === currentIndex ? 'w-8 bg-brand-lime' : 'w-2.5 bg-brand-light/20 hover:bg-brand-light/40'}`}
                  aria-label={`Go to trainer ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextTrainer} aria-label="Next Trainer" className="p-3 bg-transparent border border-brand-purple/30 text-brand-light rounded-full transition-colors md:hidden hover:border-brand-lime hover:text-brand-lime focus:outline-none">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
