import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import useApi from '../../api/services/api';
import { useGlobalState } from '../../hooks/useGlobalState';
import Spinner from '../Spinner/Spinner';
import { Snackbar, Alert } from '@mui/material';

const DashboardContainer: React.FC = () => {
  const { fetchMetrics, fetchLogs, fetchPractices, fetchUserProfile } = useApi();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');
  const { loading, setLoading, error, setError } = useGlobalState();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const user = location.state?.user;

  console.log('DashboardContainer user:', user);

  useEffect(() => {
    const getAllData = async () => {
      setLoading(true);
      try {
        const metrics = await fetchMetrics();
        console.log('Metrics:', metrics);

        const logs = await fetchLogs();
        console.log('Logs:', logs);

        const practices = await fetchPractices();
        console.log('Practices:', practices);

        const profile = await fetchUserProfile();
        console.log('User Profile:', profile);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    getAllData();
  }, [fetchMetrics, fetchLogs, fetchPractices, fetchUserProfile, setLoading]);

  return (
    <>
      <DashboardPresentational
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        selectedMenuItem={selectedMenuItem}
        SidebarComponent={
          <SidebarContainer
            isOpen={isSidebarOpen}
            selectedMenuItem={selectedMenuItem}
            onSelectMenuItem={setSelectedMenuItem}
          />
        }
        userData={user}
        NavbarComponent={<NavbarContainer toggleSidebar={toggleSidebar} userData={user} />}
      />
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
    </>
  );
};

export default DashboardContainer;
