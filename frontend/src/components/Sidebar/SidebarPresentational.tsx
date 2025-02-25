// Sidebar/SidebarPresentational.tsx
import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    styled,
    Toolbar
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
    return (
      <StyledDrawer variant="permanent" open={isOpen}>
        <Toolbar /> 
        <List>
          {menuItems.map((item) => (
            <ListItem  key={item.text}>
              <ListItemIcon sx={{ minWidth: '40px' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: isOpen ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    );
  };
  
  export default SidebarPresentational;