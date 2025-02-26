import { Box, Typography } from '@mui/material';
import React from 'react';

interface DashboardPresentationalProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    selectedMenuItem: string;
    SidebarComponent: React.ReactNode;
    NavbarComponent: React.ReactNode;
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
            <Box sx={{ backgroundColor: '#FAFAFA', width: '100', height: '100%', padding: '30px', margin: '0', marginTop: '-15px' }}>
                {userData && (
                    <Box mt={2} sx={{ padding: '0 24px' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                lineHeight: '30px',
                                marginBottom: '20px',
                            }}
                        >
                            Welcome{' '}
                            {userData.name
                                ? capitalize(userData.name)
                                : capitalize(userData.email.split('@')[0])}!
                        </Typography>
                    </Box>
                )}
                <Box sx={{ padding: '0 24px' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#414141',
                            fontWeight: 400,
                            lineHeight: '22px',
                        }}
                    >
                        Here is your profile information, including your email address and other details you have provided. Feel free to update your profile as needed.
                    </Typography>
                </Box>
            </Box>
        ),
        'My Profile': <Box sx={{ backgroundColor: '#FAFAFA', width: '100%', height: '100%', padding: '30px', margin: '0', marginTop: '-15px' }}>My Profile content</Box>,
        'Manage Practices': <Box sx={{ backgroundColor: '#FAFAFA', width: '100%', height: '100%', padding: '30px', margin: '0', marginTop: '-15px' }}>Manage Practices content</Box>,
        Logs: <Box sx={{ backgroundColor: '#FAFAFA', width: '100%', height: '100%', padding: '30px', margin: '0', marginTop: '-15px' }}>Logs content</Box>,
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
                <Box sx={{ flexGrow: 1, }}>
                    {contentMap[selectedMenuItem] || <Box>No content available</Box>}
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardPresentational;
