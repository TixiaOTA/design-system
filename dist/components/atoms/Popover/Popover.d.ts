import React from "react";
export interface PopOverProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light" | "custom";
    customColor?: string;
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    className?: string;
    trigger?: "hover" | "click";
    autoFocus?: boolean;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnClickOutside?: boolean;
}
export declare const Popover: React.FC<PopOverProps>;
