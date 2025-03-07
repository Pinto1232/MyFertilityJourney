import { useContext } from 'react';
import GlobalStateContext from '../contexts/useGlobalLoadingErrorState';

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalStateContext must be used within a GlobalStateProvider');
  }
  return context;
};
