import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icons/Icons';
import { getDocument } from '../../../utils/ssr';

export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  backdrop?: 'blur' | 'dark' | 'transparent';
  header?: React.ReactNode;
  closeOnBackdropClick?: boolean;
  size?: DialogSize;
}

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface DialogActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, onClose, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-4 flex items-center justify-between', className)}
      {...props}
    >
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 rounded-full p-1 text-gray hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close dialog"
        >
          <Icon icon="mdi:close" className="h-5 w-5" />
        </button>
      )}
    </div>
  )
);

const sizeClasses: Record<DialogSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-4xl',
  fullscreen: 'w-full h-full max-w-none max-h-none rounded-none'
};

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ 
    isOpen, 
    onClose, 
    children, 
    className, 
    backdrop = 'dark',
    header,
    closeOnBackdropClick = true,
    size = 'md',
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
        setIsAnimating(true);
        const doc = getDocument();
        if ('body' in doc) {
          doc.body.style.overflow = 'hidden';
        }
      } else {
        setIsAnimating(false);
        const timer = setTimeout(() => {
          setIsVisible(false);
          const doc = getDocument();
          if ('body' in doc) {
            doc.body.style.overflow = '';
          }
        }, 300); // Match animation duration
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (event: Event) => {
        if (event instanceof KeyboardEvent && event.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        const doc = getDocument();
        doc.addEventListener('keydown', handleEscape);
      }

      return () => {
        const doc = getDocument();
        doc.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen, onClose]);

    if (!isVisible) return null;

    const backdropClasses = {
      blur: 'backdrop-blur-sm bg-black/30',
      dark: 'bg-black/50',
      transparent: 'bg-transparent',
    };

    const handleBackdropClick = () => {
      if (closeOnBackdropClick) {
        onClose();
      }
    };

    const doc = getDocument();
    if (!('body' in doc)) return null;

    return createPortal(
      <div
        className={cn(
          'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
          backdropClasses[backdrop],
          isAnimating ? 'opacity-100' : 'opacity-0',
          size === 'fullscreen' && 'items-start'
        )}
        onClick={handleBackdropClick}
      >
        <div
          ref={ref}
          className={cn(
            'relative transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300',
            sizeClasses[size],
            isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {header && (
            <DialogHeader onClose={onClose}>
              {header}
            </DialogHeader>
          )}
          {children}
        </div>
      </div>,
      doc.body
    );
  }
);

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-xl font-semibold text-gray-900', className)}
      {...props}
    >
      {children}
    </h2>
  )
);

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-gray-600', className)}
      {...props}
    >
      {children}
    </div>
  )
);

const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-6 flex justify-end gap-3', className)}
      {...props}
    >
      {children}
    </div>
  )
);

Dialog.displayName = 'Dialog';
DialogTitle.displayName = 'DialogTitle';
DialogBody.displayName = 'DialogBody';
DialogActions.displayName = 'DialogActions';
DialogHeader.displayName = 'DialogHeader';

export { Dialog, DialogTitle, DialogBody, DialogActions, DialogHeader }; 