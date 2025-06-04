import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { getWindow } from '../../../utils/ssr';

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
  marks?: { value: number; label: string }[];
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = min,
  onChange,
  className,
  disabled = false,
  showValue = false,
  marks = [],
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentValue = controlledValue !== undefined ? controlledValue : value;

  const handleChange = (newValue: number) => {
    if (disabled) return;
    const clampedValue = Math.min(Math.max(newValue, min), max);
    if (controlledValue === undefined) {
      setValue(clampedValue);
    }
    onChange?.(clampedValue);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    setIsDragging(true);
    updateValueFromEvent(e);
  };

  const handleMouseMove = (e: Event) => {
    if (!isDragging || disabled) return;
    updateValueFromEvent(e as MouseEvent);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValueFromEvent = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newValue = min + (max - min) * percentage;
    const steppedValue = Math.round(newValue / step) * step;
    handleChange(steppedValue);
  };

  useEffect(() => {
    if (isDragging) {
      const win = getWindow();
      win.addEventListener('mousemove', handleMouseMove);
      win.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      const win = getWindow();
      win.removeEventListener('mousemove', handleMouseMove);
      win.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className={clsx('relative w-full', className)}>
      <div
        ref={sliderRef}
        className={clsx(
          'relative h-2 bg-gray-200 rounded-full cursor-pointer',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md',
            'border-2 border-primary',
            disabled && 'cursor-not-allowed'
          )}
          style={{ left: `${percentage}%`, transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {marks.length > 0 && (
        <div className="flex justify-between mt-2">
          {marks.map((mark) => (
            <div
              key={mark.value}
              className="text-xs text-gray"
              style={{ left: `${((mark.value - min) / (max - min)) * 100}%` }}
            >
              {mark.label}
            </div>
          ))}
        </div>
      )}

      {showValue && (
        <div className="mt-2 text-sm text-gray-600">
          {currentValue}
        </div>
      )}
    </div>
  );
}; 