import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import theme from './theme';
import { NotificationProvider } from './context/NotificationContext';
import AuthContainer from './components/AuthComponents/AuthContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default App;
