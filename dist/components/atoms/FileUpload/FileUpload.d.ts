import React from 'react';
export interface FileUploadProps {
    accept?: string[];
    maxSize?: number;
    multiple?: boolean;
    value?: File[];
    onChange?: (files: File[]) => void;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
}
export declare const FileUpload: React.FC<FileUploadProps>;
