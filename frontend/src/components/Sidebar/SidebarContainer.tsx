// Sidebar/SidebarContainer.tsx
import React from 'react';
import SidebarPresentational from './SidebarPresentational';

interface SidebarContainerProps {
  isOpen: boolean;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ isOpen }) => {
  // Add any sidebar-specific logic here
  const menuItems = [
    { text: 'Home', icon: '🏠' },
    { text: 'Profile', icon: '👤' },
    { text: 'Settings', icon: '⚙️' },
  ];

  return <SidebarPresentational isOpen={isOpen} menuItems={menuItems} />;
};

export default SidebarContainer;