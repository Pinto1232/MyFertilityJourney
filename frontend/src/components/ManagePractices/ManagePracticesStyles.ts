import { SxProps } from '@mui/system';

export const styles: { [key: string]: SxProps } = {
    container: {
        backgroundColor: '#FAFAFA',
        minHeight: '100vh',
        padding: '20px',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        cursor: 'pointer',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    header: {
        padding: '0 24px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 700,
        fontSize: '28px',
        color: '#212B36',
    },
    addButton: {
        backgroundColor: '#67ADB9',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#5AA0A9',
        },
    },
    subHeader: {
        padding: '0 24px',
        marginBottom: '20px',
    },
    description: {
        color: '#414141',
        fontSize: '16px',
    },
    practiceBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 24px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderLeft: '4px solid #67ADB9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.15)',
        },
    },
    practiceInfo: {
        flex: 1,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    practiceName: {
        color: '#212B36',
        fontWeight: 600,
    },
    practiceDescription: {
        color: '#414141',
    },
    practiceCategory: {
        color: '#747474',
    },
    practiceContact: {
        color: '#414141',
    },
    switch: {
        '& .MuiSwitch-track': {
            backgroundColor: '#67ADB9',
        },
    },
    editButton: {
        color: '#67ADB9',
        '&:hover': {
            color: '#5AA0A9',
        },
    },
    deleteButton: {
        color: '#67ADB9',
        '&:hover': {
            color: '#d32f2f',
        },
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#FFFFFF',
        border: 'none',
        boxShadow: 24,
        padding: '24px',
        borderRadius: '8px',
        outline: 'none',
    },
    modalTitle: {
        marginBottom: '16px',
        color: '#212B36',
        fontWeight: 700,
    },
    modalActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '16px',
    },
    modalButton: {
        marginLeft: '8px',
        backgroundColor: '#67ADB9',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#5AA0A9',
        },
    },
    cancelButton: {
        backgroundColor: '#212B36',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#1A1F24',
        },
    },
};





