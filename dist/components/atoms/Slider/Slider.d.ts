import React from 'react';
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    min?: number;
    max?: number;
    step?: number;
    value?: number | [number, number];
    defaultValue?: number | [number, number];
    onChange?: (value: number | [number, number]) => void;
    className?: string;
    disabled?: boolean;
    showValue?: boolean;
    marks?: {
        value: number;
        label: string;
    }[];
    range?: boolean;
    name?: string;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement | HTMLDivElement>>;
