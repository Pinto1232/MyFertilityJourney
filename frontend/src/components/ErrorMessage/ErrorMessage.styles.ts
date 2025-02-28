export const errorMessageStyles = {
  overlay: {
    // Dark background overlay
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    // The main card container
    width: '320px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    // Red header section
    width: '100%',
    backgroundColor: '#f44336',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: '40px',
    color: '#FFFFFF',
    marginBottom: '8px',
  },

  headerText: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 700,
    margin: 0,
  },

  body: {
    // White body section
    padding: '20px',
    textAlign: 'center' as const,
    color: '#414141',
  },

  message: {
    marginBottom: '16px',
    fontSize: '16px',
    lineHeight: 1.4,
  },

  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
