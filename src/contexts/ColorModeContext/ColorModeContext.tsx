import { FC, ReactNode, createContext } from "react";
import { ColorModeType, useMode } from "../../utils/theme";
import { Theme } from "@mui/material";

export type ColorModeProviderProps = {
  children: ReactNode;
};
export const ColorModeContext = createContext<{
  colorMode: ColorModeType | undefined;
  theme: Theme | undefined;
}>({
  colorMode: undefined,
  theme: undefined,
});
//appTheme
export const ColorModeContextProvider: FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [theme, colorMode] = useMode();

  const values = { theme, colorMode };
  return (
    <ColorModeContext.Provider value={values}>
      {children}
    </ColorModeContext.Provider>
  );
};
