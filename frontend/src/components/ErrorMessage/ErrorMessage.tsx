import React from 'react';
import { Box, Typography } from '@mui/material';
import { ErrorMessageProps } from './ErrorMessage.types';
import { errorMessageStyles } from './ErrorMessage.styles';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <Box sx={errorMessageStyles.container}>
      <ErrorIcon sx={errorMessageStyles.icon} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        {message}
      </Typography>
      <button style={errorMessageStyles.button} onClick={onClose}>Close</button>
    </Box>
  );
};

export default ErrorMessage;
