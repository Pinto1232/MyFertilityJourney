import { Box, Typography, Button, Switch, IconButton } from '@mui/material';
import React from 'react';
import { ManagePracticesPresentationalProps } from './ManagePracticesTypes';
import { styles } from './ManagePracticesStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@mui/material/styles';

const ManagePracticesPresentational: React.FC<ManagePracticesPresentationalProps> = ({
  practices,
  onAddPractice,
  onDeletePractice,
  onTogglePractice,
  onEditPractice,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ ...styles.container, backgroundColor: theme.palette.background.default }}>
      <Box sx={styles.header}>
        <Typography
          variant="h4"
          sx={{
            ...styles.title,
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
          }}
        >
          Manage Practices
        </Typography>
        <Button variant="contained" sx={styles.addButton} onClick={onAddPractice}>
          Add Practice
        </Button>
      </Box>
      <Box sx={styles.subHeader}>
        <Typography variant="body1" 
           sx={{
            ...styles.title,
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
            fontSize: theme.palette.mode === 'dark' ? '16px' : '16px',
          }}
        >
          Here you can manage your practices. Below is the list of your practices:
        </Typography>
      </Box>
      {practices.map((practice, index) => (
        <Box key={index} sx={styles.practiceBox}>
          <Box sx={styles.practiceInfo}>
            <Typography variant="h6" sx={styles.practiceName}>
              {practice.name}
            </Typography>
            <Typography variant="body2" sx={styles.practiceDescription}>
              Description: {practice.description}
            </Typography>
            <Typography variant="body2" sx={styles.practiceCategory}>
              Category: {practice.category}
            </Typography>
            <Typography variant="body2" sx={styles.practiceContact}>
              Contact: {practice.email}
            </Typography>
          </Box>
          <Box sx={styles.actions}>
            <Switch
              checked={practice.status === 'active'}
              onChange={() => onTogglePractice(practice.id)}
              sx={styles.switch}
            />
            <IconButton onClick={() => onEditPractice(practice)} sx={styles.editButton}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDeletePractice(practice.id)} sx={styles.deleteButton}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default React.memo(ManagePracticesPresentational);
