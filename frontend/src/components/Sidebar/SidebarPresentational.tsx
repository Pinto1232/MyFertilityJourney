// SidebarPresentational.tsx

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Box
} from '@mui/material';

interface SidebarPresentationalProps {
  isOpen: boolean;
  menuItems: Array<{ text: string; icon: React.ReactNode }>;
  selectedMenuItem: string;
  onItemClick: (itemText: string) => void;
}

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? 240 : theme.spacing(7),
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: open ? 240 : theme.spacing(7),
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: open
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    }),
  },
}));

const SidebarPresentational: React.FC<SidebarPresentationalProps> = ({
  isOpen,
  menuItems,
  selectedMenuItem,
  onItemClick
}) => {
  return (
    <StyledDrawer variant="permanent" open={isOpen}>
      <Toolbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: isOpen ? 1 : 0,
          mt: isOpen ? -8 : 0,
          mb: isOpen ? 2 : 0,
          ml: isOpen ? -10 : 0
        }}
      >
        <img
          src="/assets/logo.jpg"
          alt="Logo"
          style={{
            width: isOpen ? '45%' : '50%',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => onItemClick(item.text)}
            sx={{
              backgroundColor:
                selectedMenuItem === item.text ? '#67ADB914' : 'inherit',
              color: selectedMenuItem === item.text ? '#578388' : '#414141',
              cursor: 'pointer',
              margin: '8px 8px',
              width: '220px',
              height: '48px',
              textAlign: 'start',
              borderRadius: '8px',
              paddingRight: '12px',
              paddingLeft: '10px',
              gap: '0px',
              '&:hover': {
                backgroundColor: '#67ADB914',
                color: '#578388'
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: '40px',
                color:
                  selectedMenuItem === item.text ? '#578388' : '#67ADB9'
              }}
            >
              <Box sx={{ fontSize: 21 }}>{item.icon}</Box>
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: isOpen ? 1 : 0,
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '22px',
                letterSpacing: '0px',
                color:
                  selectedMenuItem === item.text ? '#578388' : '#414141'
              }}
            />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SidebarPresentational;
