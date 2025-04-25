import { Icon as IconifyIcon } from '@iconify/react';
import { cn } from '@/utils/cn';

export interface IconProps {
  /** The icon name from Iconify (e.g., 'mdi:home') */
  icon: string;
  /** Custom CSS classes */
  className?: string;
  /** Size of the icon in pixels */
  size?: number | string;
  /** Color of the icon */
  color?: string;
  /** Rotation in degrees */
  rotate?: number;
  /** Flip the icon horizontally or vertically */
  flip?: 'horizontal' | 'vertical' | 'both';
  /** Whether the icon should spin */
  spin?: boolean;
}

export const Icon = ({
  icon,
  className,
  size,
  color,
  rotate,
  flip,
  spin,
  ...props
}: IconProps) => {
  return (
    <IconifyIcon
      icon={icon}
      className={cn(
        spin && 'animate-spin',
        className
      )}
      style={{
        color,
        transform: `rotate(${rotate || 0}deg)`,
      }}
      height={size}
      width={size}
      flip={flip}
      {...props}
    />
  );
}; 