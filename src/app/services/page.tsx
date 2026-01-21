import React from 'react';
import type { Metadata } from 'next';
import { Container, Section, SectionHeading, Card, ContactButton } from '@/components/ui';
import { CTASection } from '@/components/sections';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA, WHATSAPP_URL } from '@/constants/seo';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaCheckCircle,
} from 'react-icons/fa';

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
  code: FaServer,
  chart: FaChartLine,
};

const processSteps = [
  {
    step: '01',
    title: 'Konsultasi & Analisis Kebutuhan',
    description:
      'Diskusi gratis untuk pahami tantangan bisnis Anda. Kami analisis kebutuhan dan rekomendasikan solusi yang paling tepat.',
  },
  {
    step: '02',
    title: 'Proposal & Perencanaan',
    description:
      'Proposal detail dengan scope, timeline, dan harga transparan. Blueprint dan desain yang sesuai goals bisnis Anda.',
  },
  {
    step: '03',
    title: 'Development & Iterasi',
    description:
      'Tim kami bangun solusi dengan update progress berkala. Anda bisa kasih feedback di setiap tahap.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Testing menyeluruh dari berbagai skenario untuk pastikan sistem berjalan sempurna dan sesuai ekspektasi.',
  },
  {
    step: '05',
    title: 'Launching & Training',
    description: 'Deploy sistem dan training lengkap untuk tim Anda. Dokumentasi dan panduan user yang mudah dipahami.',
  },
  {
    step: '06',
    title: 'Support & Maintenance Berkelanjutan',
    description: 'Garansi bug-fix, maintenance rutin, dan konsultasi lanjutan. Kami tetap siap support setelah launching.',
  },
];

export default function ServicesPage() {
  const { services } = CONTENT;

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{services.heading}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {services.description}
            </p>
            <ContactButton
              size="lg"
              href={WHATSAPP_URL}
            >
              Konsultasi Gratis Sekarang
            </ContactButton>
          </div>
        </Container>
      </Section>

      {/* Services Detail */}
      <Section id="services-detail" background="white">
        <Container>
          <div className="space-y-16">
            {services.items.map((service, idx) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    !isEven && 'md:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div
                      className={`text-6xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                    >
                      <Icon />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ContactButton
                      variant="outline"
                      href={WHATSAPP_URL}
                    >
                      Konsultasi Layanan Ini
                    </ContactButton>
                  </div>

                  <div className={isEven ? '' : 'md:order-1'}>
                    <Card>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Yang Kami Tawarkan:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIdx) => (
                          <li
                            key={featureIdx}
                            className="flex items-start text-gray-700"
                          >
                            <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section id="process" background="gray">
        <Container>
          <SectionHeading
            heading="Proses Kerja Kami"
            subheading="Dari Konsultasi hingga Launching & Support"
            description="Proses kerja yang jelas dan terstruktur. Anda selalu tahu progress dan bisa terlibat di setiap tahap"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <Card key={idx} hover>
                <div className="text-5xl font-bold text-gradient mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section id="technologies" background="white">
        <Container>
          <SectionHeading
            heading="Teknologi yang Kami Kuasai"
            subheading="Modern, Proven & Reliable"
            description="Kami gunakan teknologi terkini yang terbukti andal untuk membangun solusi yang cepat, aman, dan mudah dikembangkan"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Next.js',
              'React',
              'Node.js',
              'Flutter',
              'Laravel',
              'Python',
              'PostgreSQL',
              'MongoDB',
              'AWS',
              'Docker',
              'Kubernetes',
              'Firebase',
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
