import React, { useState, useEffect } from 'react';
import PracticeTablePresentational from './PracticeTablePresentational';
import EditPracticeModal from './EditPracticeModal';
import { PracticeData, PracticeApiData } from './PracticeTable.types';
import { fetchPractices } from '../../../api/services/api';

const PracticeTableContainer: React.FC = () => {
  const [rows, setRows] = useState<PracticeData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Ensure initial value is one of the available options
  const [editRow, setEditRow] = useState<PracticeData | null>(null);

  useEffect(() => {
    const getPractices = async () => {
      try {
        const practices: PracticeApiData[] = await fetchPractices();
        console.log('Fetched Practices In practice table container:', practices);
        const mappedPractices: PracticeData[] = practices.map((practice) => ({
          name: practice.name,
          telNo: practice.phoneNumber,
          email: practice.email,
          dateCreated: new Date(practice.createdAt).toLocaleDateString(),
          status: practice.status === 'active' ? 'Active' : 'Disabled',
        }));
        setRows(mappedPractices);
      } catch (error) {
        console.error('Error fetching practices:', error);
      }
    };

    getPractices();
  }, []);

  // Handlers for table actions
  const handleEdit = (row: PracticeData) => {
    setEditRow(row);
  };

  const handleSaveEdit = (updatedPractice: PracticeData) => {
    setRows((prev) => prev.map((r) => (r === editRow ? updatedPractice : r)));
    setEditRow(null);
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

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <>
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
      <EditPracticeModal
        open={Boolean(editRow)}
        practice={editRow}
        onSave={handleSaveEdit}
        onClose={() => setEditRow(null)}
      />
    </>
  );
};

export default PracticeTableContainer;