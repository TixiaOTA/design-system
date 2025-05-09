import React from 'react';
export type TableVariant = 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost' | 'success';
type ColumnAlignment = 'left' | 'center' | 'right';
export interface TableColumn<T> {
    name: string;
    label: string;
    accessorKey: keyof T;
    type: 'string' | 'number' | 'date' | 'other';
    sortable?: boolean;
    sort?: 'asc' | 'desc';
    align?: ColumnAlignment;
    render?: (value: any, row: T, index?: number) => React.ReactNode;
}
export interface TableProps<T extends Record<string, any>> {
    schema: TableColumn<T>[];
    data: T[];
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
    emptyState?: React.ReactNode;
    isLoading?: boolean;
    loadingState?: React.ReactNode;
    showIndex?: boolean;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    onSortChange?: (sort: string, sortBy: string) => void;
    onRowClick?: (row: T, index: number) => void;
    showPagination?: boolean;
    variant?: TableVariant;
    meta?: {
        current_page: number;
        total_page: number;
        total_data: number;
        limit_number: number;
    };
}
export declare const Table: <T extends Record<string, any>>({ schema, data, className, headerClassName, rowClassName, cellClassName, emptyState, isLoading, loadingState, showIndex, onPageChange, onPageSizeChange, onSortChange, onRowClick, showPagination, variant, meta, }: TableProps<T>) => string | number | true | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode>;
export {};
