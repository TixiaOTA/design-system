/**
 * HeroUI Popover Variant
 *
 * This component wraps HeroUI's Popover components to provide a consistent API
 * with the main Popover component. It supports all HeroUI-specific features:
 *
 * - Advanced placement options (top-start, bottom-end, etc.)
 * - Backdrop options (transparent, blur, dark)
 * - Animation control
 * - Arrow control
 * - Offset customization
 * - Scroll behavior control (shouldCloseOnScroll)
 * - HeroUI's built-in positioning and styling system
 *
 * This variant is automatically used when variant="hero" is set on the main Popover component.
 */
import React from "react";
export type PopoverVariant = "default" | "elevated" | "outline" | "ghost";
export type PopoverColor = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral" | "light" | "custom";
export type PopoverShadow = "none" | "sm" | "md" | "lg" | "xl";
export type PopoverRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export interface PopoverHerouiProps {
    content: React.ReactNode;
    children: React.ReactNode;
    placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    showArrow?: boolean;
    variant?: PopoverVariant;
    color?: PopoverColor;
    customColor?: string;
    rounded?: PopoverRounded;
    shadow?: PopoverShadow;
    className?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    backdrop?: "transparent" | "blur" | "dark";
    disableAnimation?: boolean;
    offset?: number;
    isDismissable?: boolean;
    shouldCloseOnScroll?: boolean;
    shouldCloseOnBlur?: boolean;
    shouldBlockScroll?: boolean;
    containerPadding?: number;
    crossOffset?: number;
    portalContainer?: HTMLElement;
    triggerType?: "dialog" | "menu" | "listbox" | "tree" | "grid";
    shouldFlip?: boolean;
    triggerScaleOnOpen?: boolean;
}
export declare const Popover: React.FC<PopoverHerouiProps>;
