import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  'border bg-card text-card-foreground',
  {
    variants: {
      variant: {
        default: 'border-border shadow-sm',
        elevated: 'border-border shadow-lg',
        outline: 'border-border bg-transparent',
        ghost: 'border-transparent bg-transparent',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      shadow: 'sm',
      rounded: 'md'
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, shadow, rounded, asChild = false, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, shadow, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };
