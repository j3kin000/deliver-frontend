import { FC, ReactNode, createContext } from "react";
import { useMode } from "../../utils/theme";
import { Theme } from "@mui/material";

export type ColorModeProviderProps = {
  children: ReactNode;
};
export const ColorModeContext = createContext({});

export const ColorModeContextProvider: FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [colorMode] = useMode();

  const values = { colorMode };
  return (
    <ColorModeContext.Provider value={values}>
      {children}
    </ColorModeContext.Provider>
  );
};
