import React from 'react';
export type StepStatus = 'completed' | 'active' | 'pending';
export type StepperVariant = 'default' | 'simple';
export interface StepProps {
    label: string;
    description?: string;
    icon?: string;
    status?: StepStatus;
}
export interface StepperProps {
    steps: StepProps[];
    activeStep: number;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    variant?: StepperVariant;
}
export declare const Stepper: React.FC<StepperProps>;
