'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { WHATSAPP_URL } from '@/constants/seo';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 w-14 h-14 rounded-full bg-[#25d366] text-white flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform z-40"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-40"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
}
