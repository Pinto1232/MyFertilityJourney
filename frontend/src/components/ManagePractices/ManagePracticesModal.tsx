import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField, Typography, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Practice } from './ManagePracticesTypes';
import { styles } from './ManagePracticesStyles';
import { useTheme } from '@mui/material/styles';

interface ManagePracticesModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (practice: Practice) => void;
    practice?: Practice;
    categories: string[];
}

const ManagePracticesModal: React.FC<ManagePracticesModalProps> = ({ open, onClose, onSave, practice, categories }) => {
    const theme = useTheme();
    const [formData, setFormData] = useState<Practice>({
        id: 0,
        name: '',
        description: '',
        category: '',
        email: '',
        status: '',
        active: false,
        createdAt: '',
        ownerId: 0,
        ownerName: '',
        phoneNumber: '',
    });

    useEffect(() => {
        if (practice) {
            setFormData(practice);
        } else {
            setFormData({
                id: 0,
                name: '',
                description: '',
                category: '',
                email: '',
                status: '',
                active: false,
                createdAt: '',
                ownerId: 0,
                ownerName: '',
                phoneNumber: '',
            });
        }
    }, [practice]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setFormData({ ...formData, createdAt: date.toISOString() });
        }
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{ ...styles.modal, background: theme.palette.mode === 'dark' ? '#212B36' : undefined }}>
                <Typography variant="h6" sx={styles.modalTitle}>
                    {practice ? 'Edit Practice' : 'Add Practice'}
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
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    select
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Owner Name"
                    name="ownerName"
                    value={formData.ownerName}
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
                    select
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="" disabled>
                        Please select the status
                    </MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="disabled">Disabled</MenuItem>
                </TextField>
                <DatePicker
                    label="Created At"
                    value={formData.createdAt ? new Date(formData.createdAt) : null}
                    onChange={handleDateChange}
                    slots={{ textField: TextField }}
                    slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
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

export default ManagePracticesModal;
