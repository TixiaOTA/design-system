import React from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions, ApexAxisChartSeries, ApexNonAxisChartSeries } from 'apexcharts';
import { cn } from '@/utils/cn';

export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'scatter'
  | 'bubble'
  | 'radar'
  | 'heatmap';

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

const defaultOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
    theme: 'light',
    x: {
      show: true,
    },
  },
};

export const Chart: React.FC<ChartProps> = ({
  type,
  series,
  width = '100%',
  height = 350,
  options = {},
  className,
}) => {
  const chartOptions: ApexOptions = {
    ...defaultOptions,
    ...options,
    chart: {
      ...defaultOptions.chart,
      ...options.chart,
      type,
    },
  };

  return (
    <div className={cn('w-full', className)}>
      <ReactApexChart
        type={type}
        series={series}
        options={chartOptions}
        width={width}
        height={height}
      />
    </div>
  );
}; 