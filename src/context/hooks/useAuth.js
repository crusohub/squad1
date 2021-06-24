import { useState, useEffect } from 'react';

import api from '../../service/UserDataService';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user && user.iuserId > 0) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
   const handleLogin = (isNew, userContext) => {
    setCurrentUser(userContext);

    const user = {
      userId: userContext.id,
    }

    localStorage.setItem('user', JSON.stringify(user));

    if(isNew === 'newUser') {
      ( async () => {
        const data = await api.getUserById(user.userId);
        const userData = await data.data;
        setCurrentUser(userData);
      })();
      setIsNewUser(true);
    }

    setAuthenticated(true);
  }

  const handleLogout = () =>  {
    setAuthenticated(false);
    setIsNewUser(false);
    localStorage.removeItem('user');
  }
  
  return { authenticated, loading, handleLogin, handleLogout, isNewUser, currentUser };
}