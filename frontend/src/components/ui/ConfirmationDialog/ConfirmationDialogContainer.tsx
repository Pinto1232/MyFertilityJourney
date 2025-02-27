import React from 'react';
import ConfirmationDialogPresentational from './ConfirmationDialogPresentational';
import { ConfirmationDialogContainerProps } from './ConfirmationDialog.types';

const ConfirmationDialogContainer: React.FC<ConfirmationDialogContainerProps> = ({
  open,
  title = 'Confirm Action',
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  return (
    <ConfirmationDialogPresentational
      open={open}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default ConfirmationDialogContainer;
