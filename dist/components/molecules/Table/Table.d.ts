import React from 'react';
export interface TableColumn<T> {
    header: string;
    accessor: keyof T;
    render?: (value: any, row: T) => React.ReactNode;
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
}
export declare const Table: <T extends Record<string, any>>({ columns, data, className, headerClassName, rowClassName, cellClassName, emptyState, isLoading, loadingState, }: TableProps<T>) => string | number | true | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode>;
