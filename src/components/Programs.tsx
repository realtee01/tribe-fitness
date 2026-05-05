import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Programs() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Tribal Strength",
      time: "60 MIN",
      type: "Powerlifting & Hypertrophy",
      desc: "Pure iron therapy. Build thick, dense muscle and raw power through compound movements.",
      bg: "bg-brand-dark",
      text: "text-brand-light",
      border: "border-brand-purple",
      accent: "text-brand-purple"
    },
    {
      title: "The Furnace",
      time: "45 MIN",
      type: "HIIT & MetCon",
      desc: "Lungs burning, heart racing. Our signature conditioning class designed to melt fat.",
      bg: "bg-brand-purple",
      text: "text-brand-dark",
      border: "border-brand-dark",
      accent: "text-brand-lime" // Actually, text-brand-dark handles visibility best on purple, but let's use dark
    },
    {
      title: "Iron Core",
      time: "30 MIN",
      type: "Midline & Stability",
      desc: "Build an unbreakable foundation. Focus on core strength, mobility, and injury prevention.",
      bg: "bg-brand-dark",
      text: "text-brand-light",
      border: "border-brand-lime",
      accent: "text-brand-lime"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative bg-[#0B0B0D] overflow-hidden">
      
      {/* Decorative text behind */}
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-anton text-[15vw] leading-none whitespace-nowrap text-white/[0.02] pointer-events-none z-0">
        PROGRAMS
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-anton text-5xl md:text-7xl uppercase text-brand-light leading-none">
              <span className="text-brand-lime">Choose</span> your<br /> battlefield
            </h2>
          </div>
          <p className="font-inter text-brand-light/70 max-w-sm mb-2 font-medium">
            Multiple disciplines, one goal: to forge a stronger, faster, highly capable human being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`p-8 flex flex-col h-full border-2 transition-transform duration-300 hover:-translate-y-4 group ${prog.bg} ${prog.text} ${prog.border}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className={`font-oswald font-bold tracking-widest text-sm uppercase px-3 py-1 rounded-full ${prog.bg === 'bg-brand-purple' ? 'bg-brand-dark text-brand-light' : 'bg-[#1a1a1f]'}`}>
                  {prog.time}
                </span>
                <span className={`font-hand text-xl -rotate-6 ${prog.bg === 'bg-brand-purple' ? 'text-brand-dark font-bold' : prog.accent}`}>
                  {prog.type}
                </span>
              </div>
              
              <h3 className="font-anton text-4xl uppercase mb-4 mt-auto">
                {prog.title}
              </h3>
              
              <p className={`font-inter font-medium leading-relaxed mb-8 ${prog.bg === 'bg-brand-dark' ? 'text-brand-light/70' : 'text-brand-dark/80'}`}>
                {prog.desc}
              </p>

              <button onClick={() => navigate('/membership')} className={`mt-auto flex items-center gap-2 font-oswald uppercase text-xl font-bold border-b-2 pb-1 inline-flex w-fit transition-all ${prog.border} group-hover:gap-4`}>
                Book Session <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
