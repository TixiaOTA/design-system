import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const breadcrumbsVariants: (props?: ({
    variant?: "default" | "dark" | "light" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type BreadcrumbsVariant = 'default' | 'light' | 'dark';
export type BreadcrumbsSize = 'sm' | 'md' | 'lg';
export interface BreadcrumbItem {
    /** Label to display */
    label: string;
    /** URL to navigate to */
    href?: string;
    /** Icon to display before the label */
    icon?: string;
    onClick?: () => void;
}
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof breadcrumbsVariants> {
    /** Array of breadcrumb items */
    items: BreadcrumbItem[];
    /** Custom separator between items */
    separator?: React.ReactNode;
    /** Whether the last item should be active */
    activeLastItem?: boolean;
    /** Size of the breadcrumbs */
    size?: BreadcrumbsSize;
    variant?: BreadcrumbsVariant;
}
declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLDivElement>>;
export { Breadcrumbs };
