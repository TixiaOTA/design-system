import { Icon as IconifyIcon } from '@iconify/react';
import { cn } from '@/utils/cn';

export interface BadgeNotifProps  {
  /** The icon name from Iconify (e.g., 'mdi:home') */
  icon: string;
  /** Variant of the icon */
  variant: 'number' | 'dot';
  /** Custom CSS classes */
  className?: string;
  /** Color of the icon */
  color?: string;
  /** Color of the icon */
  plusIcon?: boolean
   /** Number of the notification */
  badgeContent?: number
   /** Position of the notification */
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}


export const BadgeNotif = ({
    icon,
    variant = 'number',
    className,
    color = '#007C99',
    plusIcon,
    badgeContent = 10,
    position= 'top-right',
    ...props
}: BadgeNotifProps) => {
    let widthClass = '';
    let positionClass = '';
  
    if (variant === 'number') {
        if (plusIcon || (badgeContent && badgeContent > 99)) {
          widthClass = 'w-7';
        } else {
          const length = typeof badgeContent === 'number' ? String(badgeContent).length : 1;
          widthClass = length === 1 ? 'w-5' : 'w-6';
        }
    }
  
    switch (position) {
      case 'top-right':
        positionClass = variant === 'number' ? '-top-1 -right-2.5' : '-top-1 right-0';
        break;
      case 'top-left':
        positionClass = variant === 'number' ? '-top-1 -left-2.5' : '-top-1 left-0';
        break;
      case 'bottom-right':
        positionClass = variant === 'number' ? 'bottom-0 -right-3' : 'bottom-0 right-0';
        break;
      case 'bottom-left':
        positionClass = variant === 'number' ? 'bottom-0 -left-3' : 'bottom-0 left-0';
        break;
    }

  return (
   <div className='relative inline-block'>
        <IconifyIcon
            icon={icon}
            className={cn(
                className
            )}
            style={{
                color
            }}
            height={32}
            width={32}
            {...props}
        />
        <div 
            className={cn(
                'absolute h-5 rounded-xl flex justify-center items-center text-[10px] bg-[#FF4C4C] text-white font-semiboldbold',
                positionClass,
                variant === 'number' ? `${widthClass} h-5` : 'w-2.5 h-2.5',
                variant === 'dot' ? '' : 'p-1'
              )}
        >
            {variant === 'number' &&
            (badgeContent && badgeContent > 99 ? '99' : badgeContent)}
            {variant === 'number' &&
            (plusIcon || (badgeContent && badgeContent > 99)) && '+'}
        </div>
   </div>
  )
}