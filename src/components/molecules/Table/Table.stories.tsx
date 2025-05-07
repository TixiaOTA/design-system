import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableVariant, TableColumn } from './Table';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icons';

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData: Record<string, any>[] = [
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

const schema: TableColumn<Record<string, any>>[] = [
  { 
    name: 'nama',
    label: 'Nama', 
    accessorKey: 'nama',
    type: 'string',
    sortable: true
  },
  { 
    name: 'email',
    label: 'Email', 
    accessorKey: 'email',
    type: 'string',
    sortable: true
  },
  { 
    name: 'nomorTelepon',
    label: 'Nomor Telepon', 
    accessorKey: 'nomorTelepon',
    type: 'string'
  },
  { 
    name: 'jenisKelamin',
    label: 'Jenis Kelamin', 
    accessorKey: 'jenisKelamin',
    type: 'string'
  },
  { 
    name: 'kewarganegaraan',
    label: 'Kewarganegaraan', 
    accessorKey: 'kewarganegaraan',
    type: 'string'
  },
  {
    name: 'status',
    label: 'Status',
    accessorKey: 'status',
    type: 'string',
    sortable: true,
    render: (value: string, row: Record<string, any>) => (
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
    schema,
    data: sampleData,
  },
};

export const WithPagination: Story = {
  args: {
    schema,
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
    schema,
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
    schema,
    data: sampleData,
    onSortChange: (sort, sortBy) => console.log('Sort changed:', sort, sortBy),
  },
};

export const Loading: Story = {
  args: {
    schema,
    data: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    schema,
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
    schema: [
      ...schema,
      {
        name: 'actions',
        label: 'Aksi',
        accessorKey: 'no',
        type: 'other',
        render: (_, row: Record<string, any>) => (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                alert('Edit clicked for: ' + row.nama);
              }}
            >
              <Icon icon="mdi:pencil" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                alert('Delete clicked for: ' + row.nama);
              }}
            >
              <Icon icon="mdi:delete" />
            </Button>
          </div>
        ),
      },
    ],
    data: sampleData,
    onRowClick: (row: Record<string, any>, index: number) => {
      alert('Row clicked: ' + row.nama + ' at index: ' + index);
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
            <Table<Record<string, any>>
              schema={schema}
              data={sampleData}
              variant={variant}
              showPagination
              pageSize={5}
              pageCount={2}
              currentPage={1}
              totalData={10}
              onPageChange={(page) => alert('Page changed:' + page)}
              onPageSizeChange={(size) => alert('Page size changed:' + size)}
              onSortChange={(sort, sortBy) => alert('Sort changed:' + sort + ' ' + sortBy)}
              onRowClick={(row, index) => alert('Row clicked:' + row + ' at index:' + index)}
            />
          </div>
        ))}
      </div>
    );
  },
};
