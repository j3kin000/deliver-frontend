import { ComponentType, Suspense } from "react";
import SuspenseLoader from "./SuspenseLoader";

const Loader =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loader;
