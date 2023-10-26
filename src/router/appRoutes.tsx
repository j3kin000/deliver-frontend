import { lazy } from "react";
import Loader from "../components/router/Loader";
import { RouteType } from "./config";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AuthLayout from "../components/layout/AuthLayout";
import { Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
const Status404 = Loader(lazy(() => import("../pages/status404/Status404")));
const Login = Loader(lazy(() => import("../pages/login/Login")));
const Dashboard = Loader(lazy(() => import("../pages/dashboard/Dashboard")));
export const appRoutes: RouteType[] = [
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <Navigate to="login" />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <MainLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardIcon />,
    },
    children: [
      {
        index: true,
        element: <Dashboard />,
        state: "dashboard.index",
      },
    ],
  },
  {
    path: "*",
    element: <Status404 />,
  },
];
