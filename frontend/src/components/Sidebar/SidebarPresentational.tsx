import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { SidebarPresentationalProps } from './SidebarTypes';
import { StyledDrawer, listItemStyles, listItemIconStyles, listItemTextStyles, boxStyles, imgStyles } from './SidebarStyles';
import { useTheme } from '@mui/material/styles';

const SidebarPresentational: React.FC<SidebarPresentationalProps> = ({
  isOpen,
  menuItems,
  selectedMenuItem,
  onItemClick
}) => {
  const theme = useTheme();
  return (
    <StyledDrawer variant="permanent" open={isOpen} sx={{ backgroundColor: theme.palette.background.default }}>
      <Toolbar />
      <Box sx={boxStyles(isOpen)}>
        <img src="/assets/logo.jpg" alt="Logo" style={imgStyles(isOpen)} loading="lazy" />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => onItemClick(item.text)}
            sx={listItemStyles(selectedMenuItem, item.text)}
          >
            <ListItemIcon sx={listItemIconStyles(selectedMenuItem, item.text)}>
              <Box sx={{ fontSize: 27 }}>{item.icon}</Box>
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={listItemTextStyles(isOpen, selectedMenuItem, item.text)}
            />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default React.memo(SidebarPresentational);
