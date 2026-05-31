import React from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FadeUp } from '@/components/motion';
import { FaStar } from 'react-icons/fa';

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ');
  const init = parts.length >= 2
    ? parts[0][0] + parts[1][0]
    : parts[0][0];
  return (
    <div className="w-12 h-12 rounded-full bg-stone border border-border flex items-center justify-center text-sm font-semibold text-ink flex-shrink-0">
      {init.toUpperCase()}
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials } = CONTENT;

  return (
    <Section id="testimonials" background="white">
      <Container>
        <FadeUp>
          <SectionHeading
            heading={testimonials.heading}
            subheading={testimonials.subheading}
          />
        </FadeUp>

        <div className="border-t border-border">
          {testimonials.items.map((testimonial, idx) => (
            <FadeUp key={idx} delay={idx * 0.07}>
              <div className="grid md:grid-cols-[200px_1fr_140px] gap-6 md:gap-10 py-8 border-b border-border items-start">
                {/* Left: identity */}
                <div className="flex items-center gap-3">
                  <Initials name={testimonial.name} />
                  <div>
                    <p className="font-semibold text-ink text-sm">{testimonial.name}</p>
                    <p className="text-muted text-xs mt-0.5">{testimonial.role}</p>
                  </div>
                </div>

                {/* Center: quote */}
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent text-sm" />
                    ))}
                  </div>
                  <p className="text-ink text-sm leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                {/* Right: label */}
                <div className="hidden md:flex items-start justify-end">
                  <span className="mono-label text-muted">Klien</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
