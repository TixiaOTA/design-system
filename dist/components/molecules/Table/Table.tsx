import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { Icon } from '../../atoms/Icons';
import { Pagination } from '../../atoms/Pagination';
import { Skeleton } from '../../atoms/Skeleton';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  SortingState,
  ColumnDef,
  Row,
  Header,
  HeaderGroup,
} from '@tanstack/react-table';

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

const TableLoading = <T,>({ schema, variant = 'primary' }: { schema: TableColumn<T>[]; variant?: TableVariant }) => {
  const displayColumns = [{ name: 'no', label: 'No.', accessorKey: 'no' as keyof T, type: 'number' }, ...schema];
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
                  {column.label}
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
  schema,
  data,
  className,
  headerClassName,
  rowClassName,
  cellClassName,
  emptyState,
  isLoading,
  loadingState,
  showIndex = false,
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
  const [sorting, setSorting] = useState<SortingState>(() => {
    const sortedColumn = schema.find(col => col.sortable && col.sort);
    if (sortedColumn) {
      return [{
        id: sortedColumn.accessorKey.toString(),
        desc: sortedColumn.sort === 'desc'
      }];
    }
    return [];
  });

  const columns = React.useMemo<ColumnDef<T, any>[]>(() => {
    const baseColumns = schema.map(col => ({
      accessorKey: col.accessorKey,
      header: col.label,
      enableSorting: !!col.sortable,
      cell: col.render ? 
        ({ row }: { row: Row<T> }) => col.render?.(row.original[col.accessorKey], row.original, row.index) :
        ({ row }: { row: Row<T> }) => row.original[col.accessorKey] || '-',
      meta: {
        align: col.align || 'left'
      }
    }));

    if (showIndex) {
      return [{
        accessorKey: 'no',
        header: 'No.',
        enableSorting: false,
        cell: ({ row }: { row: Row<T> }) => (currentPage - 1) * pageSize + row.index + 1,
        meta: {
          align: 'left'
        }
      }, ...baseColumns];
    }

    return baseColumns;
  }, [schema, showIndex, currentPage, pageSize]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: (updater: SortingState | ((old: SortingState) => SortingState)) => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
      setSorting(newSorting);
      
      if (newSorting.length > 0) {
        onSortChange?.(newSorting[0].desc ? 'desc' : 'asc', newSorting[0].id);
      } else {
        onSortChange?.('', '');
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: pageCount,
  });

  const variantStyles = getVariantStyles(variant);

  if (isLoading) {
    return loadingState || <TableLoading schema={schema} variant={variant} />;
  }

  const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement>, row: T, index: number) => {
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

  return (
    <div className="bg-white rounded-md">
      <div className="p-0 w-full max-h-[50vh] overflow-auto rounded-t-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <table className={cn('w-full border-spacing-0 border-separate', className)}>
          <thead className={cn("border-2 sticky top-0 z-10 rounded-t-md", variantStyles.border)}>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<T, unknown>, index: number) => (
                  <th
                    key={header.id}
                    className={cn(
                      'text-sm text-wrap border-y p-4',
                      variantStyles.header,
                      {
                        'cursor-pointer': header.column.getCanSort(),
                        'rounded-tl-md': index === 0,
                        'rounded-tr-md': index === headerGroup.headers.length - 1,
                        'text-left': (header.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'left',
                        'text-center': (header.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'center',
                        'text-right': (header.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'right',
                      },
                      headerClassName
                    )}
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span className={cn({
                        'font-semibold': index === 0
                      })}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </span>
                      {header.column.getCanSort() && (
                        <Icon
                          icon={
                            header.column.getIsSorted()
                              ? header.column.getIsSorted() === 'desc'
                                ? 'mdi:keyboard-arrow-up'
                                : 'mdi:keyboard-arrow-down'
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
            ))}
          </thead>
          <tbody className="max-h-[50vh]">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className={cn(
                    "text-center py-28 border h-full font-bold text-3xl text-default-400 w-full rounded-b-md",
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
              table.getRowModel().rows.map((row: Row<T>, rowIndex: number) => (
                <tr
                  key={row.id}
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
                  onClick={(event) => handleRowClick(event, row.original, rowIndex)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={cn(
                        "px-4 py-3 text-sm text-gray-900",
                        {
                          'text-left': (cell.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'left',
                          'text-center': (cell.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'center',
                          'text-right': (cell.column.columnDef.meta as { align?: ColumnAlignment })?.align === 'right',
                        },
                        cellClassName
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
