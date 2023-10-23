import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { FC } from "react";
import { tokens } from "../../utils/theme";

export type CustomButtonProps = {
  label: string;
  handleSubmit?: () => void;
};
const CustomButton: FC<CustomButtonProps> = ({ label, handleSubmit }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        onSubmit={handleSubmit}
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: colors.primary[500],
          padding: "15px",
          borderRadius: "20px",
          width: "150px",
          marginBottom: "10px",
        }}
      >
        <Typography>{label}</Typography>
      </Button>
    </Box>
  );
};

export default CustomButton;
