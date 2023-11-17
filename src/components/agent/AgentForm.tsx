import { Formik, FormikHelpers } from "formik";
import React, { FC, Fragment } from "react";
import { agentSchema } from "../../utils/schema";
import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";
import { useScreenSize } from "../../utils/utils";
import CustomTextInput from "../global/CustomTextInput";
import CustomSelect from "../global/CustomSelect";
import CustomButton from "../global/CustomButton";

export type InitValuesAgentType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  branch: string;
};
export type AgentAddFormrops = {
  isPost: boolean;
  initialValues: InitValuesAgentType;
  title: string;

  handleFormSubmit: (values: any, actions: FormikHelpers<any>) => void;
  handleDelete?: () => void;
  loading?: boolean;
};
const AgentForm: FC<AgentAddFormrops> = ({
  isPost,
  initialValues,
  title,
  handleFormSubmit,
  handleDelete,
  loading,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { issmallscreen } = useScreenSize();
  return (
    <Fragment>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={agentSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Paper sx={{ spacing: { xs: 1, md: 4 } }}>
              <Box p={3}>
                <Typography variant="h5" fontWeight={"bold"}>
                  {title}
                </Typography>
              </Box>
              <Divider />

              <Box p={3}>
                <Box
                  display={"flex"}
                  sx={{
                    marginBottom: "10px",
                    flexWrap: issmallscreen ? "wrap" : "inherit",
                    flexShrink: 1,
                  }}
                >
                  <CustomTextInput
                    label="First Name"
                    name={"firstName"}
                    value={values.firstName}
                    handleBlur={handleBlur}
                    touched={touched.firstName}
                    error={errors.firstName}
                    handleChange={handleChange}
                    placeholder="First Name"
                    styles={{
                      backgroundColor: colors.primary[100],
                      border: 1,
                      borderRadius: 0,
                      borderColor: colors.grey[100],
                      boxShadow: "none",
                      padding: 0.5,
                      marginBottom: "10px",
                    }}
                  />
                  <CustomTextInput
                    label="Last Name"
                    name={"lastName"}
                    value={values.lastName}
                    handleBlur={handleBlur}
                    touched={touched.lastName}
                    error={errors.lastName}
                    handleChange={handleChange}
                    placeholder="Last Name"
                    styles={{
                      backgroundColor: colors.primary[100],
                      border: 1,
                      borderRadius: 0,
                      borderColor: colors.grey[100],
                      boxShadow: "none",
                      padding: 0.5,
                      marginBottom: "10px",
                    }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  sx={{
                    marginBottom: "10px",
                    flexWrap: issmallscreen ? "wrap" : "inherit",
                    flexShrink: 1,
                  }}
                >
                  <CustomTextInput
                    label="Email"
                    name={"email"}
                    value={values.email}
                    handleBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                    handleChange={handleChange}
                    placeholder="sample@delvery.com"
                    styles={{
                      backgroundColor: colors.primary[100],
                      border: 1,
                      borderRadius: 0,
                      borderColor: colors.grey[100],
                      boxShadow: "none",
                      padding: 0.5,
                      marginBottom: "10px",
                    }}
                  />
                  <CustomTextInput
                    label="Phone Number"
                    name={"phoneNumber"}
                    value={values.phoneNumber}
                    handleBlur={handleBlur}
                    touched={touched.phoneNumber}
                    error={errors.phoneNumber}
                    handleChange={handleChange}
                    placeholder="0943032302"
                    styles={{
                      backgroundColor: colors.primary[100],
                      border: 1,
                      borderRadius: 0,
                      borderColor: colors.grey[100],
                      boxShadow: "none",
                      padding: 0.5,
                      marginBottom: "10px",
                    }}
                  />
                </Box>

                <Box
                  p={1}
                  sx={{
                    marginBottom: "10px",
                  }}
                >
                  <Typography mb={1}>Select Branch</Typography>
                  <CustomSelect
                    items={[
                      { id: 1, value: "Main", name: "Main" },
                      {
                        id: 2,
                        value: "South Visayas",
                        name: "South Visayas",
                      },
                      {
                        id: 3,
                        value: "North Visayas",
                        name: "North Visayas",
                      },
                      {
                        id: 4,
                        value: "East Visayas",
                        name: "East Visayas",
                      },
                      {
                        id: 5,
                        value: "West Visayas",
                        name: "West Visayas",
                      },
                    ]}
                    name="branch"
                    error={errors.branch}
                    value={values.branch}
                    handleChange={handleChange}
                    styles={{ width: issmallscreen ? "100%" : "50%" }}
                  />
                </Box>
                <Box
                  mt={4}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {!isPost ? (
                    <CustomButton
                      type="button"
                      handleSubmit={() => {
                        handleDelete && handleDelete();
                      }}
                      isDisabled={loading && !isSubmitting && loading}
                      label="Delete"
                      styles={{
                        padding: "10px 30px",
                        borderRadius: "none",
                        backgroundColor: colors.white[900],
                        color: colors.white[100],
                        margin: "0 10px",
                      }}
                    />
                  ) : (
                    <Box></Box>
                  )}
                  <CustomButton
                    label="Save"
                    styles={{
                      padding: "10px 30px",
                      borderRadius: "none",
                      margin: "0 10px",
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default AgentForm;
