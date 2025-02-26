// DashboardContainer.tsx

import React, { useState } from 'react';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';

const DashboardContainer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // NEW: track which menu item is currently selected
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardPresentational
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      // Pass selectedMenuItem down so the presentational knows which content to show
      selectedMenuItem={selectedMenuItem}
      // Provide the entire Sidebar as a prop, but also pass a callback
      SidebarComponent={
        <SidebarContainer
          isOpen={isSidebarOpen}
          selectedMenuItem={selectedMenuItem}
          onSelectMenuItem={setSelectedMenuItem}
        />
      }
      NavbarComponent={<NavbarContainer toggleSidebar={toggleSidebar} />}
    />
  );
};

export default DashboardContainer;
