import {
  Box,
  Pagination,
  Paper,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC, Fragment, useEffect, useMemo, useState } from "react";
import CustomTableHead, { OrderType } from "./CustomTableHead";
import CustomTableSort from "./CustomTableSort";
import { useNavigate } from "react-router-dom";

export type columnDataProps = {
  id: string;
  name: string;
  enableSort?: boolean;
  align?: "center" | "inherit" | "justify" | "left" | "right";
};
export type CustomTableProps = {
  rows: any[] | undefined;
  columnData: columnDataProps[];
  type: string;
};

const initialColumnData: columnDataProps[] = [
  {
    id: "",
    name: "",
    align: "inherit",
    enableSort: false,
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  return b[orderBy] < a[orderBy] ? -1 : b[orderBy] > a[orderBy] ? 1 : 0;
}

function getComparator<Key extends keyof any>(
  order: OrderType,
  orderBy: Key
): (
  a: Record<Key, number | string>,
  b: Record<Key, number | string>
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    return order !== 0 ? order : a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const CustomTable: FC<CustomTableProps> = ({ rows, columnData, type }) => {
  const navigate = useNavigate();
  const [internalColumnData, setInternalColumnData] =
    useState<columnDataProps[]>(initialColumnData);
  const [order, setOrder] = useState<OrderType>("asc");
  const [orderBy, setOrderBy] = useState<keyof any>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const paginationLength = useMemo(() => {
    if (rows) {
      const length = Math.ceil(rows.length / rowsPerPage); // Use Math.ceil to round up
      return length;
    }
    return 0;
  }, [rows, rowsPerPage]);

  useEffect(() => {
    let headerData: columnDataProps[] = initialColumnData;
    if (rows) {
      if (!columnData && rows.length) {
        const firstRow = rows[0];
        headerData = Object.keys(firstRow).map((key) => ({
          id: String(key),
          name: String(key),
          align: "inherit",
          enableSort: false,
        }));
      } else if (columnData) {
        headerData = columnData;
      }
    }
    headerData = columnData;

    setInternalColumnData(headerData);
  }, [columnData, rows]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    console.log("property", property);
    const isAsc = orderBy === property && order === "asc";
    console.log("isAsc", isAsc);

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeText = (event: ChangeEvent) => {};
  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <Fragment>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Paper sx={{ width: "100%", mb: 2, p: 3 }}>
          <CustomTableSort
            rowsPerPage={rowsPerPage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleChangeText={handleChangeText}
          />
          <TableContainer sx={{ width: "100%", height: `calc(100vh - 350px)` }}>
            <Table
              sx={{
                tableLayout: "fixed",
                "& .MuiTableCell-head": {
                  textTransform: "capitalize",
                  fontWeight: "bold",
                },
              }}
            >
              <CustomTableHead
                columns={internalColumnData}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody
                sx={{
                  "& .MuiTableBody-root": {
                    maxHeight: "10px",
                  },
                  maxHeight: "10px",
                }}
              >
                {rows &&
                  stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isLastRow = rowsPerPage - 1 === index;
                      return (
                        <TableRow
                          key={index + Math.floor(Math.random() * 10000)}
                          hover
                          onClick={(event: any) => {
                            type === "agent"
                              ? navigate(`/agent/${row.agentId}`)
                              : navigate(`/menu/${row.prodId}`);
                          }}
                          sx={{ cursor: "pointer" }}
                        >
                          {Object.keys(row).map((key, index) => (
                            <>
                              <TableCell
                                key={index}
                                sx={{
                                  borderBottom: isLastRow ? "none" : "inherit",
                                }}
                                align={
                                  internalColumnData[index]?.align && "inherit"
                                }
                              >
                                {row[key]}
                              </TableCell>
                            </>
                          ))}
                          {/* <TableCell
                            key={index}
                            sx={{
                              borderBottom: isLastRow ? "none" : "inherit",
                            }}
                            align={
                              internalColumnData[index]?.align && "inherit"
                            }
                          >
                            edit / delete
                          </TableCell> */}
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              flexWrap: "wrap",
            }}
          >
            <Typography p={1}>
              {` Showing ${rowsPerPage * page + 1} to ${
                rowsPerPage * (page + 1)
              }
                of
                ${rows ? rows.length : 0} entries`}
            </Typography>
            <Pagination
              page={page + 1}
              count={paginationLength}
              variant="outlined"
              shape="rounded"
              onChange={handleChangePage}
            />
          </Box>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default CustomTable;
