import React from 'react';
import type { Metadata } from 'next';
import { Container, Section, SectionHeading, Card, ContactButton } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA, WHATSAPP_URL, EMAIL } from '@/constants/seo';
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from 'react-icons/fa';

export const metadata: Metadata = {
  title: PAGE_METADATA.contact.title,
  description: PAGE_METADATA.contact.description,
  keywords: PAGE_METADATA.contact.keywords,
  openGraph: {
    title: PAGE_METADATA.contact.title,
    description: PAGE_METADATA.contact.description,
  },
};

export default function ContactPage() {
  const { contact } = CONTENT;

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: contact.info.whatsapp,
      description: 'Chat langsung untuk respons cepat dan diskusi santai',
      action: 'Chat Sekarang',
      link: WHATSAPP_URL,
      color: 'text-green-500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: contact.info.email,
      description: 'Kirim detail project untuk diskusi lebih mendalam',
      action: 'Kirim Email',
      link: `mailto:${EMAIL}`,
      color: 'text-blue-500',
    },
    {
      icon: FaPhone,
      title: 'Telepon',
      value: contact.info.whatsapp,
      description: 'Telepon langsung untuk konsultasi cepat',
      action: 'Hubungi',
      link: `tel:${contact.info.whatsapp}`,
      color: 'text-purple-500',
    },
  ];

  const officeInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Lokasi',
      value: contact.info.address,
    },
    {
      icon: FaClock,
      title: 'Jam Operasional',
      value: contact.info.hours,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">{contact.heading}</span>
            </h1>
            <p className="text-xl text-gray-600">{contact.subheading}</p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <Card key={idx} hover className="text-center">
                  <div className={`text-5xl ${method.color} mb-4 mx-auto w-fit`}>
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="font-semibold text-gray-900 mb-4">
                    {method.value}
                  </p>
                  <ContactButton
                    size="sm"
                    href={method.link}
                  >
                    {method.action}
                  </ContactButton>
                </Card>
              );
            })}
          </div>

          {/* Office Info */}
          <div className="grid md:grid-cols-2 gap-8">
            {officeInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card key={idx}>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-brand-start">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <Card className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#ffac00] to-[#fd5e79] text-white">
            <h2 className="text-3xl font-bold mb-4">{contact.cta.title}</h2>
            <p className="text-lg mb-6 opacity-95">
              {contact.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton
                size="lg"
                variant="secondary"
                href={WHATSAPP_URL}
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Kami
              </ContactButton>
              <ContactButton
                size="lg"
                variant="outline"
                className="bg-white text-brand-start border-white hover:bg-gray-50"
                href={`mailto:${EMAIL}`}
                openInNewTab={false}
              >
                <FaEnvelope className="mr-2" />
                Email Kami
              </ContactButton>
            </div>
          </Card>
        </Container>
      </Section>

      {/* FAQ Quick Links */}
      <Section background="white">
        <Container>
          <SectionHeading
            heading="Pertanyaan Umum"
            subheading="Jawaban Cepat untuk Pertanyaan Anda"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'Apakah konsultasi benar-benar gratis?',
                answer: 'Ya, 100% gratis tanpa komitmen. Kami diskusi kebutuhan Anda dan kasih rekomendasi terbaik.',
              },
              {
                question: 'Berapa lama website/aplikasi saya jadi?',
                answer: 'Website: 2-8 minggu. Aplikasi: 2-3 bulan. Timeline pasti kita sepakati setelah analisis.',
              },
              {
                question: 'Apakah cocok untuk bisnis kecil?',
                answer: 'Sangat cocok! Kami punya solusi untuk UMKM dengan budget terjangkau dan bisa scale bertahap.',
              },
              {
                question: 'Bagaimana cara mulai kerja sama?',
                answer: 'Hubungi via WhatsApp, ceritakan kebutuhan Anda. Kami akan schedule konsultasi dan kasih proposal.',
              },
            ].map((faq, idx) => (
              <Card key={idx}>
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
