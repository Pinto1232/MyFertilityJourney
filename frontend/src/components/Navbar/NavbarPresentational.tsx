// src/components/Navbar/NavbarPresentational.tsx
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
  styled,
  Badge,
  Menu,
  MenuItem,
  ListItemText,
  Divider
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ChevronLeftOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  height: '70px',
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  position: 'relative',
  display: 'flex',
}));

interface NavbarPresentationalProps {
  toggleSidebar: () => void;
  user: {
    name: string;
    avatar: string;
    email: string;
  };
  notificationsCount: number;
  onNotificationClick: () => void;
  onLogout: () => void;
}

const NavbarPresentational: React.FC<NavbarPresentationalProps> = ({
  toggleSidebar,
  user,
  notificationsCount,
  onNotificationClick,
  onLogout,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <IconButton edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
            <ChevronLeftOutlined />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton onClick={onNotificationClick}>
              <Badge
                badgeContent={notificationsCount}
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#FF4842'
                  }
                }}
              >
                <NotificationsIcon sx={{ color: '#9D9D9D' }} />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleMenuOpen}
              disableRipple
              sx={{
                p: 0,
                gap: 2,
                '&:hover': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                }
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: '#67ADB914',
                  color: '#578388',
                  width: '40px',
                  height: '40px',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  fontSize: 14,
                  lineHeight: '22px',
                  '&:hover': {
                    backgroundColor: '#67ADB933',
                  }
                }}
                alt={user.name}
              >
                {user.name.split(' ').map((n) => n[0]).join('')}
              </Avatar>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textTransform: 'capitalize',
                  color: '#414141',
                  fontSize: 14,
                  lineHeight: '22px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                  }
                }}
              >
                {user.name}
                <BiChevronDown
                  style={{
                    fontSize: 30,
                    fontWeight: 500,
                    color: '#67ADB9',
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 3.5,
                  minWidth: 220,
                  borderRadius: '8px',
                  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
                  overflow: 'visible',
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Box sx={{ px: 2, py: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{
                    color: '#414141',
                    fontSize: 16,
                    textTransform: 'capitalize',
                  }}
                >
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <MenuItem
                onClick={handleMenuClose}
              >
                <ListItemText
                  sx={{
                    backgroundColor: '#9D9D9D14',
                    padding: '8px 16px',
                    margin: 1,
                    borderRadius: '8px',
                    fontSize: '12px',
                    lineHeight: '22px',
                    color: '#578388',
                    fontWeight: 500,

                  }}
                >Profile
                </ListItemText>
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  onLogout();
                }}
                sx={{
                  fontSize: '12px',
                  lineHeight: '22px',
                  color: '#578388',
                  fontWeight: 500,
                  padding: '8px 16px',
                  margin: 2,
                }}
              >
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavbarPresentational;
