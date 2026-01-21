'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/navigation';
import { Button } from '@/components/ui';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '@/constants/seo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/purtanindo-colored.webp"
              alt="Purtanindo Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-start'
                    : isHomePage && !isScrolled
                    ? 'text-white hover:text-brand-start'
                    : 'text-gray-700 hover:text-brand-start'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <FaWhatsapp className="mr-2" />
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl ${
              isHomePage && !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium ${
                  isActive(link.href)
                    ? 'text-brand-start'
                    : 'text-gray-700 hover:text-brand-start'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="md"
              className="w-full"
              onClick={() => {
                window.open(WHATSAPP_URL, '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              <FaWhatsapp className="mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
