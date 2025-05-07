import React from "react";
import clsx from "clsx";
import { Select } from "../Select/Select";
import { SelectItem } from "../SelectItem/SelectItem";

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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalData,
  onPageChange,
  siblingCount = 1,
  className,
  perPageOptions,
  perPage = 10,
  label = "",
  onPerPageChange,
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalPageNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalPageNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [...extraPages, ...pages];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages];
      } else if (hasLeftSpill && hasRightSpill) {
        pages = [...pages];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = getPageNumbers();

  return (
    <nav
      className={clsx("flex items-center justify-center space-x-1", className)}
    >
      {perPageOptions && perPageOptions.length > 0 && (
        <div className="sm:flex hidden justify-between items-center text-sm gap-10 text-neutral-700">
          <div>{`${currentPage} - ${totalPages} dari ${totalData} ${label}`}</div>
          <div className="flex items-center gap-2 mr-4">
            <span className="text-neutral-700 text-sm">Menampilkan</span>
            <Select
              value={perPage?.toString()}
              onChange={(val) =>
                onPerPageChange && onPerPageChange(Number(val))
              }
              size="sm"
              className="w-16"
              fullWidth={false}
              aria-label="Items per page"
            >
              {perPageOptions.map((option) => (
                <SelectItem key={option} value={option.toString()}>
                  {option}
                </SelectItem>
              ))}
            </Select>
            <span className="text-neutral-700 text-sm">data per halaman</span>
          </div>
        </div>
      )}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "px-3 py-1 rounded-md text-sm",
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        Previous
      </button>

      {pages.map((page, index) => {
        const isCurrentPage = page === currentPage;
        const isEllipsis = typeof page === "string" && page === "...";

        return (
          <button
            key={index}
            onClick={() => !isEllipsis && onPageChange(page)}
            className={clsx(
              "px-3 py-1 rounded-md text-sm",
              isCurrentPage
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100",
              isEllipsis && "cursor-default"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "px-3 py-1 rounded-md text-sm",
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        Next
      </button>
    </nav>
  );
};
