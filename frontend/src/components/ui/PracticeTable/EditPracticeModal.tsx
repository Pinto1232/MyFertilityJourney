import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { PracticeData } from './PracticeTable.types';

interface EditPracticeModalProps {
  open: boolean;
  practice: PracticeData | null;
  onSave: (updatedPractice: PracticeData) => void;
  onClose: () => void;
}

const EditPracticeModal: React.FC<EditPracticeModalProps> = ({ open, practice, onSave, onClose }) => {
  const [formData, setFormData] = useState<PracticeData>({
    name: '',
    telNo: '',
    email: '',
    dateCreated: '',
    status: 'Active',
  });

  useEffect(() => {
    if (practice) {
      setFormData(practice);
    }
  }, [practice]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '12px',
          padding: '16px',
          width: '500px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#333',
          paddingBottom: '10px',
        }}
      >
        Edit Practice
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Practice Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          margin="dense"
          label="Tel No"
          name="telNo"
          value={formData.telNo}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
        <TextField
          margin="dense"
          label="Date Created"
          name="dateCreated"
          value={formData.dateCreated}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: '16px' }}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: '#B0BEC5',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#90A4AE',
            },
            marginRight: '8px',
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          sx={{
            backgroundColor: '#67ADB9 ',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPracticeModal;
