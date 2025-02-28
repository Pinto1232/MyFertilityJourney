import { createContext } from 'react';

interface GlobalStateContextProps {
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export default GlobalStateContext;
