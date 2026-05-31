import React from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FadeUp, StaggerGrid } from '@/components/motion';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
} from 'react-icons/fa';

const iconMap = {
  laptop: FaLaptopCode,
  mobile: FaMobileAlt,
  code:   FaServer,
  chart:  FaChartLine,
};

export function ServicesSection() {
  const { services } = CONTENT;

  return (
    <Section id="services" background="green">
      <Container>
        <FadeUp>
          <SectionHeading
            heading={services.heading}
            subheading={services.subheading}
            description={services.description}
            light
          />
        </FadeUp>

        <StaggerGrid className="grid md:grid-cols-2 auto-rows-fr gap-4">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                className="p-6 rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group flex flex-col h-full"
              >
                <div className="text-accent text-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5 flex-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-white/60">
                      <span className="text-accent mr-2 mt-0.5 flex-shrink-0">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
