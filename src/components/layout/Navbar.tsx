'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/navigation';
import { WHATSAPP_URL } from '@/constants/seo';
import { FiMenu, FiX } from 'react-icons/fi';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas transition-all duration-300 ${
        isScrolled ? 'border-b border-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-2.webp"
              alt="Purtanindo"
              width={140}
              height={38}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-ink underline underline-offset-4 decoration-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA — right */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-pill bg-primary text-white text-sm font-medium hover:bg-ink transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-2xl text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-canvas border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium ${
                  isActive(link.href)
                    ? 'text-ink underline underline-offset-4 decoration-accent'
                    : 'text-muted hover:text-ink'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-pill bg-primary text-white text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
