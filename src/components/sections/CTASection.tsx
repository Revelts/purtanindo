'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Container } from '@/components/ui';
import { CONTENT } from '@/constants/content';
import { WHATSAPP_URL, EMAIL } from '@/constants/seo';
import { EASE, fadeIn, fadeUp } from '@/lib/motion';

export function CTASection() {
  const { cta } = CONTENT;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" className="bg-primary text-white py-16 md:py-24 overflow-hidden relative">
      {/* Background image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 hidden lg:block">
        <Image
          src="/images/image-3.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div ref={ref}>
      <Container className="relative z-10 text-center">
        <motion.p
          className="mono-label text-accent mb-6"
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.05 }}
        >
          {cta.title}
        </motion.p>
        <motion.h2
          className="font-display font-bold text-white display-tight text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
        >
          Siap Mulai<br />Transformasi Digital?
        </motion.h2>
        <motion.p
          className="text-white/65 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
        >
          {cta.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-3.5 rounded-pill bg-white text-primary text-sm font-medium hover:bg-stone transition-colors"
          >
            {cta.button}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm font-medium text-white/75 underline underline-offset-4 hover:text-white transition-colors"
          >
            {cta.buttonSecondary} →
          </a>
        </motion.div>
      </Container>
      </div>
    </section>
  );
}
