import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const CardContainer = styled(Paper)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0px 4px 24px rgba(145, 158, 171, 0.2)',
  padding: theme.spacing(2, 4),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}));

export const LeftSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

export const RightSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '8px',
}));

export const IconCircle = styled(Box)(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#E4F7F9',
  color: '#67ADB9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',   
}));

export const SecondIconCircle = styled(Box)(() => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#54d62c99',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

