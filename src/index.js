import React from "react";
import ReactDOM from "react-dom";

import App from './App';

import { AuthProvider} from './context/AuthContext';
import { ProjectProvider } from './contextAPI/contextProject'
import ViewData from './context/hooks/SaveViewData';

ReactDOM.render(
  <AuthProvider>
    <ProjectProvider>
      <ViewData>
        <App />
      </ViewData>
    </ProjectProvider>  
  </AuthProvider>
  ,document.getElementById("root")
);
