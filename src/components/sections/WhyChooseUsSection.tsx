import React from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FadeUp, StaggerGrid } from '@/components/motion';
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
  quality:   FaAward,
  support:   FaHeadset,
  price:     FaDollarSign,
  agile:     FaCogs,
  security:  FaShieldAlt,
};

export function WhyChooseUsSection() {
  const { whyChooseUs } = CONTENT;

  return (
    <Section id="why-choose-us" background="white">
      <Container>
        <FadeUp>
          <SectionHeading
            heading={whyChooseUs.heading}
            subheading={whyChooseUs.subheading}
          />
        </FadeUp>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {whyChooseUs.items.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={idx}
                className="bg-stone border border-border rounded-sm p-6 hover:shadow-lift transition-shadow flex flex-col"
              >
                <div className="text-accent text-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-ink text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
