import { useState, useCallback } from 'react';
import { AlertColor } from '@mui/material/Alert';

interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

interface SnackbarOptions {
  initialState?: SnackbarState;
  defaultSeverity?: AlertColor;
}

const useSnackbar = ({ initialState, defaultSeverity = 'info' }: SnackbarOptions = {}) => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: defaultSeverity,
    ...initialState,
  });

  const showSnackbar = useCallback((message: string, severity: AlertColor = defaultSeverity) => {
    setSnackbar({ open: true, message, severity });
  }, [defaultSeverity]);

  const hideSnackbar = useCallback(() => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  }, []);

  return {
    snackbar,
    showSnackbar,
    hideSnackbar,
  };
};

export default useSnackbar;
