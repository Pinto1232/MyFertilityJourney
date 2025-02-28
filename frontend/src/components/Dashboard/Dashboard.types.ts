
export interface DashboardPresentationalProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  selectedMenuItem: string;
  SidebarComponent: React.ReactNode;
  NavbarComponent: React.ReactNode;
  userData?: { email: string; password: string; confirmPassword?: string; name?: string };
}
