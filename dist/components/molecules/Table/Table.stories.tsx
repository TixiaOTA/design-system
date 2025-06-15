import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableVariant, TableColumn } from './Table';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icons';
import { ErrorWrapper } from '../ErrorWrapper/ErrorWrapper';

const meta: Meta<typeof Table<User>> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table<User>>;

interface User {
  no: number;
  nama: string;
  email: string;
  nomorTelepon: string;
  jenisKelamin: string;
  kewarganegaraan: string;
  status: string;
  saldo: number;
}

const sampleData: User[] = [
  {
    no: 1,
    nama: 'Steve Jobs',
    email: 'stevejobs@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: 'Laki-laki',
    kewarganegaraan: 'Indonesia',
    status: 'Suspend',
    saldo: 1500000,
  },
  {
    no: 2,
    nama: 'Bill Gates',
    email: 'billgates@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: 'Laki-laki',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
    saldo: 2500000,
  },
  {
    no: 3,
    nama: 'Kucing Persia',
    email: 'kucingpersia@gmail.com',
    nomorTelepon: '081234567890',
    jenisKelamin: 'Perempuan',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
    saldo: 3500000,
  },
];

const schema: TableColumn<User>[] = [
  { 
    name: 'nama',
    label: 'Nama', 
    accessorKey: 'nama',
    type: 'string',
    sortable: true,
    align: 'left'
  },
  { 
    name: 'email',
    label: 'Email', 
    accessorKey: 'email',
    type: 'string',
    sortable: true,
    align: 'left'
  },
  { 
    name: 'nomorTelepon',
    label: 'Nomor Telepon', 
    accessorKey: 'nomorTelepon',
    type: 'string',
    align: 'left'
  },
  { 
    name: 'jenisKelamin',
    label: 'Jenis Kelamin', 
    accessorKey: 'jenisKelamin',
    type: 'string',
    align: 'center'
  },
  { 
    name: 'kewarganegaraan',
    label: 'Kewarganegaraan', 
    accessorKey: 'kewarganegaraan',
    type: 'string',
    align: 'center'
  },
  {
    name: 'status',
    label: 'Status',
    accessorKey: 'status',
    type: 'string',
    sortable: true,
    align: 'center',
    render: (value: string) => (
      <span
        className={value === 'Suspend' ? 'text-red' : 'text-blue'}
      >
        {value}
      </span>
    ),
  },
  {
    name: 'saldo',
    label: 'Saldo',
    accessorKey: 'saldo',
    type: 'number',
    sortable: true,
    align: 'right',
    render: (value: number) => (
      <span>
        Rp {value.toLocaleString('id-ID')}
      </span>
    ),
  },
];

export const Default: Story = {
  args: {
    schema,
    data: sampleData,
    showIndex: true,
  },
};

export const WithPagination: Story = {
  args: {
    schema,
    data: sampleData,
    showIndex: true,
    showPagination: true,
    meta: {
      current_page: 1,
      total_page: 5,
      total_data: 50,
      limit_number: 10
    },
    onPageChange: (page) => console.log('Page changed:', page),
    onPageSizeChange: (size) => console.log('Page size changed:', size),
  },
};

export const WithSorting: Story = {
  args: {
    schema,
    data: sampleData,
    showIndex: true,
    onSortChange: (sort, sortBy) => console.log('Sort changed:', sort, sortBy),
  },
};

export const Loading: Story = {
  args: {
    schema,
    data: [],
    isLoading: true,
    showIndex: true,
  },
};

export const Empty: Story = {
  args: {
    schema,
    data: [],
    showIndex: true,
    emptyState: (
      <ErrorWrapper variant="data-not-found" />
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
        align: 'center',
        render: (_, row: User) => (
          <div className="flex gap-2 justify-center">
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
    showIndex: true,
    onRowClick: (row: User, index: number) => {
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
            <Table<User>
              schema={schema}
              data={sampleData}
              variant={variant}
              showIndex
              showPagination
              meta={{
                current_page: 1,
                total_page: 2,
                total_data: 10,
                limit_number: 5
              }}
              onPageChange={(page) => console.log('Page changed:', page)}
              onPageSizeChange={(size) => console.log('Page size changed:', size)}
              onSortChange={(sort, sortBy) => console.log('Sort changed:', sort, sortBy)}
              onRowClick={(row, index) => console.log('Row clicked:', row.nama, 'at index:', index)}
            />
          </div>
        ))}
      </div>
    );
  },
};
