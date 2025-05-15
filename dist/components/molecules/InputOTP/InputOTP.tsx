import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Button } from '@/components/atoms/Button';

const inputOTPVariants = cva(
  'border bg-white flex items-center justify-center aspect-square transition-colors placeholder:text-neutral-500 placeholder:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-center',
  {
    variants: {
      variant: {
        default: 'border-neutral-200 hover:border-primary-300 focus:border-primary-300 hover:bg-primary-50',
        error: 'border-danger-500 hover:border-danger-600 focus:border-danger-600 hover:bg-danger-50',
        success: 'border-success-500 hover:border-success-600 focus:border-success-600 hover:bg-success-50',
        ghost: 'border-transparent bg-transparent hover:bg-primary-50 focus:bg-primary-50',
        underline: 'border-0 border-b-2 border-neutral-200 rounded-none bg-transparent hover:border-primary-300 focus:border-primary-300 hover:bg-transparent focus:bg-transparent',
      },
      size: {
        sm: 'h-8 w-8 text-sm',
        md: 'h-12 w-12 text-lg',
        lg: 'h-16 w-16 text-xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md',
    },
  }
);

export type InputOTPVariant = 'default' | 'error' | 'success' | 'ghost' | 'underline';
export type InputOTPSize = 'sm' | 'md' | 'lg';
export type InputOTPRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface InputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  /** Visual style variant */
  variant?: InputOTPVariant;
  /** Size of the OTP inputs */
  size?: InputOTPSize;
  /** Border radius of the OTP inputs */
  rounded?: InputOTPRounded;
  /** Whether the input is in an error state */
  error?: boolean;
  /** Error message to display below the input */
  errorText?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Label for the input */
  label?: string;
  /** Bottom label for additional information */
  bottomLabel?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Whether to show a submit button */
  showSubmitButton?: boolean;
  /** Label for the submit button */
  submitButtonLabel?: string;
  /** Variant for the submit button */
  submitButtonVariant?: 'primary' | 'secondary' | 'success';
  /** Number of OTP inputs */
  length?: number;
  /** Whether the OTP is numeric only */
  numericOnly?: boolean;
  /** Callback when all OTP inputs are filled */
  onComplete?: (value: string) => void;
  /** Callback when OTP value changes */
  onChange?: (value: string) => void;
  /** Callback when submit button is clicked */
  onSubmit?: (value: string) => void;
  /** Value of the OTP input */
  value?: string;
  /** Default value of the OTP input */
  defaultValue?: string;
  /** Whether the OTP input is disabled */
  disabled?: boolean;
  /** Whether to auto-focus the first input on mount */
  autoFocus?: boolean;
}

const InputOTP = forwardRef<HTMLDivElement, InputOTPProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    rounded = 'md', 
    error = false,
    errorText, 
    helperText, 
    label, 
    bottomLabel,
    required = false,
    showSubmitButton = false,
    submitButtonLabel = 'Submit',
    submitButtonVariant = 'primary',
    length = 6,
    numericOnly = true,
    onComplete,
    onChange,
    onSubmit,
    value: controlledValue,
    defaultValue = '',
    disabled = false,
    autoFocus = false,
    ...props 
  }, ref) => {
    const [value, setValue] = useState<string>(defaultValue || '');
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    
    // Handle controlled component
    useEffect(() => {
      if (controlledValue !== undefined) {
        setValue(controlledValue);
      }
    }, [controlledValue]);

    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : value;

    const updateValue = (newValue: string) => {
      if (!isControlled) {
        setValue(newValue);
      }
      
      onChange?.(newValue);
      
      if (newValue.length === length) {
        onComplete?.(newValue);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const inputValue = e.target.value;
      const lastChar = inputValue.slice(-1);
      
      if (numericOnly && !/^\d*$/.test(lastChar)) {
        return;
      }
      
      if (inputValue) {
        // Update the current input and create a new OTP value
        const newValue = currentValue.split('');
        if (newValue.length <= index) {
          // Add padding if necessary
          while (newValue.length < index) {
            newValue.push('');
          }
          newValue.push(lastChar);
        } else {
          newValue[index] = lastChar;
        }
        
        updateValue(newValue.join(''));
        
        // Move focus to the next input
        if (index < length - 1 && lastChar) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace' && !currentValue[index] && index > 0) {
        // If current input is empty and backspace is pressed, move focus to previous input
        const newValue = currentValue.split('');
        newValue[index - 1] = '';
        updateValue(newValue.join(''));
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowLeft' && index > 0) {
        // Move focus to previous input on left arrow
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        // Move focus to next input on right arrow
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text/plain').trim();
      
      if (numericOnly && !/^\d+$/.test(pastedData)) {
        return;
      }
      
      // Only use the first 'length' characters
      const relevantData = pastedData.slice(0, length);
      
      // Fill the OTP inputs with the pasted data
      updateValue(relevantData.padEnd(length, ''));
      
      // Focus the next empty input or the last input
      const nextEmptyIndex = relevantData.length < length ? relevantData.length : length - 1;
      inputRefs.current[nextEmptyIndex]?.focus();
    };

    const handleSubmit = () => {
      if (currentValue.length === length) {
        onSubmit?.(currentValue);
      }
    };

    // Split the value into individual digits for display
    const digits = currentValue.split('').concat(Array(length - currentValue.length).fill(''));

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {label && (
          <label className="mb-1.5 block text-sm text-neutral-900">
            {label}
            {required && <span className="text-danger-500 ml-0.5">*</span>}
          </label>
        )}
        
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type={numericOnly ? 'tel' : 'text'}
                inputMode={numericOnly ? 'numeric' : 'text'}
                maxLength={1}
                value={digits[index] || ''}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                disabled={disabled}
                autoFocus={autoFocus && index === 0}
                className={cn(
                  inputOTPVariants({ 
                    variant: error ? 'error' : variant, 
                    size, 
                    rounded 
                  })
                )}
                aria-invalid={error}
              />
            ))}
          </div>
          
          {(error && errorText) && (
            <p className="mt-1 text-xs text-danger-500 self-start">
              {errorText}
            </p>
          )}
          
          {(!error && helperText) && (
            <p className="mt-1 text-xs text-neutral-500 self-start">
              {helperText}
            </p>
          )}
          
          {bottomLabel && (
            <p className="text-sm text-neutral-600">
              {bottomLabel}
            </p>
          )}
          
          {showSubmitButton && (
            <Button 
              variant={submitButtonVariant}
              disabled={currentValue.length !== length || disabled}
              onClick={handleSubmit}
              className="mt-4"
            >
              {submitButtonLabel}
            </Button>
          )}
        </div>
      </div>
    );
  }
);

InputOTP.displayName = 'InputOTP';

export { InputOTP, inputOTPVariants };
