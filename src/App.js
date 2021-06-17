import { useContext } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { Context} from './context/AuthContext';


const App = () => {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

        {user.isAuthenticated === false 
          ? <Redirect from="*" to="/auth/login" />
          : <Redirect from="*" to="/admin" />
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App;