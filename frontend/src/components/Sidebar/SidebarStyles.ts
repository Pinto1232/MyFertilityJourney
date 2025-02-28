import { Drawer, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? 240 : theme.spacing(7),
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: open ? 248 : theme.spacing(7),
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: open
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    }),
  },
}));

export const listItemStyles = (selectedMenuItem: string, itemText: string) => ({
  backgroundColor: selectedMenuItem === itemText ? '#67ADB914' : 'inherit',
  color: selectedMenuItem === itemText ? '#578388' : '#414141',
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
});

export const listItemIconStyles = (selectedMenuItem: string, itemText: string) => ({
  minWidth: '40px',
  color: selectedMenuItem === itemText ? '#578388' : '#67ADB9'
});

export const listItemTextStyles = (isOpen: boolean, selectedMenuItem: string, itemText: string) => ({
  fontWeight: selectedMenuItem === itemText ? 700 : 600,
  font: selectedMenuItem === itemText ? 'bold' : 'boldeer',
  opacity: isOpen ? 1 : 0,
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '0px',
  color: selectedMenuItem === itemText ? '#578388' : '#414141',
});

export const boxStyles = (isOpen: boolean) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '150px',
  py: isOpen ? 1 : 0,
  mt: isOpen ? -8 : 0,
  mb: isOpen ? 2 : 0,
  ml: isOpen ? 1 : 0
});

export const imgStyles = (isOpen: boolean) => ({
  width: isOpen ? '190px' : '50%',
  margin: isOpen ? 10 : 8,
  maxWidth: '100%',
  height: 'auto'
});
