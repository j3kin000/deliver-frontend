import { isString } from "formik";
import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("This field is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const productSchema = yup.object().shape({
  prodName: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  quantity: yup
    .string()
    .test("is-whole-number", "Quantity must be a whole number", (value) => {
      if (!value) {
        // If the value is empty, return true (valid) to handle the required check separately
        return true;
      }

      // Use regex to check if the value is a whole number (positive or negative)
      return /^[+-]?\d+$/.test(value);
    })
    .required("This field is required"),
  price: yup
    .string()
    .test(
      "is-valid-price",
      "Price must be a non-zero number or a valid number",
      (value) => {
        if (!value) {
          // If the value is empty, return true (valid) to handle the required check separately
          return true;
        }

        // Use regex to check if the value is a non-zero number
        return /^(0(\.\d+)?|[1-9]\d*(\.\d+)?)$/.test(value);
      }
    )
    .required("This field is required"),
  // prodImg: yup.mixed().required("Product Image is required"),
  description: yup.string().required("This field is required"),
  status: yup.boolean().required("This field is required"),
});

export type InitValuesMenuType = {
  prodName: string;
  category: string;
  quantity: string;
  price: string;
  description: string;
  prodImg: string;
  status: boolean;
  isDiscountActive: boolean;
  customError?: string;
};
