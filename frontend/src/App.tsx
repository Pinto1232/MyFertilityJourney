import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/AuthComponents/AuthContainer';
import Dashboard from '../Dashboard/Dashboard';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AuthContainer />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
