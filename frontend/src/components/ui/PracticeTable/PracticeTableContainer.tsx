import React, { useState } from 'react';
import PracticeTablePresentational from './PracticeTablePresentational';
import { PracticeData } from './PracticeTable.types';

const dummyRows: PracticeData[] = [
  {
    name: 'Cape Fertility Clinic 1',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Active',
  },
  {
    name: 'Cape Fertility Clinic 2',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Active',
  },
  {
    name: 'Cape Fertility Clinic 3',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 4',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 5',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 6',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 6',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 6',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
  {
    name: 'Cape Fertility Clinic 6',
    telNo: '+27 794 3956',
    email: 'info@capefertility.co.za',
    dateCreated: '04/10/2021',
    status: 'Disabled',
  },
];

const PracticeTableContainer: React.FC = () => {
  const [rows, setRows] = useState<PracticeData[]>(dummyRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handlers for table actions
  const handleEdit = (row: PracticeData) => {
    console.log('Edit clicked for:', row.name);
  };

  const handleDelete = (row: PracticeData) => {
    console.log('Delete clicked for:', row.name);
    setRows((prev) => prev.filter((r) => r !== row));
  };

  const handleSeeAll = () => {
    console.log('See All clicked!');
  };

  const handleToggleStatus = (row: PracticeData) => {
    setRows((prev) =>
      prev.map((r) =>
        r === row
          ? { ...r, status: r.status === 'Active' ? 'Disabled' : 'Active' }
          : r
      )
    );
  };

  // Pagination handlers
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  // Compute current rows
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <PracticeTablePresentational
      title="Newest Practises"
      rows={currentRows}
      totalCount={rows.length}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSeeAll={handleSeeAll}
      onToggleStatus={handleToggleStatus}
    />
  );
};

export default PracticeTableContainer;