import React, { useState, useEffect } from 'react';
import ProfilePresentational from './ProfilePresentational';
import useApi from '../../api/services/api';
import ProfileModal from './ProfileModal';
import { UserProfile } from './ProfileTypes';
import { useGlobalState } from '../../hooks/useGlobalState';
import Spinner from '../Spinner/Spinner';
import { Snackbar, Alert } from '@mui/material';

const ProfileContainer: React.FC = () => {
  const { fetchUserProfile } = useApi();
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const { loading, error, setLoading, setError } = useGlobalState();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        setLoading(true);
        const profile = await fetchUserProfile();
        console.log('Fetched User Profile:', profile);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, [fetchUserProfile, setLoading]);

  const handleEditProfile = () => {
    setModalOpen(true);
  };

  const handleSaveProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <>
      <ProfilePresentational userProfile={userProfile} onEditProfile={handleEditProfile} />
      <ProfileModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveProfile}
        userProfile={userProfile}
      />
      {loading && <Spinner />}
      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setError(null)} severity="error" sx={{ minWidth: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default ProfileContainer;
