import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ErrorMessageProps } from './ErrorMessage.types';
import { errorMessageStyles } from './ErrorMessage.styles';
import ErrorIcon from '@mui/icons-material/Error';
import { useTheme } from '@mui/material/styles';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  const theme = useTheme();
  return (
    <Box sx={{ ...errorMessageStyles.container, backgroundColor: theme.palette.background.default }}>
      <ErrorIcon sx={errorMessageStyles.icon} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        {message}
      </Typography>
      <button style={errorMessageStyles.button} onClick={onClose}>Close</button>
    </Box>
  );
};

export default memo(ErrorMessage);
