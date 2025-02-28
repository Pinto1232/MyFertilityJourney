import { createContext, useState, ReactNode } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import NoDataMessage from '../components/NoDataMessage';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  hasData: boolean;
  setHasData: (hasData: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
  hasData: true,
  setHasData: () => {},
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasData, setHasData] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, hasData, setHasData }}>
      {isLoading ? <LoadingSpinner /> : hasData ? children : <NoDataMessage />}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
