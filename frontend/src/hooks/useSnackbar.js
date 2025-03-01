import { useState, useCallback } from 'react';

const useSnackbar = ({ initialState, defaultSeverity = 'success' } = {}) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: defaultSeverity,
    ...initialState,
  });

  const showSnackbar = useCallback((message, severity = defaultSeverity) => {
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
