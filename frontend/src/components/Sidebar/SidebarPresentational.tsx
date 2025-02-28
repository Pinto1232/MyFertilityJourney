import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from '@mui/material';
import { SidebarPresentationalProps } from './SidebarTypes';
import { StyledDrawer, listItemStyles, listItemIconStyles, listItemTextStyles, boxStyles, imgStyles } from './SidebarStyles';

const SidebarPresentational: React.FC<SidebarPresentationalProps> = ({
  isOpen,
  menuItems,
  selectedMenuItem,
  onItemClick
}) => {
  return (
    <StyledDrawer variant="permanent" open={isOpen}>
      <Toolbar />
      <Box sx={boxStyles(isOpen)}>
        <img src="/assets/logo.jpg" alt="Logo" style={imgStyles(isOpen)} />
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

export default SidebarPresentational;
