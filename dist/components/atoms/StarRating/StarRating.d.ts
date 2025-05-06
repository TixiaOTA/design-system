import React from 'react';
export type StarRatingSize = 'sm' | 'md' | 'lg';
export type StarRatingColor = 'primary' | 'warning' | 'default';
export interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: StarRatingSize;
    color?: StarRatingColor;
    readOnly?: boolean;
    onRatingChange?: (rating: number) => void;
    className?: string;
}
export declare const StarRating: React.FC<StarRatingProps>;
export default StarRating;
