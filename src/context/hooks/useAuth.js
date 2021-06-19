import { useState, useEffect } from 'react';

export default function useAuth() {
    const user = {
      userId: 1,
      theme: 'light',
    }

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user && user.userId > 0) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
   const handleLogin = (isNew) => {
     localStorage.setItem('user', JSON.stringify(user));
    
     if(isNew === 'newUser') {
      setIsNewUser(true);
     }

     setAuthenticated(true);
  }

  const handleLogout = () =>  {
    setAuthenticated(false);
    localStorage.removeItem('user');
  }
  
  return { authenticated, loading, handleLogin, handleLogout, isNewUser };
}