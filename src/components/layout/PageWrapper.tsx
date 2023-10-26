import React, { FC, ReactNode, useEffect } from "react";

type PageWrapperProps = {
  state?: string;
  children: ReactNode;
};
const PageWrapper: FC<PageWrapperProps> = ({ state, children }) => {
  return <>{children}</>;
};

export default PageWrapper;
