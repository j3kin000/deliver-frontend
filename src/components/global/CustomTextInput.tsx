import {
  Box,
  FormHelperText,
  InputAdornment,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { FormikTouched } from "formik";
import React, { ChangeEvent, FC, memo } from "react";
import { InitValuesType } from "../login/LoginForm";

export type CustomTextInputProps = {
  label: string;
  error?: string;
  value?: string;
  name?: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleChange: (e: ChangeEvent<any>) => void;
  touched?: boolean;
};
const CustomTextInput: FC<CustomTextInputProps> = memo(
  ({ handleChange, label, error, value, name, handleBlur, touched }) => {
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
          type={name}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          name={name}
        />
        {touched && error && <FormHelperText error>{error}</FormHelperText>}
      </Box>
    );
  }
);

export default CustomTextInput;
