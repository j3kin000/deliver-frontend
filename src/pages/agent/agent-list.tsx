import React, { useEffect, useState } from "react";
import { getAllUser } from "../../api/endpoint";
import { Box, Typography } from "@mui/material";
import SuspenseLoader from "../../components/router/SuspenseLoader";
import CustomTable from "../../components/global/CustomTable";
import { agentTableHeader } from "../../utils/constants/constants";

const AgentList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await getAllUser();
        let data: any[] = [];
        response.data.users.map((item: any) => {
          data.push({
            agentId: item._id,
            name: item.fullName,
            email: item.username,
            branch: item.branch,
            phoneNumber: item.phoneNumber,
          });
          return item;
        });
        setUsers(data);
        console.log("setUsers", users);
      } catch (error) {
        console.log("setUsers error", error);
        setError("There's something wrong, Try Again Later...");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);
  return (
    <Box pt={2}>
      {loading ? (
        <SuspenseLoader />
      ) : error ? (
        <Typography display={"flex"} justifyContent={"center"}>
          {error}
        </Typography>
      ) : (
        <CustomTable columnData={agentTableHeader} rows={users} type="agent" />
      )}
    </Box>
  );
};

export default AgentList;
