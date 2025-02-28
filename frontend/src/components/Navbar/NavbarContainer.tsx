import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NavbarPresentational from './NavbarPresentational';
import NotificationDropdown from '../ui/Notification/NotificationDropdown';
import { useNotifications } from '../../context/NotificationContext';
import { useNavigate } from 'react-router-dom';
import { NavbarContainerProps } from './NavbarInterfaces';

const NavbarContainer: React.FC<NavbarContainerProps> = ({ toggleSidebar, userData }) => {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const { unreadCount, clearNotifications } = useNotifications();
  const navigate = useNavigate();

  const handleClearAll = () => {
    clearNotifications();
    setShowNotifications(false);
  };

  const user = userData
    ? {
        name: userData.name || userData.email.split('@')[0],
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
          notificationsCount={unreadCount}
          onNotificationClick={() => setShowNotifications(!showNotifications)}
          onLogout={() => {
            navigate('/');
          }}
        />
        {showNotifications && (
          <NotificationDropdown
            onClearAll={handleClearAll}
            onClose={() => setShowNotifications(false)}
          />
        )}
      </div>
    </ClickAwayListener>
  );
};

export default NavbarContainer;
