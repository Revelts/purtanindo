import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import {
  BrandPartnersSection,
  ServicesSection,
  WhyChooseUsSection,
} from '@/components/sections';
import { LocalHeroSection } from '@/components/sections/LocalHeroSection';
import { AnimatedPage } from '@/components/motion';
import {
  CITY_KEYS,
  SERVICE_KEYS,
  CITIES,
  SERVICES_SEO,
  buildPageTitle,
  buildMetaDescription,
  buildKeywords,
  buildCanonical,
  buildJsonLd,
  type CityKey,
  type ServiceKey,
} from '@/constants/local-seo';

const CTASection = dynamic(
  () => import('@/components/sections/CTASection').then((mod) => ({ default: mod.CTASection })),
  { loading: () => <div className="min-h-[200px]" /> },
);

const TestimonialsSection = dynamic(
  () =>
    import('@/components/sections/TestimonialsSection').then((mod) => ({
      default: mod.TestimonialsSection,
    })),
  { loading: () => <div className="min-h-[400px]" /> },
);

const FAQSection = dynamic(
  () => import('@/components/sections/FAQSection').then((mod) => ({ default: mod.FAQSection })),
  { loading: () => <div className="min-h-[400px]" /> },
);

interface Params {
  city: string;
  service: string;
}

function resolveParams(params: Params) {
  const cityKey = params.city as CityKey;
  const serviceKey = params.service as ServiceKey;
  const city = CITIES[cityKey];
  const service = SERVICES_SEO[serviceKey];
  if (!city || !service) return null;
  return { cityKey, serviceKey, city, service };
}

export function generateStaticParams() {
  return CITY_KEYS.flatMap((city) =>
    SERVICE_KEYS.map((service) => ({ city, service })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolved = resolveParams(await params);
  if (!resolved) return {};

  const { cityKey, serviceKey, city, service } = resolved;
  const title = buildPageTitle(city, service);
  const description = buildMetaDescription(city, service);
  const keywords = buildKeywords(city, service);
  const canonical = buildCanonical(cityKey, serviceKey);

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalSEOPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolved = resolveParams(await params);
  if (!resolved) notFound();

  const { cityKey, serviceKey, city, service } = resolved;
  const jsonLd = buildJsonLd(cityKey, city, service, serviceKey);

  return (
    <AnimatedPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocalHeroSection city={city} service={service} />
      <BrandPartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
    </AnimatedPage>
  );
}
