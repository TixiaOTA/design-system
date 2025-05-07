import React from "react";
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalData: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    className?: string;
    perPageOptions?: number[];
    perPage?: number;
    onPerPageChange?: (perPage: number) => void;
    label?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
