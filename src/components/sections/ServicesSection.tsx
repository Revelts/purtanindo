import React from 'react';
import { Container, Section, SectionHeading, Card } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaChartLine,
} from 'react-icons/fa';

const iconMap = {
  laptop: FaLaptopCode,
  mobile: FaMobileAlt,
  code: FaServer,
  chart: FaChartLine,
};

export function ServicesSection() {
  const { services } = CONTENT;

  return (
    <Section id="services" background="gray">
      <Container>
        <SectionHeading
          heading={services.heading}
          subheading={services.subheading}
          description={services.description}
        />

        <div className="space-y-4">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isEven = index % 2 === 0;
            
            return (
              <Card key={service.id} hover className="overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-6 items-start ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Left Column - Title & Description */}
                  <div className={`flex flex-col ${isEven ? '' : 'md:order-2'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-3xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent flex-shrink-0`}>
                        <Icon />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Right Column - Features */}
                  <div className={`flex flex-col justify-center ${isEven ? '' : 'md:order-1'}`}>
                    <ul className="grid gap-1.5">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700 leading-snug"
                        >
                          <span className="text-brand-start mr-2 mt-0.5 flex-shrink-0 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
