import { BrowserRouter, Route, useHistory } from "react-router-dom";

import Routes from './CustomRoute';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

const App = () => {
  const history = useHistory();

  return (
    <BrowserRouter>
    <Route history={history}>
      <Routes/>
    </Route >

      {/* <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/admin/index" />
      </Switch> */}
    </BrowserRouter>
  )
}

export default App;