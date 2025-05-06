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
export declare const Icon: ({ icon, className, size, color, rotate, flip, spin, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
