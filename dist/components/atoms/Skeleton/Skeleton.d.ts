export interface SkeletonProps {
    /** The width of the skeleton */
    width?: string | number;
    /** The height of the skeleton */
    height?: string | number;
    /** The visual style variant */
    variant?: "default" | "primary" | "success" | "warning" | "danger" | "info";
    /** Border radius of the skeleton */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
    /** Whether the skeleton should take full width */
    fullWidth?: boolean;
    /** The pulsing animation variant */
    pulseVariant?: "default" | "left-to-right";
    /** Additional class name */
    className?: string;
}
export declare const Skeleton: ({ width, height, variant, rounded, fullWidth, pulseVariant, className, }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
