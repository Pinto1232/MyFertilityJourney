import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../../api/services/api';
import { UserProfile } from './ProfileTypes'; // Import UserProfile type
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import axios from 'axios';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserProfile>({
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const profile = await fetchUserProfile();
        setUserProfile(profile);
        setFormData(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
          // Handle unauthorized error, possibly redirect to login
          console.error('Unauthorized access - redirecting to login');
        }
      }
    };

    getUserProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log('Saving Profile Data:', formData); 
      const updatedProfile = await updateUserProfile(formData);
      console.log('Edited Profile Data:', updatedProfile);
      setUserProfile(updatedProfile);
      setIsEditing(false);
      setSnackbarMessage('Profile updated successfully');
      setSnackbarSeverity('success');
      console.log('Updated Profile Data:', updatedProfile); 
    } catch (error) {
      console.error('Error updating user profile:', error);
      if (axios.isAxiosError(error)) {
        setSnackbarMessage('Failed to update profile');
        setSnackbarSeverity('error');
      }
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Phone Number: {userProfile.phoneNumber}</p>
          <p>Address: {userProfile.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Profile;
