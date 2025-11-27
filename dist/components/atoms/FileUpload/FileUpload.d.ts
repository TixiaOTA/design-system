import React from 'react';
export type FileUploadVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'default' | 'light' | 'dark' | 'info';
export type FileUploadShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type FileUploadRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface FileUploadProps {
    accept?: string[];
    maxSize?: number;
    multiple?: boolean;
    value?: File[];
    onChange?: (files: File[]) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    variant?: FileUploadVariant;
    shadow?: FileUploadShadow;
    rounded?: FileUploadRounded;
    children?: React.ReactNode;
    showFileList?: boolean;
    showPlaceholder?: boolean;
    showMaxSize?: boolean;
    icon?: string;
    name?: string;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
