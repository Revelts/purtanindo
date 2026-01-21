import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  heading,
  subheading,
  description,
  align = 'center',
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
        <p className="text-brand-start font-semibold text-sm uppercase tracking-wider mb-2">
          {subheading}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        <span className="text-gradient">{heading}</span>
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
