import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave';
  height?: string;
  width?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  animation = 'pulse',
  height,
  width,
  color = 'neutral',
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
  };

  const colorClasses = {
    primary: 'bg-blue-100 dark:bg-blue-900',
    secondary: 'bg-gray-100 dark:bg-gray-700',
    success: 'bg-green-100 dark:bg-green-900',
    warning: 'bg-yellow-100 dark:bg-yellow-900',
    error: 'bg-red-100 dark:bg-red-900',
    info: 'bg-cyan-100 dark:bg-cyan-900',
    neutral: 'bg-gray-200 dark:bg-gray-200',
  };

  const skeletonClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    animationClasses[animation],
    colorClasses[color],
    className
  );

  const style = {
    ...(height && { height }),
    ...(width && { width }),
  };

  return (
    <div
      className={skeletonClasses}
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
};
