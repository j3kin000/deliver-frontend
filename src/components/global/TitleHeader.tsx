import { Box, Typography, useTheme } from "@mui/material";
import React, { FC, Fragment, useMemo } from "react";
import { Location } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/utils";
import { tokens } from "../../utils/theme";

type TitleHeaderProps = {
  location: Location;
};
const TitleHeader: FC<TitleHeaderProps> = ({ location }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //   const pathNames = location.pathname.split("/");

  const pathNames = useMemo(() => {
    const paths = location.pathname.split("/");
    if (paths.length === 2 && paths[1] === "dashboard") {
      paths[1] = "";
      return paths;
    }
    paths[0] = "Home";
    return paths;
  }, [location]);
  return (
    <Box display={"flex"} p={1} pt={2}>
      {pathNames.map((name, index) => {
        return (
          <Box key={index}>
            {name && (
              <Typography pr={1} color={colors.orange[500]} fontSize={14}>
                {" / "}
                {capitalizeFirstLetter(name)}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default TitleHeader;
