import { Alert, Box, Collapse } from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

export type CustomAlertProps = {
  type: "success" | "error" | "info" | "warning" | "";
  message: string;
  collapse?: boolean;
  setCollapse?: Dispatch<SetStateAction<boolean>>;
};
const CustomAlert: FC<CustomAlertProps> = ({
  type,
  message,
  collapse,
  setCollapse,
}) => {
  useEffect(() => {
    const collpasing = setTimeout(() => {
      setCollapse && setCollapse(false);
    }, 10000);

    return () => clearTimeout(collpasing);
  }, [collapse, setCollapse]);

  return (
    <Box width={"100%"}>
      {type && (
        <Collapse in={collapse}>
          <Alert
            severity={type}
            sx={{
              p: 2,
              fontWeight: "bold",
            }}
            onClose={() => setCollapse && setCollapse(false)}
          >
            {message}
          </Alert>
        </Collapse>
      )}
    </Box>
  );
};

export default CustomAlert;
