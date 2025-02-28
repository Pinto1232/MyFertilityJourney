import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { NotificationProvider } from './contexts/NotificationContext';
import AuthContainer from './components/AuthComponents/AuthContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import GlobalStyles from './styles/GlobalStyles';
import { useGlobalState } from './hooks/useGlobalState';
import Spinner from './components/Spinner/Spinner';
import { Snackbar, Alert } from '@mui/material';
import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper';

const App: React.FC = () => {
  const { loading, error, setError } = useGlobalState();

  return (
    <ThemeProviderWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NotificationProvider>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<AuthContainer />} />
              <Route path="/dashboard" element={<DashboardContainer />} />
            </Routes>
          </Router>
        </NotificationProvider>
      </LocalizationProvider>
      {loading && <Spinner />}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setError(null)} severity="error" sx={{ minWidth: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </ThemeProviderWrapper>
  );
};

export default App;
