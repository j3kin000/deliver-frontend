import React from "react";
import { Box, CircularProgress } from "@mui/material";
const SuspenseLoader = () => {
  return (
    <Box
      display={"flex"}
      height={"100vh"} // 100% of viewport height
      width={"100%"} // 100% of viewport width
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress size={100} style={{ color: "orange" }} />
    </Box>
  );
};

export default SuspenseLoader;
