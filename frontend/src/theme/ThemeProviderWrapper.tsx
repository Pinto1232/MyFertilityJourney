import React, { useState, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeToggleContext } from './ThemeToggleContext';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#212B36' : '#FFFFFF',
      },
      text: {
        primary: darkMode ? '#FFFFFF' : '#000000',
      },
    },
    typography: {
      fontFamily: `'Montserrat', sans-serif`,
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
