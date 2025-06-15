import React from "react";
export interface TooltipProps {
    /** Content to display in the tooltip */
    content: React.ReactNode;
    /** Element that triggers the tooltip */
    children: React.ReactNode;
    /** Position of the tooltip relative to the trigger */
    position?: "top" | "bottom" | "left" | "right";
    /** Delay before showing the tooltip (in milliseconds) */
    delay?: number;
    /** Additional class name for the tooltip */
    className?: string;
    /** Color variant of the tooltip */
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light";
    /** Size of the tooltip text */
    size?: "sm" | "md" | "lg";
    /** Whether the tooltip is controlled externally */
    isOpen?: boolean;
    /** Callback when tooltip visibility changes */
    onOpenChange?: (isOpen: boolean) => void;
    /** How the tooltip should be triggered */
    trigger?: "hover" | "click";
}
export declare const Tooltip: React.FC<TooltipProps>;
