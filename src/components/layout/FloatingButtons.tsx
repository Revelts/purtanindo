'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { WHATSAPP_URL } from '@/constants/seo';
import { EASE } from '@/lib/motion';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center text-3xl shadow-lift hover:scale-110 transition-transform z-40"
        aria-label="Chat via WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3, ease: EASE }}
      >
        <FaWhatsapp />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            className="fixed right-4 bottom-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow-lift hover:bg-ink hover:scale-110 transition-all z-40"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
