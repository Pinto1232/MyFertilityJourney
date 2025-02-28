import React from 'react';

export interface SidebarPresentationalProps {
  isOpen: boolean;
  menuItems: Array<{ text: string; icon: React.ReactNode }>;
  selectedMenuItem: string;
  onItemClick: (itemText: string) => void;
}
