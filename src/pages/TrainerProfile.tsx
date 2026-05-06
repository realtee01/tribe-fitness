import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar } from 'lucide-react';
import { trainers } from '../data/trainers';
import { Footer } from '../components/Footer';
import { GsapText } from '../components/GsapText';

export function TrainerProfile() {
  const { id } = useParams<{ id: string }>();
  const trainer = trainers.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!trainer) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-brand-light font-inter">
        <h1 className="text-4xl font-anton uppercase mb-4">Trainer Not Found</h1>
        <Link to="/" className="text-brand-lime hover:underline uppercase font-oswald tracking-widest text-sm">
          Return to The Tribe
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-24">
        
        {/* Back Link */}
        <Link 
          to="/#trainers" 
          className="inline-flex items-center gap-2 text-brand-light/70 hover:text-brand-lime font-oswald uppercase tracking-widest text-sm mb-12 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Roster
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Image Sidebar */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/5] overflow-hidden border-2 border-brand-purple"
            >
              <div className="absolute inset-0 bg-brand-purple/20 mix-blend-multiply z-10 pointer-events-none" />
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover grayscale select-none"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-brand-dark py-4 px-6 border-t-2 border-brand-purple z-20">
                <p className="font-oswald text-brand-lime uppercase tracking-widest text-sm mb-1">Certifications</p>
                <p className="font-inter text-brand-light font-bold">{trainer.certs}</p>
              </div>
            </motion.div>
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GsapText 
                as="h1" 
                text={trainer.name} 
                className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase tracking-wide mb-2 text-brand-light" 
              />
              <h2 className="font-oswald text-brand-lime uppercase tracking-[0.2em] text-xl md:text-2xl mb-8 border-b border-brand-light/10 pb-6">
                {trainer.role}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none font-inter text-brand-light/80 mb-12"
            >
              <p className="leading-relaxed">{trainer.fullBio}</p>
            </motion.div>

            {/* Schedule Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-brand-dark border border-brand-purple/30 p-8 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 text-brand-purple/5 max-w-[200px] pointer-events-none">
                <Calendar className="w-64 h-64" />
              </div>
              
              <h3 className="font-anton text-3xl uppercase tracking-wide mb-6 text-brand-light flex items-center gap-3">
                <Calendar className="w-6 h-6 text-brand-lime" />
                Class Schedule
              </h3>
              
              <div className="space-y-4 relative z-10">
                {trainer.classes.map((cls, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-purple/20 pb-4 last:border-0 last:pb-0 gap-2 sm:gap-0">
                    <div className="flex flex-col sm:w-1/3">
                      <span className="font-oswald uppercase text-brand-lime tracking-widest text-sm">{cls.day}</span>
                      <span className="font-anton text-xl tracking-wide text-brand-light">{cls.time}</span>
                    </div>
                    <div className="sm:w-2/3 sm:text-right">
                      <span className="font-inter text-brand-light/90 font-medium inline-block bg-brand-light/10 px-4 py-1.5 rounded">{cls.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
