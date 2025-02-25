// NavbarContainer.tsx
import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NavbarPresentational from './NavbarPresentational';
import NotificationDropdown from './NotificationDropdown';

interface NavbarContainerProps {
  toggleSidebar: () => void;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New Registration',
      user: 'Alex Fredricks',
      date: '07 Oct 2022',
      unread: true,
    },
    {
      id: '2',
      title: 'New Constant Added',
      user: 'Blake Robertson',
      date: '07 Oct 2022',
      unread: true,
    },
    {
        id: '3',
        title: 'New Constant Added',
        user: 'Blake Robertson',
        date: '07 Oct 2022',
        unread: true,
      },
  ]);

  const handleClearAll = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
    setShowNotifications(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setShowNotifications(false)}>
      <div>
        <NavbarPresentational
          toggleSidebar={toggleSidebar}
          user={{ name: 'John Doe', avatar: '/assets/react.svg', email: 'john.doe@example.com' }}
          notificationsCount={notifications.filter(n => n.unread).length}
          onNotificationClick={() => setShowNotifications(!showNotifications)}
        />
        
        {showNotifications && (
          <NotificationDropdown
            notifications={notifications}
            onClose={() => setShowNotifications(false)}
            onClearAll={handleClearAll}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};

export default NavbarContainer;