import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'stone' | 'media' | 'dark';
  hover?: boolean;
  gradient?: boolean;
}

const variants: Record<NonNullable<CardProps['variant']>, string> = {
  default:  'bg-canvas border border-border rounded-sm p-6',
  bordered: 'bg-canvas border border-border rounded-sm p-6',
  stone:    'bg-stone border border-border rounded-sm p-6',
  media:    'rounded-card overflow-hidden',
  dark:     'bg-primary/80 text-white border border-white/10 rounded-sm p-6',
};

export function Card({
  children,
  className,
  variant = 'default',
  hover = false,
  gradient: _gradient = false,
}: CardProps) {
  return (
    <div
      className={cn(
        variants[variant],
        hover && 'transition-shadow duration-300 hover:shadow-lift',
        className
      )}
    >
      {children}
    </div>
  );
}
