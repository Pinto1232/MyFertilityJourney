import { SxProps } from '@mui/system';

export const styles: { [key: string]: SxProps } = {
  container: {
    backgroundColor: '#FFFFFF',
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    color: '#414141',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #747474', 
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
  },
  title: {
    fontWeight: 700,
    fontSize: '2rem',
    color: '#212B36', 
  },
  editButton: {
    backgroundColor: '#67ADB9', 
    color: '#FFFFFF',
    textTransform: 'none',
    padding: '0.5rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
    '&:hover': {
      backgroundColor: '#5AA0A9',
    },
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  profileField: {
    fontSize: '1rem',
    color: '#414141', 
    '& strong': {
      color: '#212B36', 
      marginRight: '0.5rem',
    },
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '400px' },
    backgroundColor: '#FFFFFF', 
    boxShadow: 24,
    padding: '2rem',
    borderRadius: '8px',
    outline: 'none',
  },
  modalTitle: {
    marginBottom: '1.5rem',
    color: '#212B36',
    fontWeight: 700,
    fontSize: '1.5rem',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
  },
  modalButton: {
    marginLeft: '1rem',
    backgroundColor: '#67ADB9', 
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#5AA0A9',
    },
  },
  cancelButton: {
    backgroundColor: '#414141',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#212B36', 
    },
  },
};
