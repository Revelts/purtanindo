'use client';

import React from 'react';
import { Button, ButtonProps } from './Button';

interface ContactButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  openInNewTab?: boolean;
}

export function ContactButton({
  href,
  openInNewTab = true,
  children,
  ...props
}: ContactButtonProps) {
  const handleClick = () => {
    if (openInNewTab) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
