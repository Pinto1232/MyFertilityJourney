export interface NavbarPresentationalProps {
  toggleSidebar: () => void;
  user: {
    name: string;
    avatar: string;
    email: string;
  };
  notificationsCount: number;
  onNotificationClick: () => void;
  onLogout: () => void;
}

export interface NavbarContainerProps {
  toggleSidebar: () => void;
  userData?: {
    email: string;
    password: string;
    confirmPassword?: string;
    name?: string;
  };
}
