import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ProfilePresentationalProps } from './ProfileTypes';
import { styles } from './ProfileStyles';
import { useTheme } from '@mui/material/styles';

const ProfilePresentational: React.FC<ProfilePresentationalProps> = ({ userProfile, onEditProfile }) => {
    const theme = useTheme();
    return (
        <Box sx={{ 
            ...styles.container, background: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF'
        }}>
            <Box sx={styles.header}>
                <Typography variant="h4" sx={{ ...styles.title, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000' }}>
                    My Profile
                </Typography>
                <Button variant="contained" sx={{ ...styles.editButton, background: theme.palette.mode === 'dark' ? '#212B36' : undefined }} onClick={onEditProfile}>
                    Edit Profile
                </Button>
            </Box>
            <Box sx={styles.profileInfo}>
                <Typography variant="body1" sx={{ ...styles.profileField, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000' }}>
                    <Typography sx={{
                        ...styles.title,
                        color: theme.palette.mode === 'dark' ? '#212B36' : '#000000',
                        fontSize: theme.palette.mode === 'dark' ? '16px' : '16px'
                    }}>Name:</Typography> {userProfile.name}
                </Typography>
                <Typography variant="body1" sx={{ ...styles.profileField, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000' }}>
                    <Typography sx={{
                        ...styles.title, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000',
                        fontSize: theme.palette.mode === 'dark' ? '16px' : '16px'
                    }}>Email:</Typography> {userProfile.email}
                </Typography>
                <Typography variant="body1" sx={{ ...styles.profileField, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000' }}>
                    <Typography sx={{
                        ...styles.title, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000',
                        fontSize: theme.palette.mode === 'dark' ? '16px' : '16px'
                    }}>Phone Number:</Typography> {userProfile.phoneNumber}
                </Typography>
                <Typography variant="body1" sx={{ ...styles.profileField, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000' }}>
                    <Typography sx={{
                        ...styles.title, color: theme.palette.mode === 'dark' ? '#212B36' : '#000000',
                        fontSize: theme.palette.mode === 'dark' ? '16px' : '16px'
                    }}>Address:</Typography> {userProfile.address}
                </Typography>
            </Box>
        </Box>
    );
};

export default React.memo(ProfilePresentational);
