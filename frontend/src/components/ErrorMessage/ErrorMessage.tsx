import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { ErrorMessageProps } from './ErrorMessage.types';
import { errorMessageStyles } from './ErrorMessage.styles';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <Box sx={errorMessageStyles.overlay}>
      {/* Card Container */}
      <Box sx={errorMessageStyles.card}>
        {/* Red Header */}
        <Box sx={errorMessageStyles.header}>
          <ErrorIcon sx={errorMessageStyles.icon} />
          <Typography component="h2" sx={errorMessageStyles.headerText}>
            Warning!
          </Typography>
        </Box>

        {/* White Body */}
        <Box sx={errorMessageStyles.body}>
          <Typography sx={errorMessageStyles.message}>
            {message || 'An error has occurred while creating an error report.'}
          </Typography>

          {/* Close Button */}
          <button style={errorMessageStyles.button} onClick={onClose}>
            <CloseIcon />
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ErrorMessage);
