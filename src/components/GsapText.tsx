import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface GsapTextProps {
  text: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}

export function GsapText({ text, className = '', as: Component = 'div', delay = 0 }: GsapTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Split the text into characters
    const splitText = new SplitType(containerRef.current, { types: 'lines,words,chars' });

    gsap.from(splitText.chars, {
      y: 100,
      opacity: 0,
      rotateZ: 10,
      stagger: 0.02,
      duration: 0.8,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      }
    });

    return () => {
      splitText.revert();
    };
  }, { scope: containerRef });

  // @ts-ignore
  return <Component ref={containerRef} className={className}>{text}</Component>;
}
