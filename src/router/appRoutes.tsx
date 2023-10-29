import { lazy } from "react";
import Loader from "../components/router/Loader";
import { RouteType } from "./config";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PageLayout from "../components/layout/PageLayout";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
export const Status404 = Loader(
  lazy(() => import("../pages/status404/Status404"))
);
export const Login = Loader(lazy(() => import("../pages/login/Login")));
const Dashboard = Loader(lazy(() => import("../pages/dashboard/Dashboard")));
const ProductList = Loader(lazy(() => import("../pages/menu/product-list")));
const ProductAdd = Loader(lazy(() => import("../pages/menu/product-add")));
const Order = Loader(lazy(() => import("../pages/order/order")));
const Request = Loader(lazy(() => import("../pages/request/request")));
const AgentList = Loader(lazy(() => import("../pages/agent/agent-list")));
const AgentAdd = Loader(lazy(() => import("../pages/agent/agent-add")));
const Settings = Loader(lazy(() => import("../pages/settings/settings")));

export const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard />,
    sidebarProps: {
      displayText: "Dashboard",
      icon: (
        <DashboardIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
  },
  {
    element: <PageLayout />,
    state: "menu",
    sidebarProps: {
      displayText: "Menu",
      icon: (
        <LocalDiningIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
    children: [
      {
        index: true,
        element: <ProductList />,
        path: "/menu/product-list",
        state: "menu.index",
        sidebarProps: {
          displayText: "Menu List",
        },
      },
      {
        element: <ProductAdd />,
        path: "/menu/product-add",
        sidebarProps: {
          displayText: "Add Menu",
        },
      },
    ],
  },
  {
    index: true,
    path: "/order",
    element: <Order />,
    sidebarProps: {
      displayText: "Orders",
      icon: (
        <ListAltIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
  },
  {
    index: true,
    path: "/request",
    element: <Request />,
    sidebarProps: {
      displayText: "Requests",
      icon: (
        <RequestPageIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
  },
  {
    element: <PageLayout />,
    state: "agent",
    sidebarProps: {
      displayText: "Agent",
      icon: (
        <PersonIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
    children: [
      {
        index: true,
        element: <AgentList />,
        path: "/menu/agentt-list",
        state: "menu.index",
        sidebarProps: {
          displayText: "Menu List",
        },
      },
      {
        element: <AgentAdd />,
        path: "/menu/agent-add",
        sidebarProps: {
          displayText: "Add Menu",
        },
      },
    ],
  },
  {
    index: true,
    path: "/settings",
    element: <Settings />,
    sidebarProps: {
      displayText: "Settings",
      icon: (
        <SettingsIcon
          sx={{
            color: "#ff5331",
          }}
        />
      ),
    },
  },

  // {
  //   index: true,
  //   path: "/logout",
  //   element: <Dashboard />,
  //   sidebarProps: {
  //     displayText: "Logout",
  //     icon: (
  //       <LogoutIcon
  //         sx={{
  //           color: "#ff5331",
  //         }}
  //       />
  //     ),
  //   },
  // },
  {
    path: "*",
    element: <Status404 />,
  },
];
