import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  text: string;
  className?: string;
  outline?: boolean;
  direction?: 1 | -1;
}

export function Marquee({ text, className = '', outline = false, direction = 1 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  
  // Create an array of text to ensure it fills the screen
  const items = Array(15).fill(text);

  useGSAP(() => {
    if (!textWrapperRef.current) return;
    
    // Animate the wrapper to move horizontally
    const animation = gsap.to(textWrapperRef.current, {
      xPercent: direction === 1 ? -50 : 50,
      repeat: -1,
      duration: 40,
      ease: "none"
    });
    
    // Set initial position if moving right
    if (direction === -1) {
       gsap.set(textWrapperRef.current, { xPercent: -50 });
    }

    // Make the marquee scroll faster when scrolling
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          // Increase speed based on scroll speed and direction
          const scrollDir = self.direction; // 1 or -1
          // Combine direction of scroll with direction of marquee
          const velocity = Math.abs(self.getVelocity() / 500);
          gsap.to(animation, { 
            timeScale: (1 + velocity) * (scrollDir === direction ? 1 : -1), 
            duration: 0.1, 
            overwrite: true 
          });
        },
      });

      // Slowly return to normal speed after scrolling stops
      ScrollTrigger.addEventListener("scrollEnd", () => {
        gsap.to(animation, { timeScale: 1, duration: 1, ease: 'power2.out', overwrite: true });
      });

    });

    return () => ctx.revert();
  }, { scope: containerRef });
  
  return (
    <div ref={containerRef} className={`relative flex overflow-x-hidden w-full whitespace-nowrap bg-brand-dark py-4 border-y border-brand-purple/30 ${className}`}>
      <div 
        ref={textWrapperRef}
        className="flex min-w-[200%] shrink-0 items-center w-max"
      >
        {items.map((item, i) => (
          <span 
            key={i} 
            className={`font-anton text-5xl md:text-7xl uppercase pr-8 ${outline ? 'text-stroke-1 text-brand-dark' : 'text-brand-purple'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
