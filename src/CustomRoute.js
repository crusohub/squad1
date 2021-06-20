import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";


function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated, isNewUser } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/auth/login"/>
  }

  if(rest.isAuth && authenticated) {

    if(isNewUser) {
      return <Redirect to="/admin/user-profile" />
    }

   return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute isPrivate path="/admin" render={(props) => <AdminLayout {...props} />} />
      <CustomRoute isAuth path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Switch>
  );
}