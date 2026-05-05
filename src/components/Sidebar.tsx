import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { title: 'HOME', path: '/' },
    { title: 'MEMBERSHIP', path: '/membership' },
    { title: 'ABOUT', path: '/#about' },
    { title: 'PRICING', path: '/membership#pricing' },
    { title: 'WHERE TO FIND US', path: '/#location' },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-brand-lime text-brand-dark flex items-center justify-center rounded-full hover:scale-105 transition-transform duration-300 border-2 border-brand-dark md:right-10 md:top-10"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: 'circle(0% at calc(100% - 3.5rem) 3.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3.5rem) 3.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 3.5rem) 3.5rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-brand-dark flex flex-col justify-center px-10 md:px-20"
          >
            {/* Background Text Deco */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
              <span className="font-anton text-[30vw] leading-none whitespace-nowrap text-brand-purple">
                TRIBE
              </span>
            </div>

            <nav className="relative z-10 flex flex-col items-start space-y-6 md:space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <Link 
                    to={item.path}
                    className="group flex items-center"
                    onClick={() => {
                      if (item.path.includes('#')) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <span className="font-oswald text-sm md:text-base text-brand-lime mr-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                      // {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase text-brand-light group-hover:text-transparent group-hover:text-stroke-1 transition-all duration-300">
                      {item.title}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer of Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 md:left-20 right-10 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-brand-light/10 pt-6 z-10"
            >
              <div className="mb-4 md:mb-0">
                <span className="block font-oswald text-brand-purple tracking-widest uppercase mb-1 text-sm">Location</span>
                <span className="font-inter text-brand-light font-medium">100 Iron Street, Muscle City</span>
              </div>
              <div className="flex space-x-6 font-oswald text-brand-light uppercase tracking-widest text-sm">
                <a href="#" className="hover:text-brand-lime transition-colors">Insta</a>
                <a href="#" className="hover:text-brand-lime transition-colors">TikTok</a>
                <a href="#" className="hover:text-brand-lime transition-colors">YouTube</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
