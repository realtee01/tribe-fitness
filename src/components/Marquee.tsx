import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  text: string;
  className?: string;
  outline?: boolean;
  direction?: 1 | -1;
}

export function Marquee({ text, className = '', outline = false, direction = 1 }: MarqueeProps) {
  // Ensure the text repeats enough so half of it fills any screen
  const repeatedText = Array(12).fill(text).join(" ");

  return (
    <div className={`relative flex overflow-hidden w-full whitespace-nowrap bg-brand-dark py-4 border-y border-brand-purple/30 ${className}`}>
      <motion.div
        className="flex shrink-0 items-center w-max will-change-transform"
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        <span 
          className={`font-anton text-5xl md:text-7xl uppercase pr-8 ${outline ? 'text-black' : 'text-brand-purple'}`}
          style={outline ? { WebkitTextStroke: '1px rgba(241, 241, 241, 0.8)' } : {}}
        >
          {repeatedText}
        </span>
        <span 
          className={`font-anton text-5xl md:text-7xl uppercase pr-8 ${outline ? 'text-black' : 'text-brand-purple'}`}
          style={outline ? { WebkitTextStroke: '1px rgba(241, 241, 241, 0.8)' } : {}}
        >
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
