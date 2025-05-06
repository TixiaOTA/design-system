import React, { useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';

export interface FileUploadProps {
  accept?: string[];
  maxSize?: number; // in bytes
  multiple?: boolean;
  value?: File[];
  onChange?: (files: File[]) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept = ['*'],
  maxSize = 5 * 1024 * 1024, // 5MB default
  multiple = false,
  value = [],
  onChange,
  className,
  disabled = false,
  placeholder = 'Drag and drop files here or click to browse',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = useCallback((file: File): string | null => {
    if (file.size > maxSize) {
      return `File size exceeds ${maxSize / (1024 * 1024)}MB limit`;
    }

    if (accept[0] !== '*' && !accept.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      }
      return file.type.startsWith(type);
    })) {
      return `File type not allowed. Allowed types: ${accept.join(', ')}`;
    }

    return null;
  }, [accept, maxSize]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);

    if (disabled) return;

    const files = Array.from(e.dataTransfer.files);
    const validFiles: File[] = [];
    const errors: string[] = [];

    files.forEach(file => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      setError(errors.join('\n'));
    }

    if (validFiles.length > 0) {
      const newFiles = multiple ? [...value, ...validFiles] : validFiles;
      onChange?.(newFiles);
    }
  }, [disabled, multiple, onChange, validateFile, value]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);

    if (disabled || !e.target.files) return;

    const files = Array.from(e.target.files);
    const validFiles: File[] = [];
    const errors: string[] = [];

    files.forEach(file => {
      const validationError = validateFile(file);
      if (validationError) {
        errors.push(`${file.name}: ${validationError}`);
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0) {
      setError(errors.join('\n'));
    }

    if (validFiles.length > 0) {
      const newFiles = multiple ? [...value, ...validFiles] : validFiles;
      onChange?.(newFiles);
    }

    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [disabled, multiple, onChange, validateFile, value]);

  const removeFile = useCallback((index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange?.(newFiles);
  }, [onChange, value]);

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Icon icon="mdi:image" className="w-5 h-5" />;
    }
    if (file.type.startsWith('text/')) {
      return <Icon icon="mdi:file-document" className="w-5 h-5" />;
    }
    return <Icon icon="mdi:file" className="w-5 h-5" />;
  };

  return (
    <div className={clsx('w-full', className)}>
      <div
        className={clsx(
          'border-2 border-dashed rounded-lg p-6 text-center transition-colors',
          'bg-neutral-50',
          'border-neutral-300',
          isDragging && 'border-primary bg-primary-50',
          disabled && 'opacity-50 cursor-not-allowed',
          !disabled && 'cursor-pointer hover:border-primary/50'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept.join(',')}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />
        <Icon icon="mdi:upload" className="w-12 h-12 mx-auto mb-4 text-neutral-400" />
        <p className="text-neutral-600">{placeholder}</p>
        <p className="text-sm text-neutral-500 mt-2">
          Max file size: {maxSize / (1024 * 1024)}MB
        </p>
      </div>

      {error && (
        <p className="mt-2 text-sm text-danger">{error}</p>
      )}

      {value.length > 0 && (
        <div className="mt-4 space-y-2">
          {value.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-2 rounded-md bg-neutral-100"
            >
              <div className="flex items-center space-x-2">
                {getFileIcon(file)}
                <span className="text-sm text-neutral-700">
                  {file.name}
                </span>
                <span className="text-xs text-neutral-500">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              {!disabled && (
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 text-neutral-500 hover:text-danger"
                >
                  <Icon icon="mdi:close" className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 