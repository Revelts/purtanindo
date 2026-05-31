'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Section, SectionHeading } from '@/components/ui';
import { FadeUp } from '@/components/motion';
import { CONTENT } from '@/constants/content';
import { EASE } from '@/lib/motion';

export function FAQSection() {
  const { faq } = CONTENT;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <Section id="faq" background="stone">
      <Container size="md">
        <FadeUp>
          <SectionHeading
            heading={faq.heading}
            subheading={faq.subheading}
          />
        </FadeUp>

        <div className="border-t border-border">
          {faq.items.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="border-b border-border">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <h3 className="font-medium text-ink pr-6 text-base">
                    {item.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="text-muted flex-shrink-0 text-lg leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pb-5">
                        <p className="text-muted text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
