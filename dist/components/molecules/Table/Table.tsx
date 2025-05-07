import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icons';
import { Pagination } from '../../atoms/Pagination';
import { Skeleton } from '../../atoms/Skeleton';

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

const getVariantStyles = (variant: TableVariant) => {
  const styles = {
    header: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      warning: 'bg-warning text-white',
      danger: 'bg-danger text-white',
      ghost: 'bg-gray-100 text-gray-700',
      success: 'bg-success text-white',
    },
    row: {
      primary: 'hover:bg-primary/5',
      secondary: 'hover:bg-secondary/5',
      warning: 'hover:bg-warning/5',
      danger: 'hover:bg-danger/5',
      ghost: 'hover:bg-gray-50',
      success: 'hover:bg-success/5',
    },
    border: {
      primary: 'border-primary',
      secondary: 'border-secondary',
      warning: 'border-warning',
      danger: 'border-danger',
      ghost: 'border-gray-200',
      success: 'border-success',
    },
    stripe: {
      primary: 'bg-primary/5',
      secondary: 'bg-secondary/5',
      warning: 'bg-warning/5',
      danger: 'bg-danger/5',
      ghost: 'bg-gray-50',
      success: 'bg-success/5',
    },
  };

  return {
    header: styles.header[variant],
    row: styles.row[variant],
    border: styles.border[variant],
    stripe: styles.stripe[variant],
  };
};

const TableLoading = <T,>({ columns, variant = 'primary' }: { columns: TableColumn<T>[]; variant?: TableVariant }) => {
  const displayColumns = [{ header: 'No.', accessor: 'no' as keyof T }, ...columns];
  const variantStyles = getVariantStyles(variant);
  
  return (
    <div className="bg-white rounded-md">
      <div className="p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className="w-full border-spacing-0 border-separate">
          <thead className={cn("border-2 sticky top-0 z-10 rounded-t-md", variantStyles.border)}>
            <tr>
              {displayColumns.map((column, index) => (
                <th
                  key={index}
                  className={cn(
                    'text-sm text-wrap border-y p-4 text-left',
                    variantStyles.header,
                    {
                      'rounded-tl-md': index === 0,
                      'rounded-tr-md': index === displayColumns.length - 1,
                    }
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-h-[50vh]">
            {[...Array(5)].map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn('p-3', {
                  [variantStyles.stripe]: rowIndex % 2 !== 0,
                  'bg-white': rowIndex % 2 === 0,
                })}
              >
                {displayColumns.map((_, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className="text-left text-nowrap text-sm p-4"
                  >
                    <Skeleton className="h-10 w-full rounded-md" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  className,
  headerClassName,
  rowClassName,
  cellClassName,
  emptyState,
  isLoading,
  loadingState,
  showNumbering = false,
  pageSize = 10,
  pageCount = 1,
  currentPage = 1,
  totalData = 0,
  onPageChange,
  onPageSizeChange,
  onSortChange,
  onRowClick,
  showPagination = false,
  variant = 'primary',
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<{ id: string; desc: boolean } | null>(null);
  const variantStyles = getVariantStyles(variant);

  if (isLoading) {
    return loadingState || <TableLoading columns={columns} variant={variant} />;
  }

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;
    
    const currentSort = sorting?.id === column.accessor.toString();
    const newSort = !currentSort ? 'asc' : '';
    
    if (newSort === '') {
      setSorting(null);
    } else {
      setSorting({ id: column.accessor.toString(), desc: false });
    }
    
    onSortChange?.(newSort, column.accessor.toString());
  };

  const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement>, row: T, index: number) => {
    // Check if the click originated from an interactive element
    const target = event.target as HTMLElement;
    const isInteractiveElement = 
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'SELECT' ||
      target.closest('button') !== null ||
      target.closest('a') !== null ||
      target.closest('input') !== null ||
      target.closest('select') !== null;

    if (!isInteractiveElement) {
      onRowClick?.(row, index);
    }
  };

  const displayColumns: TableColumn<T>[] = showNumbering 
    ? [{ 
        header: 'No.', 
        accessor: 'no' as keyof T, 
        render: (_: any, __: any, index: number = 0) => (currentPage - 1) * pageSize + index + 1 
      }, ...columns]
    : columns;

  return (
    <div className="bg-white rounded-md">
      <div className="p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className={cn('w-full border-spacing-0 border-separate', className)}>
          <thead className={cn("border-2 sticky top-0 z-10 rounded-t-md", variantStyles.border)}>
            <tr>
              {displayColumns.map((column, index) => (
                <th
                  key={index}
                  className={cn(
                    'text-sm text-wrap border-y p-4 text-left',
                    variantStyles.header,
                    {
                      'cursor-pointer': column.sortable,
                      'rounded-tl-md': index === 0,
                      'rounded-tr-md': index === displayColumns.length - 1,
                    },
                    headerClassName
                  )}
                  onClick={() => handleSort(column)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <Icon
                        icon={
                          sorting?.id === column.accessor.toString()
                            ? 'mdi:unfold-less-horizontal'
                            : 'mdi:unfold-more-horizontal'
                        }
                        className={cn('h-4 w-4', {
                          'text-white': variant !== 'ghost',
                          'text-gray-700': variant === 'ghost',
                        })}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="max-h-[50vh]">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={displayColumns.length}
                  className={cn(
                    "text-center py-28 border h-full font-bold text-3xl text-default-400 w-full",
                  )}
                >
                  {emptyState || (
                    <div className="flex mx-auto w-full text-center justify-center gap-3 items-center">
                      <p>Data Not Found</p>
                      <Icon icon="mdi:face-frown-open" size={34} />
                    </div>
                  )}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    'p-3',
                    variantStyles.row,
                    {
                      [variantStyles.stripe]: rowIndex % 2 !== 0,
                      'bg-white': rowIndex % 2 === 0,
                      'cursor-pointer': onRowClick,
                    },
                    rowClassName
                  )}
                  onClick={(event) => handleRowClick(event, row, rowIndex)}
                >
                  {displayColumns.map((column, colIndex) => (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={cn(
                        'text-left text-nowrap text-sm p-4',
                        cellClassName
                      )}
                    >
                      {column.render
                        ? column.render(row[column.accessor], row, rowIndex)
                        : row[column.accessor] || '-'}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!!data.length && showPagination && (
        <div className="p-4 bg-white rounded-b-md">
          <Pagination
            currentPage={currentPage}
            totalPages={pageCount}
            totalData={totalData}
            onPageChange={onPageChange || (() => {})}
            perPage={pageSize}
            onPerPageChange={onPageSizeChange || (() => {})}
            perPageOptions={[5, 10, 20, 50, 100]}
            siblingCount={1}
          />
        </div>
      )}
    </div>
  );
};
