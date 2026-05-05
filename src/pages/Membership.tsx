import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function Membership() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const plans = [
    {
      name: "Bronze",
      price: "$49",
      period: "per month",
      desc: "For those who just want to show up, lift heavy, and go home.",
      features: [
        "Full Gym Access (Open 24/7)",
        "Free Weights & Platforms",
        "Locker Room & Showers",
        "1 Free Assessment"
      ],
      popular: false,
      color: "border-orange-700/50 hover:border-orange-500",
      textColor: "text-orange-500",
      buttonStyle: "border-2 border-orange-700/50 hover:bg-orange-600 hover:text-white"
    },
    {
      name: "Silver",
      price: "$89",
      period: "per month",
      desc: "Our most popular tier. For those who thrive in the pack.",
      features: [
        "Everything in Bronze",
        "Unlimited Group Classes",
        "Tribe Recovery Room Access",
        "Monthly Check-in with Coach"
      ],
      popular: true,
      color: "border-gray-400 hover:border-gray-300 scale-105 shadow-[0_0_40px_rgba(156,163,175,0.15)]",
      textColor: "text-gray-300",
      buttonStyle: "bg-gray-300 text-brand-dark hover:bg-white",
      badgeColor: "bg-gray-300 text-brand-dark"
    },
    {
      name: "Gold",
      price: "$149",
      period: "per month",
      desc: "For the relentless. Complete coaching and nutrition protocol.",
      features: [
        "Everything in Silver",
        "2x/Week 1-on-1 Personal Training",
        "Custom Nutrition Protocol",
        "Direct Access to Head Coaches"
      ],
      popular: false,
      color: "border-yellow-500/50 hover:border-yellow-400",
      textColor: "text-yellow-500",
      buttonStyle: "border-2 border-yellow-500/50 hover:bg-yellow-500 hover:text-brand-dark"
    }
  ];

  return (
    <main className="w-full bg-brand-dark min-h-screen text-brand-light font-inter selection:bg-brand-lime selection:text-brand-dark flex flex-col">
      <div className="flex-1 py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        {/* Background Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <Link to="/" className="inline-block font-oswald text-brand-lime uppercase tracking-widest text-sm mb-12 hover:-translate-x-2 transition-transform">
            &larr; Back to Base
          </Link>

          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-anton text-6xl md:text-8xl uppercase tracking-wide text-brand-light mb-6"
            >
              PAY THE <span className="text-brand-lime">PRICE</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-brand-light/70 max-w-2xl mx-auto font-medium"
            >
              Commitment isn't free. Pick your level of suffering. No contracts, because if you want to quit, that's your problem.
            </motion.p>
          </div>

          <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className={`relative bg-[#121215] border-2 p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${plan.color}`}
              >
                {plan.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald font-bold px-4 py-1 uppercase text-sm ${plan.badgeColor}`}>
                    Most Popular
                  </div>
                )}
                
                <h3 className={`font-anton text-3xl uppercase mb-2 ${plan.textColor}`}>{plan.name}</h3>
                <p className="text-brand-light/60 text-sm mb-6 pb-6 border-b border-white/10 h-16">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className={`font-anton text-5xl ${plan.textColor}`}>{plan.price}</span>
                  <span className="text-brand-light/50 font-medium ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <Check className={`w-5 h-5 shrink-0 ${plan.textColor}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-oswald text-lg uppercase font-bold transition-all ${plan.buttonStyle}`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
