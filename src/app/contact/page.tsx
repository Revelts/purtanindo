import React from 'react';
import type { Metadata } from 'next';
import { Container, Section, SectionHeading, ContactButton } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { PAGE_METADATA, WHATSAPP_URL, EMAIL } from '@/constants/seo';
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from 'react-icons/fa';
import { AnimatedPage, FadeUp, StaggerGrid } from '@/components/motion';

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
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: contact.info.email,
      description: 'Kirim detail project untuk diskusi lebih mendalam',
      action: 'Kirim Email',
      link: `mailto:${EMAIL}`,
    },
    {
      icon: FaPhone,
      title: 'Telepon',
      value: contact.info.whatsapp,
      description: 'Telepon langsung untuk konsultasi cepat',
      action: 'Hubungi',
      link: `tel:${contact.info.whatsapp}`,
    },
  ];

  const officeInfo = [
    { icon: FaMapMarkerAlt, title: 'Lokasi', value: contact.info.address },
    { icon: FaClock, title: 'Jam Operasional', value: contact.info.hours },
  ];

  return (
    <AnimatedPage>
      {/* Hero */}
      <Section className="pt-[72px] pb-16 bg-canvas">
        <Container>
          <FadeUp className="max-w-2xl pt-16">
            <p className="mono-label text-accent mb-5">Kontak</p>
            <h1 className="font-display font-bold text-ink display-tight text-5xl md:text-6xl mb-6">
              {contact.heading}
            </h1>
            <p className="text-muted text-xl">{contact.subheading}</p>
          </FadeUp>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section background="stone">
        <Container>
          <StaggerGrid className="grid md:grid-cols-3 gap-4 mb-12">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={idx}
                  className="bg-canvas border border-border rounded-sm p-6 hover:shadow-lift transition-shadow"
                >
                  <div className="text-accent text-2xl mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-display font-semibold text-ink text-lg mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted text-sm mb-2">{method.description}</p>
                  <p className="font-medium text-ink text-sm mb-5">{method.value}</p>
                  <ContactButton size="sm" href={method.link}>
                    {method.action}
                  </ContactButton>
                </div>
              );
            })}
          </StaggerGrid>

          {/* Office Info */}
          <StaggerGrid className="grid md:grid-cols-2 gap-4">
            {officeInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-canvas border border-border rounded-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-accent text-xl mt-1">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">{info.title}</h3>
                      <p className="text-muted text-sm">{info.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggerGrid>
        </Container>
      </Section>

      {/* CTA dark band */}
      <Section background="primary">
        <Container>
          <FadeUp className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-white display-tight text-4xl md:text-5xl mb-4">
              {contact.cta.title}
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              {contact.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactButton size="lg" variant="secondary" href={WHATSAPP_URL}>
                <FaWhatsapp className="mr-2" />
                WhatsApp Kami
              </ContactButton>
              <ContactButton
                size="lg"
                variant="ghost"
                href={`mailto:${EMAIL}`}
                openInNewTab={false}
                className="text-white/75 hover:text-white underline underline-offset-4"
              >
                <FaEnvelope className="mr-2" />
                Email Kami →
              </ContactButton>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* FAQ Quick */}
      <Section background="white">
        <Container>
          <FadeUp>
            <SectionHeading
              heading="Pertanyaan yang Sering Ditanyakan"
              subheading="Jawaban sebelum Anda menghubungi kami"
            />
          </FadeUp>
          <div className="border-t border-border">
            {[
              {
                question: 'Apakah konsultasi benar-benar gratis?',
                answer: '100% gratis, tanpa syarat. Kami ngobrol tentang kebutuhan Anda dan kasih rekomendasi jujur, termasuk kalau ternyata Anda belum butuh yang mahal-mahal.',
              },
              {
                question: 'Berapa lama proses pengerjaan?',
                answer: 'Tergantung scope. Website: 2–8 minggu. Aplikasi: 2–3 bulan. Timeline pasti kita sepakati di awal. Tidak ada yang dikerjakan dulu tanpa sepengetahuan Anda.',
              },
              {
                question: 'Apakah cocok untuk bisnis kecil?',
                answer: 'Sangat cocok. Kami kerja dengan bisnis dari berbagai skala: dari yang baru mau punya website pertama sampai yang butuh sistem enterprise.',
              },
              {
                question: 'Bagaimana cara memulai?',
                answer: 'Kirim pesan WhatsApp, ceritakan bisnis Anda dan apa yang ingin Anda selesaikan. Kami akan bantu tentukan langkah pertama yang paling masuk akal.',
              },
            ].map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.06}>
                <div className="grid md:grid-cols-2 gap-2 py-6 border-b border-border">
                  <h3 className="font-medium text-ink text-sm">{faq.question}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>
    </AnimatedPage>
  );
}
