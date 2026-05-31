import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  heading,
  subheading,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignments[align], className)}>
      {subheading && (
        <p className={cn(
          'mono-label mb-3',
          light ? 'text-accent' : 'text-accent'
        )}>
          {subheading}
        </p>
      )}
      <h2 className={cn(
        'font-display text-3xl md:text-4xl lg:text-5xl display-tight mb-4',
        light ? 'text-white' : 'text-ink'
      )}>
        {heading}
      </h2>
      {description && (
        <p className={cn(
          'text-lg max-w-3xl mx-auto leading-relaxed',
          light ? 'text-white/75' : 'text-muted'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
