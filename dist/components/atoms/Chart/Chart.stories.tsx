import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

const meta = {
  title: 'Atoms/Chart',
  component: Chart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
  args: {
    type: 'line',
    height: 350,
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: 'Revenue',
        data: [20, 35, 40, 45, 55, 65, 85, 95, 110],
      },
    ],
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        title: {
          text: 'Amount',
        },
      },
    },
  },
};

export const Area: Story = {
  args: {
    type: 'area',
    height: 350,
    series: [
      {
        name: 'Views',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: 'Clicks',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
    ],
    options: {
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      },
      fill: {
        opacity: 0.3,
      },
    },
  },
};

export const Bar: Story = {
  args: {
    type: 'bar',
    height: 350,
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
    ],
    options: {
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
    },
  },
};

export const Pie: Story = {
  args: {
    type: 'pie',
    height: 350,
    series: [44, 55, 13, 43, 22],
    options: {
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  },
};

export const Donut: Story = {
  args: {
    type: 'donut',
    height: 350,
    series: [44, 55, 41, 17, 15],
    options: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  },
};

export const Scatter: Story = {
  args: {
    type: 'scatter',
    height: 350,
    series: [
      {
        name: 'Sample A',
        data: [
          [16.4, 5.4],
          [21.7, 2.1],
          [25.4, 3.0],
          [19.0, 2.0],
          [10.9, 1.0],
        ],
      },
      {
        name: 'Sample B',
        data: [
          [6.4, 5.4],
          [11.7, 4.1],
          [15.4, 3.0],
          [9.0, 2.0],
          [10.9, 1.0],
        ],
      },
    ],
    options: {
      xaxis: {
        tickAmount: 10,
      },
      yaxis: {
        tickAmount: 7,
      },
    },
  },
};

export const Radar: Story = {
  args: {
    type: 'radar',
    height: 350,
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    options: {
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    },
  },
}; 