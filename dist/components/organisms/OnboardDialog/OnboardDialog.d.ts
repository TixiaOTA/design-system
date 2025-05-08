import React from "react";
export interface OnboardStep {
    title: string;
    description: string;
}
export interface OnboardDialogProps {
    steps: OnboardStep[];
    isOpen: boolean;
    onClose: () => void;
    onFinish?: () => void;
    onSkip?: () => void;
    _step?: number;
    _setStep?: (step: number) => void;
}
declare const OnboardDialog: React.FC<OnboardDialogProps>;
export default OnboardDialog;
