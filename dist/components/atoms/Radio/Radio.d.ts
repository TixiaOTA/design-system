import React from 'react';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    label?: string | React.ReactNode;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    value?: string;
    error?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    variantSize?: 'sm' | 'md' | 'lg';
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
