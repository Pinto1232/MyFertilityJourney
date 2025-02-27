import React, { useState, useEffect } from 'react';
import ProfilePresentational from './ProfilePresentational';
import { fetchUserProfile } from '../../api/services/api';
import ProfileModal from './ProfileModal';
import { UserProfile } from './ProfileTypes';

const ProfileContainer: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        id: 0,
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
    });
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const profile = await fetchUserProfile();
                console.log('Fetched User Profile:', profile);
                setUserProfile(profile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        getUserProfile();
    }, []);

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
        </>
    );
};

export default ProfileContainer;
