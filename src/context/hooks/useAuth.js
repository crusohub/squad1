import { useState, useEffect } from 'react';

export default function useAuth() {
    const user = {
      userId: 1,
      theme: 'light',
    }

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user && user.userId > 0) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
   const handleLogin = () => {
     localStorage.setItem('user', JSON.stringify(user));
     setAuthenticated(true);
  }

  const handleLogout = () =>  {
    setAuthenticated(false);
    localStorage.removeItem('user');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}