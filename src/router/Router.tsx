import { lazy } from "react";
import Loader from "../components/router/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";

const Status404 = Loader(lazy(() => import("../pages/status404/Status404")));
const Login = Loader(lazy(() => import("../pages/login/Login")));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="" element={<Navigate to="login" />} />
        <Route path="*" element={<Status404 />} />
      </Route>

      {/* <Route element={}>

    </Route> */}
    </Routes>
  );
};

export default Router;
