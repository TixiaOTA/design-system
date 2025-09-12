import React from 'react';
export type AccordionVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'light' | 'dark' | 'info';
export type AccordionShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type AccordionRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export interface AccordionItem {
    id: string;
    title: string | React.ReactNode;
    content: string | React.ReactNode;
    disabled?: boolean;
}
export interface AccordionProps {
    items: AccordionItem[];
    multiple?: boolean;
    defaultOpenIds?: string[];
    openIds?: string[];
    onOpenChange?: (openIds: string[]) => void;
    icon?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    contentClassName?: string;
    variant?: AccordionVariant;
    shadow?: AccordionShadow;
    rounded?: AccordionRounded;
}
export declare const Accordion: React.FC<AccordionProps>;
