'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { EASE, fadeUp } from '@/lib/motion';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();

  const variant = reduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: { duration: 0.5, ease: EASE, delay },
        },
      };

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
