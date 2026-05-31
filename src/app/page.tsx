import React from 'react';
import dynamic from 'next/dynamic';
import {
  HeroSection,
  BrandPartnersSection,
  ServicesSection,
  WhyChooseUsSection,
} from '@/components/sections';
import { AnimatedPage } from '@/components/motion';

// Dynamic import untuk section below-the-fold (lazy loading)
const CTASection = dynamic(() => import('@/components/sections/CTASection').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[200px]" />,
});

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function HomePage() {
  return (
    <AnimatedPage>
      <HeroSection />
      <BrandPartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
    </AnimatedPage>
  );
}
