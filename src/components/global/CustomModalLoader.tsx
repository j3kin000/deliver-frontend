import React, { Dispatch, FC, SetStateAction } from "react";
import { Box, CircularProgress, Modal } from "@mui/material";

export type CustomModalLoaderProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
const CustomModalLoader: FC<CustomModalLoaderProps> = ({
  loading,
  setLoading,
}) => {
  return (
    <Modal open={loading}>
      <Box
        display={"flex"}
        height={"100vh"} // 100% of viewport height
        width={"100vw"} // 100% of viewport width
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress size={100} style={{ color: "orange" }} />
      </Box>
    </Modal>
  );
};

export default CustomModalLoader;
