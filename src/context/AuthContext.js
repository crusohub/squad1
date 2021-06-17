import { useState, createContext } from 'react';

const Context = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userId: 0,
    theme: 'light',
  });

  const handleLogin = () => {
    setUser({...user, isAuthenticated: true});
  }

  return (
    <Context.Provider value={{user, handleLogin}}>
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context}