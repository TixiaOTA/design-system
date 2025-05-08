import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

const skeletonVariants = cva(
  'animate-pulse bg-neutral-200',
  {
    variants: {
      variant: {
        default: 'bg-neutral-200',
        primary: 'bg-primary-200',
        success: 'bg-success-200',
        warning: 'bg-warning-200',
        danger: 'bg-danger-200',
        info: 'bg-info-200',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'md',
      fullWidth: false,
    },
  }
);

export interface SkeletonProps {
  /** The width of the skeleton */
  width?: string | number;
  /** The height of the skeleton */
  height?: string | number;
  /** The visual style variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Border radius of the skeleton */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether the skeleton should take full width */
  fullWidth?: boolean;
  /** Additional class name */
  className?: string;
}

export const Skeleton = ({
  width,
  height,
  variant = 'default',
  rounded = 'md',
  fullWidth = false,
  className,
}: SkeletonProps) => {
  return (
    <div
      className={cn(skeletonVariants({ variant, rounded, fullWidth }), className)}
      style={{
        width: !fullWidth && typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    />
  );
};
