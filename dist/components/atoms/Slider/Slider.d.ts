import React from 'react';
export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    className?: string;
    disabled?: boolean;
    showValue?: boolean;
    marks?: {
        value: number;
        label: string;
    }[];
}
export declare const Slider: React.FC<SliderProps>;
