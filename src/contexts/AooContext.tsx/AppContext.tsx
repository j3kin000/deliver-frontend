import { FC, ReactNode, createContext, useEffect, useReducer } from "react";

const INITAL_STATE = {
  sidebarState: "",
  access_token: "",
};
const INITIALIZER = {
  sidebarState: "",
  access_token: localStorage.getItem("access_token"),
};
const AppReducer = (
  state = INITAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "LOGIN":
      console.log("logged in dispatc", action);
      return {
        ...state,
        access_token: action.payload,
      };
    case "RESET_SEARCH":
      return INITAL_STATE;
    default:
      return state;
  }
};
export const AppContext = createContext({
  sidebarState: INITAL_STATE.sidebarState,
  access_token: INITAL_STATE.access_token,
  dispatch: (action: { type: string; payload: any }) => {}, // Initialize with an empty function.
});

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, INITIALIZER);

  useEffect(() => {
    localStorage.setItem("access_token", state.access_token);
  }, [state.access_token]);

  const values = {
    sidebarState: state?.sidebarState,
    access_token: state?.access_token,
    dispatch,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
