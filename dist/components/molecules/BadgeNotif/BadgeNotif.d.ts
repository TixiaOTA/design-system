export interface BadgeNotifProps {
    /** The icon name from Iconify (e.g., 'mdi:home') */
    icon: string;
    /** Variant of the icon */
    variant: 'number' | 'dot';
    /** Custom CSS classes */
    className?: string;
    /** Color of the icon */
    color?: string;
    /** Color of the icon */
    plusIcon?: boolean;
    /** Number of the notification */
    badgeContent?: number;
    /** Position of the notification */
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
export declare const BadgeNotif: ({ icon, variant, className, color, plusIcon, badgeContent, position, ...props }: BadgeNotifProps) => import("react/jsx-runtime").JSX.Element;
