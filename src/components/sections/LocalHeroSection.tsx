'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/constants/seo';
import { EASE, fadeIn, fadeUp } from '@/lib/motion';
import type { CityData, ServiceSeoData } from '@/constants/local-seo';
import { buildHeroSubheading } from '@/constants/local-seo';

interface LocalHeroSectionProps {
  city: CityData;
  service: ServiceSeoData;
}

export function LocalHeroSection({ city, service }: LocalHeroSectionProps) {
  const subheading = buildHeroSubheading(city, service);
  const nearbyText = city.nearby.join(', ');

  return (
    <section
      id="home"
      className="bg-canvas pt-[72px] min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — editorial headline */}
          <div className="lg:col-span-3">
            <motion.p
              className="mono-label text-accent mb-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {service.name}
            </motion.p>

            <motion.h1
              className="font-display font-bold text-ink display-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {service.name} {city.name}
            </motion.h1>

            <motion.p
              className="text-lg text-muted leading-relaxed mb-4 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {subheading}
            </motion.p>

            <motion.p
              className="text-sm text-muted/70 leading-relaxed mb-10 max-w-xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              Melayani {city.name}, {nearbyText}, dan sekitarnya.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 items-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-pill bg-primary text-white text-sm font-medium hover:bg-ink transition-colors"
              >
                Konsultasi Gratis via WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right — overlapping media cards */}
          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="relative h-[520px]">
              <motion.div
                className="absolute top-0 right-0 w-[85%] h-[340px] rounded-card overflow-hidden shadow-lift"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              >
                <Image
                  src="/images/image-1.webp"
                  alt={`${service.name} ${city.name} — Purtanindo`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-[60%] h-[220px] rounded-sm overflow-hidden shadow-lift border-4 border-canvas"
                initial={{ opacity: 0, x: -16, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              >
                <Image
                  src="/images/image-2.webp"
                  alt={`Tim Purtanindo ${city.name}`}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute top-4 left-4 w-3 h-3 rounded-full bg-accent"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
