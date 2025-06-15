import React from 'react';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'heading3' | 'body1' | 'display1' | 'display2' | 'heading1' | 'heading2' | 'heading4' | 'subtitle1' | 'subtitle2' | 'body2' | 'caption' | 'value';
export interface TextProps {
    variant?: TextVariant;
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}
declare const Text: React.FC<TextProps>;
export { Text };
