import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CTASection, WhyChooseUsSection } from '@/components/sections';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA } from '@/constants/seo';
import { AnimatedPage, FadeUp, StaggerGrid } from '@/components/motion';

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
  keywords: PAGE_METADATA.about.keywords,
  openGraph: {
    title: PAGE_METADATA.about.title,
    description: PAGE_METADATA.about.description,
  },
};

export default function AboutPage() {
  const { about } = CONTENT;

  return (
    <AnimatedPage>
      {/* Hero */}
      <Section className="pt-[72px] pb-16 bg-canvas">
        <Container>
          <FadeUp className="max-w-2xl pt-16">
            <p className="mono-label text-accent mb-5">Tentang Kami</p>
            <h1 className="font-display font-bold text-ink display-tight text-5xl md:text-6xl mb-6">
              {about.heading}
            </h1>
            <p className="text-muted text-xl">{about.title}</p>
          </FadeUp>
        </Container>
      </Section>

      {/* About + Image */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="font-display font-bold text-ink text-3xl md:text-4xl display-tight mb-6">
                Visi & Misi Kami
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {about.description}
              </p>
              <p className="text-muted leading-relaxed">
                Kami tidak cuma terima brief lalu buatkan. Kami ikut mikir: solusi
                apa yang paling masuk akal untuk kondisi bisnis Anda sekarang,
                bukan solusi yang paling besar atau paling mahal. Dari awal
                konsultasi sampai setelah launch, kami masih bisa dihubungi.
              </p>
            </FadeUp>
            <FadeUp delay={0.15} className="relative h-[400px] rounded-card overflow-hidden shadow-lift">
              <Image
                src="/images/image-2.webp"
                alt="Purtanindo Team"
                fill
                className="object-cover"
              />
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="stone">
        <Container>
          <StaggerGrid className="grid md:grid-cols-3 gap-8 text-center">
            {about.features.map((feature, idx) => (
              <div key={idx} className="py-4">
                <div className="font-display font-bold text-6xl md:text-7xl text-ink display-tight mb-2">
                  {feature.value}
                </div>
                <div className="mono-label text-muted">{feature.label}</div>
              </div>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      {/* Values */}
      <Section background="green">
        <Container>
          <FadeUp>
            <SectionHeading
              heading="Nilai-Nilai yang Kami Pegang"
              subheading="Bukan slogan, ini cara kami bekerja setiap hari"
              light
            />
          </FadeUp>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Hasilnya yang dihitung',
                description:
                  'Fitur banyak bukan ukuran keberhasilan. Kami lebih senang dengar klien bilang operasional mereka lebih lancar atau inquiry-nya bertambah.',
              },
              {
                title: 'Tidak ada yang disembunyikan',
                description:
                  'Harga, timeline, progress, semuanya terbuka. Kalau ada kendala di tengah jalan, kami bilang lebih awal, bukan setelah deadline lewat.',
              },
              {
                title: 'Dibangun untuk bisnis Anda, bukan untuk semua orang',
                description:
                  'Kami tidak jual template lalu bilang sudah custom. Setiap proyek dimulai dari nol, karena cara bisnis Anda beroperasi tidak sama dengan yang lain.',
              },
              {
                title: 'Kami masih ada setelah project selesai',
                description:
                  'Banyak klien kami yang sudah kerja sama lebih dari satu proyek. Bukan karena kontrak, tapi karena kami masih bisa dihubungi kalau ada yang perlu dibenahi.',
              },
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-sm border border-white/10 bg-white/5">
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </StaggerGrid>
        </Container>
      </Section>

      <WhyChooseUsSection />
      <CTASection />
    </AnimatedPage>
  );
}
