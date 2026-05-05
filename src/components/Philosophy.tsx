import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Target, Users, Zap } from 'lucide-react';
import { FloatingElement } from './FloatingElement';
import { GsapText } from './GsapText';

export function Philosophy() {
  const cards = [
    {
      title: "Raw Strength",
      desc: "Forget the fancy machines. We rely on gravity, iron, and grit.",
      icon: <Dumbbell className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "Mental Discipline",
      desc: "Your body follows where your mind goes. We train both.",
      icon: <Target className="w-8 h-8 text-brand-purple" />
    },
    {
      title: "The Tribe",
      desc: "Nobody suffers alone. We elevate each other in every session.",
      icon: <Users className="w-8 h-8 text-brand-lime" />
    },
    {
      title: "High Octane",
      desc: "Maximum effort, maximum output. Leave the ego at the door.",
      icon: <Zap className="w-8 h-8 text-brand-purple" />
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-12 bg-brand-dark relative z-10 border-t border-brand-light/10">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
        
        {/* Left text column */}
        <div className="flex-1 space-y-8 relative">
          <GsapText 
            text="*Read carefully" 
            className="absolute -top-12 -left-8 font-hand text-brand-purple text-3xl transform -rotate-6 opacity-80" 
          />
          <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase leading-none">
            WE ARE <span className="text-stroke-1">NOT A GYM.</span><br />
            WE ARE A <span className="text-gradient-purple">LIFESTYLE.</span>
          </h2>
          
          <p className="font-inter text-lg sm:text-xl text-brand-light/80 leading-relaxed max-w-xl">
            Commercial gyms want your subscription, not your presence. At The Fitness Tribe, if you don't show up, we notice. We demand sweat, consistency, and a refusal to settle for average.
          </p>

          <div className="pt-4">
            <h3 className="font-oswald text-2xl uppercase tracking-wider mb-6 pb-2 border-b-2 border-brand-lime/30 inline-block">
              Our Core Pillars
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  key={idx} 
                  className="bg-[#121215] p-6 border border-brand-light/5 hover:border-brand-purple/50 transition-colors group"
                >
                  <div className="bg-brand-dark w-14 h-14 flex items-center justify-center rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h4 className="font-oswald text-xl uppercase mb-2">{card.title}</h4>
                  <p className="font-inter text-brand-light/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right visual column - Big typo block */}
        <div className="flex-1 w-full lg:w-auto relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-brand-purple text-brand-dark p-8 sm:p-12 transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto xl:mx-0 xl:ml-auto"
          >
            <GsapText 
              as="h3" 
              text="Stop waiting for Monday." 
              className="font-anton text-4xl sm:text-5xl uppercase leading-[1.1] mb-6" 
            />
            <p className="font-inter font-bold text-lg mb-8">
              The perfect time doesn't exist. You either want it or you don't.
            </p>
            <div className="space-y-4 font-oswald text-xl sm:text-2xl uppercase font-bold tracking-widest border-t-2 border-brand-dark/20 pt-8">
              <div className="flex justify-between items-center group">
                <span>Show Up.</span>
                <span className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all font-hand normal-case text-brand-light">Daily.</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>Do The Work.</span>
                <span className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all font-hand normal-case text-brand-light">Hard.</span>
              </div>
              <div className="flex justify-between items-center group">
                <span>Go Home.</span>
                <span className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all font-hand normal-case text-brand-light">Proud.</span>
              </div>
            </div>
          </motion.div>
          
          <FloatingElement shape="star" className="bottom-[-30px] right-[-20px] w-16 h-16 opacity-100 text-brand-lime" floatType={3} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
