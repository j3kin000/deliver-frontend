import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC, memo } from "react";
import { tokens } from "../../utils/theme";

export type CustomButtonProps = {
  label: string;
  handleSubmit?: () => void;
  isDisabled?: boolean;
};
const CustomButton: FC<CustomButtonProps> = memo(
  ({ label, handleSubmit, isDisabled }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onSubmit={handleSubmit}
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: colors.orange[500],
            padding: "15px",
            borderRadius: "20px",
            width: "150px",
            marginBottom: "10px",
            "&:disabled": {
              backgroundColor: "#ffddd6",
            },
          }}
          disabled={isDisabled}
        >
          {isDisabled && (
            <CircularProgress
              size={24}
              sx={{
                color: "#ff5331",
              }}
            />
          )}
          <Typography sx={{ color: "black" }}>{label}</Typography>
        </Button>
      </Box>
    );
  }
);

export default CustomButton;
