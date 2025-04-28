import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

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
    nama: 'rian napit',
    email: 'riannapit1@gmail.com',
    nomorTelepon: '6281362757463',
    jenisKelamin: 'Laki-laki',
    kewarganegaraan: 'Indonesia',
    status: 'Suspend',
  },
  {
    no: 2,
    nama: 'hfgfhgf',
    email: '',
    nomorTelepon: '62898878678578',
    jenisKelamin: '-',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
  },
  {
    no: 3,
    nama: 'Sansan',
    email: '',
    nomorTelepon: '',
    jenisKelamin: '-',
    kewarganegaraan: 'Indonesia',
    status: 'Aktif',
  },
];

const columns = [
  { header: 'No.', accessor: 'no' as const },
  { header: 'Nama', accessor: 'nama' as const },
  { header: 'Email', accessor: 'email' as const },
  { header: 'Nomor Telepon', accessor: 'nomorTelepon' as const },
  { header: 'Jenis Kelamin', accessor: 'jenisKelamin' as const },
  { header: 'Kewarganegaraan', accessor: 'kewarganegaraan' as const },
  {
    header: 'Status',
    accessor: 'status' as const,
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

export const Loading: Story = {
  args: {
    columns,
    data: [],
    isLoading: true,
    loadingState: <div className="p-8 text-center">Loading...</div>,
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
