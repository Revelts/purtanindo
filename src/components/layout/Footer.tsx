import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants/navigation';
import { COMPANY_NAME, EMAIL, WHATSAPP_NUMBER } from '@/constants/seo';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt={`${COMPANY_NAME} Logo`}
              width={130}
              height={34}
              className="h-8 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              Partner digitalisasi untuk UMKM, startup, dan korporat yang
              serius tumbuh. Solusi custom, harga transparan, support berkelanjutan.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Perusahaan
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Layanan
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Kontak
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-white/40 text-xs mono-label mb-1">WhatsApp</span>
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
                <span className="block text-white/40 text-xs mono-label mb-1">Email</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs mono-label mb-1">Lokasi</span>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
