import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, Section, SectionHeading, Card, Button } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA, WHATSAPP_URL } from '@/constants/seo';

export const metadata: Metadata = {
  title: PAGE_METADATA.portfolio.title,
  description: PAGE_METADATA.portfolio.description,
  keywords: PAGE_METADATA.portfolio.keywords,
  openGraph: {
    title: PAGE_METADATA.portfolio.title,
    description: PAGE_METADATA.portfolio.description,
  },
};

const categories = ['Semua', 'Web Development', 'Mobile Development', 'Enterprise Solution'];

export default function PortfolioPage() {
  const { portfolio } = CONTENT;

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{portfolio.heading}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {portfolio.subheading}
            </p>
            <p className="text-gray-600">{portfolio.description}</p>
          </div>
        </Container>
      </Section>

      {/* Filter Categories */}
      <Section background="white" className="py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <Button
                key={idx}
                variant={idx === 0 ? 'primary' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section id="projects" background="gray">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.projects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden p-0">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-brand-start font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Proyek Selesai' },
              { number: '3+', label: 'Klien Puas' },
              { number: '1000+', label: 'Jam Pengembangan' },
              { number: '100%', label: 'Kepuasan Klien' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial Highlight */}
      <Section background="gradient">
        <Container>
          <Card className="max-w-3xl mx-auto text-center">
            <div className="text-4xl text-brand-start mb-4">"</div>
            <p className="text-xl text-gray-700 italic mb-6">
              "Awalnya bingung harus mulai digitalisasi dari mana. Tim Purtanindo 
              nggak cuma buatin website, tapi juga kasih roadmap lengkap. Hasilnya? 
              Inquiry naik 60% dalam 3 bulan. Sangat recommended!"
            </p>
            <div className="font-bold text-gray-900">Budi Santoso</div>
            <div className="text-sm text-gray-600">CEO, PT. Digital Sejahtera</div>
          </Card>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
