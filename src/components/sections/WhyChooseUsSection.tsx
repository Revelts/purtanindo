import React from 'react';
import { Container, Section, SectionHeading, Card } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import {
  FaUserTie,
  FaAward,
  FaHeadset,
  FaDollarSign,
  FaCogs,
  FaShieldAlt,
} from 'react-icons/fa';

const iconMap = {
  expertise: FaUserTie,
  quality: FaAward,
  support: FaHeadset,
  price: FaDollarSign,
  agile: FaCogs,
  security: FaShieldAlt,
};

export function WhyChooseUsSection() {
  const { whyChooseUs } = CONTENT;

  return (
    <Section id="why-choose-us" background="white">
      <Container>
        <SectionHeading
          heading={whyChooseUs.heading}
          subheading={whyChooseUs.subheading}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card key={idx} hover>
                <div className="text-4xl text-brand-start mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
