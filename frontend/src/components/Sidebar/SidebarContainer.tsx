import React from 'react';
import SidebarPresentational from './SidebarPresentational';
import menuItems from '../../utils/menuItems';


interface SidebarContainerProps {
  isOpen: boolean;
  selectedMenuItem: string;
  onSelectMenuItem: (menuItem: string) => void;
}

const SidebarContainer: React.FC<SidebarContainerProps> = ({
  isOpen,
  selectedMenuItem,
  onSelectMenuItem
}) => {
  return (
    <SidebarPresentational
      isOpen={isOpen}
      menuItems={menuItems}
      selectedMenuItem={selectedMenuItem}
      onItemClick={(itemText) => onSelectMenuItem(itemText)}
    />
  );
};

export default SidebarContainer;
