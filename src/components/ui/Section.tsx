import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'stone' | 'green' | 'navy' | 'primary' | 'gray';
}

const backgrounds: Record<NonNullable<SectionProps['background']>, string> = {
  white:   'bg-canvas',
  stone:   'bg-stone',
  green:   'bg-green text-white',
  navy:    'bg-navy text-white',
  primary: 'bg-primary text-white',
  gray:    'bg-stone',
};

export function Section({
  children,
  className,
  id,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      {children}
    </section>
  );
}
