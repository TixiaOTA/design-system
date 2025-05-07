import React from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | "ghost" | "outline" | "elevated" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
    rounded?: "sm" | "md" | "lg" | "none" | "full" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type CardVariant = 'default' | 'elevated' | 'outline' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type CardRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    shadow?: CardShadow;
    rounded?: CardRounded;
    asChild?: boolean;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export { Card, cardVariants };
