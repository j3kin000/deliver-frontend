import { ReactNode } from "react";

export type RouteType = {
  element: ReactNode;
  state?: string;
  index?: boolean;
  path?: string;
  children?: RouteType[];
  sidebarProps?: {
    displayText: String;
    icon?: ReactNode;
  };
};
