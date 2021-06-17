import { useState, createContext, useEffect } from 'react';

const Context = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userId: 0,
    theme: 'light',
  });

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify(user));

    setUser({...user, isAuthenticated: true});
  }

  // useEffect(() => {
  //   const autenticated = localStorage.getItem('user')
  // }, [])

  return (
    <Context.Provider value={{user, handleLogin}}>
      {children}
    </Context.Provider>
  );
}

export { AuthProvider, Context}