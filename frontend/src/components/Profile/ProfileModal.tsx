import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { UserProfile, ProfileModalProps } from './ProfileTypes';
import { styles } from './ProfileStyles';

const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, onSave, userProfile }) => {
    const [formData, setFormData] = useState<UserProfile>({
        id: 0,
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    useEffect(() => {
        if (userProfile) {
            setFormData(userProfile);
        } else {
            setFormData({
                id: 0,
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
            });
        }
    }, [userProfile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles.modal}>
                <Typography variant="h6" sx={styles.modalTitle}>
                    {userProfile ? 'Edit Profile' : 'Add Profile'}
                </Typography>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Box sx={styles.modalActions}>
                    <Button onClick={onClose} sx={styles.cancelButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" sx={styles.modalButton}>
                        Save
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ProfileModal;
