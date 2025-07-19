import React from 'react';
export interface RadioProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    value?: string;
    error?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    variantSize?: 'sm' | 'md' | 'lg';
}
export declare const Radio: React.FC<RadioProps>;
