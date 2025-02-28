import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Box,
  Typography,
  Switch,
  TablePagination,
} from '@mui/material';
import { RiEditLine } from "react-icons/ri";
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  TableContainerWrapper,
  StyledTableRow,
  ActionsContainer,
} from './PracticeTable.styles';
import { PracticeTablePresentationalProps, PracticeData } from './PracticeTable.types';
import ConfirmationDialogContainer from '../../ui/ConfirmationDialog/ConfirmationDialogContainer';
import { useTheme } from '@mui/material/styles';

const PracticeTablePresentational: React.FC<PracticeTablePresentationalProps> = ({
  title,
  rows,
  onEdit,
  onDelete,
  onToggleStatus,
  totalCount,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const theme = useTheme();
  const [selectedRow, setSelectedRow] = useState<PracticeData | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (row: PracticeData) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedRow) {
      onDelete(selectedRow);
    }
    setSelectedRow(null);
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setSelectedRow(null);
    setDialogOpen(false);
  };

  return (
    <TableContainerWrapper>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
          ml: 1,
          fontSize: 18,
          color: '#000000',
        }}
      >
        {title}
      </Typography>

      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? '#333333' : '#F5F5F5',
              borderRadius: 20,
            }}
          >
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Practise Name</TableCell>
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Tel No</TableCell>
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Email</TableCell>
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Date Created</TableCell>
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const isActive = row.status === 'Active';

            return (
              <StyledTableRow key={index}>
                <TableCell sx={{ color: '#000000' }}>{row.name}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{row.telNo}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{row.email}</TableCell>
                <TableCell sx={{ color: '#000000' }}>{row.dateCreated}</TableCell>

                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Switch
                      checked={isActive}
                      onChange={() => onToggleStatus(row)}
                      color="primary"
                      sx={{
                        '& .MuiSwitch-track': {
                          opacity: 1,
                          backgroundColor: isActive ? '#67ADB9' : '#67ADB9',
                        },
                      }}
                    />
                    <Typography variant="body1" sx={{ color: '#000000' }}>{row.status}</Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <ActionsContainer>
                    <IconButton onClick={() => onEdit(row)}>
                      <RiEditLine color="#67ADB9" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDialog(row)}>
                      <FaRegTrashAlt color="#67ADB9" />
                    </IconButton>
                  </ActionsContainer>
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => onRowsPerPageChange(parseInt(event.target.value, 10))}
        rowsPerPageOptions={[10, 25, 50, 100]} 
      />

      <ConfirmationDialogContainer
        
        open={dialogOpen}
        title="Confirm Deletion"
        message={selectedRow ? (
          <>
            Are you sure you want to delete <span style={{ color: 'red', fontWeight: '600' }}>
              {selectedRow.name}</span>?
          </>
        ) : ''}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseDialog}
      />
    </TableContainerWrapper>
  );
};

export default React.memo(PracticeTablePresentational);
