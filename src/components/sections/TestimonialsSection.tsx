import React from 'react';
import Image from 'next/image';
import { Container, Section, SectionHeading, Card } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FaStar } from 'react-icons/fa';

export function TestimonialsSection() {
  const { testimonials } = CONTENT;

  return (
    <Section id="testimonials" background="gray">
      <Container>
        <SectionHeading
          heading={testimonials.heading}
          subheading={testimonials.subheading}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((testimonial, idx) => (
            <Card key={idx} hover>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
