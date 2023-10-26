import { Box, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { ReactComponent as DeliveryMan } from "../../assets/images/delivery-man.svg";
import DeliveryLogo from "../../components/global/DeliveryLogo";
import LoginForm, { InitValuesType } from "../../components/login/LoginForm";
import { FormikHelpers } from "formik";
import { login } from "../../api/endpoint";

const Login = () => {
  const handleFormSubmit = async (
    values: InitValuesType,
    actions: FormikHelpers<InitValuesType>
  ) => {
    const { email, password } = values;
    try {
      const response = await login({ email, password });
    } catch (error) {
      actions.setErrors({
        customError: (error as string) || "Network failed!",
      });
    }
    actions.setSubmitting(false);
  };
  return (
    <Fragment>
      <Box sx={{ marginLeft: "25px" }}>
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
          <Grid item xs={12} md={6} lg={"auto"} justifyContent={"flex-end"}>
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
