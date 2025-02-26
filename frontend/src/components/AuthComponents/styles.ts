import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const PageContainer = styled(Box)({
  display: 'flex',
  height: '70vh',
  marginTop: '50px',	
  margin: '130px'
});

export const LeftPanel = styled(Box)({
  width: '50%',
  backgroundColor: '#001f54',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

export const RightPanel = styled(Box)({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)', 
});

export const AuthLayout = styled(Box)({
  width: '400px',
  padding: '32px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  borderRadius: '8px',
});

export const Header = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '16px',
});

export const SubmitButton = styled(Button)({
  fontSize: '14px',
  fontWeight: 600,
  height: '40px',
  textTransform: 'none',
  backgroundColor: '#001f54',
  '&:hover': {
    backgroundColor: '#003d99',
  },
});

export const SwitchAuthButton = styled(Button)({
  fontSize: '12px',
  color: '#001f54',
  textTransform: 'none',
  fontWeight: 600,
  padding: '8px',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
});

export const AuthText = styled(Typography)({
  fontSize: '14px',
  lineHeight: '20px',
  color: '#666666',
  marginBottom: '8px',
});

export const FormContainer = styled(Box)({
  margin: '24px 0',
  '& .MuiTextField-root': {
    marginBottom: '16px',
    '& label': {
      fontSize: '14px',
      color: '#666666',
    },
    '& .MuiInputBase-input': {
      fontSize: '14px',
      height: '40px',
      padding: '8px 12px',
    },
  },
});

export const ReportSection = styled(Box)({
  margin: '32px 0 24px',
  '& h6': {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    color: '#333333',
    marginBottom: '4px',
  },
  '& .profit-text': {
    fontSize: '14px',
    color: '#00A86B',
    marginBottom: '12px',
  },
});

export const MonthIndicator = styled(Typography)({
  fontFamily: 'monospace',
  fontSize: '12px',
  letterSpacing: '1px',
  color: '#666666',
});

export const StyledImage = styled('img')({
  width: '300px',
  height: '300px',
  marginTop: '16px',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

export const DescriptionText = styled(Typography)({
  fontSize: '14px',
  lineHeight: '20px',
  color: '#ffffff',
  textAlign: 'center',
  marginTop: '18px',
  maxWidth: '500px',	
});
