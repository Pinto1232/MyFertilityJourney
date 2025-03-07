import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import useApi from '../../api/services/api';
import { useGlobalStateContext } from '../../hooks/useGlobalStateContext';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const DashboardContainer: React.FC = () => {
  const { fetchMetrics, fetchLogs, fetchPractices, fetchUserProfile } = useApi();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');
  const { loading, setLoading, error, setError } = useGlobalStateContext();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const user = location.state?.user;

  console.log('DashboardContainer user:', user);

  const getAllData = useCallback(async () => {
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
  }, [fetchMetrics, fetchLogs, fetchPractices, fetchUserProfile, setLoading]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

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
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
    </>
  );
};

export default DashboardContainer;
