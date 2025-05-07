import React from 'react';
export type TableVariant = 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost' | 'success';
export interface TableColumn<T> {
    header: string;
    accessor: keyof T;
    render?: (value: any, row: T, index?: number) => React.ReactNode;
    sortable?: boolean;
}
export interface TableProps<T> {
    columns: TableColumn<T>[];
    data: T[];
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
    emptyState?: React.ReactNode;
    isLoading?: boolean;
    loadingState?: React.ReactNode;
    showNumbering?: boolean;
    pageSize?: number;
    pageCount?: number;
    currentPage?: number;
    totalData?: number;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    onSortChange?: (sort: string, sortBy: string) => void;
    onRowClick?: (row: T, index: number) => void;
    showPagination?: boolean;
    variant?: TableVariant;
    sort?: 'asc' | 'desc';
}
export declare const Table: <T extends Record<string, any>>({ columns, data, className, headerClassName, rowClassName, cellClassName, emptyState, isLoading, loadingState, showNumbering, pageSize, pageCount, currentPage, totalData, onPageChange, onPageSizeChange, onSortChange, onRowClick, showPagination, variant, }: TableProps<T>) => string | number | true | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode>;
