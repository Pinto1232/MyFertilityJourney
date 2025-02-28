import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const NotificationBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: '286px',
  top: '100px',
  width: '300px',
  maxHeight: '55vh',
  overflow: 'visible',
  backgroundColor: '#fff',
  zIndex: theme.zIndex.modal + 1,
  boxShadow: theme.shadows[6],
  borderRadius: '20px',
  '& .MuiListItem-root': {
    padding: theme.spacing(1.5, 2),
    alignItems: 'flex-start',
  },
}));
