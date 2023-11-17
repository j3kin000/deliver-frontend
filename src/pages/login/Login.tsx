import { Box, Grid, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { ReactComponent as DeliveryMan } from "../../assets/images/delivery-man.svg";
import DeliveryLogo from "../../components/global/DeliveryLogo";
import LoginForm, { InitValuesType } from "../../components/login/LoginForm";
import { FormikHelpers } from "formik";
import { login } from "../../api/endpoint";
import { AppContext } from "../../contexts/AppContext.tsx/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const handleFormSubmit = async (
    values: InitValuesType,
    actions: FormikHelpers<InitValuesType>
  ) => {
    const { email, password } = values;
    try {
      const response = await login({ email, password });
      console.log("response", response);
      if (response.success) {
        dispatch({ type: "LOGIN", payload: response.data.access_token });
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
      actions.setErrors({
        customError: (error as string) || "Network failed!",
      });
    }
    actions.setSubmitting(false);
  };
  return (
    <Fragment>
      <Box sx={{ marginLeft: "0px" }}>
        <DeliveryLogo />
      </Box>
      <Box flexGrow={1}>
        <Grid
          container
          spacing={{ xs: 1, md: 12 }}
          gridTemplateColumns={"repeat(12, 1fr)"}
          justifyContent={"center"}
        >
          <Grid item xs={12} sm={16} md={6} lg={5}>
            <Box pt={3}>
              <Typography variant="h1" fontWeight={"bold"}>
                Your Favorite Goods Delivery Partner
              </Typography>
              <LoginForm handleFormSubmit={handleFormSubmit} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={"auto"}
            lg={"auto"}
            justifyContent={"flex-end"}
          >
            <DeliveryMan
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Login;
