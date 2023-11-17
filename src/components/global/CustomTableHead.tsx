import React, { FC, Fragment, MouseEvent } from "react";
import { columnDataProps } from "./CustomTable";
import {
  TableCell,
  TableHead,
  TableSortLabel,
  Typography,
} from "@mui/material";

export type OrderType = "asc" | "desc";

type CustomTableHeadProps = {
  columns: columnDataProps[];
  order: OrderType;
  orderBy: keyof any;
  onRequestSort: (event: MouseEvent<unknown>, property: keyof any) => void;
};

const CustomTableHead: FC<CustomTableHeadProps> = ({
  columns,
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: keyof any) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <Fragment>
      <TableHead sx={{ backgroundColor: "#ff5331", width: "100%" }}>
        {columns?.map((column, index) => (
          <TableCell
            key={index}
            align="left"
            sortDirection={orderBy === column.id ? order : false}
          >
            {column.enableSort ? (
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : "asc"}
                onClick={createSortHandler(column.id)}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "white",
                  },
                  "&.Mui-active": {
                    color: "white",
                    fontWeight: "bold",
                  },
                  "&.Mui-active .MuiTableSortLabel-iconDirectionAsc": {
                    color: "white",
                  },
                  "&.Mui-active .MuiTableSortLabel-iconDirectionDesc": {
                    color: "white",
                  },
                }}
              >
                {column.name}
              </TableSortLabel>
            ) : (
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                {column.name}
              </Typography>
            )}
          </TableCell>
        ))}
      </TableHead>
    </Fragment>
  );
};

export default CustomTableHead;
