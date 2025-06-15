import React from 'react';
export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    selected?: boolean;
    disabled?: boolean;
}
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
export { SelectItem };
