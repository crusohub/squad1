import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom'

export default function useAuth() {
    const user = {
      userId: 1,
      theme: 'light',
    }

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user.userId > 0) {
      // api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
   const handleLogin = async () => {

    localStorage.setItem('user', JSON.stringify(user));
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    console.log(history);
    history.push('/admin');
  }

  const handleLogout = () =>  {
    setAuthenticated(false);
    localStorage.removeItem('user');
    // api.defaults.headers.Authorization = undefined;
    history.push('/auth/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}