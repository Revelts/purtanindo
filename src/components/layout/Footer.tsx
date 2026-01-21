import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/navigation';
import { COMPANY_NAME, EMAIL, WHATSAPP_NUMBER } from '@/constants/seo';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/purtanindo-white.webp"
              alt={`${COMPANY_NAME} Logo`}
              width={150}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">
              Software house terpercaya untuk digitalisasi bisnis Anda.
              Memberikan solusi IT profesional dan inovatif.
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25d366] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="text-gray-400 hover:text-brand-start transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 mb-1">WhatsApp</span>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Email</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-gray-500 mb-1">Lokasi</span>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
