import React from 'react';
import { ApexOptions } from 'apexcharts';
export type ChartType = 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'scatter' | 'bubble' | 'radar' | 'heatmap';
export interface ChartProps {
    /** Type of the chart */
    type: ChartType;
    /** Chart series data */
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    /** Chart width in pixels or percentage */
    width?: string | number;
    /** Chart height in pixels or percentage */
    height?: string | number;
    /** Custom chart options */
    options?: ApexOptions;
    /** Additional CSS class names */
    className?: string;
}
export declare const Chart: React.FC<ChartProps>;
