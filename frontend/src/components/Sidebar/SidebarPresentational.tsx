import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Toolbar, Box, Typography } from '@mui/material';
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
        {theme.palette.mode === 'dark' ? (
          <Typography sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.2rem', ml: 7 }}>
            My Fertility Journey
          </Typography>
        ) : (
          <img src="/assets/logo.jpg" alt="Logo" style={imgStyles(isOpen)} loading="lazy" />
        )}
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
              sx={{
                ...listItemTextStyles(isOpen, selectedMenuItem, item.text),
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000'
              }}
            />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default React.memo(SidebarPresentational);
