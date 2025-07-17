import React from 'react';
export interface TabItem {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    icon?: string;
}
export interface TabsProps {
    items: TabItem[];
    defaultActiveId?: string;
    variant?: 'default' | 'pills' | 'underline' | 'active-underline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    tabListClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
    onChange?: (activeId: string) => void;
}
export declare const Tabs: React.FC<TabsProps>;
