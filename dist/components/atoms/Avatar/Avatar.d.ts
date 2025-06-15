import React from 'react';
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'circle' | 'square';
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
