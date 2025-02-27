export interface PracticeData {
  name: string;
  telNo: string;
  email: string;
  dateCreated: string;
  status: 'Active' | 'Disabled';
}

export interface PracticeApiData {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  status: string;
  category: string;
  description: string;
  ownerId: number;
  ownerName: string;
}

export interface PracticeTablePresentationalProps {
  title: string;
  rows: PracticeData[];
  totalCount: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
  onEdit: (row: PracticeData) => void;
  onDelete: (row: PracticeData) => void;
  onSeeAll: () => void;
  onToggleStatus: (row: PracticeData) => void;
}
