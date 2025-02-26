// DashboardPresentational.tsx
import { Box } from '@mui/material';
import React from 'react';

interface DashboardPresentationalProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    selectedMenuItem: string;
    SidebarComponent: React.ReactNode;
    NavbarComponent: React.ReactNode;
    // Add userData prop (using AuthFormData structure)
    // userData prop structure extended to optionally include name
    userData?: { email: string; password: string; confirmPassword?: string; name?: string };
}

const DashboardPresentational: React.FC<DashboardPresentationalProps> = ({
    isSidebarOpen,
    SidebarComponent,
    NavbarComponent,
    selectedMenuItem,
    userData,
}) => {
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    const contentMap: { [key: string]: React.ReactNode } = {
        Dashboard: (
            <Box>
                {userData && (
                    <Box mt={2}>
                        <h2>
                            Welcome,{' '}
                            {userData.name
                                ? capitalize(userData.name)
                                : capitalize(userData.email.split('@')[0])}
                        </h2>
                        <pre>{JSON.stringify(userData, null, 2)}</pre>
                    </Box>
                )}
            </Box>
        ),
        'My Profile': <Box>My Profile content</Box>,
        'Manage Practices': <Box>Manage Practices content</Box>,
        Logs: <Box>Logs content</Box>,
    };

    return (
        <Box display="flex" height="100vh" overflow="hidden">
            {SidebarComponent}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: `calc(100% - ${isSidebarOpen ? 240 : 0}px)`,
                    minWidth: 0,
                }}
            >
                {NavbarComponent}
                <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
                    {contentMap[selectedMenuItem] || <Box>No content available</Box>}
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardPresentational;
