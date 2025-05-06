import React from 'react';
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    variantSize?: 'sm' | 'md' | 'lg';
    variant?: 'square' | 'circle';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}
export declare const Checkbox: React.FC<CheckboxProps>;
