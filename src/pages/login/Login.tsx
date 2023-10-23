import { Box, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import DeliveryMan from "../../assets/images/delivery-man.svg";
import DeliveryLogo from "../../components/global/DeliveryLogo";
import LoginForm, { InitValuesType } from "../../components/login/LoginForm";
import { FormikHelpers } from "formik";

const Login = () => {
  const handleFormSubmit = (
    values: InitValuesType,
    actions: FormikHelpers<InitValuesType>
  ) => {
    const { email, password } = values;
    actions.setErrors({ customError: "Network failed!" });
  };
  return (
    <Fragment>
      <DeliveryLogo />
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
                Your Favorite Food Delivery Partner
              </Typography>
              <LoginForm handleFormSubmit={handleFormSubmit} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={"auto"} justifyContent={"flex-end"}>
            <img
              src={DeliveryMan}
              alt=""
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
