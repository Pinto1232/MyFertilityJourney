// src/components/Navbar/NotificationDropdown.tsx
import React, { useState } from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Typography,
  Badge,
  Divider,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { HiOutlineTrash } from 'react-icons/hi';
import { CiClock2 } from 'react-icons/ci';
import { useNotifications, Notification } from '../../context/NotificationContext';

const NotificationBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  right: '200px',
  top: '108px',
  width: '300px',
  maxHeight: '55vh',
  overflow: 'visible',
  backgroundColor: '#fff',
  zIndex: theme.zIndex.modal + 1,
  boxShadow: theme.shadows[6],
  borderRadius: '20px',
  '& .MuiListItem-root': {
    padding: theme.spacing(1.5, 2),
    alignItems: 'flex-start',
  },
}));

interface NotificationDropdownProps {
  onClose: () => void;
  onClearAll: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClearAll }) => {
  const { notifications, deleteNotification } = useNotifications();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

  const handleDeleteClick = (notification: Notification) => {
    setSelectedNotification(notification);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedNotification(null);
  };

  const handleConfirmDelete = () => {
    if (selectedNotification) {
      deleteNotification(selectedNotification.id);
    }
    handleCloseDialog();
  };

  return (
    <>
      <Paper>
        <NotificationBox>
          <Box
            p={2}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgcolor="background.paper"
            sx={{ position: 'relative', borderRadius: '60px' }}
          >
            <CloseIcon
              sx={(theme) => ({
                cursor: 'pointer',
                position: 'absolute',
                top: -2,
                right: 30,
                color: '#ffff',
                zIndex: theme.zIndex.modal + 2,
                transform: 'translate(0%, -30%)',
                rotate: '45deg',
                backgroundColor: '#ffffff',
                width: '20px',
                height: '20px',
                padding: '4px',
                '&:hover': {
                  backgroundColor: theme.palette.error.dark,
                  transform: 'translate(40%, -40%) scale(1.1)'
                }
              })}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Box display="flex" alignItems="center" mb={1}>
                <Typography variant="h6" fontWeight={600} sx={{ mr: 2 }}>
                  Notifications
                </Typography>
                <Badge
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      right: -3,
                      top: 8,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: '0.875rem' }}
              >
                You have {notifications.filter(n => n.unread).length} unread message
                {notifications.filter(n => n.unread).length !== 1 && 's'}
              </Typography>
            </Box>
          </Box>
          <Divider />
          {/* Notifications List */}
          <List sx={{ py: 0 }}>
            {notifications.map((notification, index) => (
              <React.Fragment key={notification.id}>
                <ListItem
                  sx={{
                    bgcolor: notification.unread ? '#ffff' : 'inherit',
                    height: '80px',
                    '&:hover': { bgcolor: 'action.hover' }
                  }}
                >
                  <ListItemAvatar sx={{ minWidth: '40px', mt: '4px' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 32,
                        height: 32,
                        fontSize: '14px',
                      }}
                    >
                      {notification.user[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight={600} color="#414141" fontSize={14}>
                        {notification.title}
                      </Typography>
                    }
                    secondary={
                      <>
                        <span style={{ display: 'block', fontSize: '14px', color: '#747474', fontWeight: 400 }}>
                          {notification.user}
                        </span>
                        <span style={{ display: 'block', fontSize: '12px', color: '#BCBCBC', marginTop: '4px', alignItems: 'center' }}>
                          <CiClock2 style={{ verticalAlign: 'middle', marginRight: 4 }} /> {notification.date}
                        </span>
                      </>
                    }
                    sx={{ margin: 0 }}
                  />
                  {notification.unread && (
                    <HiOutlineTrash
                      style={{
                        width: '16.67px',
                        height: '16.67px',
                        color: '#BCBCBC',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        marginLeft: 1,
                        marginTop: '4px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleDeleteClick(notification)}
                    />
                  )}
                </ListItem>
                {index < notifications.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          {/* Clear All Button */}
          <Divider />
          <Box p={1.5} display="flex" justifyContent="center">
            <Button
              variant="text"
              sx={{
                textTransform: 'none',
                color: '#67ADB9',
                fontWeight: 600,
                fontSize: 14,
                lineHeight: '22px',
                '&:hover': { bgcolor: 'transparent' }
              }}
              onClick={onClearAll}
            >
              Clear All
            </Button>
          </Box>
        </NotificationBox>
      </Paper>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            padding: '16px',
            backgroundColor: '#f5f5f5',
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: '1.25rem' }}>Delete Notification</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '1rem', color: '#333' }}>
            Are you sure you want to delete this notification?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: '#67ADB9', fontWeight: 600 }}>
            No
          </Button>
          <Button onClick={handleConfirmDelete} sx={{ color: '#d32f2f', fontWeight: 600 }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NotificationDropdown;
