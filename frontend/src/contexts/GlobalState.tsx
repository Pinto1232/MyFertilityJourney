import React, { useState, ReactNode } from 'react';
import GlobalStateContext from './GlobalStateContext';

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <GlobalStateContext.Provider value={{ loading, error, setLoading, setError }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
