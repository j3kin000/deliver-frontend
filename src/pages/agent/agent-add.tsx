import { Box } from "@mui/material";
import React, { useState } from "react";

import AgentForm, {
  InitValuesAgentType,
} from "../../components/agent/AgentForm";
import { initialAgentValue } from "../../utils/constants/constants";
import CustomAlert, {
  CustomAlertProps,
} from "../../components/global/CustomAlert";
import { FormikHelpers } from "formik";
import CustomModalLoader from "../../components/global/CustomModalLoader";
import { addAgent } from "../../api/endpoint";
import { useNavigate } from "react-router-dom";

const AgentAdd = () => {
  const navigate = useNavigate();
  const initialValues: InitValuesAgentType = initialAgentValue;
  const [alert, setAlert] = useState<CustomAlertProps>({
    type: "",
    message: "",
  });
  const [collapse, setCollapse] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (
    values: InitValuesAgentType,
    actions: FormikHelpers<any>
  ) => {
    try {
      setLoading(true);
      await addAgent(values);
      setLoading(false);
      setCollapse(true);
      setAlert({
        type: "success",
        message: "Succefully Added Agent",
      });
      setTimeout(() => {
        navigate("/agent/agent-list");
      }, 3000);
    } catch (error) {
      setLoading(false);
      setCollapse(true);
      setAlert({
        type: "error",
        message: `Error Adding Agent ${error}`,
      });
    } finally {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Box pt={2.4}>
      <CustomModalLoader loading={loading} setLoading={setLoading} />

      {alert.type && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          collapse={collapse}
          setCollapse={setCollapse}
        />
      )}
      <Box flexGrow={1} pt={2}>
        <AgentForm
          isPost={true}
          handleFormSubmit={handleFormSubmit}
          title="Product Add Form"
          initialValues={initialValues}
        />
      </Box>
    </Box>
  );
};

export default AgentAdd;
