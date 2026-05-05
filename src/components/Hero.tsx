import React from 'react';
import { motion } from 'motion/react';
import { FloatingElement } from './FloatingElement';
import { GsapText } from './GsapText';

import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10">
      {/* Background Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      {/* Floating Design Elements */}
      <FloatingElement shape="kettlebell" className="top-1/4 left-[10%] w-24 h-24 sm:w-32 sm:h-32 opacity-80" floatType={1} delay={0.2} />
      <FloatingElement shape="zap" className="top-1/3 right-[15%] w-16 h-16 sm:w-24 sm:h-24 opacity-90" floatType={2} delay={0.4} />
      <FloatingElement shape="dumbell" className="bottom-1/4 left-[20%] w-20 h-20 sm:w-28 sm:h-28 opacity-70" floatType={3} delay={0.6} />
      <FloatingElement shape="star" className="bottom-1/3 right-[10%] w-12 h-12 sm:w-16 sm:h-16 opacity-60" floatType={4} delay={0.8} />
      <FloatingElement shape="circle" className="top-[15%] right-[30%] w-10 h-10 opacity-30" floatType={2} delay={1} />
      <FloatingElement shape="circle" className="bottom-[15%] left-[40%] w-14 h-14 opacity-20" floatType={1} delay={1.2} />

      {/* Main Content */}
      <div className="relative z-20 text-center flex flex-col items-center max-w-5xl px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-2"
        >
          <GsapText 
            as="span" 
            text="No fear." 
            className="font-hand text-brand-lime text-2xl sm:text-3xl md:text-4xl absolute -top-8 -left-12 sm:-top-10 sm:-left-20 transform -rotate-12 z-30" 
          />
          <h2 className="font-oswald text-brand-purple tracking-[0.2em] uppercase font-bold text-sm sm:text-base md:text-xl relative z-10 bg-brand-dark px-4 py-1 border border-brand-purple/50 rounded-full">
            Welcome to the revolution
          </h2>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-anton text-7xl sm:text-8xl md:text-[9rem] lg:text-[12rem] leading-[0.8] tracking-tight uppercase text-brand-light mt-6"
        >
          <span className="block w-full">THE FITNESS</span>
          {/* Layered Text Effect for Visual Impact */}
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 text-stroke-purple translate-x-2 translate-y-2 opacity-50 z-0">TRIBE</span>
            <span className="relative z-10 text-gradient-lime">TRIBE</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-inter text-brand-light/70 mt-8 max-w-lg text-lg sm:text-xl font-medium"
        >
          A high-intensity, community-driven fitness center. 
          Stop tracking hours. Start tracking breakthroughs.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 group relative"
        >
          {/* Animated glow behind button */}
          <div className="absolute inset-0 bg-brand-lime blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 rounded-full w-full h-full"></div>
          
          <button onClick={() => navigate('/membership')} className="relative z-10 bg-brand-light text-brand-dark font-oswald text-xl sm:text-2xl uppercase font-bold px-10 sm:px-14 py-4 sm:py-5 border-b-4 border-r-4 border-brand-dark hover:border-brand-light hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_#D9FF43] transition-all duration-300">
            Join The Cult
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-oswald text-sm text-brand-light/50 tracking-widest uppercase">Scroll</span>
        <div className="w-1 h-12 rounded-full border border-brand-light/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-brand-purple"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
