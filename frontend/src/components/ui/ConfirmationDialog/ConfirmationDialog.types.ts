import React from 'react';

export interface ConfirmationDialogContainerProps {
    open: boolean;
    title?: string;
    message: string | React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}