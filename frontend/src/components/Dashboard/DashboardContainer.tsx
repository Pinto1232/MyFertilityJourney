import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';
import { fetchMetrics, fetchLogs, fetchPractices, fetchUserProfile } from '../../api/services/api'; 
const DashboardContainer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const location = useLocation();
  const user = location.state?.user;

  console.log('DashboardContainer user:', user);

  useEffect(() => {
    const getAllData = async () => {
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
      }
    };

    getAllData();
  }, []);

  return (
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
  );
};

export default DashboardContainer;
