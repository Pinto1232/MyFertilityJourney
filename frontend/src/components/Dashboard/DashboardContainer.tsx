import React, { useState } from 'react';
import DashboardPresentational from './Dashboard';
import SidebarContainer from '../Sidebar/SidebarContainer';
import NavbarContainer from '../Navbar/NavbarContainer';


const DashboardContainer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardPresentational
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      SidebarComponent={<SidebarContainer isOpen={isSidebarOpen} />}
      NavbarComponent={<NavbarContainer toggleSidebar={toggleSidebar} />}
    />
  );
};

export default DashboardContainer;