import { Box } from '@mui/material';
import React from 'react';

interface DashboardPresentationalProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    SidebarComponent: React.ReactNode;
    NavbarComponent: React.ReactNode;
}

const DashboardPresentational: React.FC<DashboardPresentationalProps> = ({
    isSidebarOpen,
    SidebarComponent,
    NavbarComponent,
}) => {
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
                  
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardPresentational;