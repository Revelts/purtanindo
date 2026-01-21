'use client';

import React from 'react';
import { Container, Section, Button } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { WHATSAPP_URL, EMAIL } from '@/constants/seo';

export function CTASection() {
  const { cta } = CONTENT;

  return (
    <Section
      id="cta"
      className="bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white"
    >
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
        <p className="text-xl mb-8 opacity-95">{cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open(WHATSAPP_URL, '_blank')}
          >
            {cta.button}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-brand-start border-white hover:bg-gray-50"
            onClick={() => window.location.href = `mailto:${EMAIL}`}
          >
            {cta.buttonSecondary}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
