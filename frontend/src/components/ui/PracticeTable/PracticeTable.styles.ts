import { styled } from '@mui/material/styles';
import { TableRow, Box } from '@mui/material';

export const TableContainerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0px 4px 24px rgba(145, 158, 171, 0.2)',
  padding: theme.spacing(4),
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#f9f9f9',
  },
}));

export const ActionsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
}));
