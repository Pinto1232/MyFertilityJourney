export interface UserProfile {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface ProfilePresentationalProps {
    userProfile: UserProfile;
    onEditProfile: () => void;
}

export interface ProfileModalProps {
    open: boolean;
    onClose: () => void;
    onSave: (profile: UserProfile) => void;
    userProfile?: UserProfile;
}
