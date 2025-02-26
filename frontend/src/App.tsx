import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import AuthContainer from './components/AuthComponents/AuthContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <NotificationProvider>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
    </Router>
  </NotificationProvider>
);

export default App;
