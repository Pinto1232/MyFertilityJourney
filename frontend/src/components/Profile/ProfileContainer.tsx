import React, { useState, useEffect, useCallback } from 'react';
import ProfilePresentational from './ProfilePresentational';
import useApi from '../../api/services/api';
import ProfileModal from './ProfileModal';
import { UserProfile } from './ProfileTypes';
import { useGlobalState } from '../../hooks/useGlobalState';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
  const { loading, setLoading, error, setError } = useGlobalState();
  const [showSpinner, setShowSpinner] = useState(false);

  const getUserProfile = useCallback(async () => {
    setLoading(true);
    setShowSpinner(false);
    const spinnerTimeout = setTimeout(() => setShowSpinner(true), 500); 
    try {
      const profile = await fetchUserProfile();
      console.log('Fetched User Profile:', profile);
      setUserProfile(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      clearTimeout(spinnerTimeout);
      setLoading(false);
      setShowSpinner(false);
    }
  }, [fetchUserProfile, setLoading]);

  useEffect(() => {
    getUserProfile();
    const interval = setInterval(getUserProfile, 60000); 
    return () => clearInterval(interval);
  }, [getUserProfile]);

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
      {showSpinner && loading && <Spinner />}
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
    </>
  );
};

export default ProfileContainer;
