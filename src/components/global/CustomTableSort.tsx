import {
  Box,
  Divider,
  SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ChangeEvent, FC } from "react";
import CustomSelect from "./CustomSelect";
import CustomTextInput from "./CustomTextInput";
import { tokens } from "../../utils/theme";

type CustomTableSortProps = {
  rowsPerPage: number;
  handleChangeRowsPerPage: (event: SelectChangeEvent) => void;
  handleChangeText: (event: ChangeEvent) => void;
};
const CustomTableSort: FC<CustomTableSortProps> = ({
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangeText,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"} mb={3}>
        Product List
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography pr={1}>Show</Typography>
          <CustomSelect
            items={[
              { id: 1, value: 10, name: "10" },
              { id: 1, value: 25, name: "25" },
              { id: 1, value: 50, name: "50" },
              { id: 1, value: 100, name: "100" },
            ]}
            value={rowsPerPage}
            handleChange={handleChangeRowsPerPage}
          />
        </Box>
        <Box>
          <CustomTextInput
            placeholder="Search...."
            label=""
            handleChange={handleChangeText}
            styles={{
              boxShadow: "none",
              border: 1,
              borderColor: colors.grey[100],
              padding: "5px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomTableSort;
