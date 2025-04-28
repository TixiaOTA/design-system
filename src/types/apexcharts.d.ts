declare module 'apexcharts' {
  export interface ApexAxisChartSeries {
    name?: string;
    type?: string;
    color?: string;
    group?: string;
    hidden?: boolean;
    data: any[];
  }

  export interface ApexNonAxisChartSeries {
    name?: string;
    type?: string;
    color?: string;
    data: any[];
  }

  export interface ApexOptions {
    chart?: {
      type?: string;
      height?: number | string;
      width?: number | string;
      toolbar?: {
        show?: boolean;
      };
      zoom?: {
        enabled?: boolean;
      };
    };
    colors?: string[];
    grid?: {
      borderColor?: string;
      strokeDashArray?: number;
      xaxis?: {
        lines?: {
          show?: boolean;
        };
      };
      yaxis?: {
        lines?: {
          show?: boolean;
        };
      };
    };
    stroke?: {
      curve?: string;
      width?: number;
    };
    tooltip?: {
      theme?: string;
      x?: {
        show?: boolean;
      };
    };
  }
} 