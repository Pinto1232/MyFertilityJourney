import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Snackbar } from '@mui/material';
import { FaExclamationTriangle } from 'react-icons/fa';
import { ConfirmationDialogContainerProps } from './ConfirmationDialog.types';

const ConfirmationDialogPresentational: React.FC<ConfirmationDialogContainerProps> = ({
  open,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onCancel}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '12px',
            padding: '16px',
            width: '400px',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Title Section */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '20px',
            color: '#d32f2f',
            paddingBottom: '10px',
          }}
        >
          <FaExclamationTriangle style={{ marginRight: '10px', color: '#d32f2f' }} />
          {title}
        </DialogTitle>

        {/* Content Section */}
        <DialogContent>
          <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#555', marginBottom: '10px' }}>
            {message}
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#777' }}>
            This action cannot be undone.
          </Typography>
        </DialogContent>

        {/* Actions Section */}
        <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
          <Button
            onClick={onCancel}
            sx={{
              backgroundColor: '#B0BEC5',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#90A4AE',
              },
              marginRight: '8px',
            }}
          >
            {cancelText}
          </Button>

          <Button
            onClick={handleConfirm}
            sx={{
              backgroundColor: '#d32f2f',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#b71c1c',
              },
            }}
          >
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Data deleted successfully"
        ContentProps={{
          sx: {
            backgroundColor: '#414141',
          },
        }}
      />
    </>
  );
};

export default ConfirmationDialogPresentational;
