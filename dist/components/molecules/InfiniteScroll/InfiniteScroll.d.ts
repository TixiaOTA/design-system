import React from 'react';
export interface InfiniteScrollProps<T> {
    data: T[];
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
    loadingComponent?: React.ReactNode;
    emptyComponent?: React.ReactNode;
    endComponent?: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
    root?: Element | null;
}
export declare const InfiniteScroll: <T>({ data, hasNextPage, isFetchingNextPage, fetchNextPage, renderItem, className, loadingComponent, emptyComponent, endComponent, threshold, rootMargin, root, }: InfiniteScrollProps<T>) => string | number | bigint | true | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined>;
