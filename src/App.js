import { BrowserRouter, Route } from "react-router-dom";

import Routes from './CustomRoute';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Route>
        <Routes/>
      </Route >
    </BrowserRouter>
  )
}

export default App;