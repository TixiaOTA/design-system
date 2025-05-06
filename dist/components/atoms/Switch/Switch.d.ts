import React from 'react';
export interface SwitchProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
}
export declare const Switch: React.FC<SwitchProps>;
