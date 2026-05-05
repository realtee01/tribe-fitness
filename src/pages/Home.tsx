import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Philosophy } from '../components/Philosophy';
import { Programs } from '../components/Programs';
import { Trainers } from '../components/Trainers';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';

export function Home() {
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

  return (
    <main className="w-full bg-brand-dark min-h-screen text-brand-light overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      <Hero />
      <Marquee text="SWEAT • BLEED • CONQUER • REPEAT • " />
      <Philosophy />
      <Gallery />
      <Marquee text="NO EXCUSES • JOIN THE TRIBE • PUSH LIMITS • " outline={true} direction={-1} className="bg-brand-lime text-brand-dark !border-none" />
      <Programs />
      <Trainers />
      <Footer />
    </main>
  );
}
