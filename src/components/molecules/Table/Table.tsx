import React from 'react';
import { cn } from '../../../utils/cn';

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
}: TableProps<T>) => {
  if (isLoading && loadingState) {
    return loadingState;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full border-spacing-0 border-separate', className)}>
        <thead className="bg-primary-500 sticky top-0 z-10">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={cn(
                  'text-sm text-wrap border-y bg-primary',
                  'border-primary text-white p-4 text-center',
                  headerClassName
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-28 border border-primary h-full font-bold text-3xl text-default-400 w-full"
              >
                {emptyState || 'No data available'}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  'p-3 text-center hover:bg-slate-100',
                  {
                    'bg-[#F8F8F8]': rowIndex % 2 !== 0,
                    'bg-white': rowIndex % 2 === 0,
                  },
                  rowClassName
                )}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={cn(
                      'text-center text-nowrap text-sm p-4',
                      cellClassName
                    )}
                  >
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : row[column.accessor] || '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
