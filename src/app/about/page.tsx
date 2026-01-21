import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, Section, SectionHeading, Card } from '@/components/ui';
import { CTASection, WhyChooseUsSection } from '@/components/sections';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA } from '@/constants/seo';

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
  const { about, team } = CONTENT;

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{about.heading}</span>
            </h1>
            <p className="text-xl text-gray-600">{about.title}</p>
          </div>
        </Container>
      </Section>

      {/* About Content */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visi & Misi Kami
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {about.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kami tidak hanya membangun teknologi—kami membantu bisnis Anda 
                bertransformasi dan bertumbuh. Dari konsultasi awal, pemilihan 
                solusi yang tepat, hingga implementasi dan support berkelanjutan, 
                Purtanindo adalah partner terpercaya dalam perjalanan digital Anda.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-soft">
              <Image
                src="/images/img2.webp"
                alt="Purtanindo Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section background="gray">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {about.features.map((feature, idx) => (
              <Card key={idx} className="text-center">
                <div className="text-5xl text-brand-start mb-3">
                  {feature.value}
                </div>
                <div className="text-gray-600">{feature.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section id="team" background="white">
        <Container>
          <SectionHeading
            heading={team.heading}
            subheading={team.subheading}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {team.members.map((member, idx) => (
              <Card key={idx} hover className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-start font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="gradient">
        <Container>
          <SectionHeading
            heading="Nilai-Nilai Kami"
            subheading="Prinsip yang Kami Pegang"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Hasil Bisnis',
                description:
                  'Teknologi harus berdampak nyata. Kami fokus pada solusi yang meningkatkan efisiensi dan revenue bisnis Anda.',
              },
              {
                title: 'Transparansi',
                description:
                  'Harga jelas, timeline realistis, progress terbuka. Tidak ada hidden cost atau janji yang tidak bisa ditepati.',
              },
              {
                title: 'Kustomisasi',
                description:
                  'Setiap bisnis unik. Kami bangun solusi yang disesuaikan dengan workflow dan kebutuhan spesifik Anda.',
              },
              {
                title: 'Partnership',
                description:
                  'Kami bukan vendor yang lepas tangan. Kami partner yang support bisnis Anda bahkan setelah project selesai.',
              },
            ].map((value, idx) => (
              <Card key={idx}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
