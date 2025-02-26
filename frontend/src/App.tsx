import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/AuthComponents/AuthContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Routes>
    </Router>
  </>
);

export default App;
