import { cn } from '../../../utils/cn';
import { useEffect, useState } from 'react';

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
  const [IconifyIcon, setIconifyIcon] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const loadIcon = async () => {
      const { Icon } = await import('@iconify/react');
      setIconifyIcon(() => Icon);
      setIsMounted(true);
    };
    loadIcon();
  }, []);

  if (!isMounted || !IconifyIcon) {
    return <span style={{ width: size, height: size }} />;
  }

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