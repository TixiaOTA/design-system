import React from 'react';
export interface RadioProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    value?: string;
}
export declare const Radio: React.FC<RadioProps>;
