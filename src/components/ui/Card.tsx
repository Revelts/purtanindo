import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className,
  hover = false,
  gradient = false,
}: CardProps) {
  if (gradient) {
    return (
      <div className={cn('gradient-border', className)}>
        <div
          className={cn(
            'bg-white rounded-2xl p-6 h-full',
            hover && 'transition-transform duration-300 hover:scale-105'
          )}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-soft',
        hover && 'transition-transform duration-300 hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  );
}
