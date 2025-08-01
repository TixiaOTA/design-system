import React from 'react';
export interface SliderProps {
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
}
export declare const Slider: React.FC<SliderProps>;
