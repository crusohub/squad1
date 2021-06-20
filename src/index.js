import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import { AuthProvider} from './context/AuthContext';
import { ProjectProvider } from './context/contextProject';

ReactDOM.render(
  <AuthProvider>
    <ProjectProvider>
      <App />
    </ProjectProvider>  
  </AuthProvider>
  ,document.getElementById("root")
);
