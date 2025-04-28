import React from 'react';
import { cn } from '@/utils/cn';

type TextVariant = 
  | 'display1' 
  | 'display2'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'label'
  | 'value';

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<TextProps> = ({ 
  variant, 
  children, 
  className = '',
  as: Component = 'div'
}) => {
  const baseStyles = 'font-sans antialiased';
  
  const variantStyles: Record<TextVariant, string> = {
    // Large displays
    display1: 'text-6xl font-bold tracking-tight text-gray-900 leading-tight',
    display2: 'text-5xl font-bold tracking-tight text-gray-900 leading-tight',
    
    // Headings
    heading1: 'text-4xl font-semibold text-gray-900 leading-tight',
    heading2: 'text-3xl font-semibold text-gray-900 leading-tight',
    heading3: 'text-2xl font-medium text-gray-900 leading-snug',
    heading4: 'text-xl font-medium text-gray-900 leading-snug',
    
    // Subtitles
    subtitle1: 'text-lg font-medium text-gray-900 leading-relaxed',
    subtitle2: 'text-base font-medium text-gray-700 leading-relaxed',
    
    // Body text
    body1: 'text-base font-normal text-gray-700 leading-relaxed',
    body2: 'text-sm font-normal text-gray-600 leading-relaxed',
    
    // Utility text
    caption: 'text-xs font-medium text-gray-500 leading-normal',
    
    // Original variants (maintained for backward compatibility)
    label: 'text-sm font-medium text-gray-600 leading-normal',
    value: 'text-xl font-semibold text-gray-900 leading-normal'
  };

  return (
    <Component className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Component>
  );
}; 