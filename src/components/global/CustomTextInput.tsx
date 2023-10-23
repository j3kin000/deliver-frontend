import {
  Box,
  FormHelperText,
  InputAdornment,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ChangeEvent, FC, memo } from "react";

export type CustomTextInputProps = {
  label: string;
  error?: string;
  value?: string;
  name?: string;
  handleChange: (e: ChangeEvent<any>) => void;
};
const CustomTextInput: FC<CustomTextInputProps> = memo(
  ({ handleChange, label, error, value, name }) => {
    return (
      <Box display="flex" flexDirection="column">
        <Typography mb={1}>{label}</Typography>
        <InputBase
          sx={{
            width: "100%",
            padding: "10px 0 10px 14px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            marginBottom: "10px",
            color: "black",
          }}
          startAdornment={
            <InputAdornment position="start">
              {/* <SendingMail /> */}
            </InputAdornment>
          }
          onChange={handleChange}
          value={value}
          name={name}
        />
        <FormHelperText error>{error}</FormHelperText>
      </Box>
    );
  }
);

export default CustomTextInput;
