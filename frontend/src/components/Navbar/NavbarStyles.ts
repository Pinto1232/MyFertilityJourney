import { AppBar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  height: '70px',
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  position: 'relative',
  display: 'flex',
}));
