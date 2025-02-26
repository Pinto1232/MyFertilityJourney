// DashboardContainer.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';

const DashboardContainer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Retrieve user from router state
  const location = useLocation();
  const user = location.state?.user;

  // DEBUG: Check if user is truly coming in
  console.log('DashboardContainer user:', user);

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
