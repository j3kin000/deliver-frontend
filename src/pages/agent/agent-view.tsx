import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductForm from "../../components/menu/ProductForm";
import { InitValuesMenuType } from "../../utils/schema";
import { FormikHelpers } from "formik";
import {
  initialAgentValue,
  initialProductValue,
} from "../../utils/constants/constants";
import { useNavigate, useParams } from "react-router-dom";
import SuspenseLoader from "../../components/router/SuspenseLoader";
import {
  deleteAgent,
  deleteProduct,
  getProduct,
  getUser,
  updateAgent,
  updateProduct,
} from "../../api/endpoint";
import { uploadImage } from "../../utils/helper/uploadImage";
import CustomModalLoader from "../../components/global/CustomModalLoader";
import CustomAlert, {
  CustomAlertProps,
} from "../../components/global/CustomAlert";
import AgentForm from "../../components/agent/AgentForm";

const AgentView = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formLoader, setFormLoader] = useState(false);

  const [initialValues, setInitialValues] = useState(initialAgentValue);
  const [alert, setAlert] = useState<CustomAlertProps>({
    type: "",
    message: "",
  });
  const [collapse, setCollapse] = useState(true);
  useEffect(() => {
    const initProduct = async () => {
      try {
        if (agentId) {
          setLoading(true);
          const response = await getUser(agentId);
          console.log("data", response);
          if (response.data.user) {
            setInitialValues(response.data.user);
          } else {
            setInitialValues(initialAgentValue);
          }
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    initProduct();
  }, [agentId]);

  const handleFormSubmit = async (
    values: InitValuesMenuType,
    actions: FormikHelpers<any>
  ) => {
    try {
      setFormLoader(true);
      if (agentId) {
        console.log("VALUES", values);
        const response = await updateAgent(agentId, values);
      }
      setFormLoader(false);
      setCollapse(true);
      setAlert({
        type: "success",
        message: "Succefully Updated  the agent ",
      });
      setTimeout(() => {
        navigate("/agent/agent-list");
      }, 2000);
    } catch (error) {
      setFormLoader(false);
      setCollapse(true);
      setAlert({
        type: "error",
        message: `Error updating the Agent: ${error}`,
      });
    } finally {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDelete = async () => {
    console.log("loadingers 1 ");
    if (agentId) {
      try {
        setFormLoader(true);
        console.log("loadingers 2 ");
        const response = await deleteAgent(agentId);
        console.log("RESPONSE", response);
        navigate("/agent/agent-list");
      } catch (error) {
      } finally {
        setFormLoader(false);
      }
    }
  };
  return (
    <Box pt={2.4}>
      <CustomModalLoader loading={formLoader} setLoading={setFormLoader} />

      {alert.type && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          collapse={collapse}
          setCollapse={setCollapse}
        />
      )}

      {loading ? (
        <SuspenseLoader />
      ) : (
        <Box flexGrow={1} pt={2}>
          <AgentForm
            loading={formLoader}
            isPost={false}
            handleFormSubmit={handleFormSubmit}
            title="Agent Edit Form"
            initialValues={initialValues}
            handleDelete={handleDelete}
          />
        </Box>
      )}
    </Box>
  );
};

export default AgentView;
