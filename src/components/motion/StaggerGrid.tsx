'use client';

import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { cardItem, staggerContainer } from '@/lib/motion';

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();

  const container = reduced ? { hidden: {}, visible: {} } : staggerContainer;
  const item = reduced ? { hidden: {}, visible: {} } : cardItem;

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
