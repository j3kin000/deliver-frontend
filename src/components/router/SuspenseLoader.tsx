import React from "react";
import { Box, CircularProgress } from "@mui/material";
const SuspenseLoader = () => {
  return (
    <Box
      display={"flex"}
      height={"100%"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress size={100} style={{ color: "orange" }} />
    </Box>
  );
};

export default SuspenseLoader;
