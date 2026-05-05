import React from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Twitter, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="location" className="bg-black pt-20 pb-10 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <h2 className="font-anton text-4xl sm:text-5xl uppercase mb-6 text-brand-light">
              THE FITNESS <span className="text-brand-lime">TRIBE</span>
            </h2>
            <p className="font-inter text-brand-light/60 max-w-sm font-medium mb-8">
              A high-intensity, community-driven fitness center. We build strength, character, and unbreakable mindsets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-brand-light hover:text-brand-purple hover:border-brand-purple transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-brand-light hover:text-brand-lime hover:border-brand-lime transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-xl uppercase tracking-wider mb-6 text-brand-light">Quick Links</h4>
            <ul className="space-y-4 font-inter text-brand-light/60 font-medium">
              <li><a href="#" className="inline-block hover:text-brand-lime hover:scale-105 transition-all">About The Tribe</a></li>
              <li><a href="#" className="inline-block hover:text-brand-lime hover:scale-105 transition-all">Programs & Classes</a></li>
              <li><a href="#" className="inline-block hover:text-brand-lime hover:scale-105 transition-all">Pricing & Plans</a></li>
              <li><a href="#" className="inline-block hover:text-brand-lime hover:scale-105 transition-all">Trainer Roster</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-xl uppercase tracking-wider mb-6 text-brand-light">Headquarters</h4>
            <ul className="space-y-4 font-inter text-brand-light/60 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-purple shrink-0" />
                <span>124 Iron Street,<br />Warehouse District,<br />NY 10001</span>
              </li>
              <li>info@fitnesstribe.com</li>
              <li>+1 (555) 019-IRON</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm font-medium text-brand-light/40">
            &copy; {new Date().getFullYear()} The Fitness Tribe. All Rights Reserved.
          </p>
          <div className="font-hand text-brand-purple text-xl">
            No excuses allowed.
          </div>
        </div>
      </div>
    </footer>
  );
}
