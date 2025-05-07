import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableVariant } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface User {
  no: number;
  nama: string;
  email: string;
  nomorTelepon: string;
  jenisKelamin: string;
  kewarganegaraan: string;
  status: string;
}

const sampleData: User[] = [
  {
    no: 1,
    nama: 'steve jobs',
    email: 'stevejobs@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: 'Laki-laki',
    kewarganegaraan: 'Indonesia',
    status: 'Suspend',
  },
  {
    no: 2,
    nama: 'Bill Gates',
    email: 'billgates@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: '-',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
  },
  {
    no: 3,
    nama: 'Kucing Persia',
    email: 'kucingpersia@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: '-',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
  },
];

const columns = [
  { header: 'Nama', accessor: 'nama' as const, sortable: true },
  { header: 'Email', accessor: 'email' as const, sortable: true },
  { header: 'Nomor Telepon', accessor: 'nomorTelepon' as const },
  { header: 'Jenis Kelamin', accessor: 'jenisKelamin' as const },
  { header: 'Kewarganegaraan', accessor: 'kewarganegaraan' as const },
  {
    header: 'Status',
    accessor: 'status' as const,
    sortable: true,
    render: (value: string) => (
      <span
        className={value === 'Suspend' ? 'text-red-500' : 'text-blue-500'}
      >
        {value}
      </span>
    ),
  },
];

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
  },
};

export const WithPagination: Story = {
  args: {
    columns,
    data: sampleData,
    showNumbering: true,
    pageSize: 10,
    pageCount: 5,
    currentPage: 1,
    totalData: 50,
    showPagination: true,
    onPageChange: (page) => console.log('Page changed:', page),
    onPageSizeChange: (size) => console.log('Page size changed:', size),
  },
};

export const WithoutPagination: Story = {
  args: {
    columns,
    data: sampleData,
    showNumbering: true,
    pageSize: 10,
    pageCount: 5,
    currentPage: 1,
    totalData: 50,
    showPagination: false,
  },
};

export const WithSorting: Story = {
  args: {
    columns,
    data: sampleData,
    onSortChange: (sort, sortBy) => console.log('Sort changed:', sort, sortBy),
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyState: (
      <div className="flex items-center justify-center gap-2">
        <span>No data found</span>
        <span role="img" aria-label="sad face">😢</span>
      </div>
    ),
  },
};

export const WithRowClick: Story = {
  args: {
    columns: [
      { header: 'Nama', accessor: 'nama' as const, sortable: true },
      { header: 'Email', accessor: 'email' as const, sortable: true },
      { header: 'Nomor Telepon', accessor: 'nomorTelepon' as const },
      { header: 'Jenis Kelamin', accessor: 'jenisKelamin' as const },
      { header: 'Kewarganegaraan', accessor: 'kewarganegaraan' as const },
      {
        header: 'Status',
        accessor: 'status' as const,
        sortable: true,
        render: (value: string) => (
          <span
            className={value === 'Suspend' ? 'text-red-500' : 'text-blue-500'}
          >
            {value}
          </span>
        ),
      },
      {
        header: 'Actions',
        accessor: 'no' as const,
        render: (_, row) => (
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                alert('Edit clicked for:' + row);
              }}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                alert('Delete clicked for:' + row);
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    data: sampleData,
    onRowClick: (row, index) => {
      alert('Row clicked:' + row + 'at index:' + index);
    },
  },
};

export const WithVariants: Story = {
  render: () => {
    const variants: TableVariant[] = ['primary', 'secondary', 'warning', 'danger', 'ghost', 'success'];
    
    return (
      <div className="space-y-8">
        {variants.map((variant) => (
          <div key={variant} className="space-y-2">
            <h3 className="text-lg font-semibold capitalize">{variant} Variant</h3>
            <Table
              columns={columns}
              data={sampleData}
              variant={variant}
              showPagination
              pageSize={5}
              pageCount={2}
              currentPage={1}
              totalData={10}
            />
          </div>
        ))}
      </div>
    );
  },
};
