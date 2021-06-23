import { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

const AuthProvider = ({ children }) => {
  const { authenticated, loading, handleLogin, handleLogout, isNewUser , setCurrentUser, currentUser } = useAuth();

  return (
    <Context.Provider value={{authenticated, loading, handleLogin, handleLogout, isNewUser, setCurrentUser, currentUser}}>
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context}