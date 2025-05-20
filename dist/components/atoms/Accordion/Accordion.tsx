import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../../atoms/Icons/Icons';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpenIds?: string[];
  icon?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  defaultOpenIds = [],
  icon = 'mdi:chevron-down',
  iconPosition = 'right',
  className,
  itemClassName,
  headerClassName,
  contentClassName,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    if (multiple) {
      setOpenIds((prev) =>
        prev.includes(id)
          ? prev.filter((itemId) => itemId !== id)
          : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={clsx('w-full space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const isDisabled = Boolean(item.disabled);

        return (
          <div
            key={item.id}
            className={clsx(
              'border rounded-lg overflow-hidden',
              'bg-white',
              'border-gray-200',
              itemClassName
            )}
          >
            <button
              onClick={() => !isDisabled && toggleItem(item.id)}
              disabled={isDisabled}
              className={clsx(
                'w-full flex items-center justify-between p-4',
                'text-left transition-colors',
                'hover:bg-primary-50',
                isDisabled && 'opacity-50 cursor-not-allowed',
                headerClassName
              )}
            >
              {iconPosition === 'left' && (
                <div
                  className={clsx(
                    'mr-3 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                >
                  <Icon icon={icon} className="w-5 h-5" />
                </div>
              )}
              <div className="flex-1">{item.title}</div>
              {iconPosition === 'right' && (
                <div
                  className={clsx(
                    'ml-3 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                >
                  <Icon icon={icon} className="w-5 h-5" />
                </div>
              )}
            </button>
            {isOpen && (
              <div
                className={clsx(
                  'p-4 border-t border-gray-200',
                  contentClassName
                )}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}; 