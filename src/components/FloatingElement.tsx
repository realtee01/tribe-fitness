import React from 'react';
import { motion } from 'motion/react';

type SvgShape = 'kettlebell' | 'dumbell' | 'zap' | 'star' | 'circle';

interface FloatingElementProps {
  shape: SvgShape;
  className?: string;
  delay?: number;
  duration?: number;
  floatType?: 1 | 2 | 3 | 4;
}

export function FloatingElement({ 
  shape, 
  className = '', 
  delay = 0,
  duration = 8,
  floatType = 1 
}: FloatingElementProps) {
  
  const getShape = () => {
    switch (shape) {
      case 'kettlebell':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-brand-purple">
            <path d="M7 10h10M9 6a3 3 0 0 1 6 0v4M5 13a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3H5v3zM5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2z" fill="currentColor"/>
            <path d="M8 16c0 1.5 1 4 4 4s4-2.5 4-4" />
          </svg>
        );
      case 'dumbell':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-brand-lime">
            <path d="M14.4 14.4 9.6 9.6" />
            <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
            <path d="m21.5 21.5-1.4-1.4" />
            <path d="M3.9 3.9 2.5 2.5" />
            <path d="M6.404 2.768a2 2 0 1 1 2.829 2.829l1.768-1.767a2 2 0 1 1 2.828 2.829L7.465 13.023a2 2 0 1 1-2.829-2.829l1.768-1.768a2 2 0 1 1-2.829-2.828z" />
          </svg>
        );
      case 'zap':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-brand-lime">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-brand-purple">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      case 'circle':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full text-brand-light opacity-50">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      default:
        return null;
    }
  };

  const floatClass = `animate-float-${floatType}`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1 }}
      className={`absolute z-10 pointer-events-none drop-shadow-2xl ${className}`}
    >
      <div className={floatClass}>
        {getShape()}
      </div>
    </motion.div>
  );
}
