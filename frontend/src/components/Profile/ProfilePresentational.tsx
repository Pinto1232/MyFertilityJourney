import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ProfilePresentationalProps } from './ProfileTypes';
import { styles } from './ProfileStyles';

const ProfilePresentational: React.FC<ProfilePresentationalProps> = ({ userProfile, onEditProfile }) => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.header}>
                <Typography variant="h4" sx={styles.title}>
                    My Profile
                </Typography>
                <Button variant="contained" sx={styles.editButton} onClick={onEditProfile}>
                    Edit Profile
                </Button>
            </Box>
            <Box sx={styles.profileInfo}>
                <Typography variant="body1" sx={styles.profileField}>
                    <strong>Name:</strong> {userProfile.name}
                </Typography>
                <Typography variant="body1" sx={styles.profileField}>
                    <strong>Email:</strong> {userProfile.email}
                </Typography>
                <Typography variant="body1" sx={styles.profileField}>
                    <strong>Phone Number:</strong> {userProfile.phoneNumber}
                </Typography>
                <Typography variant="body1" sx={styles.profileField}>
                    <strong>Address:</strong> {userProfile.address}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfilePresentational;
