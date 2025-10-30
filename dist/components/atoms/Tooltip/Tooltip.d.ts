import React from "react";
export type TooltipVariant = "default" | "elevated" | "outline" | "ghost";
export type TooltipColor = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light" | "custom";
export type TooltipShadow = "none" | "sm" | "md" | "lg" | "xl";
export type TooltipRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    showArrow?: boolean;
    variant?: TooltipVariant;
    color?: TooltipColor;
    customColor?: string;
    rounded?: TooltipRounded;
    shadow?: TooltipShadow;
    className?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    isDisabled?: boolean;
    delay?: number;
    closeDelay?: number;
    offset?: number;
    trigger?: "hover" | "press" | "focus" | "manual";
    shouldCloseOnScroll?: boolean;
    portalContainer?: HTMLElement;
    zIndex?: number | string;
    contentZIndex?: number | string;
}
export declare const Tooltip: React.FC<TooltipProps>;
