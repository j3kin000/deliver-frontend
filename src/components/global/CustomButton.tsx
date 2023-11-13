import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React, { CSSProperties, FC, memo } from "react";
import { tokens } from "../../utils/theme";

export type CustomButtonProps = {
  label: string;
  handleSubmit?: () => void;
  isDisabled?: boolean;
  styles?: CSSProperties;
  type?: "submit" | "button" | "reset";
};
const CustomButton: FC<CustomButtonProps> = memo(
  ({ label, handleSubmit, isDisabled, styles, type }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={handleSubmit}
          type={type || "submit"}
          variant="contained"
          sx={{
            backgroundColor: colors.orange[500],
            padding: "15px 50px",
            borderRadius: "20px",
            marginBottom: "10px",
            "&:disabled": {
              backgroundColor: "#ffddd6",
            },
            "&:hover": {
              backgroundColor: styles?.backgroundColor || colors.orange[500],
            },
            ...styles,
          }}
          disabled={isDisabled}
        >
          {isDisabled ? (
            <CircularProgress
              size={24}
              sx={{
                color: "#ff5331",
              }}
            />
          ) : (
            <Typography style={{ textTransform: "none" }}>{label}</Typography>
          )}
        </Button>
      </Box>
    );
  }
);

export default CustomButton;
