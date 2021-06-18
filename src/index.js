import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import { AuthProvider} from './context/AuthContext';
import { ProjectProvider } from './contextAPI/contextProject'

ReactDOM.render(
  <AuthProvider>
  <ProjectProvider>
    <App />
  </ProjectProvider>  
  </AuthProvider>
  ,document.getElementById("root")
);
