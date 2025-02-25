import React from 'react';
import SidebarPresentational from './SidebarPresentational';
import { menuItems } from '../../utils/menuItems'; // Import menuItems from utils

interface SidebarContainerProps {
  isOpen: boolean;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({ isOpen }) => {
  return <SidebarPresentational isOpen={isOpen} menuItems={menuItems} />;
};

export default SidebarContainer;