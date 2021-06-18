import { useState, useEffect } from 'react';

import history from '../../history';

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
     history.push('/admin/index');
  }

  const handleLogout = () =>  {
    setAuthenticated(false);
    localStorage.removeItem('user');
    history.push('/auth/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}