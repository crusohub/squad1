/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import SettingsProfile from 'views/examples/SettingsProfile.js';
import EditProject from "views/examples/EditProject.js"
import addProject from "views/examples/addProject"
import associateProject from "views/examples/associateProject"
import TablesProject from "views/examples/TablesProject"
import TablesUser from "views/examples/TablesUser"
import PesquisarProject from "views/examples/PesquisarProject"
import PesquisarAssociacao from "views/examples/PesquisarAssociacao"
import CadastrarAssociacao from "views/examples/CadastrarAssociacao"
import ForgotPassword from "views/examples/ForgotPassword";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/SettingsProfile",
    name: "Settings Profile",
    icon: "ni ni-single-02 text-yellow",
    component: SettingsProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/tablesproject",
    name: "Project",
    icon: "ni ni-bullet-list-67 text-red",
    component: TablesProject,
    layout: "/admin",
  },
  {
    path: "/tablesuser",
    name: "User",
    icon: "ni ni-bullet-list-67 text-red",
    component: TablesUser,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/forgotpassword",
    name: "Forgot Password",
    icon: "ni ni-circle-08 text-pink",
    component: ForgotPassword,
    layout: "/auth",
  },
  {
    path: "/addProject",
    name: "Add Project",
    icon: "ni ni-fat-add text-red",
    component: addProject,
    layout: "/admin",
  },
  {
    path: "/editproject",
    name: "Editar Projeto",
    icon: "ni ni-circle-08 text-pink",
    component: EditProject,
    layout: "/admin",
  },
  {
    path: "/associateProject",
    name: "Associate Project",
    icon: "ni ni-air-baloon text-yellow",
    component: associateProject,
  },
  {
    path: "/pesquisarproject",
    name: "Pesquisar Project",
    icon: "ni ni-bullet-list-67 text-red",
    component: PesquisarProject,
    layout: "/admin",
  },
  {
    path: "/pesquisarassociacao",
    name: "Pesquisar Associacao",
    icon: "ni ni-bullet-list-67 text-red",
    component: PesquisarAssociacao,
    layout: "/admin",
  },
  {
    path: "/cadassociacao",
    name: "Cadastrar Associacao",
    icon: "ni ni-bullet-list-67 text-red",
    component: CadastrarAssociacao,
    layout: "/admin",
  }
];
export default routes;
