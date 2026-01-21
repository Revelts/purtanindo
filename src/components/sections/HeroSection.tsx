'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { WHATSAPP_URL } from '@/constants/seo';

export function HeroSection() {
  const { hero } = CONTENT;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/img1.webp)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <Container className="relative z-10 text-center py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {hero.heading}
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
          {hero.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            {hero.cta.primary}
          </Button>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              {hero.cta.secondary}
            </Button>
          </Link>
        </div>
      </Container>

      {/* Wave Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-28 bg-repeat-x"
        style={{
          backgroundImage: 'url(/images/wave.webp)',
          backgroundSize: '100rem 11rem',
        }}
      />
    </section>
  );
}
