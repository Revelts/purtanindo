'use client';

import React, { useState } from 'react';
import { Container, Section, SectionHeading } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { FiPlus, FiMinus } from 'react-icons/fi';

export function FAQSection() {
  const { faq } = CONTENT;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white">
      <Container size="md">
        <SectionHeading
          heading={faq.heading}
          subheading={faq.subheading}
        />

        <div className="space-y-4">
          {faq.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="text-brand-start flex-shrink-0">
                  {openIndex === idx ? (
                    <FiMinus className="text-xl" />
                  ) : (
                    <FiPlus className="text-xl" />
                  )}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
