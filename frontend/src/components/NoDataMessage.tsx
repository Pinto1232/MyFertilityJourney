import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NoDataMessage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h6">No data available</Typography>
    </Box>
  );
};

export default NoDataMessage;
