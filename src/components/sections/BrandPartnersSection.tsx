import React from 'react';
import Image from 'next/image';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FadeUp, StaggerGrid } from '@/components/motion';

export function BrandPartnersSection() {
  const { brandPartners } = CONTENT;

  return (
    <Section id="brand-partners" background="white">
      <Container>
        <FadeUp>
          <SectionHeading
            heading={brandPartners.heading}
            subheading={brandPartners.subheading}
          />
        </FadeUp>

        <StaggerGrid className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brandPartners.partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-100 hover:opacity-70 transition-opacity duration-200"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={0}
                height={0}
                sizes="100vw"
                className={partner.sizeClass || 'h-16 w-auto'}
              />
            </a>
          ))}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
