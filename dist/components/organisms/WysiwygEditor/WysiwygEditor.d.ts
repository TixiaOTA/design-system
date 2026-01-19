import React from 'react';
export type OutputFormat = 'json' | 'markdown' | 'html';
export interface ImageSize {
    width: number;
    height: number;
    label: string;
}
export interface WysiwygEditorProps {
    /** Initial content in HTML format */
    initialContent?: string;
    /** Callback when content changes */
    onChange?: (content: string, format: OutputFormat) => void;
    /** Output format for onChange callback */
    outputFormat?: OutputFormat;
    /** Placeholder text */
    placeholder?: string;
    /** Custom image upload handler */
    handleUploadImage?: (file: File) => Promise<string>;
    /** Whether the editor is editable */
    editable?: boolean;
    /** Custom CSS classes */
    className?: string;
    /** Minimum height of the editor */
    minHeight?: string;
}
declare const WysiwygEditor: React.FC<WysiwygEditorProps>;
export default WysiwygEditor;
