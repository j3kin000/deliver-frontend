import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import { CSSProperties, FC } from "react";
import { tokens } from "../../utils/theme";

export type CustomSelectProps = {
  items: any[];
  handleChange: (e: SelectChangeEvent<any>) => void;
  value: number | string;
  styles?: CSSProperties;
  name?: string;
  error?: string;
};
const CustomSelect: FC<CustomSelectProps> = ({
  items,
  handleChange,
  value,
  styles,
  name,
  error,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <FormControl
      sx={{
        backgroundColor: colors.primary[100],
        border: 1,
        borderRadius: 1,
        borderColor: colors.grey[100],
        boxShadow: "none",
        padding: 0,
        m: 0,
        "&:hover": {
          boxShadow: "none",
          cursor: "default",
          borderColor: colors.grey[100],

          backgroundColor: "transparent",
        },
        ...styles,
      }}
    >
      <Typography>{error}</Typography>
      <Select
        value={value.toString()}
        name={name}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          padding: 0,
          margin: 0,
          height: "40px",
          "&:hover": {
            boxShadow: "none",
            borderColor: colors.grey[100],
            cursor: "default",
            borderWidth: 0,
            backgroundColor: "transparent",
          },
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.value} aria-label={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
