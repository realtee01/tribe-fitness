import React from 'react';
import { motion } from 'motion/react';
import { GsapText } from './GsapText';

export function Trainers() {
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

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-brand-dark border-t border-brand-light/10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {trainers.map((trainer, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative h-[400px] mb-6 overflow-hidden border-2 border-brand-dark group-hover:border-brand-purple transition-colors duration-300">
                <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-300 z-10" />
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Certifications Badge */}
                <div className="absolute bottom-0 left-0 bg-brand-lime text-brand-dark font-oswald text-sm font-bold uppercase px-4 py-2 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {trainer.certs}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-anton text-3xl uppercase tracking-wide mb-1 text-brand-light group-hover:text-brand-purple transition-colors">
                  {trainer.name}
                </h3>
                <h4 className="font-oswald text-brand-lime uppercase tracking-widest text-sm mb-4">
                  {trainer.role}
                </h4>
                <p className="font-inter text-brand-light/70 font-medium leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
