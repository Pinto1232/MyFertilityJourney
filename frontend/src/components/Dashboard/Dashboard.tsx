import { Box, Typography } from '@mui/material';
import React from 'react';
import StatCardContainer from '../ui/StatCard/StatCardContainer';
import DonutChartContainer from '../ui/DonutChart/DonutChartContainer';
import PracticeTableContainer from '../ui/PracticeTable/PracticeTableContainer';
import ManagePracticesContainer from '../ManagePractices/ManagePracticesContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import LogsContainer from '../Logs/LogsContainer'; // Import LogsContainer

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
            <Box
                sx={{
                    backgroundColor: '#FAFAFA',
                    height: '100vh',
                    padding: '10px',
                    marginTop: '-15px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {userData && (
                    <Box mt={5} sx={{ padding: '0 24px' }}>
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
                        Here is your profile information, including your email address and other details you have provided.
                    </Typography>
                </Box>
                <Box sx={{ padding: '0 24px', mt: 4 }}>
                    <StatCardContainer />
                </Box>

                <Box
                    sx={{
                        padding: '24px 24px',
                        mt: 4, 
                        boxShadow: '0px 4px 24px rgba(145, 158, 171, 0.2)',
                        margin: 3,
                        borderRadius: '16px'
                    }}
                >
                    <DonutChartContainer />
                </Box>
                <Box sx={{ padding: '0 24px', mb: 15 }}>
                    <PracticeTableContainer />
                </Box>
            </Box>
        ),
        'My Profile': <Box sx={{
            backgroundColor: '#FAFAFA',
            height: '100vh',
            padding: '10px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
        >
            <ProfileContainer/>
        </Box>,
        'Manage Practices': <ManagePracticesContainer />,
        Logs: (
            <Box
                sx={{
                    backgroundColor: '#FAFAFA',
                    height: '100vh',
                    padding: '10px',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                <LogsContainer />
            </Box>
        ),
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
