import React from 'react';
import { cn } from '@/utils/cn';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';

export interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = 'p',
  children,
  className
}) => {
  const Component = variant;
  const baseStyles = 'text-gray-900';
  
  const variantStyles: Record<TextVariant, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    p: 'text-base',
    span: 'text-base',
    label: 'text-sm font-medium'
  };

  return (
    <Component className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Component>
  );
};

export { Text }; 