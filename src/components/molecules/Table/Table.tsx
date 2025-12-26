import React, { useEffect, useState } from "react";
import { cn } from "../../../utils/cn";
import { Icon } from "../../atoms/Icons";
import { Pagination } from "../../atoms/Pagination";
import { Skeleton } from "../../atoms/Skeleton";
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
} from "@tanstack/react-table";

export type TableVariant =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "ghost"
  | "success"
  | "default";

type ColumnAlignment = "left" | "center" | "right";

export interface TableColumn<T> {
  name: string;
  label: string;
  accessorKey: keyof T;
  type: "string" | "number" | "date" | "other";
  sortable?: boolean;
  sort?: "asc" | "desc";
  align?: ColumnAlignment;
  width?: number | string;
  sticky?: boolean;
  stickyPosition?: "left" | "right";
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
  showIndexSticky?: boolean;
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

const getVariantStyles = (variant: TableVariant) => {
  const styles = {
    header: {
      primary: "bg-primary text-white",
      default: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      warning: "bg-warning text-white",
      danger: "bg-danger text-white",
      ghost: "bg-gray-100 text-gray-700",
      success: "bg-success text-white",
    },
    row: {
      primary: "hover:bg-primary-50",
      default: "hover:bg-primary-50",
      secondary: "hover:bg-secondary-50",
      warning: "hover:bg-warning-50",
      danger: "hover:bg-danger-50",
      ghost: "hover:bg-gray-50",
      success: "hover:bg-success-50",
    },
    border: {
      primary: "border-primary",
      default: "border-primary",
      secondary: "border-secondary",
      warning: "border-warning",
      danger: "border-danger",
      ghost: "border-gray-200",
      success: "border-success",
    },
    stripe: {
      primary: "bg-primary-50",
      default: "bg-none",
      secondary: "bg-secondary-50",
      warning: "bg-warning-50",
      danger: "bg-danger-50",
      ghost: "bg-gray-50",
      success: "bg-success-50",
    },
    hoverStripe: {
      primary: "group-hover:bg-primary-50",
      default: "group-hover:bg-primary-50",
      secondary: "group-hover:bg-secondary-50",
      warning: "group-hover:bg-warning-50",
      danger: "group-hover:bg-danger-50",
      ghost: "group-hover:bg-gray-50",
      success: "group-hover:bg-success-50",
    },
  };

  return {
    header: styles.header[variant],
    row: styles.row[variant],
    border: styles.border[variant],
    stripe: styles.stripe[variant],
    hoverStripe: styles.hoverStripe[variant],
  };
};

const TableLoading = <T,>({
  schema,
  variant = "default",
  showIndexSticky = false,
  isMobile = false,
}: {
  schema: TableColumn<T>[];
  variant?: TableVariant;
  showIndexSticky?: boolean;
  isMobile?: boolean;
}) => {
  const displayColumns = [
    {
      name: "no",
      label: "No.",
      accessorKey: "no" as keyof T,
      type: "number",
      width: 80,
      sticky: showIndexSticky,
      stickyPosition: "left" as const,
    },
    ...schema,
  ];
  const variantStyles = getVariantStyles(variant);

  return (
    <div className="bg-white rounded-md flex flex-col h-full max-h-[600px]">
      <div className="p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1">
        <table className="w-full border-spacing-0 border-separate min-w-full">
          <thead
            className={cn(
              "border-2 sticky top-0 z-20 rounded-t-md",
              variantStyles.border
            )}
          >
            <tr>
              {displayColumns.map((column, index) => {
                // Calculate left position for sticky columns
                const calculateStickyLeft = () => {
                  if (
                    isMobile ||
                    !column.sticky ||
                    column.stickyPosition !== "left"
                  )
                    return 0;

                  let leftPosition = 0;
                  for (let i = 0; i < index; i++) {
                    const prevColumn = displayColumns[i];
                    if (
                      prevColumn.sticky &&
                      prevColumn.stickyPosition === "left"
                    ) {
                      const width =
                        typeof prevColumn.width === "number"
                          ? prevColumn.width
                          : parseInt(prevColumn.width?.toString() || "0") || 0;
                      leftPosition += width;
                    }
                  }
                  return leftPosition;
                };

                return (
                  <th
                    key={index}
                    className={cn(
                      "text-sm text-wrap border-y p-4 text-left",
                      variantStyles.header,
                      {
                        "rounded-tl-md": index === 0,
                        "rounded-tr-md": index === displayColumns.length - 1,
                        "sticky z-10": !isMobile && column.sticky,
                        "left-0":
                          !isMobile &&
                          column.sticky &&
                          column.stickyPosition === "left",
                        "right-0":
                          !isMobile &&
                          column.sticky &&
                          column.stickyPosition === "right",
                      }
                    )}
                    style={{
                      width:
                        typeof column.width === "number"
                          ? `${column.width}px`
                          : column.width,
                      minWidth:
                        typeof column.width === "number"
                          ? `${column.width}px`
                          : column.width,
                      left:
                        !isMobile &&
                        column.sticky &&
                        column.stickyPosition === "left"
                          ? `${calculateStickyLeft()}px`
                          : undefined,
                    }}
                  >
                    {column.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn("p-3", {
                  [variantStyles.stripe]: rowIndex % 2 !== 0,
                  "bg-white": rowIndex % 2 === 0,
                })}
              >
                {displayColumns.map((column, colIndex) => {
                  // Calculate left position for sticky columns
                  const calculateStickyLeft = () => {
                    if (!column.sticky || column.stickyPosition !== "left")
                      return 0;

                    let leftPosition = 0;
                    for (let i = 0; i < colIndex; i++) {
                      const prevColumn = displayColumns[i];
                      if (
                        prevColumn.sticky &&
                        prevColumn.stickyPosition === "left"
                      ) {
                        const width =
                          typeof prevColumn.width === "number"
                            ? prevColumn.width
                            : parseInt(prevColumn.width?.toString() || "0") ||
                              0;
                        leftPosition += width;
                      }
                    }
                    return leftPosition;
                  };

                  return (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={cn("text-left text-nowrap text-sm p-4", {
                        "sticky z-5": column.sticky,
                        "left-0":
                          column.sticky && column.stickyPosition === "left",
                        "right-0":
                          column.sticky && column.stickyPosition === "right",
                        // Ensure sticky columns have solid background that matches row
                        "bg-white": column.sticky && rowIndex % 2 === 0,
                        [variantStyles.stripe]:
                          column.sticky && rowIndex % 2 !== 0,
                        [variantStyles.hoverStripe]: column.sticky,
                        "border-b border-gray-200": variant === "default",
                      })}
                      style={{
                        width:
                          typeof column.width === "number"
                            ? `${column.width}px`
                            : column.width,
                        minWidth:
                          typeof column.width === "number"
                            ? `${column.width}px`
                            : column.width,
                        left:
                          column.sticky && column.stickyPosition === "left"
                            ? `${calculateStickyLeft()}px`
                            : undefined,
                      }}
                    >
                      <Skeleton className="h-10 w-full rounded-md" />
                    </td>
                  );
                })}
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
  showIndexSticky = false,
  onPageChange,
  onPageSizeChange,
  onSortChange,
  onRowClick,
  showPagination = false,
  variant = "primary",
  meta = {
    current_page: 1,
    total_page: 1,
    total_data: 0,
    limit_number: 10,
  },
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>(() => {
    const sortedColumn = schema.find((col) => col.sortable && col.sort);
    if (sortedColumn) {
      return [
        {
          id: sortedColumn.accessorKey.toString(),
          desc: sortedColumn.sort === "desc",
        },
      ];
    }
    return [];
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = React.useMemo<ColumnDef<T, any>[]>(() => {
    const baseColumns = schema.map((col) => ({
      accessorKey: col.accessorKey,
      header: col.label,
      enableSorting: !!col.sortable,
      cell: col.render
        ? ({ row }: { row: Row<T> }) =>
            col.render?.(row.original[col.accessorKey], row.original, row.index)
        : ({ row }: { row: Row<T> }) => row.original[col.accessorKey] || "-",
      meta: {
        align: col.align || "left",
        width: col.width,
        sticky: col.sticky,
        stickyPosition: col.stickyPosition || "left",
      },
    }));

    if (showIndex) {
      return [
        {
          accessorKey: "no",
          header: "No.",
          enableSorting: false,
          cell: ({ row }: { row: Row<T> }) =>
            (meta.current_page - 1) * meta.limit_number + row.index + 1,
          meta: {
            align: "left",
            width: 80,
            sticky: showIndexSticky,
            stickyPosition: "left",
          },
        },
        ...baseColumns,
      ];
    }

    return baseColumns;
  }, [schema, showIndex, showIndexSticky, meta]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: (
      updater: SortingState | ((old: SortingState) => SortingState)
    ) => {
      const newSorting =
        typeof updater === "function" ? updater(sorting) : updater;
      setSorting(newSorting);

      if (newSorting.length > 0) {
        onSortChange?.(newSorting[0].desc ? "desc" : "asc", newSorting[0].id);
      } else {
        onSortChange?.("", "");
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: meta.total_page,
  });

  const variantStyles = getVariantStyles(variant);

  if (isLoading) {
    return (
      loadingState || (
        <TableLoading
          schema={schema}
          variant={variant}
          showIndexSticky={showIndexSticky}
          isMobile={isMobile}
        />
      )
    );
  }

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement>,
    row: T,
    index: number
  ) => {
    const target = event.target as HTMLElement;
    const isInteractiveElement =
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      target.tagName === "INPUT" ||
      target.tagName === "SELECT" ||
      target.closest("button") !== null ||
      target.closest("a") !== null ||
      target.closest("input") !== null ||
      target.closest("select") !== null;

    if (!isInteractiveElement) {
      onRowClick?.(row, index);
    }
  };

  return (
    <div className="bg-white rounded-md flex flex-col h-full max-h-[600px]">
      <div className="p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1">
        <table
          className={cn(
            "w-full border-spacing-0 border-separate min-w-full",
            className
          )}
        >
          <thead
            className={cn(
              "border-2 sticky top-0 z-20 rounded-t-md",
              variantStyles.border
            )}
          >
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header: Header<T, unknown>, index: number) => {
                    const columnMeta = header.column.columnDef.meta as {
                      align?: ColumnAlignment;
                      width?: number | string;
                      sticky?: boolean;
                      stickyPosition?: "left" | "right";
                    };

                    // Calculate left position for sticky columns
                    const calculateStickyLeft = () => {
                      if (
                        isMobile ||
                        !columnMeta?.sticky ||
                        columnMeta.stickyPosition !== "left"
                      )
                        return 0;

                      let leftPosition = 0;
                      for (let i = 0; i < index; i++) {
                        const prevColumn = headerGroup.headers[i];
                        const prevMeta = prevColumn.column.columnDef.meta as {
                          sticky?: boolean;
                          stickyPosition?: "left" | "right";
                          width?: number | string;
                        };
                        if (
                          prevMeta?.sticky &&
                          prevMeta.stickyPosition === "left"
                        ) {
                          const width =
                            typeof prevMeta.width === "number"
                              ? prevMeta.width
                              : parseInt(prevMeta.width?.toString() || "0") ||
                                0;
                          leftPosition += width;
                        }
                      }
                      return leftPosition;
                    };

                    return (
                      <th
                        key={header.id}
                        className={cn(
                          "text-sm text-wrap border-y p-4",
                          variantStyles.header,
                          {
                            "cursor-pointer": header.column.getCanSort(),
                            "rounded-tl-md": index === 0,
                            "rounded-tr-md":
                              index === headerGroup.headers.length - 1,
                            "text-left": columnMeta?.align === "left",
                            "text-center": columnMeta?.align === "center",
                            "text-right": columnMeta?.align === "right",
                            "sticky z-5": !isMobile && columnMeta?.sticky,
                            "left-0":
                              !isMobile &&
                              columnMeta?.sticky &&
                              columnMeta.stickyPosition === "left",
                            "right-0":
                              !isMobile &&
                              columnMeta?.sticky &&
                              columnMeta.stickyPosition === "right",
                          },
                          headerClassName
                        )}
                        style={{
                          width:
                            typeof columnMeta?.width === "number"
                              ? `${columnMeta.width}px`
                              : columnMeta?.width,
                          minWidth:
                            typeof columnMeta?.width === "number"
                              ? `${columnMeta.width}px`
                              : columnMeta?.width,
                          left:
                            !isMobile &&
                            columnMeta?.sticky &&
                            columnMeta.stickyPosition === "left"
                              ? `${calculateStickyLeft()}px`
                              : undefined,
                        }}
                        onClick={
                          header.column.getCanSort()
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={cn({
                              "font-semibold": index === 0,
                            })}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                          {header.column.getCanSort() && (
                            <Icon
                              icon={
                                header.column.getIsSorted()
                                  ? header.column.getIsSorted() === "desc"
                                    ? "mdi:keyboard-arrow-up"
                                    : "mdi:keyboard-arrow-down"
                                  : "mdi:unfold-more-horizontal"
                              }
                              className={cn("h-4 w-4", {
                                "text-white": variant !== "ghost",
                                "text-gray-700": variant === "ghost",
                              })}
                            />
                          )}
                        </div>
                      </th>
                    );
                  }
                )}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={table.getAllColumns().length}
                  className={cn(
                    "text-center border h-full w-full rounded-b-md"
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
                    "p-3 group",
                    variantStyles.row,
                    {
                      [variantStyles.stripe]: rowIndex % 2 !== 0,
                      "bg-white": rowIndex % 2 === 0,
                      "cursor-pointer": onRowClick,
                    },
                    rowClassName
                  )}
                  onClick={(event) =>
                    handleRowClick(event, row.original, rowIndex)
                  }
                >
                  {row.getVisibleCells().map((cell) => {
                    const columnMeta = cell.column.columnDef.meta as {
                      align?: ColumnAlignment;
                      width?: number | string;
                      sticky?: boolean;
                      stickyPosition?: "left" | "right";
                    };

                    // Calculate left position for sticky columns
                    const calculateStickyLeft = () => {
                      if (
                        isMobile ||
                        !columnMeta?.sticky ||
                        columnMeta.stickyPosition !== "left"
                      )
                        return 0;

                      let leftPosition = 0;
                      const allColumns = table.getAllColumns();
                      const currentColumnIndex = allColumns.findIndex(
                        (col) => col.id === cell.column.id
                      );

                      for (let i = 0; i < currentColumnIndex; i++) {
                        const prevColumn = allColumns[i];
                        const prevMeta = prevColumn.columnDef.meta as {
                          sticky?: boolean;
                          stickyPosition?: "left" | "right";
                          width?: number | string;
                        };
                        if (
                          prevMeta?.sticky &&
                          prevMeta.stickyPosition === "left"
                        ) {
                          const width =
                            typeof prevMeta.width === "number"
                              ? prevMeta.width
                              : parseInt(prevMeta.width?.toString() || "0") ||
                                0;
                          leftPosition += width;
                        }
                      }
                      return leftPosition;
                    };

                    return (
                      <td
                        key={cell.id}
                        className={cn(
                          "px-4 py-3 text-sm text-gray-900",
                          {
                            "text-left": columnMeta?.align === "left",
                            "text-center": columnMeta?.align === "center",
                            "text-right": columnMeta?.align === "right",
                            "sticky z-5": !isMobile && columnMeta?.sticky,
                            "left-0":
                              !isMobile &&
                              columnMeta?.sticky &&
                              columnMeta.stickyPosition === "left",
                            "right-0":
                              !isMobile &&
                              columnMeta?.sticky &&
                              columnMeta.stickyPosition === "right",
                            // Ensure sticky columns have solid background that matches row
                            "bg-white":
                              !isMobile &&
                              columnMeta?.sticky &&
                              rowIndex % 2 === 0,
                            [variantStyles.stripe]:
                              !isMobile &&
                              columnMeta?.sticky &&
                              rowIndex % 2 !== 0,
                            [variantStyles.hoverStripe]:
                              !isMobile && columnMeta?.sticky,
                            "border-b border-gray-200": variant === "default",
                          },
                          cellClassName
                        )}
                        style={{
                          width:
                            typeof columnMeta?.width === "number"
                              ? `${columnMeta.width}px`
                              : columnMeta?.width,
                          minWidth:
                            typeof columnMeta?.width === "number"
                              ? `${columnMeta.width}px`
                              : columnMeta?.width,
                          left:
                            !isMobile &&
                            columnMeta?.sticky &&
                            columnMeta.stickyPosition === "left"
                              ? `${calculateStickyLeft()}px`
                              : undefined,
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!!data.length && showPagination && (
        <div className="p-4 bg-white rounded-b-md border-t border-gray-200 sticky bottom-0 z-10 flex-shrink-0">
          <Pagination
            currentPage={meta.current_page}
            totalPages={meta.total_page}
            totalData={meta.total_data}
            onPageChange={onPageChange || (() => {})}
            perPage={meta.limit_number}
            onPerPageChange={onPageSizeChange || (() => {})}
            perPageOptions={[5, 10, 20, 50, 100]}
            siblingCount={1}
          />
        </div>
      )}
    </div>
  );
};
