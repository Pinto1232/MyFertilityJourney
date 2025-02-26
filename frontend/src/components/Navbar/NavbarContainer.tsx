import React, { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NavbarPresentational from './NavbarPresentational';
import NotificationDropdown from './NotificationDropdown';
import { useNavigate } from 'react-router-dom';

interface NavbarContainerProps {
  toggleSidebar: () => void;
  userData?: {
    email: string;
    password: string;
    confirmPassword?: string;
  };
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ toggleSidebar, userData }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
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

  const handleLogout = () => {
    navigate('/');
  };

  const handleClearAll = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
    setShowNotifications(false);
  };

  const user = userData
    ? {
        name: userData.email.split('@')[0],
        avatar: '/assets/react.svg',
        email: userData.email,
      }
    : { name: 'John Doe', avatar: '/assets/react.svg', email: 'john.doe@example.com' };

  return (
    <ClickAwayListener onClickAway={() => setShowNotifications(false)}>
      <div>
        <NavbarPresentational
          toggleSidebar={toggleSidebar}
          user={user}
          notificationsCount={notifications.filter(n => n.unread).length}
          onNotificationClick={() => setShowNotifications(!showNotifications)}
          onLogout={handleLogout}
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
