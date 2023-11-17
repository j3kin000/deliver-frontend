import {
  Box,
  FormHelperText,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import React, { CSSProperties, ChangeEvent, FC, memo } from "react";

export type CustomTextInputProps = {
  placeholder?: string;
  label: string;
  error?: string;
  value?: string;
  name?: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleChange: (e: ChangeEvent<any>) => void;
  touched?: boolean;
  styles?: CSSProperties;
};
const CustomTextInput: FC<CustomTextInputProps> = memo(
  ({
    placeholder,
    handleChange,
    label,
    error,
    value,
    name,
    handleBlur,
    touched,
    styles,
  }) => {
    return (
      <Box display="flex" flexDirection="column" width={"100%"} p={1}>
        <Typography mb={1}>{label}</Typography>
        <InputBase
          sx={{
            width: "100%",
            padding: "10px 0px 10px 10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            marginBottom: "10px",
            ...styles,
          }}
          startAdornment={
            <InputAdornment position="start">
              {/* <SendingMail /> */}
            </InputAdornment>
          }
          placeholder={placeholder}
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
