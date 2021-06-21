import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, loading, handleLogin, handleLogout, isNewUser } = useAuth();

  return (
    <Context.Provider value={{authenticated, loading, handleLogin, handleLogout, isNewUser}}>
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context}