import React from 'react';
import type { Metadata } from 'next';
import { Container, Section, SectionHeading, ContactButton } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA, WHATSAPP_URL } from '@/constants/seo';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
} from 'react-icons/fa';
import { AnimatedPage, FadeUp, StaggerGrid } from '@/components/motion';

export const metadata: Metadata = {
  title: PAGE_METADATA.services.title,
  description: PAGE_METADATA.services.description,
  keywords: PAGE_METADATA.services.keywords,
  openGraph: {
    title: PAGE_METADATA.services.title,
    description: PAGE_METADATA.services.description,
  },
};

const iconMap = {
  laptop: FaLaptopCode,
  mobile: FaMobileAlt,
  code:   FaServer,
  chart:  FaChartLine,
};

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi & Analisis',
    description:
      'Sebelum kami ngoding apapun, kami ngobrol dulu. Kami mau tahu bisnis Anda, masalahnya apa, dan apa yang sebenarnya ingin Anda capai.',
  },
  {
    step: '02',
    title: 'Proposal & Perencanaan',
    description:
      'Setelah paham kebutuhan Anda, kami kirim proposal dengan scope, timeline, dan biaya yang sudah jelas. Angka yang ada di proposal itu yang kami pegang.',
  },
  {
    step: '03',
    title: 'Development Iteratif',
    description:
      'Proses pengerjaan berjalan dengan update rutin. Di setiap checkpoint Anda bisa lihat hasilnya dan kasih feedback, bukan baru tahu hasilnya di hari serah terima.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Sebelum launch, sistem kami uji dari berbagai skenario. Kami tidak akan kasih produk yang kami sendiri belum yakin.',
  },
  {
    step: '05',
    title: 'Launch & Training',
    description:
      'Sistem live, tim Anda sudah tahu cara pakainya, dokumentasi tersedia. Anda tidak perlu tergantung kami untuk hal-hal dasar.',
  },
  {
    step: '06',
    title: 'Support Pasca-Launch',
    description:
      'Ada bug, mau tanya sesuatu, atau mau tambah fitur, kami masih bisa dihubungi. Serah terima project bukan berarti selesai.',
  },
];

export default function ServicesPage() {
  const { services } = CONTENT;

  return (
    <AnimatedPage>
      {/* Hero */}
      <Section className="pt-[72px] pb-16 bg-canvas">
        <Container>
          <FadeUp className="max-w-2xl pt-16">
            <p className="mono-label text-accent mb-5">Jasa Digitalisasi Bisnis</p>
            <h1 className="font-display font-bold text-ink display-tight text-5xl md:text-6xl mb-6">
              {services.heading}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {services.description}
            </p>
            <ContactButton size="lg" href={WHATSAPP_URL}>
              Konsultasi Gratis Sekarang
            </ContactButton>
          </FadeUp>
        </Container>
      </Section>

      {/* Services Detail */}
      <Section id="services-detail" background="green">
        <Container>
          <StaggerGrid className="grid md:grid-cols-2 auto-rows-fr gap-4">
            {services.items.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="p-6 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col h-full"
                >
                  <div className="text-accent text-2xl mb-4">
                    <Icon />
                  </div>
                  <h2 className="font-display font-semibold text-white text-xl mb-3">
                    {service.title}
                  </h2>
                  <p className="text-white/65 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-white/60">
                        <span className="text-accent mr-2 mt-0.5 flex-shrink-0">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ContactButton
                    variant="outline"
                    href={WHATSAPP_URL}
                    className="border-white/30 text-white hover:bg-white/10 rounded-pill text-sm px-5 py-2"
                  >
                    Konsultasi Layanan Ini
                  </ContactButton>
                </div>
              );
            })}
          </StaggerGrid>
        </Container>
      </Section>

      {/* Process */}
      <Section id="process" background="white">
        <Container>
          <FadeUp>
            <SectionHeading
              heading="Proses Kerja Kami"
              subheading="Dari Konsultasi hingga Launch, dan Seterusnya"
              description="Proses kerja yang jelas dan terstruktur. Anda selalu tahu progress, selalu bisa memberikan feedback, dan tidak ada kejutan di akhir."
            />
          </FadeUp>
          <div className="border-t border-border">
            {processSteps.map((step, idx) => (
              <FadeUp key={idx} delay={idx * 0.06}>
                <div className="grid md:grid-cols-[80px_1fr] gap-6 py-6 border-b border-border">
                  <div className="font-display font-bold text-3xl text-accent display-tight">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-1">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </AnimatedPage>
  );
}
