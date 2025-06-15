import React from 'react';
export type StatusIndicatorStatus = 'active' | 'inactive' | 'pending' | 'warning' | 'error';
export type StatusIndicatorSize = 'sm' | 'md' | 'lg';
export interface StatusIndicatorProps {
    status: StatusIndicatorStatus;
    size?: StatusIndicatorSize;
    withLabel?: boolean;
    className?: string;
}
export declare const StatusIndicator: React.FC<StatusIndicatorProps>;
export default StatusIndicator;
