import { Fragment, ReactNode } from "react";
import { RouteType } from "./config";
import { Route, useRoutes } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import { appRoutes } from "./appRoutes";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Fragment key={index}>
      {route.index ? (
        <Route
          index
          path={route.path}
          element={
            <PageWrapper state={route.state}>{route.element}</PageWrapper>
          }
        />
      ) : (
        <Route
          path={route.path}
          element={
            <PageWrapper state={route.children ? route.state : undefined}>
              {route.element}
            </PageWrapper>
          }
          key={index}
        >
          {route.children && generateRoute(route.children)}
        </Route>
      )}
    </Fragment>
  ));
};

export const MainRoutes: ReactNode = generateRoute(appRoutes);
