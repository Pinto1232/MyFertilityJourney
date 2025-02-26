import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const DonutItemContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding:  16,
}));

export const DonutCenterText = styled(Typography)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontWeight: 700,
}));
export const DonutLabel = styled(Typography)(() => ({
  marginTop: '8px',
  fontWeight: 500,
  color: '#414141',
}));
