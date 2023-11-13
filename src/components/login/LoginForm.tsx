import { FC, Fragment } from "react";
import { Formik, FormikHelpers } from "formik";
import { Box, FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
import CustomTextInput from "../global/CustomTextInput";
import CustomButton from "../global/CustomButton";
import { loginSchema } from "../../utils/schema";

export type InitValuesType = {
  email: string;
  password: string;
  customError?: string;
};
const initialValues: InitValuesType = {
  email: "",
  password: "",
};

export type LoginFormProps = {
  handleFormSubmit: (
    values: InitValuesType,
    actions: FormikHelpers<InitValuesType>
  ) => void;
};
const LoginForm: FC<LoginFormProps> = ({ handleFormSubmit }) => {
  return (
    <Fragment>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}
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
            <Box
              p={{ xs: 4, sm: 8, md: 2 }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FormHelperText error sx={{ fontSize: "1rem" }}>
                {errors.customError}
              </FormHelperText>
              <CustomTextInput
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.email}
                label="Email Address:"
                name="email"
                value={values.email}
                error={errors.email}
              />
              <CustomTextInput
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.password}
                label="Password:"
                name="password"
                value={values.password}
                error={errors.password}
              />
              <Box>
                <CustomButton label="Login" isDisabled={isSubmitting} />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    to={"/forgot-password"}
                    style={{
                      fontSize: "16px",
                      paddingRight: "10px",
                      textDecoration: "none",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginForm;
