import React, { useEffect, useState } from 'react';
import type { ApexOptions } from 'apexcharts';

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
  const [ChartComponent, setChartComponent] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadChart = async () => {
      const { default: ReactApexChart } = await import('react-apexcharts');
      setChartComponent(() => ReactApexChart);
      setIsMounted(true);
    };
    loadChart();
  }, []);

  const chartOptions: ApexOptions = {
    ...defaultOptions,
    ...options,
    chart: {
      ...defaultOptions.chart,
      ...options.chart,
      type,
    },
  };

  if (!isMounted || !ChartComponent) {
    return <div style={{ width, height }} className={className} />;
  }

  return (
    <div className={className}>
      <ChartComponent
        type={type}
        series={series}
        options={chartOptions}
        width={width}
        height={height}
      />
    </div>
  );
}; 