import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import ProfileCard from "views/examples/ProfileCard.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import UserTables from "views/examples/UserTables";
import SettingsProfile from 'views/examples/SettingsProfile.js';
import EditProject from "views/examples/EditProject.js"
import addProject from "views/examples/addProject"
import associateProject from "views/examples/associateProject"
import TablesProject from "views/examples/TablesProject"
import NewProject from "views/examples/NewProject"
import PesquisarProject from "views/examples/PesquisarProject"
import PesquisarAssociacao from "views/examples/PesquisarAssociacao"
import CadastrarAssociacao from "views/examples/CadastrarAssociacao"
import ForgotPassword from "views/examples/ForgotPassword";
import ChangePassword from "views/examples/ChangePassword";


let routes = [
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
    name: "User",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    sub:[
      {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/profile-Card",
        name: "Edit profile",
        icon: "ni ni-settings text-yellow",
        component: ProfileCard,
        layout: "/admin",
      },
      {
        path: "/SettingsProfile",
        name: "Change Password",
        icon: "fa fa-search text-yellow",
        component: SettingsProfile,
        layout: "/admin",
      },
      {
        path: "/users-table",
        name: "All Users",
        icon: "ni ni-bullet-list-67 text-yellow",
        component: UserTables,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/profile-Card",
    component: ProfileCard,
    layout: "/admin",
  },
  {
    path: "/SettingsProfile",
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
    icon: "ni ni-single-copy-04 text-red",
    component: TablesProject,
    layout: "/admin",
    sub: [
      {
        path: "/tablesproject",
        name: "All Projects",
        icon: "ni ni-bullet-list-67 text-red",
        component: TablesProject,
        layout: "/admin",
      },
      {
        path: "/pesquisarproject",
        name: "Search Project",
        icon: "fa fa-search text-red",
        component: PesquisarProject,
        layout: "/admin",
      },
      {
        path: "/newproject",
        name: "New Project",
        icon: "ni ni-fat-add text-red",
        component: NewProject,
        layout: "/admin",
      },
      {
        path: "/editproject",
        name: "Edit Project",
        icon: "ni ni-settings text-red",
        component: EditProject,
        layout: "/admin",
      }
    ],
  },
  {
    path: "/users-table",
    component: UserTables,
    layout: "/admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/forgotpassword",
    component: ForgotPassword,
    layout: "/auth",
  },
  {
    path: "/changepassword",
    component: ChangePassword,
    layout: "/auth",
  },
  {
    path: "/associateProject",
    name: "Associate Project",
    icon: "ni ni-air-baloon text-yellow",
    component: associateProject,
    layout: "/admin",
    sub:[
      {
        path: "/associateProject",
        name: "Associate Project",
        icon: "ni ni-air-baloon text-yellow",
        component: associateProject,
        layout: "/admin",
      },
      {
        path: "/pesquisarassociacao",
        name: "Search Association",
        icon: "fa fa-search text-yellow",
        component: PesquisarAssociacao,
        layout: "/admin",
      },
      {
        path: "/cadassociacao",
        name: "Register Association",
        icon: "ni ni-fat-add text-yellow",
        component: CadastrarAssociacao,
        layout: "/admin",
      },

    ],
  },
  {
    path: "/pesquisarproject",
    component: PesquisarProject,
    layout: "/admin",
  },
  {
    path: "/pesquisarassociacao",
    component: PesquisarAssociacao,
    layout: "/admin",
  },
  {
    path: "/cadassociacao",
    component: CadastrarAssociacao,
    layout: "/admin",
  },
  {
    path: "/newproject",
    component: NewProject,
    layout: "/admin",
  },
  {
    path: "/addProject",
    component: addProject,
    layout: "/admin",
  },
  {
    path: "/editproject",
    component: EditProject,
    layout: "/admin",
  },
];
export default routes;
