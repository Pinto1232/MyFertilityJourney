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
  
  interface SidebarPresentationalProps {
    isOpen: boolean;
    menuItems: Array<{ text: string; icon: React.ReactNode }>;
  }
  
  const SidebarPresentational: React.FC<SidebarPresentationalProps> = ({
    isOpen,
    menuItems,
  }) => {
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const handleListItemClick = (index: number) => {
      setSelectedIndex(index);
    };

    return (
      <StyledDrawer variant="permanent" open={isOpen}>
        <Toolbar />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1, mt: -8, mb: 2, ml: -5 }}>
          <img src="/assets/logo.jpg" alt="Logo" style={{ width: isOpen ? '55%' : '50%' }} /> 
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              key={item.text} 
              onClick={() => handleListItemClick(index)}
              sx={{
                backgroundColor: selectedIndex === index ? '#67ADB914' : 'inherit',
                color: selectedIndex === index ? '#578388' : '#414141',
                cursor: 'pointer',
                margin: '8px 8px',
                width: '220px',
                height: '48px',
                textAlign:   'start',
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
              <ListItemIcon sx={{ minWidth: '40px', color: selectedIndex === index ? '#578388' : '#67ADB9' }}>
                {item.icon} 
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  opacity: isOpen ? 1 : 0,
                  fontWeight: 600, 
                  fontSize: '14px', 
                  lineHeight: '22px', 
                  letterSpacing: '0px', // Letter spacing 0px when not selected
                  color: selectedIndex === index ? '#578388' : '#414141' // Color #414141 when not selected
                }} 
              />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    );
  };
  
  export default SidebarPresentational;