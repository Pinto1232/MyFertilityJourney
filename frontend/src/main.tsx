import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from './styles/GlobalStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { GlobalStateProvider } from './contexts/GlobalState.tsx';

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <GlobalStyles />
            <App />
          </LocalizationProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GlobalStateProvider>
  </StrictMode>
);
