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
  Cell,
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
  /**
   * When true (default), below `sm` each row is shown as a stacked card with labels for readability.
   * When false, the table always scrolls horizontally on narrow viewports (legacy behavior).
   */
  isResponsive?: boolean;
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

/** Left accent on mobile row cards (Tailwind border color utilities). */
const getMobileCardAccent = (variant: TableVariant) => {
  const map: Record<TableVariant, string> = {
    primary: "border-l-primary",
    default: "border-l-primary",
    secondary: "border-l-secondary",
    warning: "border-l-warning",
    danger: "border-l-danger",
    ghost: "border-l-gray-300",
    success: "border-l-success",
  };
  return map[variant];
};

const TableLoading = <T,>({
  schema,
  variant = "default",
  showIndexSticky = false,
  isMobile = false,
  isResponsive = true,
  showIndex = false,
}: {
  schema: TableColumn<T>[];
  variant?: TableVariant;
  showIndexSticky?: boolean;
  isMobile?: boolean;
  isResponsive?: boolean;
  showIndex?: boolean;
}) => {
  const displayColumns = [
    ...(showIndex
      ? [
          {
            name: "no",
            label: "No.",
            accessorKey: "no" as keyof T,
            type: "number" as const,
            width: 80,
            sticky: showIndexSticky,
            stickyPosition: "left" as const,
          },
        ]
      : []),
    ...schema,
  ];
  const variantStyles = getVariantStyles(variant);
  const cardAccent = getMobileCardAccent(variant);

  const scrollShellClass =
    "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1";

  const tableMarkup = (
    <div className={cn(scrollShellClass, isResponsive && "hidden sm:block")}>
      <table className="w-full border-spacing-0 border-separate min-w-full">
        <thead
          className={cn(
            "border-2 sticky top-0 z-20 rounded-t-md",
            variantStyles.border,
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
                      "sticky z-30": !isMobile && column.sticky,
                      "left-0":
                        !isMobile &&
                        column.sticky &&
                        column.stickyPosition === "left",
                      "right-0":
                        !isMobile &&
                        column.sticky &&
                        column.stickyPosition === "right",
                    },
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
                          : parseInt(prevColumn.width?.toString() || "0") || 0;
                      leftPosition += width;
                    }
                  }
                  return leftPosition;
                };

                return (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={cn("text-left text-nowrap text-sm p-4", {
                      "sticky z-10": column.sticky,
                      "left-0":
                        column.sticky && column.stickyPosition === "left",
                      "right-0":
                        column.sticky && column.stickyPosition === "right",
                      // Ensure sticky columns have solid background that matches row
                      "bg-white":
                        column.sticky &&
                        (rowIndex % 2 === 0 || variant === "default"),
                      [variantStyles.stripe]:
                        column.sticky &&
                        rowIndex % 2 !== 0 &&
                        variant !== "default",
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
  );

  return (
    <div className="bg-white rounded-md flex flex-col h-full max-h-[600px]">
      {tableMarkup}
      {isResponsive && (
        <div className="sm:hidden flex-1 space-y-3 p-3 overflow-auto min-h-0">
          {[...Array(5)].map((_, cardIndex) => (
            <div
              key={cardIndex}
              className={cn(
                "rounded-xl border border-gray-200 bg-white p-4 shadow-sm border-l-4",
                cardAccent,
              )}
            >
              <div className="space-y-3">
                {displayColumns.map((_, i) => (
                  <div
                    key={`${cardIndex}-${i}`}
                    className="grid grid-cols-[minmax(0,40%)_minmax(0,1fr)] items-center gap-x-3 gap-y-0"
                  >
                    <Skeleton className="h-3 w-20 max-w-full rounded" />
                    <Skeleton className="h-4 w-full rounded-md" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
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
  variant = "default",
  isResponsive = true,
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
      updater: SortingState | ((old: SortingState) => SortingState),
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
  const mobileCardAccent = getMobileCardAccent(variant);

  const tableScrollClass =
    "p-0 w-full overflow-auto rounded-t-md [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full flex-1";

  if (isLoading) {
    return (
      loadingState || (
        <TableLoading
          schema={schema}
          variant={variant}
          showIndexSticky={showIndexSticky}
          isMobile={isMobile}
          isResponsive={isResponsive}
          showIndex={showIndex}
        />
      )
    );
  }

  const handleRowClick = (
    event: React.MouseEvent<HTMLElement>,
    row: T,
    index: number,
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

  const renderHeaderCell = (
    headerGroup: HeaderGroup<T>,
    header: Header<T, unknown>,
    index: number,
  ) => {
    const columnMeta = header.column.columnDef.meta as {
      align?: ColumnAlignment;
      width?: number | string;
      sticky?: boolean;
      stickyPosition?: "left" | "right";
    };

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
        if (prevMeta?.sticky && prevMeta.stickyPosition === "left") {
          const width =
            typeof prevMeta.width === "number"
              ? prevMeta.width
              : parseInt(prevMeta.width?.toString() || "0") || 0;
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
            "rounded-tr-md": index === headerGroup.headers.length - 1,
            "text-left": columnMeta?.align === "left",
            "text-center": columnMeta?.align === "center",
            "text-right": columnMeta?.align === "right",
            "sticky z-30": !isMobile && columnMeta?.sticky,
            "left-0":
              !isMobile &&
              columnMeta?.sticky &&
              columnMeta.stickyPosition === "left",
            "right-0":
              !isMobile &&
              columnMeta?.sticky &&
              columnMeta.stickyPosition === "right",
          },
          headerClassName,
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
        <div className="flex items-center gap-2 relative z-10">
          <span
            className={cn({
              "font-semibold": index === 0,
            })}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
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
              className={cn("h-4 w-4 flex-shrink-0", {
                "text-white": variant !== "ghost",
                "text-gray-700": variant === "ghost",
              })}
            />
          )}
        </div>
      </th>
    );
  };

  const renderBodyCell = (rowIndex: number, cell: Cell<T, unknown>) => {
    const columnMeta = cell.column.columnDef.meta as {
      align?: ColumnAlignment;
      width?: number | string;
      sticky?: boolean;
      stickyPosition?: "left" | "right";
    };

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
        (col) => col.id === cell.column.id,
      );

      for (let i = 0; i < currentColumnIndex; i++) {
        const prevColumn = allColumns[i];
        const prevMeta = prevColumn.columnDef.meta as {
          sticky?: boolean;
          stickyPosition?: "left" | "right";
          width?: number | string;
        };
        if (prevMeta?.sticky && prevMeta.stickyPosition === "left") {
          const width =
            typeof prevMeta.width === "number"
              ? prevMeta.width
              : parseInt(prevMeta.width?.toString() || "0") || 0;
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
            "sticky z-10": !isMobile && columnMeta?.sticky,
            "left-0":
              !isMobile &&
              columnMeta?.sticky &&
              columnMeta.stickyPosition === "left",
            "right-0":
              !isMobile &&
              columnMeta?.sticky &&
              columnMeta.stickyPosition === "right",
            "bg-white":
              !isMobile &&
              columnMeta?.sticky &&
              (rowIndex % 2 === 0 || variant === "default"),
            [variantStyles.stripe]:
              !isMobile &&
              columnMeta?.sticky &&
              rowIndex % 2 !== 0 &&
              variant !== "default",
            [variantStyles.hoverStripe]: !isMobile && columnMeta?.sticky,
            "border-b border-gray-200": variant === "default",
          },
          cellClassName,
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
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    );
  };

  return (
    <div className="bg-white rounded-md flex flex-col h-full max-h-[600px]">
      {data.length === 0 ? (
        <div
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center text-gray-600 min-h-[200px]",
            isResponsive &&
              "mx-3 my-3 rounded-xl border border-dashed border-gray-200 sm:mx-0 sm:my-0 sm:rounded-none sm:border-0",
          )}
        >
          {emptyState || (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <p>Data Not Found</p>
              <Icon icon="mdi:face-frown-open" size={34} />
            </div>
          )}
        </div>
      ) : (
        <>
          <div
            className={cn(tableScrollClass, isResponsive && "hidden sm:block")}
          >
            <table
              className={cn(
                "w-full border-spacing-0 border-separate min-w-full",
                className,
              )}
            >
              <thead
                className={cn(
                  "border-2 sticky top-0 z-20 rounded-t-md",
                  variantStyles.border,
                )}
              >
                {table.getHeaderGroups().map((headerGroup: HeaderGroup<T>) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header: Header<T, unknown>, index: number) =>
                        renderHeaderCell(headerGroup, header, index),
                    )}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table
                  .getRowModel()
                  .rows.map((row: Row<T>, rowIndex: number) => (
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
                        rowClassName,
                      )}
                      onClick={(event) =>
                        handleRowClick(event, row.original, rowIndex)
                      }
                    >
                      {row
                        .getVisibleCells()
                        .map((cell) => renderBodyCell(rowIndex, cell))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {isResponsive && (
            <div className="sm:hidden flex-1 space-y-3 p-3 overflow-auto min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              {table.getRowModel().rows.map((row: Row<T>, rowIndex: number) => (
                <article
                  key={row.id}
                  className={cn(
                    "rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden border-l-4 transition-colors",
                    mobileCardAccent,
                    variantStyles.row,
                    {
                      [variantStyles.stripe]: rowIndex % 2 !== 0,
                      "bg-white": rowIndex % 2 === 0,
                      "cursor-pointer active:scale-[0.99]": onRowClick,
                    },
                    rowClassName,
                  )}
                  onClick={(event) =>
                    handleRowClick(event, row.original, rowIndex)
                  }
                >
                  <dl className="divide-y divide-gray-100 text-left">
                    {row.getVisibleCells().map((cell) => {
                      const headerGroup = table.getHeaderGroups()[0];
                      const columnHeader = headerGroup?.headers.find(
                        (h) => h.column.id === cell.column.id,
                      );
                      const hdrDef = cell.column.columnDef.header;
                      const label = columnHeader
                        ? flexRender(
                            columnHeader.column.columnDef.header,
                            columnHeader.getContext(),
                          )
                        : typeof hdrDef === "string" ||
                            typeof hdrDef === "number"
                          ? hdrDef
                          : cell.column.id;

                      return (
                        <div
                          key={cell.id}
                          className="grid grid-cols-[minmax(0,40%)_minmax(0,1fr)] items-start gap-x-3 gap-y-0 px-4 py-3"
                        >
                          <dt className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 break-words text-left pr-1 pt-0.5">
                            {label}
                          </dt>
                          <dd
                            className={cn(
                              cellClassName,
                              "text-left text-sm text-gray-900 min-w-0 break-words [&>*]:max-w-full [&>*]:text-left",
                            )}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </article>
              ))}
            </div>
          )}
        </>
      )}

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
