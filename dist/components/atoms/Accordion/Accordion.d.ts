import React from 'react';
export interface AccordionItem {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
}
export interface AccordionProps {
    items: AccordionItem[];
    multiple?: boolean;
    defaultOpenIds?: string[];
    icon?: string;
    iconPosition?: 'left' | 'right';
    className?: string;
    itemClassName?: string;
    headerClassName?: string;
    contentClassName?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
